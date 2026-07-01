"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={spring.smooth}
      className={cn("mb-10", align === "center" && "text-center", className)}
    >
      <h2 className="text-[28px] font-semibold tracking-tight text-foreground sm:text-[34px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-muted">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-5 h-px w-16 bg-gradient-to-r from-primary via-secondary/60 to-transparent",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
