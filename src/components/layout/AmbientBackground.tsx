"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/** Parallax ambient orbs — warm sage/terracotta tones on beige background */
export function AmbientBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 100]);
  const y2 = useTransform(scrollY, [0, 800], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.65]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
        <div className="absolute -top-[15%] left-[15%] h-[480px] w-[480px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute top-[35%] -right-[5%] h-[380px] w-[380px] rounded-full bg-secondary/8 blur-[90px]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div className="absolute bottom-[5%] left-[25%] h-[320px] w-[320px] rounded-full bg-highlight/5 blur-[80px]" />
      </motion.div>
    </div>
  );
}
