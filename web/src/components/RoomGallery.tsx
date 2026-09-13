"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
  variant?: "room" | "villa";
};

export function RoomGallery({ images, alt, variant = "room" }: Props) {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  const multi = total > 1;

  const go = (next: number) => {
    if (!multi) return;
    setIdx(((next % total) + total) % total);
  };

  if (variant === "villa") {
    return (
      <div className="villa-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[idx]} alt={alt} />
        {multi ? (
          <>
            <button type="button" className="villa-arrow prev" aria-label="Previous" onClick={() => go(idx - 1)}>
              ←
            </button>
            <button type="button" className="villa-arrow next" aria-label="Next" onClick={() => go(idx + 1)}>
              →
            </button>
            <div className="gallery-count" style={{ zIndex: 5 }}>
              {idx + 1} / {total}
            </div>
            <div className="villa-thumbs-wrap villa-thumbs-overlay">
              <div className="villa-thumbs">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={`villa-thumb${i === idx ? " active" : ""}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Photo ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <div className="room-gallery">
      <div className="gallery-main">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[idx]} alt={alt} />
        {multi ? (
          <>
            <button type="button" className="gallery-arrow prev" aria-label="Previous" onClick={() => go(idx - 1)}>
              ←
            </button>
            <button type="button" className="gallery-arrow next" aria-label="Next" onClick={() => go(idx + 1)}>
              →
            </button>
            <div className="gallery-count">
              {idx + 1} / {total}
            </div>
          </>
        ) : null}
      </div>
      {multi ? (
        <div className="gallery-thumbs-wrap">
          <div className="gallery-thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`gallery-thumb${i === idx ? " active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
