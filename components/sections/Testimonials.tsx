"use client";

import FadeIn from "./FadeIn";
import { StaggerChildren, StaggerItem } from "./FadeIn";

const testimonials = [
  {
    quote:
      "Digital Frontera understood my needs from the start. They created a website that clearly presents my services and experience. I am really happy with the result and proud to share my site.",
    name: "Stacey",
    company: "Dental Compliance Team",
  },
  {
    quote:
      "We needed some brand development and a simple site and Digital Frontera went above and beyond and delivered our website in less than a week. Amazing.",
    name: "The Team",
    company: "BMDT",
  },
  {
    quote:
      "What sets Digital Frontera apart is their deep care for the quality of the work and for the impact on the end user. Genuine, solution-oriented, and committed to excellence in everything.",
    name: "Anastasiia Malai",
    company: "Motion Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 border-t border-border section-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn>
          <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-8">
            What our clients say
          </span>
        </FadeIn>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-card border border-border p-6 md:p-8 h-full flex flex-col">
                <blockquote className="text-foreground text-[1rem] leading-[1.7] italic flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-body">
                  <span className="text-foreground font-medium tracking-wide">
                    {t.name}
                  </span>
                  <span className="text-muted font-normal ml-2">
                    {t.company}
                  </span>
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
