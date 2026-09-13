import Link from "next/link";
import { Nav } from "@/components/Nav";
import { TableForm } from "@/components/forms/TableForm";
import { SITE } from "@/lib/site";

export default function ReserveTablePage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Dining &amp; Bar · W1@Bangkoknoi</div>
          <h1>
            Reserve a <em>Table</em>
          </h1>
          <p>
            Book your dining experience at Thai Boran Restaurant or the W1 Café. We recommend reserving ahead to ensure
            your preferred time and occasion is perfectly prepared.
          </p>
        </div>
      </section>

      <div className="form-layout">
        <div className="form-card">
          <h2>Table Reservation</h2>
          <p className="form-sub">
            Complete this form and we will confirm your reservation within 2 hours. For same-day bookings please call us
            directly.
          </p>
          <div className="form-notice">
            <p>
              <strong>Special occasions:</strong> Let us know if you&apos;re celebrating a birthday, anniversary, or other
              milestone — we love to create memorable moments.
            </p>
          </div>
          <TableForm />
        </div>

        <div className="form-sidebar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/interior.jpg" alt="Thai Boran Restaurant" className="form-sidebar-img" />
          <div className="form-sidebar-card">
            <h3>Contact the Restaurant</h3>
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
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <strong>Hours</strong>
              <br />
              Breakfast 7:00–10:30 AM · All Day Menu Mon–Thu 7:00 AM–8:00 PM · Fri–Sun 7:00 AM–10:00 PM
            </p>
          </div>
          <div className="form-sidebar-card">
            <h3>Menu Highlights</h3>
            <p>Royal Thai classics prepared with seasonal canal-side produce.</p>
            <ul style={{ listStyle: "none", marginTop: 12 }}>
              <li>Tom Kha Gai Coconut Soup <span style={{ float: "right" }}>฿280</span></li>
              <li>Mango &amp; Prawn Salad <span style={{ float: "right" }}>฿320</span></li>
              <li>Massaman Lamb Shoulder <span style={{ float: "right" }}>฿680</span></li>
              <li>Canal-Side Seafood Platter <span style={{ float: "right" }}>฿1,200</span></li>
              <li>Jasmine Panna Cotta <span style={{ float: "right" }}>฿180</span></li>
            </ul>
            <p style={{ marginTop: 16 }}>
              <Link href="/dining">View full menu →</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
