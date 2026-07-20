"use client";

import { useReducedMotion } from "framer-motion";

export default function FilmGrain() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[45] opacity-[0.04]"
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves={4}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain)" />
      </svg>
    </div>
  );
}
