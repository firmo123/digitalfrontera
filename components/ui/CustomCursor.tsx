"use client";

import { useEffect, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const SIZE = 12;
const SPRING = { stiffness: 300, damping: 25, mass: 0.5 };

type CursorState = "default" | "link" | "view";

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, SPRING);
  const springY = useSpring(mouseY, SPRING);

  const updateCursorState = useCallback((target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) {
      setState("default");
      return;
    }

    const el = target.closest<HTMLElement>(
      "[data-cursor], a, button, [role='button']"
    );

    if (!el) {
      setState("default");
      return;
    }

    const attr = el.getAttribute("data-cursor");
    if (attr === "view") {
      setState("view");
    } else {
      setState("link");
    }
  }, []);

  useEffect(() => {
    // Only enable on devices that support hover (no touch-primary)
    const canHover = window.matchMedia("(hover: hover)").matches;
    if (!canHover || prefersReducedMotion) return;

    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      updateCursorState(e.target);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [prefersReducedMotion, mouseX, mouseY, updateCursorState]);

  if (!enabled) return null;

  const scale = state === "view" ? 2.5 : state === "link" ? 1.6 : 1;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full bg-accent mix-blend-difference"
      style={{
        width: SIZE,
        height: SIZE,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 20 },
        opacity: { duration: 0.15 },
      }}
    >
      {state === "view" && (
        <span className="text-[5px] font-body font-semibold tracking-wider uppercase text-foreground select-none">
          View
        </span>
      )}
    </motion.div>
  );
}
