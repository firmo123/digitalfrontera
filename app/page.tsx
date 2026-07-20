"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FadeIn from "@/components/sections/FadeIn";
import Marquee from "@/components/ui/Marquee";
import AccentUnderline from "@/components/ui/AccentUnderline";
import LineReveal from "@/components/ui/LineReveal";

function IntroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-6">
          <LineReveal as="h2" className="font-heading text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-normal leading-[1.1] tracking-[-0.02em]">
            <span>No unnecessary features.</span>
            <span>No <AccentUnderline>disappearing</AccentUnderline></span>
            <span>after launch.</span>
          </LineReveal>
        </div>

        <motion.div
          className="md:col-span-5 md:col-start-8"
          style={prefersReducedMotion ? undefined : { y }}
        >
          <FadeIn delay={0.15}>
            <div className="border-l border-border pl-8">
              <p className="text-muted text-base leading-[1.7] mb-4 max-w-[65ch]">
                We build simple, professional websites for small businesses that
                are easy to manage, with proper ongoing support so they
                don&apos;t just gather dust after day one.
              </p>
              <p className="text-muted text-base leading-[1.7] max-w-[65ch]">
                No committees. No six-month timelines. No jargon.
              </p>
            </div>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <IntroSection />
      <ProjectGrid />

      <section className="py-12 md:py-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <FadeIn>
            <p className="font-heading text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-muted leading-[1.3] tracking-[-0.02em] max-w-[55ch] text-center">
              Most of what we build is straightforward: a professional website
              that does what it should, built right. Occasionally we build
              something more ambitious: platforms, tools, complete systems.
              Either way, you&apos;re working with someone who ships their own
              products, not just client work.
            </p>
          </FadeIn>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
