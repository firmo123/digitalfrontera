"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/sections/FadeIn";
import { posts } from "@/lib/blog";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Blog() {
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
              Blog
            </motion.h1>
          </div>
          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-base md:text-lg max-w-xl leading-[1.7] mt-8 mb-12"
          >
            Thoughts on web design, small business, and doing things properly.
          </motion.p>

          <div>
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.08}>
                <a
                  href={`/blog/${post.slug}`}
                  className="group grid md:grid-cols-12 gap-4 md:gap-8 py-12 border-b border-border hover:translate-x-4 transition-transform duration-300"
                >
                  <div className="md:col-span-2">
                    <span className="text-muted text-xs tracking-[0.15em] uppercase">
                      {post.date}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="font-heading text-[1.5rem] md:text-[2rem] group-hover:text-accent transition-colors duration-300 leading-[1.2] tracking-[-0.02em]">
                      {post.title}
                    </h2>
                  </div>
                  <div className="md:col-span-4 md:col-start-8">
                    <p className="text-muted text-sm leading-[1.7] md:mt-2 max-w-[65ch]">
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
