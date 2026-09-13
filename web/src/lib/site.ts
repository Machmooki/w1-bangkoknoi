/** Shared site constants */
export const BOOK_DIRECT_URL =
  "https://book-directonline.com/properties/W1BangkoknoiDirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=THB&trackPage=yes";

export const SITE = {
  name: "W1@Bangkoknoi",
  tagline: "Hotel & Wellness Resort · Nonthaburi",
  phone: "+66 81 382 9888",
  phoneDirect: "+66 2 195 1111",
  email: "reception@w1bangkoknoi.com",
  emailHm: "hm@w1bangkoknoi.com",
  emailSales: "sales.marketing@w1bangkoknoi.com",
  whatsapp: "66813829888",
  address: "44 Moo 7 Soi Banglen 21/2, Nonthaburi 11140",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=W1@Bangkoknoi+Hotel",
};

export const NAV_LINKS = [
  { href: "/accommodations", label: "Accommodations" },
  { href: "/dining", label: "Dining" },
  { href: "/wellness", label: "Wellness" },
  { href: "/weddings", label: "Weddings" },
  { href: "/events", label: "Events" },
  { href: "/experiences", label: "Experiences" },
  { href: "/contact", label: "Contact" },
] as const;

export type Locale = "en" | "th" | "zh";
export const LOCALES: Locale[] = ["en", "th", "zh"];
