/**
 * Home page content config — edit this file to change copy, images and
 * rotation behaviour of every section on the home page.
 *
 * All images live in /public/images/home (add more and reference them here).
 */

/* ─────────────────────────── HERO ─────────────────────────── */

export const HERO = {
  video: "/videos/w1bangkoknoi-2026.mp4",
  poster: "/images/home/hero-poster.jpg",
  playbackRate: 0.5,
  logo: "/images/home/hero-logo.png",
  /** Tagline segments — set `gold: true` to render in gold serif. */
  tagline: [
    { text: "Timeless. ", gold: false },
    { text: "Legendary. ", gold: true },
    { text: "Incomparable.", gold: false },
  ],
  /** Small line under the tagline (Figma "Detail Addition") */
  subtitle:
    "Luxury reimagined on Bangkok's historic waterway. Private wellness villas, canal-side experiences, and refined Thai hospitality await.",
  watchLabel: "Watch Video",
  /** id of the section the arrow-down scrolls to */
  scrollTarget: "palace",
};

/* ─────────────────── A MODERN THAI PALACE ─────────────────── */

export const PALACE = {
  background: "/images/home/palace-bg.jpg",
  title: "A Modern Thai Palace",
  titleAccent: "on the Bangkok Noi Canal",
  paragraph:
    "Nestled along the tranquil Bangkok Noi Canal in Nonthaburi—just a short private boat ride from Bangkok's vibrant heart—W1@Bangkoknoi Hotel & Wellness Resort stands as Thailand's newest icon of refined luxury.",
  /** CURATED EXPERIENCES booking card (action = book now until booking system is live) */
  card: {
    heading: "CURATED EXPERIENCES",
    buttonLabel: "CHECK AVAILABILITY",
    note: "BEST RATE GUARANTEE",
  },
  exploreLabel: "Explore Accommodations",
  exploreHref: "/accommodations",
  stats: [
    { value: "29", suffix: "", label: "Canal Villas & Suites" },
    { value: "45", suffix: "min", label: "From Bangkok by Canal" },
    { value: "5", suffix: "★", label: "Luxury Standard" },
    { value: "6", suffix: "", label: "Distinct Experiences" },
  ],
  bottom: {
    heading: ["Where Timeless Elegance", "Meets Modern Comfort"],
    paragraph:
      "Inspired by the legendary palaces of old, our 29 Thai-modern canal villas and wellness suites blend contemporary elegance with authentic Thai soul. Whether you seek restorative wellness, unforgettable family moments, or exclusive events, every stay is crafted for those who appreciate the extraordinary.",
    linkLabel: "Explore Accommodations",
    linkHref: "/accommodations",
    image: "/images/home/palace-side.jpg",
  },
};

/* ─────────────────────── EXPERIENCES ──────────────────────── */

export type ExperienceSlide = {
  image: string;
  /** Title lines (each entry renders on its own line) */
  title: string[];
  description: string;
  href: string;
  cta?: string;
};

export type ExperienceCard = {
  id: string;
  /** Grid placement — boat (tall left), cultural (wide top-right), weddings / wellness (bottom-right halves) */
  area: "boat" | "cultural" | "weddings" | "wellness";
  /** Where the text block sits (also controls the scrim gradient) */
  align: "top-left" | "top-right" | "right";
  /** ms between slides for this card (rotation only starts with 2+ slides) */
  interval?: number;
  slides: ExperienceSlide[];
};

