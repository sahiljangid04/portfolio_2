"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "light" | "strong";
}

export function Card({
  children,
  className,
  hover = true,
  variant = "default",
}: CardProps) {
  const glassClass =
    variant === "strong"
      ? "glass-strong glass-reflection"
      : variant === "light"
        ? "glass-light glass-reflection"
        : "glass glass-reflection";

  if (!hover) {
    return (
      <div className={cn("relative overflow-hidden rounded-[20px]", glassClass, className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={spring.smooth}
      className={cn(
        "relative overflow-hidden rounded-[20px] transition-shadow duration-500 hover:shadow-[0_20px_56px_rgba(44,36,24,0.12)]",
        glassClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
