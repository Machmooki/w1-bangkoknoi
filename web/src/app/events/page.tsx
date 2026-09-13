import Link from "next/link";
import { Nav } from "@/components/Nav";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE } from "@/lib/site";

const eventGallery = Array.from({ length: 32 }, (_, i) => ({
  src: `/images/events/gallery-${i + 1}.jpg`,
  alt: `Event at W1@Bangkoknoi ${i + 1}`,
}));

const venues = [
  {
    img: "/images/events/ballroom.jpg",
    alt: "Grand Ballroom W1@Bangkoknoi",
    badge: "Flagship Venue",
    title: "Grand Ballroom",
    desc: "Our premier indoor space, offering sophisticated design and versatile configurations to suit any occasion — from grand galas and conferences to elegant seated banquets. Equipped with full professional audiovisual technology and staging.",
    detail: "Seated: Up to 200 Guests · Cocktail Reception: Up to 300 Guests · Full AV & Staging",
  },
  {
    img: "/images/events/dining.jpg",
    alt: "The Boran Private Dining W1@Bangkoknoi",
    badge: "Private Dining",
    title: "The Boran Private Dining",
    desc: "An intimate, character-rich indoor setting perfect for private banquets, exclusive corporate luncheons, and celebratory gatherings. Bespoke menus curated by our culinary team at Thai Boran, with live cooking stations available on request.",
    detail: "Capacity: Up to 50 Guests · Bespoke Menus · Live Cooking Stations",
  },
  {
    img: "/images/events/terrace.jpg",
    alt: "Outdoor Canal Terrace W1@Bangkoknoi",
    badge: "Outdoor Elegance",
    title: "Outdoor Canal Terrace",
    desc: "A picturesque waterside venue that embraces natural breezes and scenic river views. Ideal for welcome cocktails, al fresco receptions, sunset dinners, and product launches framed by the timeless calm of the Bangkok Noi Canal.",
    detail: "Capacity: Up to 60 Guests · Sunset-Facing · Covered Canopy Available",
  },
  {
    img: "/images/events/villas.jpg",
    alt: "Private Canal Villa W1@Bangkoknoi",
    badge: "VIP & Confidential",
    title: "Private Canal Villa",
    desc: "An ultra-exclusive, luxurious setting designed for VIP meetings, highly confidential strategy sessions, or intimate executive gatherings. Complete privacy, full butler service, and direct canal access — discretion at the highest level.",
    detail: "Capacity: 8–10 Guests · Full Butler Service · Private Canal Access",
  },
];

const packages = [
  {
    img: "/images/events/pkg1.jpg",
    alt: "Canal Executive Day Package",
    label: "Corporate Day",
    title: "Canal Executive Day",
    guests: "8–10 Guests",
    desc: "A refined, daytime corporate retreat or strategic meeting format designed to inspire leadership teams.",
    includes: [
      "Meeting room hire with full AV setup",
      "Palace Wellness break & yoga session",
      "Thai Boran seated lunch",
      "Afternoon canal boat team-building excursion",
    ],
  },
  {
    img: "/images/events/pkg2.jpg",
    alt: "Grand Gala Evening Package",
    label: "Signature Evening",
    title: "Grand Gala Evening",
    guests: "100–200 Guests (Banquet) · Up to 300 (Cocktail)",
    featured: true,
    desc: "An elegant, large-scale evening affair. Perfect for prestigious awards, corporate celebrations, or high-end networking.",
    includes: [
      "Grand Ballroom reception with full décor",
      "Multi-course Thai fusion banquet by Thai Boran",
      "Live entertainment & cultural performances",
    ],
  },
  {
    img: "/images/events/pkg3.jpg",
    alt: "Wellness Leadership Retreat Package",
    label: "Multi-Day Retreat",
    title: "Wellness & Leadership Retreat",
    guests: "3–5 Days",
    desc: "A transformative retreat combining strategic meetings with deep rejuvenation.",
    includes: [
      "Private villa accommodation for all guests",
      "Daily Palace Wellness & meditation programmes",
      "Strategy sessions in canal-side meeting rooms",
      "Inspirational canal excursions & cultural experiences",
    ],
  },
];

