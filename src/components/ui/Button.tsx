"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "highlight";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover shadow-[0_4px_20px_rgba(96,116,86,0.25)]",
  secondary:
    "bg-secondary text-white border border-secondary hover:bg-secondary-hover hover:border-secondary-hover shadow-[0_4px_20px_rgba(186,106,76,0.2)]",
  highlight:
    "bg-highlight text-white border border-highlight hover:bg-highlight-hover hover:border-highlight-hover shadow-[0_4px_20px_rgba(123,37,37,0.2)]",
  ghost:
    "glass-light text-muted border-[var(--border)] hover:text-foreground hover:bg-primary-light",
};

const sizes = {
  sm: "px-4 py-2 text-[13px] rounded-[12px]",
  md: "px-6 py-2.5 text-[14px] rounded-[14px]",
  lg: "px-8 py-3.5 text-[15px] rounded-[16px]",
};

const motionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: spring.snappy,
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-flex">
      <button type={type} className={classes} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </motion.div>
  );
}
