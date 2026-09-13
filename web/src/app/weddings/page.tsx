import Link from "next/link";
import { Nav } from "@/components/Nav";
import { HeroVideo } from "@/components/HeroVideo";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE } from "@/lib/site";

const weddingGallery = Array.from({ length: 63 }, (_, i) => ({
  src: `/images/weddings/gallery-${i + 1}.jpg`,
  alt: `Wedding at W1@Bangkoknoi ${i + 1}`,
}));

const venues = [
  {
    img: "/images/weddings/ballroom.jpg",
    alt: "Grand Ballroom at W1@Bangkoknoi",
    cap: "Up to 200 Guests",
    title: "Grand Ballroom",
    desc: "An elegant and sophisticated indoor venue ideal for grand receptions. With panoramic canal views, crystal chandeliers, and bespoke lighting design, our flagship space accommodates lavish receptions and royal Thai blessing ceremonies in a setting of unrivalled elegance.",
    detail: "Capacity: Up to 200 guests · Full A/V & lighting rig · Canal panorama",
  },
  {
    img: "/images/events/dining.jpg",
    alt: "The Boran Private Dining W1@Bangkoknoi",
    cap: "Up to 50 Guests",
    title: "The Boran Private Dining",
    desc: "An intimate, character-rich setting ideal for rehearsal dinners, exclusive wedding breakfasts, and private family celebrations. Bespoke menus curated by our Thai Boran culinary team, with live cooking stations available on request.",
    detail: "Capacity: Up to 50 guests · Bespoke menus · Live cooking stations",
  },
  {
    img: "/images/weddings/terrace.jpg",
    alt: "Canal Terrace at W1@Bangkoknoi",
    cap: "Up to 60 Guests",
    title: "Canal Terrace",
    desc: "A picturesque, open-air waterside venue perfect for romantic outdoor gatherings or cocktail receptions. Set directly beside the Bangkok Noi Canal, this intimate setting frames your celebration with the timeless beauty of the water.",
    detail: "Capacity: Up to 60 guests · Sunset-facing · Covered canopy available",
  },
  {
    img: "/images/weddings/villa.jpg",
    alt: "Private Canal Villa at W1@Bangkoknoi",
    cap: "Exclusive Buy-Out",
    title: "Private Canal Villa Buy-Out",
    desc: "For the ultimate elite experience, couples can opt for an exclusive resort buy-out, transforming our private canal villas into a secluded, romantic sanctuary for the wedding party and guests. The most intimate and exclusive offering W1 Bangkoknoi has to offer.",
    detail: "Exclusive resort buy-out · Private pool & pavilion · Full butler service",
  },
];

const packages = [
  {
    title: "The Monk Blessing Ceremony",
    subtitle: "Sacred Merit-Making Ritual",
    capacity: "Accommodating up to 50 guests",
    items: [
      "A serene and sacred merit-making ritual to start your union with harmony",
      "Officiated by revered monks in a traditional Thai setting",
      "Includes ceremonial offerings, chanting, and sacred water blessing",
      "Coordinated by our dedicated Wedding Concierge team",
      "Ideal as an opening ceremony before the main reception",
    ],
  },
  {
    title: "The Traditional Wedding Procession",
    subtitle: "Khan Maak · ขันหมาก",
    capacity: "Accommodating up to 50 guests",
    featured: true,
    items: [
      "A vibrant, joyful, and culturally rich parade celebrating the groom's arrival",
      "Traditional Khan Maak procession with offerings and ceremonial gifts",
      "Live traditional Thai music and festive atmosphere",
      "Floral garlands, silk costumes, and ceremonial props provided",
      "Fully choreographed and coordinated by our events team",
    ],
  },
  {
    title: "The Holy Water Pouring Ceremony",
    subtitle: "Rod Nam Sang · พิธีรดน้ำสังข์",
    capacity: "Accommodating up to 200 guests",
    items: [
      "An elegant and meaningful traditional Thai ritual",
      "Family and friends offer their heartfelt blessings to the couple",
      "Sacred conch shell and blessed water provided",
      "Suitable for large gatherings — our grandest ceremonial offering",
      "Seamlessly combined with Grand Ballroom or Canal Terrace reception",
    ],
  },
];

const addons = [
  "Private boat arrival for bridal party with floral garlands and traditional welcome rituals",
  "Traditional Thai monk blessing ceremony at dawn on the canal terrace",
  "Pre-wedding canal market tour and private cooking class at Thai Boran",
  "Romantic sunset canal cruise with champagne, canapés, and live music",
  "Post-wedding wellness retreat in dedicated Palace Wellness villas",
  "Professional photography & videography capturing the canal's golden light",
  "Honeymoon suite upgrades with private butler and wellness programme",
  "On-site floral designer specialising in Thai silk and lotus arrangements",
  "Legal wedding documentation guidance for international destination couples",
];

