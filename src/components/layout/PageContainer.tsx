import { cn } from "@/lib/utils";

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-5xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36",
        className
      )}
    >
      {children}
    </div>
  );
}
