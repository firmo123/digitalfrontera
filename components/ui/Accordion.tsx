"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-8 text-left group"
            >
              <span className={`font-heading text-[1.25rem] md:text-[1.5rem] pr-8 transition-colors duration-300 tracking-[-0.02em] ${isOpen ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                {item.question}
              </span>
              <motion.span
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { rotate: isOpen ? 45 : 0 }
                }
                transition={{ duration: 0.3, ease: EASE }}
                className="text-accent text-2xl flex-shrink-0"
              >
                +
              </motion.span>
            </button>
            {/* CSS grid-template-rows for height transition (no JS height animation) */}
            <div
              className="overflow-hidden"
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: prefersReducedMotion
                  ? "none"
                  : "grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="overflow-hidden">
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: isOpen ? 1 : 0 }
                  }
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <p className="text-muted text-base leading-[1.7] pb-8 pl-0 md:pl-4 max-w-[65ch]">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
