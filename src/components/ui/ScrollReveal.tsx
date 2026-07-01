"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...spring.gentle, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
