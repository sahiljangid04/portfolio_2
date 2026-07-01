import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[16px] bg-primary/10",
        className
      )}
      aria-hidden="true"
    />
  );
}
