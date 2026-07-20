"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface AccentUnderlineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AccentUnderline({
  children,
  className = "",
  delay = 0.4,
}: AccentUnderlineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <em className="text-accent italic">{children}</em>
      <svg
        className="absolute left-0 w-full overflow-visible pointer-events-none"
        style={{ bottom: "-4px", height: "8px" }}
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0 5 Q 25 0, 50 5 T 100 5 T 150 5 T 200 5"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={
            isInView && !prefersReducedMotion
              ? { pathLength: 1 }
              : prefersReducedMotion
                ? { pathLength: 1 }
                : { pathLength: 0 }
          }
          transition={{ duration: 0.8, delay, ease: EASE }}
        />
      </svg>
    </span>
  );
}
