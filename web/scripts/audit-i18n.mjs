/**
 * i18n coverage audit: fetches each route from the dev server, applies the
 * same walk/candidate rules as DomI18n, and reports English texts that are
 * missing from the TH / ZH phrase dictionary.
 *
 * Usage: node scripts/audit-i18n.mjs   (dev server must be running on :3000)
 */
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const BASE = process.env.AUDIT_BASE || "http://localhost:3000";
const ROUTES = [
  "/",
  "/accommodations",
  "/dining",
  "/wellness",
  "/weddings",
  "/events",
  "/experiences",
  "/contact",
  "/book-stay",
  "/book-treatment",
  "/reserve-table",
  "/thank-you",
  "/privacy",
  "/terms",
];

// ── Load dictionary from src/lib/phraseTranslations.ts ──
const dictSrc = readFileSync(new URL("../src/lib/phraseTranslations.ts", import.meta.url), "utf8");
const objSrc = dictSrc.slice(dictSrc.indexOf("{"), dictSrc.lastIndexOf("}") + 1);
const dict = new Function(`return (${objSrc});`)();

const SKIP = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "SVG", "PATH", "TEXTAREA", "INPUT",
  "SELECT", "IFRAME", "VIDEO", "AUDIO", "CANVAS",
]);
const SAFE_INLINE = new Set([
  "SPAN", "EM", "STRONG", "B", "I", "U", "BR", "SMALL", "SUP", "SUB",
  "WBR", "A", "ABBR", "MARK", "TIME", "CODE",
]);

const normalise = (s) => s.replace(/\s+/g, " ").trim();
// Ignore texts with no real words (prices, times-only, phone numbers, symbols)
const translatable = (t) => /[A-Za-z]{2,}/.test(t);

function isCandidate(el, TEXT, ELEMENT) {
  let hasContent = false;
  for (const n of el.childNodes) {
    if (n.nodeType === TEXT) {
      if (n.nodeValue && n.nodeValue.trim()) hasContent = true;
    } else if (n.nodeType === ELEMENT) {
      if (!SAFE_INLINE.has(n.tagName)) return false;
      hasContent = true;
    }
  }
  return hasContent;
}

const missing = { th: new Map(), zh: new Map() }; // phrase -> Set(routes)

for (const route of ROUTES) {
  const res = await fetch(BASE + route);
  if (!res.ok) {
    console.error(`SKIP ${route}: HTTP ${res.status}`);
    continue;
  }
  const html = await res.text();
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const TEXT = dom.window.Node.TEXT_NODE;
  const ELEMENT = dom.window.Node.ELEMENT_NODE;

  const candidates = [];
  for (const el of doc.querySelectorAll("body *")) {
    if (SKIP.has(el.tagName)) continue;
    if (el.closest(".lang-switcher") || el.closest("[data-i18n-skip]")) continue;
    if (!isCandidate(el, TEXT, ELEMENT)) continue;
    const key = normalise(el.textContent || "");
    if (!key) continue;
    const parts = [];
    const walker = doc.createTreeWalker(el, dom.window.NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) parts.push(walker.currentNode.nodeValue || "");
    const key2 = normalise(parts.join(" "));
    candidates.push({ el, key, key2 });
  }

  for (const loc of ["th", "zh"]) {
    const d = dict[loc];
    const hitEls = new Set(
      candidates.filter((c) => d[c.key] != null || d[c.key2] != null).map((c) => c.el)
    );
    for (const { el, key, key2 } of candidates) {
      if (hitEls.has(el)) continue;
      if (!translatable(key2)) continue;
      // Skip if an ancestor candidate translates (covers this text wholesale).
      let coveredByAncestor = false;
      for (let a = el.parentElement; a; a = a.parentElement) {
        if (hitEls.has(a)) { coveredByAncestor = true; break; }
      }
      if (coveredByAncestor) continue;
      // Skip pure containers whose own direct text is not translatable —
      // their translatable content is carried by descendant candidates.
      const directText = [...el.childNodes]
        .filter((n) => n.nodeType === TEXT)
        .map((n) => n.nodeValue || "")
        .join(" ");
      const hasChildCandidates = candidates.some((c) => c.el !== el && el.contains(c.el));
      if (hasChildCandidates && !translatable(normalise(directText))) continue;

      const phrase = key2 || key;
      if (!missing[loc].has(phrase)) missing[loc].set(phrase, new Set());
      missing[loc].get(phrase).add(route);
    }
  }
  console.error(`checked ${route}: ${candidates.length} candidates`);
}

for (const loc of ["th", "zh"]) {
  console.log(`\n===== MISSING ${loc.toUpperCase()} (${missing[loc].size}) =====`);
  for (const [phrase, routes] of [...missing[loc].entries()].sort()) {
    console.log(`[${[...routes].join(",")}] ${JSON.stringify(phrase)}`);
  }
}
