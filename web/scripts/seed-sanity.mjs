/**
 * Seed Sanity with baseline site content (run after creating a Sanity project).
 *   npm run seed:sanity
 */
import { createClient } from "@sanity/client";

const BOOK_DIRECT_URL =
  "https://book-directonline.com/properties/W1BangkoknoiDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=THB&trackPage=yes";

const SITE = {
  name: "W1@Bangkoknoi",
  tagline: "Hotel & Wellness Resort · Nonthaburi",
  phone: "+66 81 382 9888",
  phoneDirect: "+66 2 195 1111",
  email: "reception@w1bangkoknoi.com",
  emailHm: "hm@w1bangkoknoi.com",
  emailSales: "sales.marketing@w1bangkoknoi.com",
  whatsapp: "66813829888",
  address: "44 Moo 7 Soi Banglen 21/2, Nonthaburi 11140",
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const rooms = [
  { name: "Signature Garden Queen", slug: "signature-queen", order: 1, tagline: "Garden sanctuary" },
  { name: "Signature King with Whirlpool", slug: "signature-king", order: 2, tagline: "Private whirlpool" },
  { name: "Signature Queen with Steam/Sauna", slug: "signature-queen-steam", order: 3, tagline: "Steam & sauna" },
  { name: "Deluxe King / Twin", slug: "deluxe-king", order: 4, tagline: "Canal view balcony" },
  { name: "Deluxe King Suite", slug: "deluxe-suite", order: 5, tagline: "Separate living" },
  { name: "King Pool Suite", slug: "pool-suite", order: 6, tagline: "Private plunge pool" },
  { name: "King WhirlPool Villa", slug: "canal-villa", order: 7, tagline: "Canal terrace" },
  { name: "Wellness Villa", slug: "wellness-villa", order: 8, tagline: "Two-bedroom spa villa" },
];

const pages = [
  { title: "Home", slug: "home", heroTitle: "Timeless. Legendary. Incomparable." },
  { title: "Dining", slug: "dining", heroTitle: "Thai Boran" },
  { title: "Wellness", slug: "wellness", heroTitle: "Your Calm by the Canal" },
  { title: "Weddings", slug: "weddings", heroTitle: "A Masterpiece of Romance" },
  { title: "Events", slug: "events", heroTitle: "Events at W1@Bangkoknoi" },
  { title: "Experiences", slug: "experiences", heroTitle: "Canal Experiences" },
  { title: "Contact", slug: "contact", heroTitle: "Get in Touch" },
];

async function main() {
  const tx = client.transaction();

  tx.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    title: SITE.name,
    tagline: SITE.tagline,
    phone: SITE.phone,
    phoneDirect: SITE.phoneDirect,
    email: SITE.email,
    emailHm: SITE.emailHm,
    emailSales: SITE.emailSales,
    whatsapp: SITE.whatsapp,
    address: SITE.address,
    bookDirectUrl: BOOK_DIRECT_URL,
  });

  for (const r of rooms) {
    tx.createOrReplace({
      _id: `room.${r.slug}`,
      _type: "room",
      name: r.name,
      slug: { _type: "slug", current: r.slug },
      order: r.order,
      tagline: r.tagline,
      amenities: ["Air conditioning", "Wi-Fi", "Smart TV", "Safe", "Breakfast"],
      bookUrl: BOOK_DIRECT_URL,
    });
  }

  for (const p of pages) {
    tx.createOrReplace({
      _id: `page.${p.slug}`,
      _type: "page",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      heroTitle: p.heroTitle,
      seoTitle: `${p.title} | W1@Bangkoknoi`,
    });
  }

  tx.createOrReplace({
    _id: "legal.privacy",
    _type: "legalPage",
    title: "Privacy Policy",
    slug: { _type: "slug", current: "privacy" },
  });
  tx.createOrReplace({
    _id: "legal.terms",
    _type: "legalPage",
    title: "Terms of Use",
    slug: { _type: "slug", current: "terms" },
  });

  await tx.commit();
  console.log("Seeded siteSettings, rooms, pages, legal pages.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
