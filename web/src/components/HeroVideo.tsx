"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
  playbackRate?: number;
  className?: string;
};

/** Optimized hero video: metadata preload, poster, optional rate. No Figma capture. */
export function HeroVideo({ src, poster, playbackRate = 1, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.playbackRate = playbackRate;
    const onPlay = () => {
      v.playbackRate = playbackRate;
    };
    v.addEventListener("play", onPlay);
    return () => v.removeEventListener("play", onPlay);
  }, [playbackRate]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
