"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

const MAGNETIC_RADIUS = 40;
const MAGNETIC_STRENGTH = 8;
const SPRING_CONFIG = { stiffness: 300, damping: 20, mass: 0.5 };

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [canHover, setCanHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current || prefersReducedMotion || !canHover) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAGNETIC_RADIUS) {
        const strength = (1 - dist / MAGNETIC_RADIUS) * MAGNETIC_STRENGTH;
        const angle = Math.atan2(dy, dx);
        x.set(Math.cos(angle) * strength);
        y.set(Math.sin(angle) * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [prefersReducedMotion, canHover, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const base =
    "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-none";

  const variants = {
    primary: "bg-accent text-foreground hover:bg-accent/80",
    outline: "border border-border text-foreground hover:border-foreground",
  };

  const classes = cn(base, variants[variant], className);

  const motionStyle =
    canHover && !prefersReducedMotion
      ? { x: springX, y: springY }
      : undefined;

  if (href) {
    return (
      <motion.div
        ref={ref}
        style={motionStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={motionStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(classes, disabled && "opacity-50 pointer-events-none")}
      >
        {children}
      </button>
    </motion.div>
  );
}
