import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function DiningPage() {
  return (
    <>
      <Nav transparentAtTop />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/hero.jpg" alt="Thai Boran Restaurant – W1@Bangkoknoi Canal Terrace" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">W1@Bangkoknoi Hotel &amp; Wellness Resort</div>
          <h1 className="hero-h1">Thai Boran</h1>
          <div className="hero-divider" />
          <p className="hero-sub">
            Timeless Thai cuisine. Modern elegance.
            <br />
            Unforgettable moments on the Bangkok Noi Canal.
          </p>
          <div className="hero-ctas">
            <Link href="/reserve-table" className="btn-gold">
              Reserve a Table
            </Link>
            <a href="#menu" className="btn-outline-white">
              Explore the Menu
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      {/* ─── HOURS STRIP ─── */}
      <div className="hours-strip">
        <div className="hour-item">
          <div className="hour-label">Breakfast</div>
          <div className="hour-time">7:00 – 10:30 AM</div>
        </div>
        <div className="hour-sep" />
        <div className="hour-item">
          <div className="hour-label">All Day Menu (Mon–Thu)</div>
          <div className="hour-time">7:00 AM – 8:00 PM</div>
        </div>
        <div className="hour-sep" />
        <div className="hour-item">
          <div className="hour-label">All Day Menu (Fri–Sun)</div>
          <div className="hour-time">7:00 AM – 10:00 PM</div>
        </div>
        <div className="hour-sep" />
        <div className="hour-item">
          <div className="hour-label">Pool Bar</div>
          <div className="hour-time">Coming Soon</div>
        </div>
        <div className="hour-sep" />
        <div className="hour-item">
          <div className="hour-label">Dress Code</div>
          <div className="hour-time">Smart Casual</div>
        </div>
      </div>

      {/* ─── PHILOSOPHY ─── */}
      <section className="philosophy">
        <div className="philosophy-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/interior.jpg" alt="Thai Boran Restaurant Interior" />
        </div>
        <div className="philosophy-content">
          <div className="section-tag">Our Philosophy</div>
          <h2 className="section-h2">
            A Journey Through <em>Thai Flavours</em>
          </h2>
          <p>
            Thai Boran – meaning &quot;traditional Thai&quot; in its most refined form – celebrates Thailand&apos;s rich
            culinary heritage while embracing contemporary techniques and the finest local ingredients sourced from the
            bustling canal markets and nearby farms.
          </p>
          <div className="gold-rule" />
          <p>
            Overlooking the serene Bangkok Noi Canal in Nonthaburi, our signature restaurant and bar offer an intimate
            journey through Thai flavours. From royal palace recipes passed down through generations to innovative
            reinterpretations, every dish tells a story of Thailand&apos;s waterways, gardens, and vibrant culture.
          </p>
          <p>
            Whether dining on the candlelit terrace, in the air-conditioned main salon with teak and silk detailing, or
            in a private pavilion, Thai Boran delivers a sensory experience that perfectly complements the timeless
            luxury of W1@Bangkoknoi Hotel &amp; Wellness Resort.
          </p>
        </div>
      </section>

      {/* ─── FACILITIES ─── */}
      <section className="facilities">
        <div className="facilities-header">
          <div className="section-tag" style={{ justifyContent: "center" }}>
            <span />
            Where You Dine
            <span />
          </div>
          <h2>
            Two Distinct <em style={{ fontStyle: "italic", color: "var(--emerald-mid)" }}>Settings</em>
          </h2>
        </div>
        <div className="facilities-grid">
          <div className="facility-card">
            <svg
              className="facility-icon"
              viewBox="0 0 52 52"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="8" y="20" width="36" height="24" />
              <polygon points="4,20 26,8 48,20" />
              <rect x="18" y="30" width="16" height="14" />
              <line x1="8" y1="44" x2="44" y2="44" />
              <rect x="22" y="24" width="8" height="6" />
            </svg>
            <h3>Main Dining Salon</h3>
            <p>
              Grand yet intimate, our air-conditioned main salon features teak and silk detailing, floor-to-ceiling
              windows framing the canal, and refined table settings worthy of any royal Thai occasion.
            </p>
          </div>
          <div className="facility-card">
            <svg
              className="facility-icon"
              viewBox="0 0 52 52"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 36 Q26 28 44 36" />
              <path d="M4 44 L48 44" />
              <circle cx="26" cy="16" r="8" />
              <line x1="26" y1="24" x2="26" y2="36" />
              <path d="M18 20 Q12 28 14 36" />
              <path d="M34 20 Q40 28 38 36" />
            </svg>
            <h3>Canal Terrace</h3>
            <p>
              Open-air dining under the stars with gentle breezes drifting from the Bangkok Noi Canal. Lantern-lit
              evenings and the soft sounds of the waterway create an atmosphere unlike anywhere else in Thailand.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE DISHES ─── */}
      <section className="dishes" id="menu">
        <div className="dishes-inner">
          <div className="dishes-header">
            <div className="section-tag" style={{ justifyContent: "center", color: "var(--gold)" }}>
              Thai Culinary Menu
            </div>
            <h2>
              A Curated <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Heritage</em>
            </h2>
            <p
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.9,
                maxWidth: 600,
                margin: "16px auto 0",
                letterSpacing: "0.03em",
              }}
            >
              A curated selection of traditional Thai flavours, blending heritage recipes with refined presentation.
            </p>
          </div>

          <div className="dishes-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/dining/dish.jpg" alt="Signature Thai Dish at Thai Boran" />
          </div>

          <div className="dish-category">
            <div className="dish-category-title">Starters</div>
            <div className="dishes-grid">
              <div className="dish-card">
                <div className="dish-name">
                  Mieng Khum{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Lotus Leaf Bites
                  </span>
                </div>
                <div className="dish-desc">
                  A beloved ancient Thai snack of toasted coconut, roasted peanuts, fresh lime, ginger, shallots, dried
                  shrimp, and a warming palm sugar sauce, wrapped in fresh lotus leaves. Each bite delivers a symphony of
                  sweet, sour, salty, and spicy — a centuries-old ritual of flavour.
                </div>
              </div>
              <div className="dish-card">
                <div className="dish-name">
                  Yum Woon Sen Boran{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Classic Glass Noodle Salad
                  </span>
                </div>
                <div className="dish-desc">
                  Silky glass noodles tossed with minced pork, plump prawns, roasted peanuts, and fragrant Chinese celery
                  in a bold lime-fish sauce dressing. Bright, refreshing, and deeply aromatic — a heritage recipe
                  unchanged for generations.
                </div>
              </div>
            </div>
          </div>

          <div className="dish-category">
            <div className="dish-category-title">Main Courses</div>
            <div className="dishes-grid">
              <div className="dish-card">
                <div className="dish-name">
                  Nam Prik Kapi Pla Too{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Shrimp Paste Dip with Fried Mackerel
                  </span>
                </div>
                <div className="dish-desc">
                  A cornerstone of traditional Thai home cooking. Pungent, umami-rich fermented shrimp paste chilli dip
                  served alongside crisp fried mackerel, fresh seasonal vegetables, and steamed jasmine rice. Bold,
                  soulful, and deeply Thai.
                </div>
              </div>
              <div className="dish-card">
                <div className="dish-name">
                  Chu Chee Goong{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Dry Red Curry with Prawns
                  </span>
                </div>
                <div className="dish-desc">
                  Tiger prawns coated in a thick, fragrant dry red curry paste with kaffir lime leaves, coconut cream, and
                  fresh red chilli. Rich yet balanced, this semi-dry curry is a refined expression of southern Thai
                  culinary mastery.
                </div>
              </div>
              <div className="dish-card">
                <div className="dish-name">
                  Gaeng Ranjuan Moo{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Ancient Spicy &amp; Sour Pork Soup
                  </span>
                </div>
                <div className="dish-desc">
                  A centuries-old royal Thai soup of slow-simmered pork in a tangy, aromatic broth of tamarind, lemongrass,
                  shallots, and dried spices. Complex in flavour and delicate in finish — a dish preserved from the palace
                  kitchens of old Siam.
                </div>
              </div>
            </div>
          </div>

          <div className="dish-category">
            <div className="dish-category-title">Desserts</div>
            <div className="dishes-grid">
              <div className="dish-card">
                <div className="dish-name">
                  Bua Loy Phuak{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Taro Balls in Warm Coconut Milk
                  </span>
                </div>
                <div className="dish-desc">
                  Soft, pillowy taro dumplings simmered in sweetened warm coconut milk, delicately scented with pandan
                  leaf. A comforting Thai dessert of quiet elegance, rooted in the flavours of old Siam.
                </div>
              </div>
              <div className="dish-card">
                <div className="dish-name">
                  Kluay Hom Thod{" "}
                  <span style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                    — Fried Bananas
                  </span>
                </div>
                <div className="dish-desc">
                  Fragrant hom bananas dipped in a light coconut and sesame batter, fried until golden and crisp. Served
                  warm with a sweet condensed milk drizzle — a beloved Thai classic, elevated with care.
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/reserve-table" className="btn-gold">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POOL BAR (FUTURE CONCEPT) ─── */}
      <section className="bar-section">
        <div className="bar-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/bar.jpg" alt="Pool Bar at W1@Bangkoknoi — Coming Soon" />
        </div>
        <div className="bar-content">
          <div className="section-tag">Future Concept</div>
          <h2>
            Pool <em>Bar</em>
          </h2>
          <p>
            A relaxed poolside venue currently in planning — a destination designed for unhurried afternoons, refreshing
            drinks, and the gentle rhythm of the Bangkok Noi Canal. Planned to replace the current bar offering, the Pool
            Bar will bring a new dimension of leisurely sophistication to W1 Bangkoknoi.
          </p>
          <div className="cocktail-list">
            <div className="cocktail-item">
              <div className="cocktail-name" style={{ opacity: 0.6, fontStyle: "italic" }}>
                Coming Soon
              </div>
              <div className="cocktail-desc">
                We are carefully curating this experience. Further details will be announced in due course.
              </div>
            </div>
          </div>
          <p className="bar-note" style={{ opacity: 0.7 }}>
            This venue is a future concept and is not yet operational. We look forward to welcoming you when it opens.
          </p>
        </div>
      </section>

      {/* ─── W1 CAFÉ ─── */}
      <section className="cafe-section">
        <div className="cafe-inner">
          <div className="cafe-intro">
            <div className="section-tag">Temple Views &amp; Artisan Bites</div>
            <h2>
              W1 <em>Café</em>
            </h2>
            <p>
              W1 Café invites you to immerse yourself in a captivating visual journey. Seated at the water&apos;s edge,
              our storytelling unfolds through breathtaking, timeless views of the historic Thai temple across the canal —
              a scene of rare beauty that shifts with the light, from the golden serenity of morning to the luminous glow
              of dusk. Whether you arrive by boat or by foot, linger over a perfectly brewed coffee or a handcrafted light
              bite, and let the temple view tell its ancient story.
            </p>
            <div className="cafe-hours">
              <div>
                <div className="hour-label">Sun – Thu</div>
                <div className="hour-time">10:00 AM – 7:00 PM</div>
              </div>
              <div>
                <div className="hour-label">Fri – Sat</div>
                <div className="hour-time">10:00 AM – 10:00 PM</div>
              </div>
              <div>
                <div className="hour-label">Terrace &amp; Lounge</div>
                <div className="hour-time">Pet-Friendly · Free Wi-Fi</div>
              </div>
            </div>
            <p>
              The shaded canal terrace and air-conditioned lounge are also available for private hire for intimate
              gatherings of up to 20 guests.
            </p>
            <div className="cafe-cta">
              <Link href="/reserve-table" className="btn-gold">
                Reserve a Table
              </Link>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/cafe/hero.jpg" alt="W1 Café at W1@Bangkoknoi" className="cafe-hero-img" />
        </div>

        <div className="cafe-menu-grid">
          <div className="cafe-menu-item">
            <h4>Artisan Coffee &amp; Tea</h4>
            <p>
              Single-origin Thai arabica brewed by our in-house baristas, alongside curated Thai herbal teas and signature
              cold brews.
            </p>
          </div>
          <div className="cafe-menu-item">
            <h4>Bakery &amp; Cakes — The Art of Craft Pastry</h4>
            <p>
              <strong style={{ fontWeight: 600, color: "var(--emerald-deep)" }}>Khanom Kleeb Lamduan</strong> — Traditional
              Thai Shortbread Cookies. Discover the delicate artistry of our in-house pastry chefs with this signature
              creation, meticulously crafted from flour, sugar, and oil, then hand-shaped into a beautiful three-petal
              flower that resembles the native Lamduan blossom. Following ancient traditions, these cookies are slowly
              baked and scented over a smoked aromatic candle flame, infusing them with a distinct, nostalgic floral
              fragrance. Every bite delivers a delightfully crumbly, melt-in-your-mouth texture — perfect with our premium
              tea and coffee selections.
            </p>
          </div>
          <div className="cafe-menu-item">
            <h4>Light Bites</h4>
            <p>
              Seven signature light bite menus, beautifully crafted to complement your daytime relaxation. Each dish is
              thoughtfully paired to the rhythm of the temple view — light, seasonal, and always made to order.
            </p>
          </div>
          <div className="cafe-menu-item">
            <h4>Fresh Juices &amp; Coolers</h4>
            <p>
              Pressed seasonal fruits, lemongrass spritzers, and pandan coolers made to order — the taste of Thailand in a
              glass.
            </p>
          </div>
        </div>

        <div className="cafe-photo-strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/cafe/interior.jpg" alt="W1 Café Interior" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/cafe/cake.jpg" alt="W1 Café Signature Cake" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/cafe/drinks.jpg" alt="W1 Café Drinks" />
        </div>
      </section>

      {/* ─── PRIVATE DINING ─── */}
      <section className="private">
        <div className="private-header">
          <div className="section-tag">Exclusive Celebrations</div>
          <h2>
            Private Dining <em>&amp; Events</em>
          </h2>
          <p>
            Host unforgettable celebrations in our private pavilions. Our chefs craft bespoke tasting menus incorporating
            seasonal canal-market produce or themed royal Thai banquets — tailored to every occasion.
          </p>
        </div>
        <div className="private-photo-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/events-1.jpg" alt="Cultural Dance Events at W1@Bangkoknoi" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/events-2.jpg" alt="Poolside Events at W1@Bangkoknoi" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dining/events-3.jpg" alt="Terrace Events at W1@Bangkoknoi" />
        </div>
        <div className="private-footer">
          <div className="private-occasions">
            <div className="occasion-pill">Romantic Proposals</div>
            <div className="occasion-pill">Family Reunions</div>
            <div className="occasion-pill">Corporate Luncheons</div>
            <div className="occasion-pill">Intimate Weddings</div>
          </div>
          <Link href="/reserve-table" className="btn-gold">
            Enquire About Private Dining
          </Link>
        </div>
      </section>

      {/* ─── EXPERIENCES ─── */}
      <section className="experiences">
        <div className="exp-header">
          <div className="section-tag" style={{ justifyContent: "center" }}>
            <span />
            Daily Rituals
            <span />
          </div>
          <h2>
            Dining <em style={{ fontStyle: "italic", color: "var(--emerald-mid)" }}>Experiences</em>
          </h2>
        </div>
        <div className="exp-grid">
          <div className="exp-card">
            <div className="exp-time">For Adults &amp; Kids · On Request</div>
            <h3>Pizza Baking Masterclass</h3>
            <p>
              An interactive, hands-on pizza baking experience designed for both adults and children. Roll, top, and bake
              your own creation in our demonstration kitchen — a fun and delicious masterclass the whole family will love.
            </p>
          </div>
          <div className="exp-card">
            <div className="exp-time">Introducing</div>
            <h3>Wellness Dining</h3>
            <p>
              Light, nourishing menus crafted in collaboration with the Palace Wellness team — nutritious, beautifully
              presented, and deeply restorative. Watch this space.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRACTICAL + CTA ─── */}
      <section className="practical" id="reserve">
        <div className="practical-inner">
          <div>
            <h2>Plan Your Visit</h2>
            <ul className="hours-list">
              <li>
                <span className="meal">Breakfast</span>
                <span className="time">7:00 AM – 10:30 AM</span>
              </li>
              <li>
                <span className="meal">All Day Menu (Mon–Thu)</span>
                <span className="time">7:00 AM – 8:00 PM</span>
              </li>
              <li>
                <span className="meal">All Day Menu (Fri–Sun)</span>
                <span className="time">7:00 AM – 10:00 PM</span>
              </li>
              <li>
                <span className="meal">Pool Bar</span>
                <span className="time">Coming Soon</span>
              </li>
            </ul>
            <p className="dress-note">
              Smart casual dress code. Reservations recommended, particularly for dinner and weekends. All dietary
              requirements accommodated with advance notice. Children&apos;s menu and high chairs available. All Day Menu
              includes wellness dining options.
            </p>
          </div>
          <div className="cta-panel">
            <h2>Make a Reservation</h2>
            <div className="cta-buttons">
              <Link href="/reserve-table" className="btn-gold-full">
                Make a Reservation
              </Link>
              <a href="/docs/W1_A_La_Carte_Menu.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">
                View Full Menu
              </a>
              <a href="mailto:dining@w1bangkoknoi.com" className="btn-outline-dark">
                Enquire About Private Dining
              </a>
            </div>
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
            <Link href="/wellness" className="btn-wc-outline">
              Book a Treatment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
