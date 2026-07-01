"use client";

import { motion } from "framer-motion";

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex min-h-[40vh] items-center justify-center"}>
      <motion.div className="relative h-10 w-10" aria-label="Loading">
        <div className="absolute inset-0 rounded-full border-2 border-primary/15" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
