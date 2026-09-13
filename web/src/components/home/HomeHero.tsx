"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/HeroVideo";
import { HERO } from "@/lib/home-content";

/**
 * Full-screen video hero (Capella style): pinned via CSS sticky so the next
 * section slides over it. Wheel / arrow / touch settle never rest half-overlapped
 * — they glide with a velocity ease-out once input stops.
 */
export function HomeHero() {
  const [theatre, setTheatre] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef(0);
  const animatingRef = useRef(false);
  const settleTimerRef = useRef(0);
  const dirRef = useRef(1);
  const touchingRef = useRef(false);
  const reducedRef = useRef(false);
  /** Ignore phantom wheel ticks right after a programmatic glide starts. */
  const glideGraceRef = useRef(0);

  const heroScrollTarget = useCallback(() => {
    const hero = sectionRef.current;
    if (!hero) return 0;
    return hero.offsetHeight;
  }, []);

  const animateScrollTo = useCallback(
    (target: number, opts?: { fromUser?: boolean }) => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(settleTimerRef.current);

      const start = window.scrollY;
      const delta = target - start;
      if (Math.abs(delta) < 1) return;

      const duration = Math.min(1180, Math.max(680, Math.abs(delta) * 0.92));
      const t0 = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 4);
      animatingRef.current = true;
      glideGraceRef.current = performance.now() + (opts?.fromUser ? 420 : 280);

      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      html.classList.add("is-hero-gliding");

      const finish = () => {
        animatingRef.current = false;
        html.style.scrollBehavior = prevBehavior;
        html.classList.remove("is-hero-gliding");
        window.removeEventListener("wheel", onInterrupt);
        window.removeEventListener("touchstart", onInterrupt);
        window.removeEventListener("keydown", onKeyInterrupt);
      };

      const onInterrupt = (e: Event) => {
        if (performance.now() < glideGraceRef.current) return;
        if (e.type === "wheel") {
          const dy = Math.abs((e as WheelEvent).deltaY);
          if (dy < 12) return;
        }
        cancelAnimationFrame(rafRef.current);
        finish();
        window.clearTimeout(settleTimerRef.current);
        settleTimerRef.current = window.setTimeout(() => {
          scheduleSettleRef.current();
        }, 140);
      };

      const onKeyInterrupt = (e: KeyboardEvent) => {
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "PageDown" ||
          e.key === "PageUp" ||
          e.key === "Home" ||
          e.key === "End" ||
          e.key === " "
        ) {
          onInterrupt(e);
        }
      };

      window.addEventListener("wheel", onInterrupt, { passive: true });
      window.addEventListener("touchstart", onInterrupt, { passive: true });
      window.addEventListener("keydown", onKeyInterrupt);

      const step = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        // Direct numeric scrollTo — most reliable on Windows / Edge.
        window.scrollTo(0, start + delta * ease(p));
        if (p < 1) rafRef.current = requestAnimationFrame(step);
        else {
          window.scrollTo(0, target);
          finish();
        }
      };
      rafRef.current = requestAnimationFrame(step);
    },
    []
  );

  const scheduleSettleRef = useRef(() => {});

  useEffect(() => {
    scheduleSettleRef.current = () => {
      window.clearTimeout(settleTimerRef.current);
      if (reducedRef.current || touchingRef.current || animatingRef.current) return;
      const hero = sectionRef.current;
      if (!hero) return;
      const heroH = hero.offsetHeight;
      const y = window.scrollY;
      if (y <= 2 || y >= heroH - 2) return;
      settleTimerRef.current = window.setTimeout(() => {
        if (touchingRef.current || animatingRef.current) return;
        const h = sectionRef.current?.offsetHeight ?? heroH;
        const yy = window.scrollY;
        if (yy > 2 && yy < h - 2) {
          animateScrollTo(dirRef.current > 0 ? h : 0);
        }
      }, 150);
    };
  }, [animateScrollTo]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hero = sectionRef.current;
    if (!hero) return;
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = hero.querySelector("video");
    let lastY = window.scrollY;
    let covered = false;

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) dirRef.current = y > lastY ? 1 : -1;
      lastY = y;

      const isCovered = y >= hero.offsetHeight - 1;
      if (video && isCovered !== covered) {
        covered = isCovered;
        if (isCovered) video.pause();
        else video.play().catch(() => {});
      }
      if (!animatingRef.current) scheduleSettleRef.current();
    };

    const onTouchStart = () => {
      touchingRef.current = true;
      window.clearTimeout(settleTimerRef.current);
    };
    const onTouchEnd = () => {
      touchingRef.current = false;
      scheduleSettleRef.current();
    };
    const onWheel = () => {
      if (!animatingRef.current) scheduleSettleRef.current();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.clearTimeout(settleTimerRef.current);
    };
  }, []);

  const scrollDown = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.getElementById(HERO.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    animateScrollTo(heroScrollTarget(), { fromUser: true });
  }, [animateScrollTo, heroScrollTarget]);

  useEffect(() => {
    if (!theatre) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTheatre(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [theatre]);

  return (
    <section ref={sectionRef} className="hh" aria-label="W1@Bangkoknoi">
      <div className="hh-bg">
        <HeroVideo src={HERO.video} poster={HERO.poster} playbackRate={HERO.playbackRate} />
      </div>
      <div className="hh-scrim" />

      <div className="hh-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hh-logo" src={HERO.logo} alt="W1@Bangkoknoi emblem" />
      </div>

      <div className="hh-detail">
        <p className="hh-tagline">
          {HERO.tagline.map((seg) => (
            <span key={seg.text} className={seg.gold ? "gold" : undefined}>
              {seg.text}
            </span>
          ))}
        </p>
        <p className="hh-sub">{HERO.subtitle}</p>
      </div>

      <button className="hh-watch" type="button" onClick={() => setTheatre(true)}>
        <span>{HERO.watchLabel}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/home/chevron-white.svg" alt="" width={5} height={9} />
      </button>

      <button className="hh-arrow" type="button" onClick={scrollDown} aria-label="Scroll down">
        <span className="hh-arrow-motion">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/arrow-down.svg" alt="" width={13} height={32} />
        </span>
      </button>

      {theatre ? (
        <div className="hh-theatre" role="dialog" aria-label="Video" onClick={() => setTheatre(false)}>
          <video
            src={HERO.video}
            poster={HERO.poster}
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="hh-theatre-close"
            type="button"
            aria-label="Close video"
            onClick={() => setTheatre(false)}
          >
            ×
          </button>
        </div>
      ) : null}
    </section>
  );
}
