import Link from "next/link";
import { Nav } from "@/components/Nav";
import { HeroVideo } from "@/components/HeroVideo";
import { BOOK_DIRECT_URL, SITE } from "@/lib/site";

export default function ExperiencesPage() {
  return (
    <>
      <Nav transparentAtTop />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <HeroVideo
            src="/videos/w1-boat-trip.mp4"
            poster="/images/experiences/boat-section.jpg"
            playbackRate={1.5}
          />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">W1@Bangkoknoi Hotel &amp; Wellness Resort</div>
          <h1 className="hero-h1">
            Canal <em>Experiences</em>
          </h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            Life on the water. Culture along the banks.
            <br />
            Moments that belong only to the Bangkok Noi Canal.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#boat-trips" className="btn-gold">
              Explore Boat Trips
            </a>
            <a href="#activities" className="btn-outline-white">
              All Activities
            </a>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="intro">
        <div className="intro-text">
          <div className="section-tag">Beyond the Room</div>
          <h2>
            Every Day an <em>Adventure</em> on the Canal
          </h2>
          <p>
            W1@Bangkoknoi sits at the heart of one of Thailand&apos;s most storied waterways. We&apos;ve curated a
            collection of complimentary and exclusive experiences that invite you to explore the canal, its temples, its
            people, and its rhythms — by boat, by board, and on foot.
          </p>
          <p>
            Whether you&apos;re gliding silently through the morning mist on a paddle board, cycling through the
            canalside community, or watching monks receive alms at dawn, every experience here connects you to a Thailand
            that most visitors never reach.
          </p>
          <div className="intro-stats">
            <div>
              <div className="stat-num">
                7<span>+</span>
              </div>
              <div className="stat-label">Unique Activities</div>
            </div>
            <div>
              <div className="stat-num">3</div>
              <div className="stat-label">Private Boats</div>
            </div>
            <div>
              <div className="stat-num">
                1<span>hr</span>
              </div>
              <div className="stat-label">From Bangkok</div>
            </div>
          </div>
        </div>
        <div className="intro-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/experiences/kayak.jpg" alt="Canal Experiences at W1@Bangkoknoi" />
          <div className="intro-image-tag">Bangkok Noi Canal · Nonthaburi</div>
        </div>
      </section>

      {/* ─── BOAT TRIPS ─── */}
      <section className="boat-section" id="boat-trips">
        <div className="boat-header">
          <div className="section-tag">Exclusive Canal Journeys</div>
          <h2>
            Private <em>Boat Trips</em>
          </h2>
          <p>
            Explore a vast network of canals where thousands of people go about their daily lives — just the other side
            of the Chao Phraya River. Our dedicated Boat Butler narrates the history of both canal banks while you enjoy
            tropical mocktails, local snacks, and the unhurried rhythm of the water.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experiences/boat-section.jpg"
          alt="W1 Private Boat on Bangkok Noi Canal"
          className="boat-hero-img"
        />

        <div className="boat-butler">
          <div className="boat-butler-icon">⚓</div>
          <div>
            <h3>The Boat Butler Experience</h3>
            <p>
              Every journey includes a dedicated Boat Butler who shares the history and stories of both canal banks,
              serves chilled towels, water, tropical mocktails, and a curated snack box — ensuring your time on the water
              is as relaxing as it is enlightening. Life jackets, umbrellas, and audio equipment are provided as standard
              on all vessels.
            </p>
          </div>
        </div>

        <div className="fleet-heading">Our Fleet · W1 Vessels</div>
        <div className="boat-fleet">
          <div className="boat-card">
            <div className="boat-card-size">Private Intimate Cruise · Genesis 3</div>
            <h3>Genesis 3</h3>
            <div className="boat-card-capacity">6 Pax · Ideal for 3 to 6 guests</div>
            <ul>
              <li>Cruising range: 20 to 30 km per trip</li>
              <li>Fully equipped with amenities as detailed on our website</li>
              <li>Drinking water, cold towels &amp; hand fans</li>
              <li>Fish food for canal feeding</li>
              <li>Life jackets provided</li>
              <li>Personal service on board</li>
            </ul>
          </div>
          <div className="boat-card">
            <div className="boat-card-size">Executive Classic Cruise · Genesis 1</div>
            <h3>Genesis 1</h3>
            <div className="boat-card-capacity">10 Pax · Ideal for small groups</div>
            <ul>
              <li>Cruising range: Up to 50 km per trip</li>
              <li>Mocktails &amp; snack boxes tailored to your trip itinerary</li>
              <li>Drinking water, cold towels &amp; hand fans</li>
              <li>Fish food for canal feeding</li>
              <li>Service staff on board</li>
              <li style={{ color: "rgba(255,255,255,0.4)" }}>Please note: CCTV not available on this vessel</li>
            </ul>
          </div>
          <div className="boat-card">
            <div className="boat-card-size">Grand Celebration Cruise · Genesis 2</div>
            <h3>Genesis 2</h3>
            <div className="boat-card-capacity">35 Pax · Perfect for large gatherings &amp; events</div>
            <ul>
              <li>Cruising range: Up to 50 km per trip</li>
              <li>Fully equipped with a complete set of amenities as detailed on our website</li>
              <li>Mocktails &amp; snack boxes available</li>
              <li>Spacious covered group deck</li>
              <li>Service staff on board</li>
            </ul>
          </div>
        </div>

        <div className="trips-heading">Choose Your Journey</div>
        <div className="trip-cards-grid">
          {/* TRIP 1 · Spiritual Blessing Tour */}
          <div className="trip-card">
            <div className="trip-card-top">
              <div className="trip-duration trip-duration-special">Sacred Journey</div>
              <h3 className="trip-title">Spiritual Blessing Tour: &quot;Sai Mu&quot;</h3>
              <p className="trip-thai-sub">3-Temples Blessing &amp; Merit-Making Journey</p>
            </div>
            <div className="trip-card-body">
              <div>
                <div className="trip-route-label">About This Journey</div>
                <p className="trip-route-note">
                  A specially curated spiritual journey visiting 3 sacred &quot;Sai Mu&quot; temples — sacred fortune and
                  blessing sites — conveniently located close to the hotel. Ideal for making merit, seeking blessings, and
                  experiencing authentic Thai spiritual traditions.
                </p>
              </div>
              <div className="trip-inclusions">
                <span>✦ Drinking Water</span>
                <span>✦ Cold Towels</span>
                <span>✦ Fish Food</span>
                <span>✦ Hand Fans</span>
              </div>
            </div>
          </div>

          {/* TRIP 2 · Wat Takhian Floating Market */}
          <div className="trip-card">
            <div className="trip-card-top">
              <div className="trip-duration trip-duration-special">Sat &amp; Sun Only</div>
              <h3 className="trip-title">Wat Takhian Floating Market Cruise</h3>
              <p className="trip-thai-sub">ทริปล่องเรือตลาดน้ำวัดตะเคียน เสาร์-อาทิตย์</p>
            </div>
            <div className="trip-card-body">
              <div>
                <div className="trip-sch-label">Boat Schedule</div>
                <div className="trip-sessions">
                  <span>10:00 AM – 12:00 PM (Noon)</span>
                </div>
              </div>
              <div>
                <div className="trip-route-label">Route</div>
                <p className="trip-route-note">
                  Depart W1 → Arrive at Wat Takien: pay respects at the temple, enjoy local food, soak in the floating
                  market atmosphere → Return to W1
                </p>
              </div>
              <div className="trip-boat-row">
                <div className="trip-boat-tag">Genesis 3 &nbsp;·&nbsp; up to 6 guests</div>
                <div className="trip-price-tag">฿1,650</div>
              </div>
              <div className="trip-inclusions">
                <span>✦ Drinking Water</span>
                <span>✦ Cold Towels</span>
                <span>✦ Fish Food</span>
                <span>✦ Hand Fans</span>
              </div>
            </div>
          </div>

          {/* TRIP 3 · Northern Riverways */}
          <div className="trip-card">
            <div className="trip-card-top">
              <div className="trip-duration">Half Day</div>
              <h3 className="trip-title">Northern Riverways Half-Day Temple Tour</h3>
              <p className="trip-thai-sub">สายน้ำเหนือ · Discover 3 historic temples</p>
            </div>
            <div className="trip-card-body">
              <div>
                <div className="trip-sch-label">Boat Schedule</div>
                <div className="trip-sessions">
                  <span>10:00 AM – 02:00 PM</span>
                </div>
              </div>
              <div>
                <div className="trip-route-label">Route — 3 Temples</div>
                <p className="trip-route-note">Wat Ta-Nod · Wat Prang Luang · Wat Rat Prachong Tham</p>
              </div>
              <div className="trip-pricing-table">
                <div className="trip-pricing-row">
                  <span>Genesis 3 &nbsp;·&nbsp; up to 6 guests</span>
                  <strong>฿3,850</strong>
                </div>
                <div className="trip-pricing-row">
                  <span>Genesis 1 &nbsp;·&nbsp; up to 10 guests</span>
                  <strong>฿6,050</strong>
                </div>
                <div className="trip-pricing-row">
                  <span>Genesis 2 &nbsp;·&nbsp; up to 35 guests</span>
                  <strong>฿13,750</strong>
                </div>
              </div>
              <div className="trip-inclusions">
                <span>✦ Drinking Water</span>
                <span>✦ Cold Towels</span>
                <span>✦ Fish Food</span>
                <span>✦ Hand Fans</span>
                <span>✦ Snack Box</span>
                <span>✦ Mocktail</span>
              </div>
            </div>
          </div>

          {/* TRIP 4 · Southern Riverways */}
          <div className="trip-card">
            <div className="trip-card-top">
              <div className="trip-duration">Half Day</div>
              <h3 className="trip-title">Southern Riverways Half-Day Temple Tour</h3>
              <p className="trip-thai-sub">สายน้ำใต้ · Explore 3 iconic temples</p>
            </div>
            <div className="trip-card-body">
              <div>
                <div className="trip-sch-label">Boat Schedule</div>
                <div className="trip-sessions">
                  <span>10:00 AM – 02:00 PM</span>
                </div>
              </div>
              <div>
                <div className="trip-route-label">Route — 3 Temples</div>
                <p className="trip-route-note">Wat Chaiyaphruek · Wat Cha-lo · Wat Bang Oi Chang</p>
              </div>
              <div className="trip-pricing-table">
                <div className="trip-pricing-row">
                  <span>Genesis 3 &nbsp;·&nbsp; up to 6 guests</span>
                  <strong>฿3,850</strong>
                </div>
                <div className="trip-pricing-row">
                  <span>Genesis 1 &nbsp;·&nbsp; up to 10 guests</span>
                  <strong>฿6,050</strong>
                </div>
                <div className="trip-pricing-row">
                  <span>Genesis 2 &nbsp;·&nbsp; up to 35 guests</span>
                  <strong>฿13,750</strong>
                </div>
              </div>
              <div className="trip-inclusions">
                <span>✦ Drinking Water</span>
                <span>✦ Cold Towels</span>
                <span>✦ Fish Food</span>
                <span>✦ Hand Fans</span>
                <span>✦ Snack Box</span>
                <span>✦ Mocktail</span>
              </div>
            </div>
          </div>

          {/* TRIP 5 · Heritage */}
          <div className="trip-card trip-card-fullwidth">
            <div className="trip-card-top">
              <div className="trip-duration">1 Hour</div>
              <h3 className="trip-title">Heritage: Wat Rat Prachong Tham</h3>
              <p className="trip-thai-sub">ทริปล่องเรือไหว้พระ 1 วัด · A dedicated peaceful morning visit</p>
            </div>
            <div
              className="trip-card-body"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}
            >
              <div>
                <div className="trip-sch-label">Boat Schedule</div>
                <div className="trip-sessions">
                  <span>10:00 – 11:00 AM</span>
                </div>
                <div className="trip-route-label" style={{ marginTop: 16 }}>
                  About This Journey
                </div>
                <p className="trip-route-note">
                  A dedicated, peaceful morning visit to the magnificent and highly revered Wat Rat Prachong Tham — one of
                  the most sacred temples along the northern canal.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="trip-inclusions">
                  <span>✦ Drinking Water</span>
                  <span>✦ Cold Towels</span>
                  <span>✦ Fish Food</span>
                  <span>✦ Hand Fans</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boat-cta">
          <a href={`mailto:${SITE.email}`} className="btn-gold">
            Enquire &amp; Book a Boat Journey
          </a>
        </div>
      </section>

      {/* ─── PADDLE BOARD & KAYAK ─── */}
      <section className="water-split">
        <div className="water-split-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/experiences/paddleboard.jpg" alt="Paddle Board on Bangkok Noi Canal" />
        </div>
        <div className="water-split-content">
          <div className="section-tag">On the Water · Complimentary</div>
          <h2>
            Paddle Board <em>&amp; Kayak</em>
          </h2>
          <p>
            The Bangkok Noi Canal is glassy at dawn. Borrow a stand-up paddle board or kayak from the hotel jetty and
            explore the waterway at your own pace — past canal-side temples, local homes, and the lush mangrove banks that
            frame the resort.
          </p>
          <p>
            Both activities are complimentary for hotel guests and available daily from 7:00 AM. Life jackets provided. No
            experience required.
          </p>
          <div className="water-options">
            <div className="water-opt">Stand-Up Paddle Board</div>
            <div className="water-opt">Single &amp; Double Kayak</div>
          </div>
          <div style={{ fontSize: 10, color: "var(--charcoal-light)", letterSpacing: "0.1em" }}>
            Daily · 7:00 AM – 6:00 PM · Complimentary for Hotel Guests
          </div>
        </div>
      </section>

      {/* ─── ACTIVITIES GRID ─── */}
      <section className="activities" id="activities">
        <div className="activities-header">
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Resort Activities · Complimentary
          </div>
          <h2>
            More Ways to <em>Explore</em>
          </h2>
          <p>
            All resort activities are complimentary for hotel guests. Simply ask at reception to arrange equipment or join
            a session.
          </p>
        </div>

        <div className="act-grid">
          <div className="act-card">
            <div className="act-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/experiences/bikes.jpg"
                alt="Bicycle Hire at W1@Bangkoknoi"
                style={{ objectPosition: "center bottom" }}
              />
              <div className="act-card-badge">Complimentary</div>
            </div>
            <div className="act-card-body">
              <h3>Bicycle Hire</h3>
              <p>
                Explore the canalside community of Nonthaburi on two wheels. Our fat-tyre bikes are perfect for the flat
                canal paths — passing local markets, temple grounds, and riverside communities that give authentic insight
                into Bangkok&apos;s slower, quieter side.
              </p>
              <div className="act-card-detail">Daily · From 7:00 AM · Helmets Provided</div>
            </div>
          </div>

          <div className="act-card">
            <div className="act-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/experiences/surfskate.jpg"
                alt="Surfskate at W1@Bangkoknoi"
                style={{ objectPosition: "center bottom" }}
              />
              <div className="act-card-badge">Complimentary</div>
            </div>
            <div className="act-card-body">
              <h3>Surfskate</h3>
              <p>
                Glide through the resort&apos;s open terraces and pathways on our surfskates — the perfect way to feel the
                flow of the canal beneath your feet without getting wet. Suitable for all ages and skill levels, with
                instruction available on request.
              </p>
              <div className="act-card-detail">Daily · Anytime · Protective Gear Available</div>
            </div>
          </div>

          <div className="act-card">
            <div className="act-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/experiences/takbat.jpg" alt="Morning Alms Tak Bat at W1@Bangkoknoi" />
              <div className="act-card-badge">Cultural Experience</div>
            </div>
            <div className="act-card-body">
              <h3>Morning Alms · Tak Bat</h3>
              <p>
                One of Thailand&apos;s most sacred daily rituals, Tak Bat takes place at dawn as saffron-robed monks walk
                the canal path to receive offerings of food from local residents. Our team will prepare your offering and
                guide you through this deeply moving and respectful ceremony.
              </p>
              <div className="act-card-detail">Daily at Dawn · 6:00 – 7:00 AM · Guided</div>
            </div>
          </div>

          <div className="act-card">
            <div className="act-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/experiences/kids.jpg" alt="Little Palace Kids Club at W1@Bangkoknoi" />
              <div className="act-card-badge">Family</div>
            </div>
            <div className="act-card-body">
              <h3>Little Palace Kids Club</h3>
              <p>
                A dedicated space where younger guests can enjoy supervised activities, arts and crafts, Thai cultural
                games, and canal-themed adventures. Our team creates programmes tailored to different age groups, giving
                parents the freedom to relax while children thrive.
              </p>
              <div className="act-card-detail">Daily · Ages 4–12 · Supervised Sessions</div>
            </div>
          </div>

          <div className="act-card">
            <div className="act-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/experiences/koi.jpg" alt="Koi Pond Fish Feeding at W1@Bangkoknoi" />
              <div className="act-card-badge">For All Ages</div>
            </div>
            <div className="act-card-body">
              <h3>Koi Pond Fish Feeding</h3>
              <p>
                A beloved ritual for guests of all ages. Our ornamental koi pond is home to hundreds of vibrant fish, many
                of which have been raised at the resort for years. Feeding them from the pavilion is a serene, meditative
                experience that children and adults find equally delightful.
              </p>
              <div className="act-card-detail">Daily · Anytime · Feed Provided at Reception</div>
            </div>
          </div>

          <div className="act-card" style={{ background: "var(--emerald-deep)", position: "relative", overflow: "hidden" }}>
            <div className="act-card-img" style={{ height: 260, position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/experiences/boat-2.jpg"
                alt="More Experiences at W1@Bangkoknoi"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}
              />
            </div>
            <div className="act-card-body" style={{ background: "var(--emerald-deep)" }}>
              <h3 style={{ color: "var(--white)" }}>More to Discover</h3>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>
                From giant slides and canal market visits to traditional Thai cooking classes and temple excursions — our
                concierge team can arrange bespoke experiences tailored to your interests.
              </p>
              <div className="act-card-detail" style={{ color: "var(--gold)", borderTopColor: "rgba(212,175,119,0.2)" }}>
                Speak to Our Concierge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TAK BAT FEATURED SPLIT ─── */}
      <section className="takbat-split">
        <div className="takbat-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/experiences/takbat-split.jpg" alt="Morning Alms Ceremony at W1@Bangkoknoi" />
        </div>
        <div className="takbat-content">
          <div className="section-tag">Ancient Thai Tradition</div>
          <h2>
            Morning Alms <em>at Dawn</em>
          </h2>
          <p>
            Each morning before the world wakes, saffron-robed monks walk silently along the Bangkok Noi Canal to receive
            offerings of food from local residents — a ritual unchanged for centuries.
          </p>
          <p>
            Our team will prepare your offering of rice and traditional food, guide you through the correct protocol, and
            ensure this remains a respectful and deeply moving encounter with living Thai culture.
          </p>
          <p style={{ fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>
            Dress code: modest attire, shoulders and knees covered. Respectful silence observed during the ceremony.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href={`mailto:${SITE.email}`} className="btn-gold">
              Arrange Tak Bat
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="exp-cta">
        <h2>
          Begin Your <em>Canal Adventure</em>
        </h2>
        <p>
          Our concierge team will help you curate the perfect itinerary — from a sunrise paddle board session to a
          full-day boat journey through Bangkok&apos;s historic waterways.
        </p>
        <div className="exp-cta-btns">
          <a href={BOOK_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Book Your Stay
          </a>
          <a href={`mailto:${SITE.email}`} className="btn-outline-white">
            Contact Our Concierge
          </a>
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
