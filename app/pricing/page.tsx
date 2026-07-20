"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/sections/FadeIn";
import CTA from "@/components/sections/CTA";
import AccentUnderline from "@/components/ui/AccentUnderline";
import LineReveal from "@/components/ui/LineReveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const buildTiers = [
  {
    name: "Standard",
    price: "\u00a3750 to \u00a31,000",
    description: "For small businesses that need a professional online presence.",
    features: [
      "4\u20136 pages",
      "Mobile-friendly design",
      "Contact form",
      "Full launch support",
    ],
  },
  {
    name: "Larger / Specialist",
    price: "\u00a31,500 to \u00a310,000",
    description: "For businesses with more complex requirements.",
    features: [
      "6+ pages",
      "Custom functionality",
      "Advanced integrations",
      "E-commerce or booking systems",
      "Content strategy support",
      "Priority development",
    ],
  },
];

const supportTiers = [
  {
    name: "Hosting Only",
    price: "\u00a360",
    period: "/month",
    features: [
      "Fast, secure hosting",
      "SSL certificate",
      "Daily backups",
      "Uptime monitoring",
    ],
  },
  {
    name: "Hosting + Management",
    price: "\u00a375",
    period: "/month",
    features: [
      "Everything in Hosting Only",
      "Content updates",
      "Software updates",
      "Monthly report",
    ],
  },
  {
    name: "Hosting + Management + Growth",
    price: "\u00a3149",
    period: "/month",
    popular: true,
    features: [
      "Everything in Management",
      "SEO improvements",
      "Performance optimisation",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={prefersReducedMotion ? undefined : { y: "110%" }}
              animate={!prefersReducedMotion ? { y: 0 } : undefined}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-heading text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
            >
              Simple, <AccentUnderline delay={0.5}>honest</AccentUnderline> pricing.
            </motion.h1>
          </div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-base md:text-lg max-w-xl leading-[1.7] mt-8"
          >
            No hidden costs. No surprise invoices. You know exactly what
            you&apos;re paying for.
          </motion.p>
        </div>
      </section>

      {/* Build tiers */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-4">
            <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
              One-off
            </span>
          </FadeIn>
          <div className="mb-16">
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.05] tracking-[-0.02em]" delay={0.15}>
              <span>Website <AccentUnderline>build</AccentUnderline></span>
            </LineReveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {buildTiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.08}>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border p-8 md:p-12 h-full flex flex-col"
                >
                  <h3 className="font-heading text-[1.75rem] md:text-[2rem] mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-accent font-heading text-[2.5rem] md:text-[3rem] mb-2 tracking-[-0.02em]">
                    {tier.price}
                  </p>
                  <p className="text-muted text-sm mb-10">{tier.description}</p>
                  <ul className="space-y-4 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="text-foreground text-sm flex items-start gap-3"
                      >
                        <span className="text-accent text-xs mt-1">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.16}>
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-accent p-8 md:p-12 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div>
                <h3 className="font-heading text-[1.75rem] md:text-[2rem] mb-3">
                  Custom &amp; Ambitious
                </h3>
                <p className="text-muted text-sm max-w-lg">
                  Projects that need custom development, platforms, or
                  multi-month builds.
                </p>
              </div>
              <a
                href="/contact"
                className="text-accent text-sm font-body tracking-wider uppercase inline-flex items-center gap-2 hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                Let&apos;s talk
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Support tiers */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border section-cream">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-4">
            <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
              Monthly
            </span>
          </FadeIn>
          <div className="mb-16">
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.05] tracking-[-0.02em]" delay={0.15}>
              <span>Ongoing <AccentUnderline>support</AccentUnderline></span>
            </LineReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
            {supportTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-card border p-8 md:p-10 h-full flex flex-col ${
                    tier.popular ? "border-accent" : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="text-accent text-[10px] tracking-[0.2em] uppercase mb-6 block font-body">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-heading text-[1.5rem] mb-3">
                    {tier.name}
                  </h3>
                  <p className="mb-8">
                    <span className="text-accent font-heading text-[2.5rem] tracking-[-0.02em]">
                      {tier.price}
                    </span>
                    <span className="text-muted text-sm">{tier.period}</span>
                  </p>
                  <ul className="space-y-4 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="text-foreground text-sm flex items-start gap-3"
                      >
                        <span className="text-accent text-xs mt-1">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.1] tracking-[-0.02em]">
              <span>What to <AccentUnderline>expect</AccentUnderline></span>
            </LineReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <FadeIn delay={0.15}>
              <div className="space-y-6 text-muted text-base leading-[1.7] max-w-[65ch]">
                <p>
                  You&apos;ll get a clear quote before any work starts. No
                  surprises, no scope creep charges, no awkward conversations
                  about invoices.
                </p>
                <p>
                  The build price covers design, development, content setup, and
                  launch. The monthly plan keeps everything running and gives you
                  ongoing support whenever you need it.
                </p>
                <p>
                  If your project doesn&apos;t fit neatly into these tiers,
                  that&apos;s fine. Get in touch and we&apos;ll work out
                  something that makes sense for your business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTA
        heading="Let's talk about your project."
        subtext="Get a clear quote with no obligation."
      />
    </>
  );
}
