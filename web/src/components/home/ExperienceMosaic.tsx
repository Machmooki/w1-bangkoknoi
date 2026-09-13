"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EXPERIENCES, type ExperienceCard } from "@/lib/home-content";

/** Mosaic of experience cards. Each card smoothly cycles through the slides
 *  configured in home-content.ts (crossfading image + text). Rotation pauses
 *  while hovered, off-screen, or when the user prefers reduced motion. */
export function ExperienceMosaic() {
  return (
    <section id="experiences" className="expm" aria-label="Experiences">
      {EXPERIENCES.map((card) => (
        <RotatingCard key={card.id} card={card} />
      ))}
    </section>
  );
}

function RotatingCard({ card }: { card: ExperienceCard }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = card.slides.length;

  useEffect(() => {
    const el = ref.current;
    if (!el || count < 2) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [count]);

  useEffect(() => {
    if (count < 2 || paused || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % count),
      card.interval ?? 9000
    );
    return () => clearInterval(timer);
  }, [count, paused, visible, card.interval]);

  const slide = card.slides[index];

  return (
    <div
      ref={ref}
      className={`expm-card expm-${card.area} expm-align-${card.align}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {card.slides.map((s, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.image}
          className={`expm-bg${i === index ? " is-active" : ""}`}
          src={s.image}
          alt=""
          loading="lazy"
          aria-hidden={i !== index}
        />
      ))}
      <div className="expm-scrim" />

      <div className="expm-content" key={index}>
        <h3>
          {slide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p>{slide.description}</p>
        <Link className="expm-cta" href={slide.href}>
          <span>{slide.cta ?? "ENQUIRE"}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/chevron-dark.svg" alt="" width={4} height={7} />
        </Link>
      </div>

      {count > 1 ? (
        <div className="expm-dots" role="tablist" aria-label="Slides">
          {card.slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={i === index ? "is-active" : undefined}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
