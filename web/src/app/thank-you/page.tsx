import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">W1@Bangkoknoi</div>
          <h1>
            Thank <em>You</em>
          </h1>
          <p>
            Your enquiry has been received. Our team will respond within 2 hours during hotel hours (8 AM – 10 PM Bangkok
            time). We look forward to welcoming you to the Bangkok Noi Canal.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/" className="btn-gold">
              Return Home
            </Link>
            <Link href="/accommodations" className="btn-outline">
              Explore Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
