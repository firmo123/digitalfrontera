"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/sections/FadeIn";
import CTA from "@/components/sections/CTA";
import AccentUnderline from "@/components/ui/AccentUnderline";
import LineReveal from "@/components/ui/LineReveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    number: "01",
    title: "Website design and build",
    description:
      "A clean, professional website designed around your business. We handle everything from layout and copy to development and launch. You get something you're proud of, that actually works for your customers.",
  },
  {
    number: "02",
    title: "Hosting and ongoing care",
    description:
      "Your website stays fast, secure, and up to date. We handle hosting, updates, backups, and any changes you need. You never have to think about the technical side.",
  },
];

const projects = [
  {
    title: "The Dental Compliance Team",
    category: "Professional Services",
    link: "https://www.dentalcomplianceteam.com",
  },
  {
    title: "The Box",
    category: "Fitness & Community",
    link: "https://www.theboxredcar.co.uk",
  },
  {
    title: "Agni Atlas",
    category: "Wellness & Self-Discovery",
    link: "https://www.agniatlas.com",
  },
  {
    title: "Datavata",
    category: "Fitness Analytics & Insights",
    link: "https://www.datavata.app",
  },
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={prefersReducedMotion ? undefined : { y: "110%" }}
              animate={!prefersReducedMotion ? { y: 0 } : undefined}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-heading text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
            >
              What we <AccentUnderline delay={0.5}>do</AccentUnderline>
            </motion.h1>
          </div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-base md:text-lg max-w-xl leading-[1.7] mt-8"
          >
            We design and build websites for small businesses, and we look after
            them properly. That&apos;s it.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.15}>
              <div
                className={`grid md:grid-cols-12 gap-8 py-16 ${
                  i < services.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="md:col-span-1">
                  <span className="text-accent font-heading text-3xl">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-heading text-[2rem] md:text-[2.5rem] font-normal leading-[1.1] tracking-[-0.02em]">
                    {service.title}
                  </h2>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-muted text-base leading-[1.7] max-w-[65ch]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-4">
            <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
              Portfolio
            </span>
          </FadeIn>
          <div className="mb-16">
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.05] tracking-[-0.02em]" delay={0.15}>
              <span>Recent <AccentUnderline>projects</AccentUnderline></span>
            </LineReveal>
          </div>
          <StaggerChildren className="space-y-0" staggerDelay={0.08}>
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-8 border-b border-border hover:translate-x-4 transition-transform duration-300"
                >
                  <div>
                    <h3 className="font-heading text-[1.5rem] md:text-[2rem] group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-muted text-xs tracking-[0.15em] uppercase mt-1 block">
                      {project.category}
                    </span>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-[color,transform] duration-300 flex-shrink-0"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <FadeIn>
              <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
                Philosophy
              </span>
            </FadeIn>
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.1] tracking-[-0.02em]" delay={0.15}>
              <span>Keep it <AccentUnderline>simple</AccentUnderline></span>
            </LineReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <FadeIn delay={0.15}>
              <div className="space-y-6 text-muted text-base leading-[1.7] max-w-[65ch]">
                <p>
                  Most small businesses don&apos;t need a complex website. They
                  need something clean, professional, and easy to manage, built
                  by someone who actually cares whether it works.
                </p>
                <p>
                  We don&apos;t bolt on features you&apos;ll never use. We
                  don&apos;t disappear after launch. And we don&apos;t charge
                  you for things you don&apos;t need.
                </p>
                <p>
                  Every site we build is designed to help your business. That
                  means clear information, fast loading, mobile-friendly, and
                  easy for you to keep updated with our support.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
