import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { RoomGallery } from "@/components/RoomGallery";
import { RoomFilter } from "@/components/RoomFilter";
import { BOOK_DIRECT_URL } from "@/lib/site";

type Spec = [string, string];

type Room = {
  id: string;
  reverse?: boolean;
  cream?: boolean;
  tag: string;
  title: ReactNode;
  tagline: string;
  desc: string;
  images: string[];
  alt: string;
  specs: Spec[];
  amenities: string[];
  footnote?: string;
};

type Villa = {
  id: string;
  right?: boolean;
  tag: string;
  title: ReactNode;
  tagline: string;
  desc: string;
  images: string[];
  alt: string;
  specs: Spec[];
  amenities: string[];
};

/** Build `/images/rooms/{folder}/01.jpg` … `NN.jpg` (matches accommodations.html roomData). */
function roomImages(folder: string, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/images/rooms/${folder}/${n}.jpg`;
  });
}

const rooms: Room[] = [
  {
    id: "signature-queen",
    tag: "Room Type 01",
    title: (
      <>
        Signature Garden <em>Queen</em>
      </>
    ),
    tagline: "Elegant comfort with a touch of Thai refinement",
    desc: "Our Signature Garden Queen rooms offer a serene retreat with warm Thai-modern interiors, thoughtfully appointed for couples and solo travellers seeking refined comfort surrounded by lush tropical gardens.",
    images: roomImages("signature-queen", 8),
    alt: "Signature Garden Queen",
    specs: [
      ["Bed", "Queen Bed"],
      ["View", "Garden"],
      ["Occupancy", "Up to 2 Guests"],
    ],
    amenities: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini Refrigerator",
      "Rain Shower",
      "Luxury Toiletries",
      "In-room Safe",
      "Daily Breakfast",
    ],
  },
  {
    id: "signature-king",
    reverse: true,
    cream: true,
    tag: "Room Type 02",
    title: (
      <>
        Signature King <em>with Whirlpool</em>
      </>
    ),
    tagline: "Romance elevated — a private whirlpool for two",
    desc: "Indulge in the ultimate romantic retreat. This Signature King room features a private in-room whirlpool bath, lush garden surroundings, and the warmth of Thai-modern luxury throughout.",
    images: roomImages("signature-king-whirlpool", 7),
    alt: "Signature King with Whirlpool",
    specs: [
      ["Bed", "King Bed"],
      ["View", "Tropical Garden"],
      ["Occupancy", "Up to 2 Guests"],
    ],
    amenities: [
      "Private Whirlpool Bath",
      "Air Conditioning",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini Refrigerator",
      "Rain Shower",
      "Luxury Toiletries",
      "Daily Breakfast",
    ],
  },
  {
    id: "signature-queen-steam",
    tag: "Room Type 03",
    title: (
      <>
        Signature Queen <em>with Steam/Sauna</em>
      </>
    ),
    tagline: "Rejuvenate within — your private steam sanctuary awaits",
    desc: "A wellness-inspired Signature Queen room featuring a private in-room steam/sauna bath, designed for guests seeking restorative relaxation alongside the comforts of Thai-modern luxury on the Bangkok Noi Canal.",
    images: roomImages("signature-queen-steam", 8),
    alt: "Signature Queen with Steam/Sauna",
    specs: [
      ["Bed", "Queen Bed"],
      ["View", "Garden View"],
      ["Occupancy", "Up to 2 Guests"],
    ],
    amenities: [
      "Private Steam/Sauna",
      "Air Conditioning",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini Refrigerator",
      "Rain Shower",
      "Luxury Toiletries",
      "Daily Breakfast",
    ],
  },
  {
    id: "deluxe-king",
    reverse: true,
    cream: true,
    tag: "Room Type 04",
    title: (
      <>
        Deluxe King / <em>Twin</em>
      </>
    ),
    tagline: "Canal-side luxury, your choice of bedding",
    desc: "Wake to views of the Bangkok Noi Canal from your Deluxe room. Available in King and Twin configurations, these generously appointed rooms blend contemporary comfort with authentic Thai design elements and canal-side serenity. Perfect for couples, friends, or families — an extra bed can be added on request.",
    images: roomImages("deluxe-king", 22),
    alt: "Deluxe King",
    specs: [
      ["Bed", "King Bed or 2 Double Beds"],
      ["View", "Canal View"],
      ["Occupancy", "Up to 3 Guests (Extra bed available)"],
    ],
    amenities: [
      "Canal View Balcony",
      "Air Conditioning",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini Bar",
      "Rain Shower",
      "In-room Safe",
      "Daily Breakfast",
    ],
  },
  {
    id: "deluxe-suite",
    tag: "Room Type 05",
    title: (
      <>
        Deluxe King <em>Suite</em>
      </>
    ),
    tagline: "A suite of space, style and tropical sanctuary",
    desc: "Our most expansive room category, the Deluxe King Suite features a separate living area, lush tropical garden views and premium finishing throughout — an elevated experience for discerning guests.",
    images: roomImages("deluxe-king-suite", 15),
    alt: "Deluxe King Suite",
    specs: [
      ["Bed", "King Bed"],
      ["View", "Tropical Garden"],
      ["Occupancy", "Up to 3 Guests (Extra bed available)"],
    ],
    amenities: [
      "Separate Living Area",
      "Private Terrace",
      "Air Conditioning",
      "Free Wi-Fi",
      "Mini Bar",
      "Soaking Bathtub",
      "Rain Shower",
      "Daily Breakfast",
    ],
    footnote: "* Bathtub size and design will vary based on room availability.",
  },
];

const villas: Villa[] = [
  {
    id: "pool-suite",
    tag: "Room Type 06",
    title: (
      <>
        King Pool <em>Suite</em>
      </>
    ),
    tagline: "Your own private plunge pool, under open skies",
    desc: "Step outside your suite and into your own private pool. Surrounded by tropical greenery and bathed in natural light, the Pool Suite is the perfect sanctuary for those who seek privacy, luxury, and pure indulgence.",
    images: roomImages("pool-suite", 10),
    alt: "Pool Suite",
    specs: [
      ["Bed", "King Bed"],
      ["Pool", "Private Plunge Pool"],
      ["Occupancy", "Up to 3 Guests (Extra bed available)"],
    ],
    amenities: [
      "Private Plunge Pool",
      "Outdoor Sala",
      "King Bed",
      "Free Wi-Fi",
      "Mini Bar",
      "Soaking Bathtub",
      "Rain Shower",
      "Daily Breakfast",
    ],
  },
  {
    id: "canal-villa",
    right: true,
    tag: "Room Type 07",
    title: (
      <>
        King WhirlPool <em>Villa</em>
      </>
    ),
    tagline: "Private whirlpool luxury on the Bangkok Noi Canal",
    desc: "Our King WhirlPool Villas offer an unparalleled waterfront experience — a private in-villa whirlpool, outdoor living pavilions, direct canal access, and panoramic views that evolve from golden sunrise to starlit evening. The ultimate expression of Thai luxury.",
    images: roomImages("canal-villa", 9),
    alt: "Canal Villa",
    specs: [
      ["Bed", "King Bed"],
      ["View", "Direct Canal"],
      ["Occupancy", "Up to 3 Guests (Sofa bed available)"],
    ],
    amenities: [
      "Canal-facing Terrace",
      "Private Sala",
      "Outdoor Bathtub",
      "Private Boat Access",
      "Mini Bar",
      "Rain Shower",
      "Free Wi-Fi",
      "Daily Breakfast",
    ],
  },
  {
    id: "wellness-villa",
    tag: "Room Type 08 · Luxury 2-Bedroom Villa",
    title: (
      <>
        Wellness <em>Villa</em>
      </>
    ),
    tagline: "A private 2-bedroom sanctuary for body, mind and soul",
    desc: "Our most expansive retreat, the Wellness Villa is a luxury 2-bedroom sanctuary designed exclusively for wellbeing. In-villa spa treatments, a meditation space, canal-side yoga deck and bespoke wellness programmes are all at your disposal — ideal for families or groups seeking the ultimate restorative escape.",
    images: roomImages("wellness-villa", 10),
    alt: "Wellness Villa",
    specs: [
      ["Bed", "King Bed + 2 Double Beds"],
      ["Wellness", "In-villa Spa"],
      ["Occupancy", "Up to 4 Guests"],
    ],
    amenities: [
      "In-villa Spa Treatment",
      "Private Yoga Deck",
      "Private Sauna",
      "Meditation Space",
      "Herbal Steam Shower",
      "Canal Terrace",
      "Wellness Minibar",
      "Daily Breakfast",
      "Free Wi-Fi",
      "Butler Service",
    ],
  },
];

const filterLinks = [
  { href: "#signature-queen", label: "Signature Garden Queen" },
  { href: "#signature-king", label: "Signature King" },
  { href: "#signature-queen-steam", label: "Sig. Queen Steam" },
  { href: "#deluxe-king", label: "Deluxe King / Twin" },
  { href: "#deluxe-suite", label: "Deluxe Suite" },
  { href: "#pool-suite", label: "King Pool Suite" },
  { href: "#canal-villa", label: "King WhirlPool Villa" },
  { href: "#wellness-villa", label: "Wellness Villa" },
] as const;

function RoomCtas({ light }: { light?: boolean }) {
  return (
    <div className="room-ctas">
      <a href={BOOK_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
        Book Now
      </a>
      <a
        href="mailto:reception@w1bangkoknoi.com"
        className="btn-outline-dark"
        style={light ? { color: "var(--white)", borderColor: "rgba(255,255,255,0.4)" } : undefined}
      >
        Enquire
      </a>
    </div>
  );
}

export default function AccommodationsPage() {
  return (
    <>
      <Nav />
      <section className="page-hero page-hero--centered">
        <div className="page-hero-inner">
          <div className="eyebrow">W1@Bangkoknoi Hotel &amp; Wellness Resort</div>
          <h1>
            Our <em>Accommodations</em>
          </h1>
          <div className="gold-divider" />
          <p>
            Eight distinct sanctuaries along the Bangkok Noi Canal — from intimate Signature rooms to private canal
            villas and wellness retreats, each crafted for those who appreciate the extraordinary.
          </p>
        </div>
      </section>

      <RoomFilter links={filterLinks} />

      {rooms.map((room) => (
        <section key={room.id} id={room.id} className={`room-section${room.reverse ? " reverse" : ""}`}>
          <RoomGallery images={room.images} alt={room.alt} />
          <div className="room-content" style={room.cream ? { background: "var(--cream)" } : undefined}>
            <div className="room-number">{room.tag}</div>
            <h2 className="room-name">{room.title}</h2>
            <p className="room-tagline">{room.tagline}</p>
            <div className="room-divider" />
            <p className="room-desc">{room.desc}</p>
            <div className="room-specs">
              {room.specs.map(([label, value]) => (
                <div className="room-spec" key={label}>
                  <div className="room-spec-label">{label}</div>
                  <div className="room-spec-value">{value}</div>
                </div>
              ))}
            </div>
            <div className="room-amenities">
              {room.amenities.map((a) => (
                <div className="amenity" key={a}>
                  {a}
                </div>
              ))}
            </div>
            <RoomCtas />
            {room.footnote ? <p className="room-footnote">{room.footnote}</p> : null}
          </div>
        </section>
      ))}

      {villas.map((villa) => (
        <section key={villa.id} id={villa.id} className={`villa-section${villa.right ? " right" : ""}`}>
          <RoomGallery images={villa.images} alt={villa.alt} variant="villa" />
          <div className="villa-overlay" />
          <div className="villa-content">
            <div className="villa-number">{villa.tag}</div>
            <h2 className="villa-name">{villa.title}</h2>
            <p className="villa-tagline">{villa.tagline}</p>
            <div className="villa-divider" />
            <p className="villa-desc">{villa.desc}</p>
            <div className="villa-specs">
              {villa.specs.map(([label, value]) => (
                <div className="room-spec" key={label}>
                  <div className="villa-spec-label">{label}</div>
                  <div className="villa-spec-value">{value}</div>
                </div>
              ))}
            </div>
            <div className="villa-amenities">
              {villa.amenities.map((a) => (
                <div className="villa-amenity" key={a}>
                  {a}
                </div>
              ))}
            </div>
            <RoomCtas light />
          </div>
        </section>
      ))}

      <section className="wellness-core-strip">
        <div className="wellness-core-inner">
          <div className="wellness-core-top">
            <div className="section-tag-wc">Wellness at the Core</div>
            <h2>
              W1@Bangkoknoi Hotel &amp; <em>Wellness Resort</em>
            </h2>
            <p>
              Wellness is not an offering at W1 — it is our identity. Every experience is thoughtfully designed to
              restore your body, rebalance your mind, and reawaken your spirit on the banks of the timeless Bangkok Noi
              Canal.
            </p>
          </div>
          <div className="wellness-pillars-row wc-pillars">
            <div className="wc-pillar">
              <div className="wc-pillar-icon">○</div>
              <div className="wc-pillar-name">
                <em>Restore</em> Body
              </div>
              <div className="wc-pillar-desc">
                Thai massage, herbal compress rituals, and hydrotherapy to release tension and renew vitality.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">◎</div>
              <div className="wc-pillar-name">
                <em>Rebalance</em> Mind
              </div>
              <div className="wc-pillar-desc">
                Canal-side meditation, breathwork, and mindfulness practices for lasting inner clarity.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">●</div>
              <div className="wc-pillar-name">
                <em>Nourish</em> From Within
              </div>
              <div className="wc-pillar-desc">
                Wellness cuisine crafted from organic Thai ingredients to support your transformation.
              </div>
            </div>
            <div className="wc-pillar">
              <div className="wc-pillar-icon">☀</div>
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
