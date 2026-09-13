import Link from "next/link";
import { PALACE } from "@/lib/home-content";
import { BOOK_DIRECT_URL } from "@/lib/site";

/** "A Modern Thai Palace" — full-bleed image, CURATED EXPERIENCES booking card,
 *  key stats, and the off-white "Where Timeless Elegance" strip below. */
export function PalaceSection() {
  return (
    <section id="palace" className="pal">
      <div className="pal-top">
        <div className="pal-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PALACE.background} alt="" loading="lazy" />
        </div>
        <div className="pal-scrim" />

        <div className="pal-inner">
          <div className="pal-row">
            <div className="pal-text">
              <h2 className="pal-title">
                <span>{PALACE.title}</span>{" "}
                <em>{PALACE.titleAccent}</em>
              </h2>
              <p>{PALACE.paragraph}</p>
            </div>

            {/* <aside className="pal-card">
              <h3>{PALACE.card.heading}</h3>
              <a
                className="pal-card-btn"
                href={BOOK_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {PALACE.card.buttonLabel}
              </a>
              <div className="pal-card-note">{PALACE.card.note}</div>
            </aside> */}
          </div>

          <div className="pal-facts">
            <Link className="pal-explore" href={PALACE.exploreHref}>
              {PALACE.exploreLabel}
            </Link>
            <div className="pal-stats">
              {PALACE.stats.map((s) => (
                <div className="pal-stat" key={s.label}>
                  <div className="pal-stat-num">
                    {s.value}
                    {s.suffix ? <span> {s.suffix}</span> : null}
                  </div>
                  <div className="pal-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pal-bottom">
        <div className="pal-bottom-copy">
          <h3 className="pal-bottom-title">
            {PALACE.bottom.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <i className="pal-bottom-line" aria-hidden />
          </h3>
          <div className="pal-bottom-mid">
            <p>{PALACE.bottom.paragraph}</p>
            <Link className="pal-bottom-link" href={PALACE.bottom.linkHref}>
              <span>{PALACE.bottom.linkLabel}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/home/chevron-dark.svg" alt="" width={4} height={7} />
            </Link>
          </div>
        </div>
        <div className="pal-bottom-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PALACE.bottom.image} alt="W1@Bangkoknoi courtyard" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
