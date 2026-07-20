"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Privacy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="overflow-hidden mb-16">
          <motion.h1
            initial={prefersReducedMotion ? undefined : { y: "110%" }}
            animate={!prefersReducedMotion ? { y: 0 } : undefined}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="font-heading text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-normal leading-[1.05] tracking-[-0.02em]"
          >
            Privacy Policy
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 md:col-start-4">
            <FadeIn>
              <div className="space-y-12 text-muted text-base leading-[1.7] max-w-[65ch]">
                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    Who we are
                  </h2>
                  <p>
                    Digital Frontera is an independent web studio from Teesside,
                    North East England. Our website address is
                    digitalfrontera.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    What data we collect
                  </h2>
                  <p>
                    When you contact us through our website form, we collect your
                    name, email address, business name, and any other information
                    you choose to provide in your message. We use this
                    information solely to respond to your enquiry.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    How we use your data
                  </h2>
                  <p>
                    We use the information you provide to respond to your
                    enquiry, to communicate with you about potential or ongoing
                    projects, and to provide our services. We do not sell, rent,
                    or share your personal information with third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    Cookies
                  </h2>
                  <p>
                    We use analytics cookies (Google Analytics) to understand how
                    visitors use our website. These cookies collect information
                    anonymously. You can opt out of Google Analytics by installing
                    the browser add-on.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    Data retention
                  </h2>
                  <p>
                    We retain contact form submissions for as long as necessary
                    to respond to your enquiry and for our legitimate business
                    interests. You can request deletion of your data at any time
                    by emailing info@digitalfrontera.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    Your rights
                  </h2>
                  <p>
                    Under UK GDPR, you have the right to access, correct, or
                    delete your personal data. You also have the right to object
                    to processing and to data portability. To exercise any of
                    these rights, contact us at info@digitalfrontera.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-heading text-[1.5rem] mb-4">
                    Contact
                  </h2>
                  <p>
                    For any questions about this privacy policy, email us at{" "}
                    <a
                      href="mailto:info@digitalfrontera.com"
                      className="text-accent hover:text-foreground transition-colors link-underline"
                    >
                      info@digitalfrontera.com
                    </a>
                    .
                  </p>
                </div>

                <p className="text-xs text-muted/60 pt-8 border-t border-border">
                  Last updated: July 2026
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
