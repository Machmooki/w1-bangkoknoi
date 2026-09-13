import { Nav } from "@/components/Nav";
import { SITE } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <article className="legal-page">
        <h1>Privacy Policy</h1>
        <p>
          W1@Bangkoknoi Hotel &amp; Wellness Resort (&quot;{SITE.name}&quot;) respects your privacy. This page outlines
          how we collect, use, and protect personal information submitted through our website, enquiry forms, and booking
          channels.
        </p>
        <p>
          Information you provide — such as name, email, phone number, stay dates, and special requests — is used solely
          to respond to your enquiry, confirm reservations, and improve our guest services. We do not sell personal data
          to third parties.
        </p>
        <p>
          Enquiry data may be processed by our reservations and guest-experience teams, and by trusted service providers
          who help us operate email and booking systems, under appropriate confidentiality obligations.
        </p>
        <p>
          For privacy questions or to request access, correction, or deletion of your personal data, please contact{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phone}.
        </p>
        <p style={{ fontSize: 12, opacity: 0.7 }}>Last updated: July 2026. Full policy details will be published here.</p>
      </article>
    </>
  );
}
