import Link from "next/link";
import { Nav } from "@/components/Nav";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { BOOK_DIRECT_URL, SITE } from "@/lib/site";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=W1+Bangkoknoi+Hotel,+44+Moo+7,+Soi+Banglen+21/2,+Bang+Kruai+Sai+Noi+Road,+Nonthaburi+11140+Thailand&t=&z=15&ie=UTF8&iwloc=&output=embed";

function telHref(display: string) {
  return `tel:${display.replace(/\s/g, "")}`;
}

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">W1@Bangkoknoi Hotel &amp; Wellness Resort</div>
          <h1>
            Get in <em>Touch</em>
          </h1>
          <p>
            We&apos;re here to help you plan the perfect stay. Whether you have a question, a special request, or simply
            want to learn more about life on the Bangkok Noi Canal — our team is ready.
          </p>
        </div>
      </section>

      <div className="contact-strip">
        <div className="contact-strip-item">
          <div className="strip-icon">📞</div>
          <div>
            <div className="strip-label">Phone</div>
            <div className="strip-value">
              <a href={telHref(SITE.phone)}>{SITE.phone}</a>
              <br />
              <a href={telHref(SITE.phoneDirect)}>{SITE.phoneDirect}</a>
            </div>
          </div>
        </div>
        <div className="contact-strip-item">
          <div className="strip-icon">📱</div>
          <div>
            <div className="strip-label">WhatsApp</div>
            <div className="strip-value">
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {SITE.phone}
              </a>
              <br />
              <span style={{ fontSize: 10, opacity: 0.6 }}>Available 8 AM – 10 PM</span>
            </div>
          </div>
        </div>
        <div className="contact-strip-item">
          <div className="strip-icon">✉️</div>
          <div>
            <div className="strip-label">Email</div>
            <div className="strip-value">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
        <div className="contact-strip-item">
          <div className="strip-icon">📍</div>
          <div>
            <div className="strip-label">Address</div>
            <div className="strip-value">
              {SITE.address}
              <br />
              Thailand
            </div>
          </div>
        </div>
      </div>

      <div className="contact-layout">
        <div className="form-card">
          <h2>General Enquiry</h2>
          <p className="form-sub">
            Fill in the form below and our team will respond within 2 hours during hotel hours (8 AM – 10 PM Bangkok
            time). For reservations, dining, or wellness bookings please use the dedicated links below.
          </p>
          <EnquiryForm type="contact" />

          <div className="contact-quick-links">
            <div className="contact-quick-links-label">Dedicated Booking Forms</div>
            <div className="contact-quick-links-grid">
              <a href={BOOK_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="contact-quick-link">
                Book a Room
              </a>
              <Link href="/reserve-table" className="contact-quick-link">
                Reserve a Table
              </Link>
              <Link href="/book-treatment" className="contact-quick-link">
                Book a Treatment
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-sidebar">
          <div className="map-block">
            <div className="map-block-header">
              <h3>Find Us</h3>
              <p>
                44 Moo 7 Soi Banglen 21/2, Bang Kruai Sai Noi Road
                <br />
                Nonthaburi 11140, Thailand
              </p>
            </div>
            <iframe
              src={MAPS_EMBED}
              height={300}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="W1@Bangkoknoi on Google Maps"
            />
            <div className="map-block-footer">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                Get Directions in Google Maps →
              </a>
            </div>
          </div>

          <div className="info-card">
            <h3>Contact Details</h3>
            <div className="contact-row">
              <div className="contact-icon">📞</div>
              <div className="contact-detail">
                <div className="label">Main Line</div>
                <div className="value">
                  <a href={telHref(SITE.phone)}>{SITE.phone}</a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">☎️</div>
              <div className="contact-detail">
                <div className="label">Direct Line</div>
                <div className="value">
                  <a href={telHref(SITE.phoneDirect)}>{SITE.phoneDirect}</a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">📱</div>
              <div className="contact-detail">
                <div className="label">WhatsApp</div>
                <div className="value">
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">✉️</div>
              <div className="contact-detail">
                <div className="label">General</div>
                <div className="value">
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">💬</div>
              <div className="contact-detail">
                <div className="label">Line</div>
                <div className="value">
                  <a href="https://page.line.me/w1hotel" target="_blank" rel="noopener noreferrer">
                    page.line.me/w1hotel
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">📘</div>
              <div className="contact-detail">
                <div className="label">Facebook</div>
                <div className="value">
                  <a href="https://www.facebook.com/share/1BpvmJfVQL/" target="_blank" rel="noopener noreferrer">
                    W1@Bangkoknoi on Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">📸</div>
              <div className="contact-detail">
                <div className="label">Instagram</div>
                <div className="value">
                  <a
                    href="https://www.instagram.com/explore/locations/105644684809432/w1-bangkoknoi-hotel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W1@Bangkoknoi on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hours-card">
            <h3>Hotel Hours</h3>
            <div className="hours-row">
              <span className="dept">Check-In</span>
              <span className="time">From 2:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="dept">Check-Out</span>
              <span className="time">By 12:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="dept">Reception</span>
              <span className="time">24 Hours</span>
            </div>
            <div className="hours-row">
              <span className="dept">Thai Boran Breakfast</span>
              <span className="time">7:00 – 10:30 AM</span>
            </div>
            <div className="hours-row">
              <span className="dept">All Day Menu (Mon–Thu)</span>
              <span className="time">7:00 AM – 8:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="dept">All Day Menu (Fri–Sun)</span>
              <span className="time">7:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="dept">Palace Wellness Spa</span>
              <span className="time">9:00 AM – 9:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="dept">Boat Trips</span>
              <span className="time">9:00 AM – 3:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
