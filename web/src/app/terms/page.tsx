import { Nav } from "@/components/Nav";
import { SITE } from "@/lib/site";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <article className="legal-page">
        <h1>Terms of Use</h1>
        <p>
          By accessing the {SITE.name} website, you agree to use it for lawful purposes only and not to misuse content,
          booking tools, or enquiry forms. All website materials — including text, imagery, branding, and design — remain
          the property of W1@Bangkoknoi Hotel &amp; Wellness Resort unless otherwise noted.
        </p>
        <p>
          Room rates, package prices, treatment menus, and availability shown online are indicative and subject to
          confirmation. Final terms are those stated in your confirmed booking or written quotation from the hotel.
        </p>
        <p>
          We aim to keep information accurate and up to date, but we do not warrant that every detail on this site is
          complete or error-free. Links to third-party services (such as online booking engines or maps) are provided for
          convenience; their terms apply separately.
        </p>
        <p>
          For questions about these terms, contact <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <p style={{ fontSize: 12, opacity: 0.7 }}>Last updated: July 2026. Expanded legal terms will be published here.</p>
      </article>
    </>
  );
}
