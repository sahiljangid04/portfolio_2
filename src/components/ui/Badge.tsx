import { cn } from "@/lib/utils";

/**
 * Badge variants:
 * default/category — terracotta tint
 * tech — sage green (technology tags)
 * metric — burgundy (key results)
 */
interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "tech" | "metric";
}

const variants = {
  default:
    "border-secondary/25 bg-secondary-light text-secondary",
  tech:
    "border-primary/25 bg-primary-light text-primary",
  metric:
    "border-highlight/25 bg-highlight-light text-highlight",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
