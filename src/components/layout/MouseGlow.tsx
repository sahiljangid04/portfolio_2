"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Subtle warm mouse-follow glow — disabled on touch / reduced motion */
export function MouseGlow() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || touch) return;

    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="absolute h-[420px] w-[420px] rounded-full bg-primary/8 blur-[90px]"
      />
    </motion.div>
  );
}
