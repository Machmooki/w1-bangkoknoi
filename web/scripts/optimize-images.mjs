#!/usr/bin/env node
/**
 * Compress images under public/images to WebP (+ keep JPEG fallbacks resized).
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MAX_WIDTH = 1920;
const QUALITY = 78;
const SKIP_IF_UNDER_KB = 180;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(e.name) && !e.name.includes(".optimized.")) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(file) {
  const stat = await fs.stat(file);
  if (stat.size < SKIP_IF_UNDER_KB * 1024) return { file, skipped: true, reason: "small" };

  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);
  const webpOut = `${base}.webp`;

  const img = sharp(file).rotate();
  const meta = await img.metadata();
  const width = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : undefined;

  await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpOut);

  // Also rewrite original as smaller JPEG/PNG for fallback
  if (ext === ".png") {
    await sharp(file)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(file + ".tmp");
  } else {
    await sharp(file)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(file + ".tmp");
  }
  await fs.rename(file + ".tmp", file);

  const after = await fs.stat(file);
  const webpStat = await fs.stat(webpOut);
  return {
    file,
    before: stat.size,
    after: after.size,
    webp: webpStat.size,
  };
}

const files = await walk(ROOT);
console.log(`Found ${files.length} images`);
let saved = 0;
for (const f of files) {
  try {
    const r = await optimize(f);
    if (r.skipped) continue;
    const delta = r.before - Math.min(r.after, r.webp);
    saved += Math.max(0, delta);
    console.log(
      `✓ ${path.relative(ROOT, f)} ${(r.before / 1e6).toFixed(2)}MB → jpg ${(r.after / 1e6).toFixed(2)}MB / webp ${(r.webp / 1e6).toFixed(2)}MB`
    );
  } catch (err) {
    console.warn(`✗ ${f}:`, err.message);
  }
}
console.log(`Done. Approx bytes saved vs originals: ${(saved / 1e6).toFixed(1)}MB`);
