/**
 * Shared Framer Motion spring configs — Apple-style smooth physics.
 */
export const spring = {
  smooth: { type: "spring" as const, stiffness: 260, damping: 28 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 32 },
  gentle: { type: "spring" as const, stiffness: 180, damping: 24 },
  elastic: { type: "spring" as const, stiffness: 320, damping: 22, mass: 0.8 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};
