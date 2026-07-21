"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import AccentUnderline from "@/components/ui/AccentUnderline";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("Form submitted");
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    console.log("Form data:", data);

    try {
      console.log("Fetching /api/contact...");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("Fetch response:", res.status, res.statusText);

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }

      const responseBody = await res.json();
      console.log("Response body:", responseBody);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

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
              Get your website <AccentUnderline delay={0.5}>sorted</AccentUnderline>.
            </motion.h1>
          </div>

          <div className="grid md:grid-cols-12 gap-16 mt-10 md:mt-14">
            <div className="md:col-span-4">
              <FadeIn>
                <div className="sticky top-32 space-y-8">
                  <p className="text-muted text-base leading-[1.7] max-w-[65ch]">
                    Fill in the form and we&apos;ll get back to you within a
                    working day. No pressure, no hard sell. Just a conversation
                    about what you need.
                  </p>
                  <div className="border-t border-border pt-8">
                    <span className="text-muted text-xs tracking-[0.15em] uppercase block mb-2">
                      Email us directly
                    </span>
                    <a
                      href="mailto:info@digitalfrontera.com"
                      className="text-accent hover:text-foreground transition-colors text-base font-heading link-underline"
                    >
                      info@digitalfrontera.com
                    </a>
                  </div>
                  <div className="border-t border-border pt-8">
                    <span className="text-muted text-xs tracking-[0.15em] uppercase block mb-2">
                      Based in
                    </span>
                    <p className="text-foreground text-base font-heading">
                      Teesside, North East England
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <FadeIn delay={0.15}>
                {status === "success" ? (
                  <div className="bg-card border border-accent p-8 md:p-12">
                    <p className="text-muted text-base leading-[1.7]">
                      Thanks for the message, we&apos;ll get back to you very
                      soon.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-accent text-sm font-body tracking-wider uppercase mt-6 hover:text-foreground transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    className="space-y-8"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <Input label="Your name" name="name" required />
                      <Input
                        label="Email address"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <Input label="Business name" name="business" />
                      <Input
                        label="Current website URL"
                        name="website"
                        type="url"
                        placeholder="https://"
                      />
                    </div>
                    <Textarea
                      label="Tell us about your project"
                      name="message"
                      required
                      placeholder="What does your business do? What do you need from a website?"
                    />
                    <Input
                      label="How did you hear about us?"
                      name="referral"
                      placeholder="Google, referral, social media..."
                    />

                    {status === "error" && (
                      <p className="text-accent text-sm">
                        {errorMessage}
                      </p>
                    )}

                    <Button type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
