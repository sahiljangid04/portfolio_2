"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
