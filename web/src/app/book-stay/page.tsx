import { Nav } from "@/components/Nav";
import { StayForm } from "@/components/forms/StayForm";
import { SITE } from "@/lib/site";

export default function BookStayPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Accommodations · W1@Bangkoknoi</div>
          <h1>
            Book Your <em>Stay</em>
          </h1>
          <p>
            Submit your enquiry below and our team will confirm availability and tailor your perfect canal-side escape.
            We respond within 2 hours during hotel hours (8 AM – 10 PM, Bangkok time).
          </p>
        </div>
      </section>

      <div className="form-layout">
        <div className="form-card">
          <h2>Accommodation Enquiry</h2>
          <p className="form-sub">
            Fields marked * are required. Our reservations team will confirm your booking by email within 2 hours.
          </p>
          <div className="form-notice">
            <p>
              <strong>Direct booking advantage:</strong> Book directly with us for the best available rate, complimentary
              early check-in (subject to availability), and a welcome amenity upon arrival.
            </p>
          </div>
          <StayForm />
        </div>

        <div className="form-sidebar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/rooms/canal-villa/02.jpg" alt="W1@Bangkoknoi Canal Suite" className="form-sidebar-img" />
          <div className="form-sidebar-card">
            <h3>Contact Reservations</h3>
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
              <strong>Response Time</strong>
              <br />
              Within 2 hours · 8 AM – 10 PM Bangkok time
            </p>
          </div>
          <div className="form-sidebar-card">
            <h3>Check-In Information</h3>
            <p>
              Check-in from <strong>2:00 PM</strong> · Check-out by <strong>12:00 PM</strong>
            </p>
            <p>Early check-in and late check-out available on request, subject to availability.</p>
            <p style={{ marginTop: 8 }}>{SITE.address}</p>
          </div>
          <div className="form-sidebar-card" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "24px 28px 16px" }}>
              <h3>Find Us</h3>
              <p>
                44 Moo 7 Soi Banglen 21/2
                <br />
                Bang Kruai Sai Noi Road
                <br />
                Nonthaburi 11140, Thailand
              </p>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=W1+Bangkoknoi+Hotel,+44+Moo+7,+Soi+Banglen+21/2,+Bang+Kruai+Sai+Noi+Road,+Nonthaburi+11140+Thailand&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height={240}
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="W1@Bangkoknoi Hotel location on Google Maps"
            />
            <div style={{ padding: "12px 28px", background: "var(--emerald-deep)" }}>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
