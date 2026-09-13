"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  images: { src: string; alt?: string }[];
  openIndex: number | null;
  onClose: () => void;
};

export function Lightbox({ images, openIndex, onClose }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (openIndex !== null) setIdx(openIndex);
  }, [openIndex]);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, onClose, prev, next]);

  if (openIndex === null || !images[idx]) return null;
  const img = images[idx];

  return (
    <div
      className="w1-lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button type="button" className="w1-lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button
        type="button"
        className="w1-lightbox-nav prev"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        ‹
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt ?? ""}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className="w1-lightbox-nav next"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        ›
      </button>
      <div className="w1-lightbox-count">
        {idx + 1} / {images.length}
      </div>
    </div>
  );
}
