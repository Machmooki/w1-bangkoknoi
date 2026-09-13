"use client";

import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";

type Img = { src: string; alt?: string };

export function GalleryGrid({ images, className = "gallery-grid" }: { images: Img[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            style={{ border: "none", padding: 0, background: "none", cursor: "zoom-in", display: "block", width: "100%" }}
            aria-label={`Open image ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt ?? ""} loading="lazy" />
          </button>
        ))}
      </div>
      <Lightbox images={images} openIndex={openIndex} onClose={() => setOpenIndex(null)} />
    </>
  );
}
