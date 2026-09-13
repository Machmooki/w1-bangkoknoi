"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BOOK_DIRECT_URL, NAV_LINKS, type Locale } from "@/lib/site";
import { useLocale } from "@/components/LocaleProvider";
import { translatePhrase } from "@/lib/messages";

export function Nav({
  transparentAtTop = false,
  hideAtTop = false,
}: {
  transparentAtTop?: boolean;
  /** Capella-style: dock the navbar to the top of the section below the hero.
   *  It scrolls into view attached to that section, then sticks to the viewport. */
  hideAtTop?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [docked, setDocked] = useState(hideAtTop);
  const [dockTop, setDockTop] = useState<number | null>(null);
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    if (!transparentAtTop) return;
    const update = () => {
      if (window.innerWidth > 900) setAtTop(window.scrollY < 10);
      else setAtTop(false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [transparentAtTop]);

  useEffect(() => {
    if (!hideAtTop) return;
    const hero = document.querySelector<HTMLElement>(".hh");
    let ticking = false;
    const update = () => {
      ticking = false;
      const heroHeight = hero?.offsetHeight ?? window.innerHeight;
      setDockTop(heroHeight);
      setDocked(window.scrollY < heroHeight - 1);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hideAtTop]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isDocked = hideAtTop && docked;
  const classes = [transparentAtTop && atTop ? "at-top" : "", isDocked ? "nav-docked" : ""]
    .filter(Boolean)
    .join(" ");

  // The nav translates itself through React (see `tr` below), so the DomI18n
  // DOM walker must skip it — hence data-i18n-skip on the root element.
  const tr = (phrase: string) => translatePhrase(locale, phrase);

  return (
    <nav
      id="mainNav"
      className={classes || undefined}
      style={isDocked && dockTop != null ? { top: dockTop } : undefined}
      data-i18n-skip
    >
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-transparent.png"
          alt="W1@Bangkoknoi"
          style={{ height: 48, width: "auto", flexShrink: 0 }}
        />
        <div className="nav-logo-text">
          <div className="nav-logo-main">
            W1<span>@</span>Bangkoknoi
          </div>
          <div className="nav-logo-sub">{tr("Hotel & Wellness Resort · Nonthaburi")}</div>
        </div>
      </Link>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={pathname === l.href || pathname?.startsWith(`${l.href}/`) ? "active" : undefined}>
              {tr(l.label)}
            </Link>
          </li>
        ))}
        <li>
          <a href={BOOK_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="nav-book">
            {tr("Book Now")}
          </a>
        </li>
      </ul>
      <div className="lang-switcher" data-i18n-skip>
        {(["en", "th", "zh"] as Locale[]).map((code, i) => (
          <span key={code} style={{ display: "contents" }}>
            {i > 0 ? <span className="lang-sep">|</span> : null}
            <button
              type="button"
              className={`lang-btn${locale === code ? " active" : ""}`}
              data-lang={code}
              onClick={() => setLocale(code)}
            >
              {code === "zh" ? "中" : code.toUpperCase()}
            </button>
          </span>
        ))}
      </div>
      <button
        className={`nav-hamburger${open ? " open" : ""}`}
        aria-label={tr(open ? "Close menu" : "Open menu")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
