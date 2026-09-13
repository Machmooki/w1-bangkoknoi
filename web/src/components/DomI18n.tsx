"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { phraseTranslations } from "@/lib/phraseTranslations";
import type { Locale } from "@/lib/site";

const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "SVG",
  "PATH",
  "TEXTAREA",
  "INPUT",
  "SELECT",
  "IFRAME",
  "VIDEO",
  "AUDIO",
  "CANVAS",
  "IMG",
  "SOURCE",
  "BR",
  "HR",
]);

function normalise(str: string) {
  return str.replace(/\s+/g, " ").trim();
}

function isSkippedContext(el: Element | null): boolean {
  if (!el) return true;
  if (el.closest(".lang-switcher") || el.closest("[data-i18n-skip]")) return true;
  return false;
}

/** Pure-text elements only — structured markup is handled by the text-node pass. */
function isBlockCandidate(el: HTMLElement): boolean {
  if (SKIP_TAGS.has(el.tagName)) return false;
  if (el.childElementCount > 0) return false;
  for (const n of el.childNodes) {
    if (n.nodeType === Node.TEXT_NODE && n.nodeValue && n.nodeValue.trim()) return true;
  }
  return false;
}

/** Lazy-built lookup maps — built once per locale the first time we need them. */
const dictCache = new Map<Locale, Map<string, string>>();

function getDict(lang: Locale): Map<string, string> | null {
  if (lang === "en") return null;
  let cached = dictCache.get(lang);
  if (cached) return cached;
  const raw = phraseTranslations[lang] as Record<string, string> | undefined;
  if (!raw) return null;
  cached = new Map(Object.entries(raw));
  dictCache.set(lang, cached);
  return cached;
}

function lookup(dict: Map<string, string>, ...keys: string[]): string | undefined {
  for (const k of keys) {
    if (!k) continue;
    const hit = dict.get(k);
    if (hit != null) return hit;
  }
  return undefined;
}

function resetToEnglish(root: ParentNode = document.body) {
  // Restore deepest-first so nested restores don't get wiped by parents.
  const nodes = Array.from(root.querySelectorAll("[data-i18n-orig]")) as HTMLElement[];
  for (let i = nodes.length - 1; i >= 0; i--) {
    const el = nodes[i];
    const orig = el.getAttribute("data-i18n-orig");
    if (orig != null) el.innerHTML = orig;
    el.removeAttribute("data-i18n-orig");
    el.removeAttribute("data-i18n-key");
    el.removeAttribute("data-i18n-mode");
  }
}

/**
 * Translate within `root` (defaults to body).
 * Two passes for coverage without destroying structure:
 *   1) Block pass — elements with only safe-inline children whose full phrase
 *      matches the dictionary (preserves combined titles with <em>/<span>).
 *   2) Text-node pass — leftover English text nodes (covers labels next to
 *      <img>, mosaic CTAs, etc. that block-pass must skip).
 */
function applyLang(lang: Locale, root: ParentNode = document.body) {
  const dict = getDict(lang);
  if (!dict) {
    resetToEnglish(root);
    document.documentElement.lang = "en";
    return;
  }

  // ── Pass 1: block-level (parents before children via query order) ──
  const elements = root.querySelectorAll("*");
  for (const node of elements) {
    const el = node as HTMLElement;
    if (SKIP_TAGS.has(el.tagName)) continue;
    if (isSkippedContext(el)) continue;
    // Already covered by an ancestor block translation.
    if (el.parentElement?.closest("[data-i18n-mode='block']")) continue;

    let key = el.getAttribute("data-i18n-key");
    if (key == null) {
      if (!isBlockCandidate(el)) continue;
      key = normalise(el.textContent || "");
      if (!key) continue;
    } else if (el.getAttribute("data-i18n-mode") === "text") {
      continue;
    }

    const hit = lookup(dict, key);
    if (!hit) continue;

    if (!el.hasAttribute("data-i18n-orig")) {
      el.setAttribute("data-i18n-orig", el.innerHTML);
      el.setAttribute("data-i18n-key", key);
      el.setAttribute("data-i18n-mode", "block");
    }
    if (el.innerHTML !== hit) el.innerHTML = hit;
  }

  // ── Pass 2: leaf text nodes (fills gaps block pass can't touch) ──
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (tw.nextNode()) textNodes.push(tw.currentNode as Text);

  for (const textNode of textNodes) {
    const parent = textNode.parentElement;
    if (!parent || SKIP_TAGS.has(parent.tagName)) continue;
    if (isSkippedContext(parent)) continue;
    if (parent.closest("[data-i18n-mode='block']")) continue;

    const raw = textNode.nodeValue || "";
    const key = normalise(raw);
    if (!key || key.length < 2) continue;
    // Skip pure numbers / punctuation-only.
    if (!/[A-Za-z\u0E00-\u0E7F]/.test(key)) continue;

    const hit = dict.get(key);
    if (!hit || hit === key) continue;

    // Mark the parent so resetToEnglish can restore. Store the original text
    // node value keyed on the parent when it only holds this one translatable
    // text (common for CTA spans / labels).
    if (!parent.hasAttribute("data-i18n-orig")) {
      parent.setAttribute("data-i18n-orig", parent.innerHTML);
      parent.setAttribute("data-i18n-key", key);
      parent.setAttribute("data-i18n-mode", "text");
    }
    // Preserve leading/trailing whitespace from the original text node.
    const leading = raw.match(/^\s*/)?.[0] ?? "";
    const trailing = raw.match(/\s*$/)?.[0] ?? "";
    textNode.nodeValue = leading + hit + trailing;
  }

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
}

/**
 * Applies the EN→TH/ZH phrase dictionary across the live DOM.
 * Full reset only on locale/route change; mutations are translated incrementally
 * for performance (rotating home cards, client form mounts, etc.).
 */
export function DomI18n() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const localeRef = useRef(locale);
  localeRef.current = locale;

  useEffect(() => {
    let debounce: number | undefined;
    let applying = false;

    const runFull = () => {
      if (applying) return;
      applying = true;
      try {
        resetToEnglish();
        applyLang(localeRef.current);
      } finally {
        // Let our own DOM writes settle before accepting observer callbacks.
        queueMicrotask(() => {
          applying = false;
        });
      }
    };

    const runIncremental = (roots: ParentNode[]) => {
      if (applying || localeRef.current === "en") return;
      applying = true;
      try {
        for (const root of roots) applyLang(localeRef.current, root);
      } finally {
        queueMicrotask(() => {
          applying = false;
        });
      }
    };

    runFull();
    // Client components (mosaic, forms) hydrate shortly after — one cheap follow-up.
    const t1 = window.setTimeout(runFull, 120);

    const pending = new Set<ParentNode>();
    const observer = new MutationObserver((mutations) => {
      if (applying || localeRef.current === "en") return;
      for (const m of mutations) {
        for (const n of m.addedNodes) {
          if (n.nodeType === Node.ELEMENT_NODE) pending.add(n as Element);
          else if (n.nodeType === Node.TEXT_NODE && n.parentElement) {
            pending.add(n.parentElement);
          }
        }
      }
      if (!pending.size) return;
      window.clearTimeout(debounce);
      debounce = window.setTimeout(() => {
        const roots = Array.from(pending);
        pending.clear();
        runIncremental(roots);
      }, 48);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(debounce);
      observer.disconnect();
    };
  }, [locale, pathname]);

  return null;
}
