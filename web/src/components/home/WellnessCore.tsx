"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WELLNESS } from "@/lib/home-content";

/** "Wellness at the Core" — numbered 01-06 chapter navigation. Click a number
 *  (or let it auto-advance) to crossfade the background and update the copy.
 *  Driven by WELLNESS in home-content.ts. */
export function WellnessCore() {
  const chapters = WELLNESS.chapters;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!WELLNESS.interval || paused || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % chapters.length),
      WELLNESS.interval
    );
    return () => clearInterval(timer);
  }, [paused, visible, chapters.length, active]);

  const chapter = chapters[active];

  return (
    <section
      id="wellness-core"
      ref={ref}
      className="wcore"
      aria-label="Wellness at the Core"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {chapters.map((c, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={c.image}
          className={`wcore-bg${i === active ? " is-active" : ""}`}
          src={c.image}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== active}
        />
      ))}
      <div className="wcore-scrim" />

      <div className="wcore-body">
        <div className="wcore-nums" role="navigation" aria-label="Chapters">
          {chapters.map((c, i) => (
            <button
              key={c.number}
              type="button"
              className={`wcore-num${i === active ? " is-active" : ""}`}
              data-dist={Math.min(Math.abs(i - active), 4)}
              aria-current={i === active}
              onClick={() => setActive(i)}
            >
              {c.number}
            </button>
          ))}
        </div>

        <div className="wcore-content" key={active}>
          <div className="wcore-eyebrow">
            <i aria-hidden />
            <span>{WELLNESS.eyebrowPrefix}</span> {chapter.number}
          </div>
          <h2>
            {chapter.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p>{chapter.description}</p>
        </div>
      </div>

      <div className="wcore-bottom">
        <p className="wcore-quote">{WELLNESS.quote}</p>
        <Link className="wcore-cta" href={WELLNESS.cta.href}>
          <span>{WELLNESS.cta.label}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/chevron-white.svg" alt="" width={6} height={10} />
        </Link>
      </div>
    </section>
  );
}
