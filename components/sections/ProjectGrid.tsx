"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import FadeIn from "./FadeIn";
import AccentUnderline from "@/components/ui/AccentUnderline";
import LineReveal from "@/components/ui/LineReveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ProjectMedia {
  image: string;
  video?: {
    webm: string;
    mp4: string;
    poster: string;
  };
}

interface Project {
  title: string;
  tag: "CLIENT" | "LAB";
  category: string;
  description: string;
  link: string;
  media: ProjectMedia;
}

const projects: Project[] = [
  {
    title: "The Dental Compliance Team",
    tag: "CLIENT",
    category: "Professional Services",
    description:
      "A multi-page professional services site with clear information architecture, tiered service offerings, and client testimonials. Built to establish trust and showcase expertise to dental practices.",
    link: "https://www.dentalcomplianceteam.com",
    media: {
      image: "/videos/dental-compliance-team-poster.jpg",
      video: {
        webm: "/videos/dental-compliance-team.webm",
        mp4: "/videos/dental-compliance-team.mp4",
        poster: "/videos/dental-compliance-team-poster.jpg",
      },
    },
  },
  {
    title: "The Box",
    tag: "CLIENT",
    category: "Fitness & Community",
    description:
      "A neighbourhood gym website with integrated class scheduling, member testimonials, and community-first positioning. Built to convert local prospects into members.",
    link: "https://www.theboxredcar.co.uk",
    media: {
      image: "/videos/the-box-poster.jpg",
      video: {
        webm: "/videos/the-box.webm",
        mp4: "/videos/the-box.mp4",
        poster: "/videos/the-box-poster.jpg",
      },
    },
  },
  {
    title: "Agni Atlas",
    tag: "LAB",
    category: "Wellness & Self-Discovery",
    description:
      "A free Ayurvedic constitution assessment designed for complete beginners. Clean, accessible, and built to turn ancient wisdom into something practical for modern life.",
    link: "https://www.agniatlas.com",
    media: {
      image: "/videos/agni-atlas-poster.jpg",
      video: {
        webm: "/videos/agni-atlas.webm",
        mp4: "/videos/agni-atlas.mp4",
        poster: "/videos/agni-atlas-poster.jpg",
      },
    },
  },
  {
    title: "Datavata",
    tag: "LAB",
    category: "Fitness Analytics & Insights",
    description:
      "A Strava companion app for athletes who want more than raw numbers. Activity maps, year-over-year comparisons, and personal records tracking.",
    link: "https://www.datavata.app",
    media: {
      image: "/videos/datavata-poster.jpg",
      video: {
        webm: "/videos/datavata.webm",
        mp4: "/videos/datavata.mp4",
        poster: "/videos/datavata-poster.jpg",
      },
    },
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay video when card scrolls into view
  useEffect(() => {
    const video = videoRef.current;
    const card = ref.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      animate={
        isInView && !prefersReducedMotion ? { opacity: 1, y: 0 } : undefined
      }
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: EASE,
      }}
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer"
        data-cursor="view"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={
            hovered && !prefersReducedMotion
              ? { y: -4 }
              : { y: 0 }
          }
          transition={{ duration: 0.4, ease: EASE }}
          className="relative overflow-hidden bg-card border border-border"
        >
          {/* Media container */}
          <div className="relative w-full overflow-hidden aspect-[16/10]">
            {/* Static poster image (fallback while video loads) */}
            <motion.div
              animate={
                hovered && !prefersReducedMotion
                  ? { scale: 1.04 }
                  : { scale: 1 }
              }
              transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-0"
            >
              <img
                src={
                  project.media.video
                    ? project.media.video.poster
                    : project.media.image
                }
                alt={project.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>

            {/* Video — autoplay when in view */}
            {project.media.video && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={project.media.video.poster}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src={project.media.video.webm}
                    type="video/webm"
                  />
                  <source
                    src={project.media.video.mp4}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-500" />
          </div>

          {/* Content below media */}
          <div className="p-6 md:p-8">
            <span className="text-foreground/50 text-[10px] font-body tracking-[0.2em] uppercase block mb-1">
              {project.tag}
            </span>
            <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-3">
              {project.category}
            </span>
            <motion.h3
              animate={
                hovered && !prefersReducedMotion
                  ? { x: 6 }
                  : { x: 0 }
              }
              transition={{ duration: 0.4, ease: EASE }}
              className="font-heading text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors duration-300"
            >
              {project.title}
            </motion.h3>
            <p className="text-muted text-sm leading-[1.7] mb-4 max-w-[65ch]">
              {project.description}
            </p>
            <span className="text-foreground text-xs font-body tracking-wider uppercase inline-flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
              View project
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ProjectGrid() {
  return (
    <section className="py-12 md:py-20 px-0 md:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="px-6 md:px-10 mb-12">
          <FadeIn>
            <span className="text-accent text-[11px] font-body tracking-[0.2em] uppercase block mb-4">
              Selected work
            </span>
          </FadeIn>
          <LineReveal as="h2" className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal leading-[1.05] tracking-[-0.02em]" delay={0.15}>
            <span>Recent <AccentUnderline>projects</AccentUnderline></span>
          </LineReveal>
        </div>

        {/* Uniform 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 md:px-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
