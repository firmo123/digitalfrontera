"use client";

import { Children, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function LineReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
}: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();
  const lines = Children.toArray(children);

  if (prefersReducedMotion) {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: delay + i * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
