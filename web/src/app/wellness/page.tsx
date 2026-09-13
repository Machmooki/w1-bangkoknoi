import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { HeroVideo } from "@/components/HeroVideo";
import { GalleryGrid } from "@/components/GalleryGrid";

const spaImages = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/images/wellness/spa-gallery/spa-${n}.jpg`, alt: `W1 Luxury Spa ${n}` };
});

const pillars = [
  {
    thai: "สายน้ำ · Sai Nam",
    title: (
      <>
        Canal <em>Serenity</em>
      </>
    ),
    desc: "The canal is an active part of the healing, not just a view. We invite guests to slow down and align their breathing with the water, finding balance and tranquillity in this protected pocket of nature.",
  },
  {
    thai: "วิถีโบราณ · Wi-Thee Boran",
    title: (
      <>
        Thai Roots, <em>Modern Rhythm</em>
      </>
    ),
    desc: "Wellness here is not a foreign import. Through our certified therapists, guests experience traditional Thai modalities — herbal compress massage, reflexology, and Nuad Boran — adapted for modern urban tension, screen strain, and burnout.",
  },
  {
    thai: "สมุนไพร · Samun-Prai",
    title: (
      <>
        Vitality <em>Nourishment</em>
      </>
    ),
    desc: "Every meal and beverage celebrates Thai botanicals and herbal wisdom — from a cooling butterfly pea welcome tea to a plant-forward dinner, prepared with nutritional transparency and mindful intention. Food as a joyful, vital connection to place.",
  },
  {
    thai: "ใส่ใจ · Sai Jai",
    title: (
      <>
        Personalised <em>Progress</em>
      </>
    ),
    desc: "No two guests are the same. From the pre-arrival consultation onward, our Wellness Navigators listen, adapt and guide each itinerary to your own goals — deep sleep, renewed energy, or a simple mental reset.",
  },
  {
    thai: "เกื้อกูล · Kuea Koon",
    title: (
      <>
        Community <em>Connection</em>
      </>
    ),
    desc: "Wellbeing is sustained through shared experience. W1 nurtures a warm, supportive environment — for the neighbourhood as much as the traveller, built on empathy and shared flourishing along the canal.",
  },
  {
    thai: "ล้ำค่า · Lam Kha",
    title: (
      <>
        Accessible <em>Luxury</em>
      </>
    ),
    desc: "Premium wellness should feel effortless. By removing the friction of long travel, complex booking and clinical intimidation, we offer seamless, restorative luxury just minutes from the heart of Bangkok.",
  },
];

const includedTreatments = [
  {
    duration: "60 · 90 min · Included",
    name: (
      <>
        Foot Massage — <em>Reflexology</em>
      </>
    ),
    desc: "Grounding and deeply soothing reflexology that works through the body's energy pathways via the feet — wonderful for circulation, tired legs, and a profound sense of restoration. A perfect arrival or evening ritual.",
  },
  {
    duration: "60 · 90 min — Included",
    name: (
      <>
        Aromatherapy <em>Oil Massage</em>
      </>
    ),
    desc: "Flowing full-body massage with warm, botanically blended oils chosen for your goal — stress relief, calm, and more restful sleep. Jasmine, lemongrass, and kaffir lime melt tension while nourishing the skin.",
  },
  {
    duration: "60 · 90 min — Included",
    name: (
      <>
        Thai Massage <em>for Health</em>
      </>
    ),
    desc: "Dynamic Nuad Boran techniques — acupressure, assisted stretches, and rhythmic compression along the body's Sen energy lines — to release tension, restore flexibility, and renew energy flow.",
  },
];

const addonTreatments = [
  {
    duration: "60 · 90 min · Add-on",
    name: (
      <>
        Thai Herbal Compress — <em>Luk Pra Kob</em>
      </>
    ),
    desc: "Steamed muslin pouches filled with lemongrass, turmeric, ginger, and camphor — gently pressed along the body for warmth, muscle ease, and improved circulation. A deeply soothing ritual from our botanical garden.",
  },
  {
    duration: "60 min · Add-on",
    name: (
      <>
        Office-Syndrome <em>Relief</em>
      </>
    ),
    desc: "Targeted release for neck, shoulder, and upper back tension accumulated from screens and desk work. Our therapists apply focused pressure and stretching techniques to ease modern urban strain.",
  },
  {
    duration: "60 · 90 min · Add-on",
    name: (
      <>
        Facial Ritual — <em>Radiant Glow</em>
      </>
    ),
    desc: "A gentle, botanical-led facial ritual using Thai herbal infusions, enzyme exfoliation, and cooling lotus extracts to refresh the complexion and restore natural luminosity. No clinical claims — simply a beautiful glow.",
  },
];

const facialTreatments = [
  {
    duration: "60 · 90 min",
    name: (
      <>
        Radiant Lotus <em>Facial</em>
      </>
    ),
    desc: "Multi-step ritual with gentle enzyme exfoliation, Thai herbal infusion mask, gold-infused facial massage, and silk-protein hydration for luminous, glowing skin.",
  },
  {
    duration: "75 min",
    name: (
      <>
        Age-Defying <em>Royal Pearl Treatment</em>
      </>
    ),
    desc: "Brightening and firming facial using pearl extracts, vitamin C, and marine botanicals to reduce fine lines and restore the radiant vitality of youthful skin.",
  },
];

const ritualSteps = [
  {
    num: "01",
    phase: "Before You Arrive",
    title: "The W1 Compass",
    desc: "Your personal Wellness Navigator reaches out via LINE to learn your goals, preferences, and rhythm — so your stay arrives already shaped around you.",
  },
  {
    num: "02",
    phase: "On Arrival",
    title: "Welcome Ritual & Consultation",
    desc: "Greeted by name with a welcome ritual drink — butterfly pea tea or coconut flower elixir — followed by a relaxed 15-minute consultation to confirm your journey.",
  },
  {
    num: "03",
    phase: "During Your Stay",
    title: "Your Wellness Journey Card",
    desc: "A beautiful, personalised card outlining your treatments, dining selections, and pace — your guide for every moment. Your Navigator is one message away throughout.",
  },
  {
    num: "04",
    phase: "After You Leave",
    title: "Post-Stay Wellness Reflection",
    desc: "Within 24 hours, your Navigator sends a personal reflection — your wellness notes, gentle rituals to carry the calm home, and a special returning guest offer.",
  },
];

const elixirColumns: {
  title: string;
  items: [ReactNode, string][];
}[] = [
  {
    title: "Welcome Elixirs",
    items: [
      ["Butterfly Pea Welcome Tea", "Butterfly pea, lemongrass, honey · antioxidant and calming · our signature welcome ritual"],
      ["Coconut Flower Welcome", "Coconut flower nectar, lime · hydrating and gently energising · vegan & gluten-free"],
      ["Lemongrass Tom-Yam Spritz", "Lemongrass, kaffir lime, chilli · digestive and refreshing · for the adventurous palate"],
    ],
  },
  {
    title: "Morning Elixirs",
    items: [
      [
        <>
          Kaleidoscope Green Juice <em style={{ fontStyle: "italic", fontSize: 11 }}>(Signature)</em>
        </>,
        "Kale, tropical fruit, dates · immunity, energising, antioxidant · our signature morning elixir",
      ],
      ["Turmeric-Ginger Wellness Shot", "Turmeric, ginger, black pepper, lime · anti-inflammatory and grounding · taken before breakfast"],
      ["Moringa Green Juice", "Moringa, green apple, lime · immunity and energising · a bright, nourishing start"],
    ],
  },
  {
    title: "Wellness Cuisine",
    items: [
      ["Antioxidant Smoothie Bowl", "Banana, butterfly pea, granola, coconut, chia · antioxidant and energising"],
      ["Savoury Rice Congee", "Brown rice, ginger, scallion, soft egg · light, soothing, and wonderfully digestive"],
      ["Tom Kha Goong", "Shrimp, galangal, coconut milk, lemongrass · soothing, nourishing, and deeply restorative"],
    ],
  },
];

const comingSoonProgrammes = [
  {
    nights: "3",
    name: (
      <>
        <em>Restore</em> &amp; Renew
      </>
    ),
    desc: "Your Calm by the Canal, deepened — daily treatments, private yoga, botanical meals, and guided canal meditation. Your Navigator shapes every detail around your rhythm.",
  },
  {
    nights: "5",
    name: (
      <>
        <em>Vitality</em> &amp; Renewal
      </>
    ),
    desc: "An immersive vitality journey — herbal compress treatments, restorative steam rituals, botanical nutrition programmes, and boat-based wellness excursions along the canal.",
  },
  {
    nights: "7",
    name: (
      <>
        <em>Transformative</em> Balance
      </>
    ),
    desc: "Our most immersive offering — a complete life recalibration. Daily treatments, personalised nutrition, ancient and modern therapies, and bespoke wellness experiences.",
  },
];

const additionalExperiences = [
  [
    "Private Boat Arrival with Welcome Herbal Foot Ritual",
    "Arrive by private boat along the Bangkok Noi Canal and begin your wellness journey with a traditional herbal foot ritual on the water's edge.",
  ],
  [
    "Canal-Side Meditation at Dawn",
    "As the canal awakens, guided meditation sessions on the terrace offer profound stillness and a deep connection to Thailand's waterway culture.",
  ],
  [
    "Chef's Wellness Tasting Menus",
    "In partnership with Thai Boran, our culinary team creates personalised nutritional menus that complement your wellness programme and support long-term vitality.",
  ],
  [
    "Herbal Garden Tour & Blending Workshop",
    "Explore our canal-side herbal garden with our wellness botanist and blend your own personalised aromatic oils and herbal teas to take home.",
  ],
];

const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function WellnessPage() {
  return (
    <>
      <Nav transparentAtTop />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <HeroVideo src="/videos/w1-wellness.mp4" poster="/images/wellness/philosophy.jpg" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">W1 Bangkoknoi · Urban Wellness Retreat</div>
          <h1 className="hero-h1">
            Your Calm
            <br />
            <em>by the Canal</em>
          </h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            True restoration does not require leaving the city —
            <br />
            it means finding a different rhythm within it.
          </p>
          <div className="hero-ctas">
            <a href="#ritual" className="btn-gold">
              Discover the W1 Ritual
            </a>
            <a href="#treatments" className="btn-outline-white">
              Explore Treatments
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
        <div className="philosophy-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wellness/philosophy.jpg" alt="W1 Bangkok Noi – Urban Wellness Retreat on the Canal" />
        </div>
        <div className="philosophy-content">
          <div className="section-tag">A Return to Rhythm</div>
          <h2 className="section-h2">
            Bangkok&apos;s First <em>Urban Wellness Retreat</em>
          </h2>
          <p>
            Bangkok moves at a relentless pace, and that constant motion leaves people depleted and searching for
            stillness. The usual answer is to escape the city entirely. W1 offers a more honest idea: true restoration
            does not require leaving the city — it means finding a different rhythm within it.
          </p>
          <div className="gold-rule" />
          <p>
            Set on the historic Bangkok Noi canal, we are an urban wellness sanctuary grounded in reality — built not on
            clinical machinery or imported trends, but on the assets we already hold: the flow of the canal, the heritage
            of Thai healing, the botanicals of our local markets, and the genuine warmth of Thai hospitality.
          </p>
          <p>
            Every guest experience at W1 is a step in that repositioning. What matters most is that you feel the intention
            behind it — warmth, care, and a genuine sense of calm.
          </p>
        </div>
      </section>

      {/* ─── THE W1 RITUAL ─── */}
      <section id="ritual" className="ritual-section">
        <div className="ritual-inner">
          <div className="ritual-header">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              The W1 Ritual
            </div>
            <h2>
              Your Calm by the Canal
              <br />
              <em>สายน้ำสิริชีวา</em>
            </h2>
            <div className="gold-rule" style={{ margin: "24px auto" }} />
            <p>
              &quot;Your Calm by the Canal&quot; is our signature W1 Ritual — the first expression of the retreat we are
              becoming. A curated two-night experience where your treatments, dining, and pace along the canal are shaped
              entirely around you, before you even arrive.
            </p>
          </div>
          <div className="ritual-grid">
            {ritualSteps.map((step) => (
              <div className="ritual-card" key={step.num}>
                <div className="ritual-num">{step.num}</div>
                <div className="ritual-phase">{step.phase}</div>
                <div className="ritual-title">{step.title}</div>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/book-treatment" className="btn-gold" style={{ display: "inline-block", marginRight: 12 }}>
              Book Your Calm by the Canal
            </Link>
            <a href="#treatments" className="btn-outline-dark" style={{ display: "inline-block" }}>
              Explore Treatments
            </a>
          </div>
        </div>
      </section>

      {/* ─── SIX PILLARS ─── */}
      <section className="facilities" id="pillars">
        <div className="facilities-header">
          <div className="section-tag">Our Operational Blueprint</div>
          <h2>
            The Six <em>Wellness Pillars</em>
          </h2>
        </div>
        <div className="facilities-grid facilities-grid--pillars">
          {pillars.map((p) => (
            <div className="facility-card" key={p.thai}>
              <div className="facility-thai">{p.thai}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TREATMENTS ─── */}
      <section className="treatments" id="treatments">
        <div className="treatments-inner">
          <div className="treatments-header">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Signature Treatments
            </div>
            <h2>
              Ancient Wisdom. <em>Modern Mastery.</em>
            </h2>
          </div>

          <div className="treatment-category">
            <div className="treatment-category-title">Included in Your W1 Ritual — Three Sessions</div>
            <div className="treatment-note">
              Every W1 Ritual guest receives <strong>three treatment sessions included</strong>: one 90-minute session
              and two 60-minute sessions, any day of your stay. Spa open daily 9:00 AM – 9:00 PM.
            </div>
            <div className="treatment-grid">
              {includedTreatments.map((t, i) => (
                <div className="treatment-card" key={`inc-${i}`}>
                  <div className="treatment-duration">{t.duration}</div>
                  <div className="treatment-name">{t.name}</div>
                  <div className="treatment-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="image-break">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/wellness/compress.jpg" alt="Herbal Compress Ritual – Palace Wellness" />
            <div className="image-break-overlay">
              <div className="image-break-text">
                <h3>&quot;Where ancient wisdom meets modern mastery.&quot;</h3>
                <p>Every treatment at Palace Wellness is a journey — not simply a service.</p>
              </div>
            </div>
          </div>

          <div className="treatment-category" style={{ marginTop: 56 }}>
            <div className="treatment-category-title">Add-On Treatments — 10% Off for W1 Ritual Guests</div>
            <div className="treatment-grid">
              {addonTreatments.map((t, i) => (
                <div className="treatment-card" key={`addon-${i}`}>
                  <div className="treatment-duration">{t.duration}</div>
                  <div className="treatment-name">{t.name}</div>
                  <div className="treatment-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="treatment-category">
            <div className="treatment-category-title">Facial &amp; Beauty Rituals</div>
            <div className="treatment-grid">
              {facialTreatments.map((t, i) => (
                <div className="treatment-card" key={`facial-${i}`}>
                  <div className="treatment-duration">{t.duration}</div>
                  <div className="treatment-name">{t.name}</div>
                  <div className="treatment-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <Link href="/book-treatment" className="btn-gold">
              Book a Treatment
            </Link>
          </div>
        </div>
      </section>

      {/* ─── YOGA SPLIT ─── */}
      <section className="split">
        <div className="split-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wellness/yoga.jpg" alt="Canal-Side Yoga at Palace Wellness" />
        </div>
        <div className="split-content dark">
          <div className="section-tag">Yoga &amp; Movement</div>
          <h2>
            Canal-Side <em>Yoga &amp; Meditation</em>
          </h2>
          <p>
            Each room comes with its own yoga mat, and guests are warmly welcome to practice at any time — in the privacy
            of their room, on their terrace, or anywhere in our open canal-side spaces.
          </p>
          <p>
            A guided group yoga session is hosted on the canal terrace every <strong>Sunday morning</strong>, open to all
            guests at no extra charge. Sessions are led by a resident instructor and suitable for all levels.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link href="/book-treatment" className="btn-gold">
              Reserve a Session
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STEAM SPLIT ─── */}
      <section className="split">
        <div className="split-content light">
          <div className="section-tag">Detox &amp; Restoration</div>
          <h2>
            Herbal Steam &amp; <em>Hydrotherapy</em>
          </h2>
          <p>
            Purify and refresh in our traditional Thai herbal steam sanctuary — a deeply rooted practice using medicinal
            botanicals sourced from our canal-side gardens. Steam combines with aromatic herbs to open the pores, ease
            tension, and stimulate the lymphatic system.
          </p>
          <p>
            Complement with a soak in our mineral hydrotherapy pool, carefully designed for thermotherapy and deep muscle
            recovery.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link href="/book-treatment" className="btn-gold">
              Enquire About Treatments
            </Link>
          </div>
        </div>
        <div className="split-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wellness/steam.jpg" alt="Thai Herbal Steam at Palace Wellness" />
        </div>
      </section>

      {/* ─── VITALITY NOURISHMENT ─── */}
      <section className="vitality-section">
        <div className="vitality-inner">
          <div className="vitality-header">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              สมุนไพร · Samun-Prai
            </div>
            <h2>
              Vitality <em>Nourishment</em>
            </h2>
            <p>
              Every meal and beverage celebrates Thai botanicals and herbal wisdom. Food at W1 is a joyful, vital
              connection to place — prepared with nutritional transparency and mindful intention.
            </p>
          </div>
          <div className="elixirs-grid">
            {elixirColumns.map((col) => (
              <div className="elixir-col" key={col.title}>
                <div className="elixir-col-title">{col.title}</div>
                {col.items.map(([name, desc], i) => (
                  <div className={`elixir-item${i === col.items.length - 1 ? " elixir-item--last" : ""}`} key={i}>
                    <div className="elixir-name">{name}</div>
                    <div className="elixir-desc">{desc}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="vitality-disclaimer">
            Our menus and elixirs celebrate traditional Thai botanicals and are not intended to diagnose, treat, or cure
            any medical condition. All dietary requirements — vegan, gluten-free, dairy-free — are carefully
            accommodated.
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMES ─── */}
      <section className="programmes">
        <div className="programmes-inner">
          <div className="programmes-header">
            <div className="section-tag">Immersive W1 Rituals</div>
            <h2>Multi-Day Wellness Programmes</h2>
            <p>
              Each programme is curated around your unique goals by your personal Wellness Navigator — daily treatments,
              private yoga, botanical nourishment, and canal-based wellness experiences designed to create lasting change.
            </p>
          </div>

          <div className="featured-package" id="packages">
            <div className="featured-badge">✦ &nbsp;Featured Package &nbsp;·&nbsp; Now Available</div>
            <div className="featured-layout">
              <div>
                <div className="fp-nights">
                  2 <span>Nights</span>
                </div>
                <div className="fp-name">
                  Your Calm <em>by the Canal</em>
                </div>
                <div className="fp-sub">Nourish &amp; Reawaken · Two-Night Urban Wellness Immersion</div>
                <div className="fp-desc">
                  A meticulously curated two-night immersion designed to wash away fatigue and restore inner balance. Your
                  journey is tailored through our pre-arrival consultation, weaving together ancient Thai healing wisdom,
                  vibrant botanical nourishment, and gentle canal-side serenity.
                </div>
                <ul className="fp-includes">
                  <li>Two nights in Deluxe or Luxury accommodation</li>
                  <li>Full-board Vitality Nourishment (Samun-Prai) dining</li>
                  <li>Three signature RLAX treatments — Thai Roots &amp; Modern Rhythm / Wi-Thee Boran</li>
                  <li>Personalised Progress (Sai Jai) tracking throughout your stay</li>
                  <li>W1 Compass pre-arrival wellness consultation</li>
                  <li>Daily botanical elixirs &amp; Canal Serenity (Sai Nam) activities</li>
                </ul>
              </div>
              <div>
                <div className="fp-pricing">
                  <div className="fp-price-cell">
                    <div className="fp-price-type">Deluxe · Individual</div>
                    <div className="fp-price-amount">฿7,999</div>
                    <div className="fp-price-note">per person</div>
                  </div>
                  <div className="fp-price-cell">
                    <div className="fp-price-type">Deluxe · Couple</div>
                    <div className="fp-price-amount">฿10,999</div>
                    <div className="fp-price-note">total sharing</div>
                  </div>
                  <div className="fp-price-cell">
                    <div className="fp-price-type">Luxury · Individual</div>
                    <div className="fp-price-amount">฿9,999</div>
                    <div className="fp-price-note">per person</div>
                  </div>
                  <div className="fp-price-cell">
                    <div className="fp-price-type">Luxury · Couple</div>
                    <div className="fp-price-amount">฿12,999</div>
                    <div className="fp-price-note">total sharing</div>
                  </div>
                </div>
                <div className="fp-actions">
                  <a
                    href="/packages/your-calm-package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-view"
                  >
                    View Package Brochure
                  </a>
                  <Link href="/book-treatment" className="btn-outline-gold-sm">
                    Book This Package
                  </Link>
                </div>
                <div className="fp-downloads">
                  <div className="fp-downloads-label" style={{ width: "100%" }}>
                    Download Documents
                  </div>
                  <a href="/packages/your-calm-package.pdf" download className="btn-download">
                    <DownloadIcon />
                    Package Details
                  </a>
                  <a href="/packages/your-calm-factsheet.pdf" download className="btn-download">
                    <DownloadIcon />
                    Fact Sheet
                  </a>
                </div>
                <p className="fp-terms">
                  Prices subject to availability. Includes pre-arrival W1 Compass consultation. Treatments available for
                  hotel guests. Subject to terms.
                </p>
              </div>
            </div>
          </div>

          <hr className="fp-divider" />
          <p className="programmes-coming-label">More Programmes · Coming Soon</p>
          <div className="programmes-grid">
            {comingSoonProgrammes.map((prog) => (
              <div className="programme-card" key={prog.nights}>
                <div className="programme-nights">
                  {prog.nights}
                  <span> Nights</span>
                </div>
                <div className="programme-name">{prog.name}</div>
                <div className="programme-desc">{prog.desc}</div>
                <a href="#book" className="btn-outline-gold">
                  Enquire
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/book-treatment" className="btn-gold">
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL EXPERIENCES ─── */}
      <section className="wellness-experiences">
        <div className="experiences-inner">
          <div className="experiences-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/wellness/canal-wellness.jpg" alt="Canal Wellness Experiences at W1@Bangkoknoi" />
          </div>
          <div className="experiences-content">
            <div className="section-tag">Beyond the Treatment Room</div>
            <h2>
              Additional <em>Wellness Experiences</em>
            </h2>
            {additionalExperiences.map(([title, desc]) => (
              <div className="exp-item" key={title}>
                <div className="exp-item-title">{title}</div>
                <div className="exp-item-desc">{desc}</div>
              </div>
            ))}
            <div style={{ marginTop: 28 }}>
              <Link href="/book-treatment" className="btn-gold" style={{ display: "inline-block" }}>
                Enquire About Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRACTICAL + CTA ─── */}
      <section className="practical" id="book">
        <div className="practical-inner">
          <div>
            <h2>Your Wellness Journey Awaits</h2>
            <ul className="info-list">
              <li>Open daily 9:00 AM – 9:00 PM</li>
              <li>Treatments available for hotel guests and day visitors by reservation</li>
              <li>Private boat transfers from central Bangkok available upon request</li>
              <li>All therapists are highly trained in traditional Thai healing arts</li>
              <li>Private wellness programmes designed for individual goals</li>
              <li>Children&apos;s and family wellness options available</li>
            </ul>
          </div>
          <div className="cta-panel">
            <h2>Begin Your Journey</h2>
            <div className="cta-buttons">
              <Link href="/book-treatment" className="btn-gold-full">
                Book Your Wellness Journey
              </Link>
              <a href="mailto:hm@w1bangkoknoi.com" className="btn-outline-dark">
                Enquire About In-Villa Treatments
              </a>
              <a href="#packages" className="btn-outline-dark">
                View Multi-Day Programmes
              </a>
              <a href="mailto:hm@w1bangkoknoi.com" className="btn-outline-dark">
                Contact Palace Wellness
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPA GALLERY ─── */}
      <section className="spa-gallery-section">
        <div className="spa-gallery-header">
          <div className="eyebrow-tag">W1 Luxury Spa</div>
          <h2>
            A Glimpse Into <em>Our Sanctuary</em>
          </h2>
          <div className="gold-rule" />
        </div>
        <GalleryGrid images={spaImages} className="spa-gallery-grid" />
      </section>
    </>
  );
}
