# W1@Bangkoknoi — Next.js + Sanity

Production app for the hotel marketing site. Visual layout matches the original static HTML; content is CMS-ready via Sanity; room booking stays on book-directonline; enquiries persist to Postgres and email via Resend.

## Quick start

```bash
cd web
cp .env.example .env.local
npm install
npm run optimize:images   # already run once; re-run after adding images
npm run dev
```

Open http://localhost:3000 — Studio at http://localhost:3000/studio (needs Sanity project id).

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local Next.js |
| `npm run build` | Production build |
| `npm run optimize:images` | Compress `public/images` (sharp → JPEG/WebP) |
| `npm run optimize:videos` | Re-encode heroes (requires `ffmpeg`) |
| `npm run seed:sanity` | Seed rooms/pages/settings into Sanity |
| `npm run studio` | Optional standalone Sanity Studio |

## Architecture

- **Next.js 16** App Router — pages under `src/app`
- **Sanity** — schemas in `src/sanity/schemaTypes`, Studio at `/studio`
- **Postgres (Neon)** — `enquiries` table (`sql/enquiries.sql`)
- **Resend** — enquiry notification emails
- **book-directonline** — live room booking CTA

Static assets live in `public/` (images optimized; videos use `preload=metadata` + poster). Run `scripts/optimize-videos.sh` when ffmpeg is available to shrink hero MP4s (currently ~250MB total).

## Env

See `.env.example`. Required for production:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `DATASET`
- `DATABASE_URL`
- `RESEND_API_KEY`
- `SANITY_REVALIDATE_SECRET`

## Deploy

See [docs/DEPLOY.md](./docs/DEPLOY.md).

## Figma redesign

See [docs/FIGMA_WORKFLOW.md](./docs/FIGMA_WORKFLOW.md).

## Roadmap

See [docs/ROADMAP.md](./docs/ROADMAP.md).
