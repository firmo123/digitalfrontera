"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-card border border-border p-6 md:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