const eventServices = [
  "State-of-the-art audiovisual equipment and high-speed Wi-Fi throughout all venues",
  "Professional lighting, staging, and set design",
  "Dedicated personal event planner and on-site technical support",
  "Private boat transfers for all guests from central Bangkok",
  "Luxury accommodation packages in rooms, suites, and canal villas",
  "Professional photography, videography, and floral design services",
  "Complimentary site inspections for event planners and organisers",
  "Wellness breaks and team-building activity coordination",
];

export default function EventsPage() {
  return (
    <>
      <Nav transparentAtTop />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/hero.jpg" alt="Elegant Event at W1@Bangkoknoi Hotel" />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">W1@Bangkoknoi Hotel &amp; Wellness Resort</div>
          <h1 className="hero-h1">
            Events at
            <br />
            <em>W1@Bangkoknoi</em>
          </h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            Timeless venues. Flawless execution.
            <br />
            Unforgettable moments on the Bangkok Noi Canal.
          </p>
          <div className="hero-ctas">
            <a href={`mailto:${SITE.emailSales}`} className="btn-gold">
              Enquire About Your Event
            </a>
            <a href="#venues" className="btn-outline-white">
              Explore Venues
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Discover
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="intro">
        <div className="intro-text">
          <div className="section-tag">Exceptional Events at W1 Bangkoknoi</div>
          <h2>
            W1 Canal <em>Ballroom</em>
          </h2>
          <p>
            From high-profile corporate gatherings to elite social celebrations, we transform your vision into a
            flawlessly executed reality. Specialising in events for 50 to 200 guests, our resort blends sophisticated
            venues with impeccable service to deliver an unmatched event experience on the Bangkok Noi Canal.
          </p>
          <p>
            Our dedicated Events Concierge team works closely with you at every stage — from initial brief to final bow.
            State-of-the-art audiovisual technology, bespoke catering by Thai Boran, and seamless logistics ensure every
            moment is executed with precision and elegance.
          </p>
          <div className="intro-tags">
            <span className="intro-tag">50–200 Guests</span>
            <span className="intro-tag">Dedicated Event Planner</span>
            <span className="intro-tag">Canal-Side Setting</span>
            <span className="intro-tag">Full AV Support</span>
          </div>
        </div>
        <div className="intro-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/intro.jpg" alt="Corporate Gala Dinner at W1@Bangkoknoi" />
          <div className="intro-image-caption">Bangkok Noi Canal · Nonthaburi, Thailand</div>
        </div>
      </section>

      {/* ─── VENUES ─── */}
      <section className="venues" id="venues">
        <div className="venues-header">
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Venue Options &amp; Capacities
          </div>
          <h2>
            Four <em>Distinctive</em> Spaces
          </h2>
          <p>
            From our flagship Grand Ballroom to an ultra-exclusive Private Canal Villa, each venue is designed to elevate
            your event with sophistication, flexibility, and canal-side elegance.
          </p>
        </div>
        <div className="venues-grid">
          {venues.map((v) => (
            <div className="venue-card" key={v.title}>
              <div className="venue-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.img} alt={v.alt} />
                <div className="venue-badge">{v.badge}</div>
              </div>
              <div className="venue-body">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
                <div className="venue-detail">{v.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EVENT TYPES ─── */}
      <section className="event-types">
        <div className="event-types-header">
          <div className="section-tag">Every Occasion</div>
          <h2>
            Events Tailored to <em>Your Vision</em>
          </h2>
        </div>
        <div className="event-types-grid">
          <div className="type-card">
            <div className="type-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/events/corporate.jpg" alt="Corporate Events W1@Bangkoknoi" />
            </div>
            <div className="type-icon">Corporate &amp; Incentive</div>
            <h3>Business Without Boundaries</h3>
            <ul>
              <li>Executive board meetings and strategy off-sites</li>
              <li>Product launches with dramatic canal backdrops</li>
              <li>
                Incentive travel programmes featuring private boat excursions, Thai cooking classes, and Palace Wellness
                rejuvenation
              </li>
              <li>Hybrid conference capabilities with high-speed internet and professional AV support</li>
            </ul>
          </div>
          <div className="type-card">
            <div className="type-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/events/gala.jpg" alt="Gala Events W1@Bangkoknoi" />
            </div>
            <div className="type-icon">Social &amp; Private Celebrations</div>
            <h3>Celebrations to Remember</h3>
            <ul>
              <li>Milestone birthdays and anniversaries</li>
              <li>Family reunions with dedicated kids club activities</li>
              <li>Gala fundraisers and charity events</li>
              <li>Cultural immersion evenings with traditional Thai performances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─── */}
      <section className="packages">
        <div className="packages-header">
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Bespoke Packages
          </div>
          <h2>
            Curated <em>Event Experiences</em>
          </h2>
        </div>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div className={`pkg-card${pkg.featured ? " featured" : ""}`} key={pkg.title}>
              <div className="pkg-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pkg.img} alt={pkg.alt} />
              </div>
              <div className="pkg-body">
                <div className="pkg-label">{pkg.label}</div>
                <h3>{pkg.title}</h3>
                <div className="pkg-guests">{pkg.guests}</div>
                <p>{pkg.desc}</p>
                <ul className="pkg-includes">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CULINARY ─── */}
      <section className="culinary">
        <div className="culinary-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/events/cultural.jpg" alt="Culinary Excellence at W1@Bangkoknoi Events" />
        </div>
        <div className="culinary-content">
          <div className="section-tag">Culinary Excellence</div>
          <h2>
            A Feast Worthy of <em>Every Occasion</em>
          </h2>
          <p>
            Bespoke menus from Thai Boran feature seasonal canal-market ingredients, crafted to reflect the occasion and
            delight every palate. Our culinary team designs menus that are as memorable as the event itself.
          </p>
          <p>
            From royal Thai tasting journeys and international fusion banquets to live cooking stations and
            wellness-focused menus — full bar service with signature cocktails and premium wines is included.
          </p>
          <div className="culinary-tags">
            <span className="cul-tag">Royal Thai Tasting</span>
            <span className="cul-tag">International Fusion</span>
            <span className="cul-tag">Live Cooking Stations</span>
            <span className="cul-tag">Wellness Catering</span>
            <span className="cul-tag">Halal Available</span>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services">
        <div className="services-left">
          <div className="section-tag">Full-Service Support</div>
          <h2>
            Every Detail. <em>Perfectly Executed.</em>
          </h2>
          <p>
            At W1 Bangkoknoi, every detail is perfectly executed to ensure an effortless, high-impact event from arrival
            to departure. Our dedicated Events Concierge team provides end-to-end support, ensuring your event runs
            flawlessly from the first site visit to the final guest departure.
          </p>
          <ul className="services-list">
            {eventServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="services-right">
          <div className="practical-box">
            <h3>Practical Information</h3>
            <div className="practical-row">
              <span className="practical-label">Ideal Capacity</span>
              <span className="practical-value">50 to 200 guests</span>
            </div>
            <div className="practical-row">
              <span className="practical-label">Venue Options</span>
              <span className="practical-value">4 distinctive indoor &amp; outdoor spaces</span>
            </div>
            <div className="practical-row">
              <span className="practical-label">Availability</span>
              <span className="practical-value">Year-round, covered outdoor spaces available</span>
            </div>
            <div className="practical-row">
              <span className="practical-label">Site Visits</span>
              <span className="practical-value">Complimentary inspections for planners</span>
            </div>
            <div className="practical-row">
              <span className="practical-label">Transport</span>
              <span className="practical-value">Private boat transfers from central Bangkok</span>
            </div>
            <div className="practical-row">
              <span className="practical-label">Dedicated Contact</span>
              <span className="practical-value">Khun Som — Sales &amp; Marketing</span>
            </div>
            <div className="practical-row">
              <span className="practical-label">Email</span>
              <span className="practical-value">
                <a href={`mailto:${SITE.emailSales}`} style={{ color: "var(--gold)" }}>
                  {SITE.emailSales}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="gallery">
        <div className="gallery-header">
          <div className="eyebrow-tag">Events Gallery</div>
          <h2>
            Events at <em>W1@Bangkoknoi</em>
          </h2>
          <div className="gold-rule" />
        </div>
        <GalleryGrid images={eventGallery} />
      </section>

      {/* ─── CTA ─── */}
      <section className="event-cta">
        <div className="event-cta-inner">
          <div className="section-tag" style={{ justifyContent: "center", color: "var(--gold)" }}>
            <span style={{ display: "block", width: 32, height: 1, background: "var(--gold)" }} />
            Begin Your Event Journey
            <span style={{ display: "block", width: 32, height: 1, background: "var(--gold)" }} />
          </div>
          <h2>
            Create <em>Extraordinary</em> Memories
          </h2>
          <p>
            Whether you are planning a high-profile corporate gathering or an intimate private celebration,
            W1@Bangkoknoi Hotel &amp; Wellness Resort delivers exceptional service and unforgettable memories on the
            historic Bangkok Noi Canal.
          </p>
          <div className="cta-buttons">
            <a href={`mailto:${SITE.emailSales}`} className="btn-gold">
              Enquire About Your Event
            </a>
            <a href={`mailto:${SITE.emailSales}?subject=Venue Tour Request`} className="btn-outline-white">
              Schedule a Venue Tour
            </a>
          </div>
          <div className="cta-contact">
            <a href={`mailto:${SITE.emailSales}`}>{SITE.emailSales}</a>
            <span>|</span>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          </div>
        </div>
      </section>

      {/* ─── WELLNESS AT THE CORE ─── */}
      <section className="wellness-core-strip">
        <div className="wellness-core-inner">
          <div className="wellness-core-top">
            <div className="section-tag-wc">Wellness at the Core</div>
            <h2>
              W1@Bangkoknoi Hotel &amp; <em>Wellness Resort</em>
            </h2>
            <p>
              Wellness is not an offering at W1 — it is our identity. Every experience is thoughtfully designed to restore
              your body, rebalance your mind, and reawaken your spirit on the banks of the timeless Bangkok Noi Canal.
            </p>
          </div>
          <div className="wellness-pillars-row">
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9675;</div>
              <div className="wc-pillar-name">
                <em>Restore</em> Body
              </div>
              <div className="wc-pillar-desc">
                Thai massage, herbal compress rituals, and hydrotherapy to release tension and renew vitality.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9676;</div>
              <div className="wc-pillar-name">
                <em>Rebalance</em> Mind
              </div>
              <div className="wc-pillar-desc">
                Canal-side meditation, breathwork, and mindfulness practices for lasting inner clarity.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9679;</div>
              <div className="wc-pillar-name">
                <em>Nourish</em> From Within
              </div>
              <div className="wc-pillar-desc">
                Wellness cuisine crafted from organic Thai ingredients to support your transformation.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9737;</div>
              <div className="wc-pillar-name">
                <em>Transform</em> For Life
              </div>
              <div className="wc-pillar-desc">
                Multi-day retreats and personalised programmes that create meaningful, lasting change.
              </div>
            </div>
          </div>
          <div className="wellness-core-cta">
            <p>&quot;Where ancient Thai wisdom meets the quiet power of the canal — a place to truly heal.&quot;</p>
            <Link href="/wellness" className="btn-wc">
              Discover Palace Wellness
            </Link>
            <Link href="/book-treatment" className="btn-wc-outline">
              Book a Treatment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
