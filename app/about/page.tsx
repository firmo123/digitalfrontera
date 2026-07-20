"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";
import CTA from "@/components/sections/CTA";
import AccentUnderline from "@/components/ui/AccentUnderline";
import LineReveal from "@/components/ui/LineReveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const values = [
  {
    title: "Clarity over complexity",
    description:
      "Your website should be easy to understand, easy to navigate, and easy to manage.",
  },
  {
    title: "Honest communication",
    description:
      "No jargon, no upselling. We tell you what you need and what you don't.",
  },
  {
    title: "Long-term support",
    description:
      "We don't disappear after launch. Your website is looked after properly.",
  },
  {
    title: "Real results",
    description:
      "Every decision is made to help your business, not to pad out a portfolio.",
  },
];

const worksWith = [
  "Dental practices",
  "Gyms & fitness studios",
  "Wellness practitioners",
  "Trades & services",
  "Professional services",
  "Local retailers",
];

export default function About() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={prefersReducedMotion ? undefined : { y: "110%" }}
              animate={!prefersReducedMotion ? { y: 0 } : undefined}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-heading text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
            >
              Built by someone who
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={prefersReducedMotion ? undefined : { y: "110%" }}
              animate={!prefersReducedMotion ? { y: 0 } : undefined}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              className="font-heading text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
            >
              <AccentUnderline delay={0.5}>understands</AccentUnderline> your business.
            </motion.h1>
          </div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-base md:text-lg max-w-xl leading-[1.7]"
          >
            Digital Frontera is an independent web studio from Teesside,
            working with businesses across the UK. We build simple, professional
            websites for small businesses, and we stick around to make sure they
            keep working.
          </motion.p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.05] tracking-[-0.02em]" delay={0.15}>
              <span>We <AccentUnderline>work with</AccentUnderline></span>
            </LineReveal>
          </div>

          <div className="border-t border-border">
            {worksWith.map((item, i) => (
              <FadeIn key={item} delay={i * 0.06}>
                <div className="group border-b border-border py-5 md:py-6 flex items-center gap-6 md:gap-10 transition-colors duration-300 hover:bg-accent px-4 md:px-6 -mx-4 md:-mx-6">
                  <span className="text-muted text-xs font-body tracking-[0.2em] transition-colors duration-300 group-hover:text-background">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-xl md:text-[2.5rem] leading-[1.1] tracking-[-0.02em] flex-1 transition-colors duration-300 group-hover:text-background">
                    {item}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="hidden md:block opacity-0 translate-x-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-background"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How we work + Values */}
      <section
        ref={parallaxRef}
        className="py-12 md:py-20 px-6 md:px-10 border-t border-border"
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <FadeIn>
              <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
                Our approach
              </span>
            </FadeIn>
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.05] tracking-[-0.02em] mb-8" delay={0.15}>
              <span>How we <AccentUnderline>work</AccentUnderline></span>
            </LineReveal>
            <FadeIn delay={0.3}>
              <p className="text-muted text-base leading-[1.7] max-w-[65ch]">
                You tell us about your business, we design and build something
                that works, and then we look after it for you. No committees, no
                six-month timelines, no surprises.
              </p>
            </FadeIn>
          </div>
          <motion.div
            className="md:col-span-6 md:col-start-7 md:pt-20"
            style={prefersReducedMotion ? undefined : { y }}
          >
            <FadeIn delay={0.15}>
              <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-8">
                What we value
              </span>
              <div className="space-y-8">
                {values.map((v) => (
                  <div key={v.title} className="border-l border-border pl-6">
                    <h3 className="text-foreground font-heading text-xl mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted text-sm leading-[1.7] max-w-[65ch]">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
              Meet the founder
            </span>
          </FadeIn>
          <div className="grid md:grid-cols-12 gap-16 mt-8">
            <div className="md:col-span-4">
              <LineReveal as="h2" className="font-heading text-[3rem] md:text-[4rem] font-normal leading-[1.05] tracking-[-0.02em] sticky top-32">
                <span>Lee</span>
                <span><AccentUnderline>Firman</AccentUnderline></span>
              </LineReveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.15}>
                <div className="space-y-6 text-muted text-base leading-[1.7] max-w-[65ch]">
                  <p className="text-foreground text-lg leading-[1.7]">
                    I understand small business owners because I&apos;ve been one.
                  </p>
                  <p>
                    Over the years I&apos;ve built and scaled my own online
                    businesses, including Feetus, a barefoot shoe e-commerce
                    brand that grew to over &pound;1 million turnover before
                    acquisition. I&apos;ve also built training platforms from the
                    ground up, including Apolline Training, which was acquired by
                    Dentistry.co.uk.
                  </p>
                  <p>
                    What I kept seeing was small businesses wasting money on
                    websites that were too complicated to manage, or abandoned
                    entirely after launch. Businesses like a gym in Redcar that
                    had been running for seven years with no online presence at
                    all, missing customers every single day.
                  </p>
                  <p>
                    So I started Digital Frontera to do the opposite. Simple,
                    professional websites that are easy to manage, built by
                    someone who understands your business, with proper ongoing
                    support so they don&apos;t just gather dust after day one.
                  </p>
                  <p>
                    No unnecessary features. No over-promising. No disappearing
                    after launch.
                  </p>
                  <p className="text-foreground font-heading text-xl italic">
                    If you want a website that does what it should, let&apos;s
                    talk.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Want to work together?"
        subtext="Get in touch and let's talk about your project."
      />
    </>
  );
}
