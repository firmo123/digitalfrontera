"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface CTAProps {
  heading?: string;
  subtext?: string;
}

export default function CTA({
  heading = "Ready to get started?",
  subtext = "Let's build something that works for your business.",
}: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-6 md:px-10 border-t border-border bg-grid"
    >
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={prefersReducedMotion ? undefined : { y: "110%" }}
            animate={
              isInView && !prefersReducedMotion ? { y: 0 } : undefined
            }
            transition={{ duration: 0.6, ease: EASE }}
            className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-normal tracking-[-0.02em]"
          >
            {heading}
          </motion.h2>
        </div>
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={
            isInView && !prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : undefined
          }
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="text-muted text-base md:text-lg mb-12 max-w-xl mx-auto leading-[1.7]"
        >
          {subtext}
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={
            isInView && !prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : undefined
          }
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="flex justify-center gap-4"
        >
          <Button href="/contact">Get in touch</Button>
          <Button href="/pricing" variant="outline">
            View pricing
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