export const EXPERIENCES: ExperienceCard[] = [
  {
    id: "boat",
    area: "boat",
    align: "top-left",
    interval: 9000,
    slides: [
      {
        image: "/images/home/exp-boat.jpg",
        title: ["Private", "Boat Journeys"],
        description:
          "Glide through Bangkok Noi's timeless waterways aboard a private luxury boat.",
        href: "/experiences",
      },
      {
        image: "/images/experiences/boat-2.jpg",
        title: ["Canal", "Temple Tours"],
        description:
          "Temple tours by canal with tropical refreshments — a private butler experience on the water.",
        href: "/experiences",
      },
    ],
  },
  {
    id: "cultural",
    area: "cultural",
    align: "right",
    interval: 10500,
    slides: [
      {
        image: "/images/home/exp-cultural.jpg",
        title: ["Cultural", "Immersions"],
        description:
          "Discover authentic Thai traditions through cuisine, art, and local heritage.",
        href: "/dining",
      },
      {
        image: "/images/experiences/takbat.jpg",
        title: ["Morning", "Alms Rituals"],
        description:
          "Offer alms to monks by the canal at dawn — a serene Thai tradition kept alive.",
        href: "/experiences",
      },
    ],
  },
  {
    id: "weddings",
    area: "weddings",
    align: "top-right",
    interval: 12000,
    slides: [
      {
        image: "/images/home/exp-wedding.jpg",
        title: ["Weddings"],
        description:
          "Unforgettable ceremonies on the Bangkok Noi Canal — intimate Thai traditions, grand ballroom receptions, and bespoke celebrations.",
        href: "/weddings",
      },
    ],
  },
  {
    id: "wellness",
    area: "wellness",
    align: "top-right",
    interval: 13500,
    slides: [
      {
        image: "/images/home/exp-wellness.jpg",
        title: ["Wellness", "Rituals"],
        description:
          "Restore balance with holistic therapies inspired by timeless Thai wellness.",
        href: "/wellness",
      },
      {
        image: "/images/wellness/yoga.jpg",
        title: ["Canal-side", "Yoga"],
        description:
          "Private river yoga and meditation at sunrise — restorative stillness on the canal terrace.",
        href: "/wellness",
      },
    ],
  },
];

/* ─────────────────── WELLNESS AT THE CORE ─────────────────── */

export type WellnessChapter = {
  /** Big number in the side navigation, e.g. "01" */
  number: string;
  /** Title lines (each entry renders on its own line) */
  title: string[];
  description: string;
  image: string;
};

export const WELLNESS = {
  /** ms before auto-advancing to the next chapter (0 = no auto-advance) */
  interval: 7000,
  eyebrowPrefix: "CHAPTER",
  quote:
    '"True luxury is the gift of time — time to heal, time to breathe, time to become who you are meant to be."',
  cta: { label: "DISCOVER WELLNESS", href: "/wellness" },
  chapters: [
    {
      number: "01",
      title: ["Signature", "Experiences"],
      description:
        "Embark on a private boat journey along the historic Bangkoknoi Canal. Discover the city's hidden waterways as they were centuries ago, tailored for those who seek the extraordinary.",
      image: "/images/home/wellness-1.jpg",
    },
    {
      number: "02",
      title: ["Restore", "the Body"],
      description:
        "Ancient Thai healing arts, herbal steam rituals, and therapeutic massage — delivered in the privacy of your villa or by the water's edge.",
      image: "/images/home/wellness-2.jpg",
    },
    {
      number: "03",
      title: ["Rebalance", "the Mind"],
      description:
        "Canal-side meditation, breathwork, and mindful living practices that quiet the noise and bring you back to the present.",
      image: "/images/home/wellness-3.jpg",
    },
    {
      number: "04",
      title: ["Nourish", "From Within"],
      description:
        "Wellness cuisine crafted from organic Thai ingredients — every dish thoughtfully designed to restore balance from the inside out.",
      image: "/images/home/wellness-4.jpg",
    },
    {
      number: "05",
      title: ["Move", "With Purpose"],
      description:
        "Thai-influenced yoga, Muay Thai, aqua-fitness on the canal, and guided walks through Nonthaburi's green heart.",
      image: "/images/home/wellness-5.jpg",
    },
    {
      number: "06",
      title: ["Transform", "For Life"],
      description:
        "Multi-day retreats and personalised wellness programmes that follow you home — change that lasts long after checkout.",
      image: "/images/home/wellness-6.jpg",
    },
  ] satisfies WellnessChapter[],
};
