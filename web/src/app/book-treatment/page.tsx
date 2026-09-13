import Link from "next/link";
import { Nav } from "@/components/Nav";
import { TreatmentForm } from "@/components/forms/TreatmentForm";
import { SITE } from "@/lib/site";

export default function BookTreatmentPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Palace Wellness · W1@Bangkoknoi</div>
          <h1>
            Book a <em>Treatment</em>
          </h1>
          <p>
            Restore your body and mind with a bespoke wellness treatment. Submit your preferences below and our
            therapists will tailor an experience exclusively for you.
          </p>
        </div>
      </section>

      <div className="form-layout">
        <div className="form-card">
          <h2>Treatment Booking</h2>
          <p className="form-sub">
            Complete this form and our wellness team will confirm your booking within 2 hours and share a pre-treatment
            guide.
          </p>
          <div className="form-notice">
            <p>
              <strong>In-villa treatments available:</strong> Guests in our Wellness Villa, Canal Villa, or Pool Suite may
              request treatments in-villa. Please indicate in special requests.
            </p>
          </div>
          <TreatmentForm />
        </div>

        <div className="form-sidebar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wellness/treatment.jpg" alt="Palace Wellness" className="form-sidebar-img" />
          <div className="form-sidebar-card">
            <h3>Contact the Spa</h3>
            <p>
              <strong>Phone</strong>
              <br />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            </p>
            <p>
              <strong>WhatsApp</strong>
              <br />
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {SITE.phone}
              </a>
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${SITE.emailHm}`}>{SITE.emailHm}</a>
            </p>
            <p>
              <strong>Hours</strong>
              <br />
              Daily 9:00 AM – 9:00 PM
            </p>
          </div>
          <div className="form-sidebar-card">
            <h3>Signature Treatments</h3>
            <p>Handcrafted rituals inspired by ancient Thai healing traditions.</p>
            <ul style={{ listStyle: "none", marginTop: 12 }}>
              <li>Thai Traditional Massage <span style={{ float: "right" }}>from ฿1,800</span></li>
              <li>Aromatherapy Massage <span style={{ float: "right" }}>from ฿2,200</span></li>
              <li>Hot Stone Therapy <span style={{ float: "right" }}>from ฿2,800</span></li>
              <li>Royal Thai Herbal Compress <span style={{ float: "right" }}>from ฿2,500</span></li>
              <li>W1 Signature Ritual <span style={{ float: "right" }}>from ฿4,500</span></li>
            </ul>
            <p style={{ marginTop: 16 }}>
              <Link href="/wellness">View all treatments →</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
