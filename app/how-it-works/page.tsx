"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";
import Accordion from "@/components/ui/Accordion";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import AccentUnderline from "@/components/ui/AccentUnderline";
import LineReveal from "@/components/ui/LineReveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Get in touch",
    description:
      "Fill in the contact form or send us an email. Tell us about your business and what you need.",
  },
  {
    number: "02",
    title: "Discovery call",
    description:
      "We'll have a quick chat to understand your goals, your audience, and what your website needs to do.",
  },
  {
    number: "03",
    title: "Proposal and quote",
    description:
      "You'll receive a clear proposal with exactly what's included, what it costs, and when it'll be ready.",
  },
  {
    number: "04",
    title: "Design and build",
    description:
      "We design and develop your site, keeping you involved with regular updates and feedback rounds.",
  },
  {
    number: "05",
    title: "Review and launch",
    description:
      "You review the finished site. Once you're happy, we launch it and handle all the technical setup.",
  },
  {
    number: "06",
    title: "Ongoing support",
    description:
      "Your site is hosted, maintained, and supported. You can reach us whenever you need changes or help.",
  },
];

const faqs = [
  {
    question: "How long does a website take to build?",
    answer:
      "Most standard sites are live within a few weeks of starting. Larger or more complex projects may take longer, but we'll always give you a clear timeline upfront.",
  },
  {
    question: "Do I need to provide content?",
    answer:
      "It helps if you have some content ready, but we can work with you on copy, images, and structure. We'll guide you through what's needed.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "If you want to, yes. But most of our clients prefer to let us handle updates as part of their monthly plan. Either way works.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can redesign and rebuild your existing site, or start fresh. We'll look at what you have and recommend the best approach.",
  },
  {
    question: "Do you work with businesses outside the North East?",
    answer:
      "Yes. We're from Teesside but we work with businesses across the UK. Everything can be handled remotely.",
  },
  {
    question: "What happens if I want to cancel the monthly plan?",
    answer:
      "You can cancel anytime with 30 days' notice. Your website is yours. We'll help you transition to another host if needed.",
  },
];

function PinnedSteps({
  steps,
}: {
  steps: { number: string; title: string; description: string }[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Track which step row is at mid-viewport
  useEffect(() => {
    const refs = stepRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveStep(idx);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Mobile: stacked with ghost numbers */}
        <div className="md:hidden space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div>
                <span className="text-accent font-heading text-[4rem] leading-[1] tracking-[-0.02em] opacity-20 block mb-2">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl leading-[1.1] tracking-[-0.02em] mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: pinned left column + scrolling right column */}
        <div className="hidden md:grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 sticky top-32 self-start">
            <motion.span
              key={activeStep}
              initial={
                prefersReducedMotion ? undefined : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="text-accent font-heading text-[8rem] leading-[1] tracking-[-0.02em] block"
            >
              {steps[activeStep].number}
            </motion.span>

            {/* Progress line */}
            <div className="mt-6 w-[1px] h-40 bg-border relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-accent"
                style={{ height: progressHeight }}
              />
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`py-16 transition-opacity duration-500 ${
                  activeStep === i ? "opacity-100" : "opacity-[0.35]"
                }`}
              >
                <span className="text-accent text-xs font-body tracking-[0.2em] uppercase block mb-3">
                  Step {step.number}
                </span>
                <h3 className="font-heading text-xl md:text-2xl leading-[1.1] tracking-[-0.02em] mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-[1.7] max-w-[55ch]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HowItWorks() {
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
              How it <AccentUnderline delay={0.5}>works</AccentUnderline>
            </motion.h1>
          </div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-base md:text-lg max-w-xl leading-[1.7] mt-8"
          >
            From first contact to launch. Clear, transparent, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Steps — pinned scroll sequence */}
      <PinnedSteps steps={steps} />

      {/* FAQ */}
      <section className="py-12 md:py-20 px-6 md:px-10 border-t border-border section-cream">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
                FAQ
              </span>
            </FadeIn>
            <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] font-normal leading-[1.1] tracking-[-0.02em] sticky top-32" delay={0.15}>
              <span>Frequently asked</span>
              <span><AccentUnderline>questions</AccentUnderline></span>
            </LineReveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <FadeIn delay={0.15}>
              <Accordion items={faqs} />
            </FadeIn>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
