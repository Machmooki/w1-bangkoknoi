/**
 * Merges scripts/i18n-additions-{th,zh}.mjs into src/lib/phraseTranslations.ts.
 * Existing dictionary entries always win; only genuinely new keys are added.
 *
 * Usage: node scripts/merge-i18n.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { th as thMain } from "./i18n-additions-th.mjs";
import { zh as zhMain } from "./i18n-additions-zh.mjs";
import { th as thRest, zh as zhRest } from "./i18n-additions-remaining.mjs";

const FILE = new URL("../src/lib/phraseTranslations.ts", import.meta.url);
const src = readFileSync(FILE, "utf8");
const existing = new Function(
  `return (${src.slice(src.indexOf("{"), src.lastIndexOf("}") + 1)});`
)();

let addedTh = 0;
let addedZh = 0;
for (const bag of [thMain, thRest]) {
  for (const [k, v] of Object.entries(bag)) {
    if (existing.th[k] == null) {
      existing.th[k] = v;
      addedTh++;
    }
  }
}
for (const bag of [zhMain, zhRest]) {
  for (const [k, v] of Object.entries(bag)) {
    if (existing.zh[k] == null) {
      existing.zh[k] = v;
      addedZh++;
    }
  }
}

const header = `/** EN phrase → TH/ZH dictionary.
 *  Originally generated from js/translations.js; extended with full coverage
 *  for the Next.js site (see scripts/audit-i18n.mjs). */
`;
const body = `export const phraseTranslations = ${JSON.stringify(existing, null, 2)};\n`;
writeFileSync(FILE, header + body);
console.log(`merged: +${addedTh} th, +${addedZh} zh`);
console.log(
  `totals: th=${Object.keys(existing.th).length}, zh=${Object.keys(existing.zh).length}`
);
