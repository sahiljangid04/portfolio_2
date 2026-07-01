"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={spring.snappy}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass-strong fixed bottom-24 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full text-primary shadow-[0_8px_28px_rgba(96,116,86,0.2)] md:bottom-28"
          aria-label="Back to top"
        >
          <ArrowUp className="h-[18px] w-[18px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
