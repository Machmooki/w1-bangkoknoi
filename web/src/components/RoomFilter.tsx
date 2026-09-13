"use client";

import { useEffect, useState } from "react";

type Link = { href: string; label: string };

export function RoomFilter({ links }: { links: readonly Link[] }) {
  const [active, setActive] = useState(links[0]?.href.replace("#", "") || "");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      let current = "";
      for (const s of sections) {
        if (window.scrollY >= s.offsetTop - 160) current = s.id;
      }
      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return (
    <nav className="room-filter" aria-label="Room types">
      {links.map(({ href, label }) => {
        const id = href.replace("#", "");
        return (
          <a key={href} href={href} className={active === id ? "active" : undefined}>
            {label}
          </a>
        );
      })}
    </nav>
  );
}
