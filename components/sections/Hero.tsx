"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import AccentUnderline from "@/components/ui/AccentUnderline";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projectLinks = [
  { name: "Dental Compliance Team", href: "https://www.dentalcomplianceteam.com" },
  { name: "The Box", href: "https://www.theboxredcar.co.uk" },
  { name: "Agni Atlas", href: "https://www.agniatlas.com" },
  { name: "Datavata", href: "https://www.datavata.app" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const lineAnim = prefersReducedMotion
    ? {}
    : { initial: { y: "110%" }, animate: { y: 0 } };

  const fadeAnim = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="min-h-screen flex items-end pb-16 md:pb-24 px-6 md:px-10 pt-32 bg-grid">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Line 1 */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            {...lineAnim}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="font-heading text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[9.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
          >
            Your website,
          </motion.h1>
        </div>
        {/* Line 2 */}
        <div className="overflow-hidden mb-10 md:mb-12">
          <motion.h1
            {...lineAnim}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="font-heading text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[9.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
          >
            <AccentUnderline delay={0.5}>handled</AccentUnderline> properly.
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            {...fadeAnim}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-base md:text-lg max-w-md leading-[1.7]"
          >
            An independent studio. UK-based. We build what we sell, and we
            sell what we build.
          </motion.p>

          <motion.div
            {...fadeAnim}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-4"
          >
            <Button href="/contact">Get in touch</Button>
            <Button href="/services" variant="outline">
              Our services
            </Button>
          </motion.div>
        </div>

        {/* Project strip */}
        <motion.div
          {...fadeAnim}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-2"
        >
          <span className="text-muted text-[10px] tracking-[0.2em] uppercase">
            Selected work
          </span>
          {projectLinks.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-xs tracking-wide hover:text-accent transition-colors duration-300"
            >
              {p.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