const services = [
  "Personal Wedding Planner assigned from first enquiry through to departure",
  "On-site floral designer specialising in Thai silk, lotus, and tropical arrangements",
  "Audio-visual, lighting, and entertainment coordination",
  "Accommodation arrangements for all wedding guests in canal villas and suites",
  "Private boat transfers from central Bangkok for the bridal party and guests",
  "Legal wedding support and documentation guidance for destination weddings",
  "Complimentary site visits for engaged couples — by appointment",
  "Full post-event coordination including on-site photography and video production",
];

export default function WeddingsPage() {
  return (
    <>
      <Nav transparentAtTop />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <HeroVideo src="/videos/w1-weddings.mp4" poster="/images/weddings/intro.jpg" />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">W1@Bangkoknoi Hotel &amp; Wellness Resort</div>
          <h1 className="hero-h1">
            A Masterpiece of <em>Romance</em>
          </h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            Weddings at W1 Bangkoknoi — where timeless elegance meets enchanting riverside charm. Intimate ceremonies to
            grand receptions for 50 to 200 guests.
          </p>
          <div className="hero-ctas">
            <a href={`mailto:${SITE.emailSales}`} className="btn-gold">
              Enquire About Your Wedding
            </a>
            <a href="#venues" className="btn-outline-white">
              Explore Our Venues
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="philosophy">
        <div className="philosophy-text">
          <div className="section-tag">A Masterpiece of Romance</div>
          <h2>
            Weddings at <em>W1 Bangkoknoi</em>
          </h2>
          <p>
            Celebrate your love story where timeless elegance meets enchanting riverside charm. Specializing in intimate
            to grand celebrations, we create a masterpiece of romance tailored perfectly for 50 to 200 guests, seamlessly
            transitioning from intimate engagement ceremonies to grand wedding receptions.
          </p>
          <p>
            Nestled along the historic Bangkok Noi Canal in Nonthaburi, our dedicated Wedding Concierge team transforms
            your vision into reality — blending authentic Thai traditions with international standards of excellence, every
            detail curated with meticulous care.
          </p>
          <div className="philosophy-tags">
            <div className="phil-tag">50–200 Guests</div>
            <div className="phil-tag">Thai Blessing Ceremonies</div>
            <div className="phil-tag">Canal-Side Setting</div>
            <div className="phil-tag">Dedicated Wedding Planner</div>
            <div className="phil-tag">Private Boat Transfers</div>
          </div>
        </div>
        <div className="philosophy-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/weddings/intro.jpg" alt="Romantic Ceremony at W1@Bangkoknoi Hotel" />
          <div className="philosophy-image-caption">Bangkok Noi Canal · Nonthaburi, Thailand</div>
        </div>
      </section>

      {/* ─── VENUES ─── */}
      <section className="venues" id="venues">
        <div className="venues-header">
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Signature Wedding Venues
          </div>
          <h2>
            Four Exceptional <em>Venues</em>
          </h2>
          <p>
            Each venue at W1 Bangkoknoi offers a distinct atmosphere for your perfect day — from the grandeur of the
            ballroom to the intimate charm of the canal&apos;s edge.
          </p>
        </div>
        <div className="venues-grid">
          {venues.map((v) => (
            <div className="venue-card" key={v.title}>
              <div className="venue-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.img} alt={v.alt} />
                <div className="venue-cap">{v.cap}</div>
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

      {/* ─── PACKAGES ─── */}
      <section className="packages" id="packages">
        <div className="packages-header">
          <div className="section-tag">Ceremonial Journeys</div>
          <h2>
            Three Signature <em>Journeys</em>
          </h2>
          <p>
            We honour beautiful traditions with our three most popular ceremonial journeys, meticulously coordinated for
            an effortless celebration.
          </p>
        </div>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div className={`pkg-card${pkg.featured ? " featured" : ""}`} key={pkg.title}>
              {pkg.featured ? <div className="pkg-featured-tag">Most Popular</div> : null}
              <h3>{pkg.title}</h3>
              <div className="pkg-subtitle">{pkg.subtitle}</div>
              <div className="pkg-capacity">{pkg.capacity}</div>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ADD-ONS ─── */}
      <section className="addons">
        <h3>
          Bespoke <em>Add-On Experiences</em>
        </h3>
        <div className="addons-grid">
          {addons.map((item) => (
            <div className="addon-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CULINARY ─── */}
      <section className="culinary">
        <div className="culinary-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/weddings/details.jpg" alt="Wedding Dining at Thai Boran W1@Bangkoknoi" />
        </div>
        <div className="culinary-content">
          <div className="section-tag">Curated Gastronomy</div>
          <h2>
            Elevate Your <em>Celebration</em>
          </h2>
          <p>
            Our chefs at Thai Boran create bespoke wedding menus ranging from royal Thai tasting journeys to international
            fusion banquets — each one a reflection of the couple&apos;s palate and their guests&apos; desires.
          </p>
          <p>
            Alongside our standard catering options, we are delighted to feature a traditional Chinese Table dining
            experience, perfect for multi-generational family celebrations. Seasonal canal-market ingredients are woven
            into every dish, and signature wedding cakes incorporate Thai flavours crafted by our in-house pâtissier.
          </p>
          <div className="cuisine-tags">
            <div className="cuisine-tag">Royal Thai Banquet</div>
            <div className="cuisine-tag">Chinese Table Dining</div>
            <div className="cuisine-tag">International Fusion</div>
            <div className="cuisine-tag">Vegetarian &amp; Vegan</div>
            <div className="cuisine-tag">Halal Available</div>
          </div>
          <Link href="/dining" className="btn-gold">
            Explore Thai Boran
          </Link>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="services">
        <div className="services-inner">
          <div className="services-text">
            <div className="section-tag">Dedicated Wedding Services</div>
            <h2>
              Every Detail, <em>Perfectly Arranged</em>
            </h2>
            <p>
              From the first enquiry to the final dance, our Wedding Concierge team is with you at every step — ensuring
              an experience that is seamless, personal, and utterly unforgettable.
            </p>
            <ul className="service-list">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="services-practical">
              <h3>
                Practical <em>Information</em>
              </h3>
              <div className="practical-item">
                <div className="practical-label">Guest Capacity</div>
                <div className="practical-value">
                  50 to 200 guests
                  <br />
                  <span style={{ fontSize: 10, opacity: 0.6 }}>
                    (50 for intimate rituals · 200 for main reception)
                  </span>
                </div>
              </div>
              <div className="practical-item">
                <div className="practical-label">Best Season</div>
                <div className="practical-value">November – February</div>
              </div>
              <div className="practical-item">
                <div className="practical-label">Distance from Bangkok</div>
                <div className="practical-value">1 hr by road / 45 min by boat</div>
              </div>
              <div className="practical-item">
                <div className="practical-label">Venue Options</div>
                <div className="practical-value">3 distinct settings</div>
              </div>
              <div className="practical-item">
                <div className="practical-label">Minimum Booking</div>
                <div className="practical-value">Full venue hire available</div>
              </div>
              <div className="practical-item">
                <div className="practical-label">Site Visits</div>
                <div className="practical-value">Complimentary · By appointment</div>
              </div>
              <div className="practical-item">
                <div className="practical-label">Department</div>
                <div className="practical-value">Sales &amp; Marketing</div>
              </div>
              <div className="practical-item" style={{ borderBottom: "none" }}>
                <div className="practical-label">Email</div>
                <div className="practical-value">
                  <a href={`mailto:${SITE.emailSales}`} style={{ color: "var(--gold)", textDecoration: "none" }}>
                    {SITE.emailSales}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="gallery">
        <div className="gallery-header">
          <div className="eyebrow-tag">Wedding Gallery</div>
          <h2>
            Real Weddings at <em>W1@Bangkoknoi</em>
          </h2>
          <div className="gold-rule" />
        </div>
        <GalleryGrid images={weddingGallery} />
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
              Begin your wedding journey with intention — our Palace Wellness team offers pre-wedding retreats, bridal
              rituals, and post-ceremony restoration to ensure you glow from within on your most important day.
            </p>
          </div>
          <div className="wellness-pillars-row">
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9675;</div>
              <div className="wc-pillar-name">
                <em>Pre-Wedding</em> Retreat
              </div>
              <div className="wc-pillar-desc">
                3 or 5-night bridal wellness programme — massage, herbal steam, yoga, and glow facials before your big
                day.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9676;</div>
              <div className="wc-pillar-name">
                <em>Couples</em> Rituals
              </div>
              <div className="wc-pillar-desc">
                Canal-side couples massages, sound healing ceremonies, and private meditation sessions for bride and
                groom.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9679;</div>
              <div className="wc-pillar-name">
                <em>Honeymoon</em> Wellness
              </div>
              <div className="wc-pillar-desc">
                Bespoke honeymoon wellness journeys with in-villa treatments, nutritional menus, and sunrise yoga on the
                water.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">&#9737;</div>
              <div className="wc-pillar-name">
                <em>Bridal</em> Beauty Rituals
              </div>
              <div className="wc-pillar-desc">
                Royal Thai facial, luk pra kob compress, and aromatic oil rituals to achieve natural luminosity on your
                wedding day.
              </div>
            </div>
          </div>
          <div className="wellness-core-cta">
            <p>&quot;Begin the most beautiful chapter of your life restored, radiant, and deeply at peace.&quot;</p>
            <Link href="/wellness" className="btn-wc">
              Explore Bridal Wellness
            </Link>
            <Link href="/wellness" className="btn-wc-outline">
              Book a Treatment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
