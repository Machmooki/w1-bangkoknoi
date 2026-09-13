import { Nav } from "@/components/Nav";
import { sanityFetch } from "@/sanity/client";
import { pageBySlugQuery } from "@/sanity/queries";
import { notFound } from "next/navigation";

type Section = {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type CmsPage = {
  title: string;
  heroTitle?: string;
  heroSubtitle?: string;
  sections?: Section[];
  seoTitle?: string;
  seoDescription?: string;
};

/** CMS-driven pages for future routes not yet hard-coded. Reserved slugs stay in App Router files. */
const RESERVED = new Set([
  "accommodations",
  "dining",
  "wellness",
  "weddings",
  "events",
  "experiences",
  "contact",
  "book-stay",
  "book-treatment",
  "reserve-table",
  "thank-you",
  "privacy",
  "terms",
  "studio",
  "admin",
  "api",
  "test-minimap", // sandbox route — see app/test-minimap/page.tsx
]);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};
  const page = await sanityFetch<CmsPage>(pageBySlugQuery, { slug });
  if (!page) return {};
  return {
    title: page.seoTitle || page.title,
    description: page.seoDescription || page.heroSubtitle,
  };
}

export default async function CmsPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();

  const page = await sanityFetch<CmsPage>(pageBySlugQuery, { slug });
  if (!page) notFound();

  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">W1@Bangkoknoi</div>
          <h1>{page.heroTitle || page.title}</h1>
          {page.heroSubtitle && <p>{page.heroSubtitle}</p>}
        </div>
      </section>
      {(page.sections || []).map((s, i) => (
        <section className="content-section" key={i}>
          {s.heading && <h2 className="section-h2">{s.heading}</h2>}
          {s.body && <p style={{ marginTop: 16, lineHeight: 1.9 }}>{s.body}</p>}
          {s.ctaHref && s.ctaLabel && (
            <a href={s.ctaHref} className="btn-gold" style={{ display: "inline-block", marginTop: 24 }}>
              {s.ctaLabel}
            </a>
          )}
        </section>
      ))}
    </>
  );
}
