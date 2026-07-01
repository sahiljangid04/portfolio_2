"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Layers,
  FolderOpen,
  Award,
  FileText,
  Mail,
} from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": Home,
  "/about": User,
  "/tech-stack": Layers,
  "/projects": FolderOpen,
  "/certifications": Award,
  "/resume": FileText,
  "/contact": Mail,
};

/** macOS-style floating dock with warm glass styling */
export function Dock() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring.smooth, delay: 0.4 }}
      className="fixed bottom-5 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      aria-label="Quick navigation dock"
    >
      <div className="glass-strong glass-reflection relative flex items-center gap-1 rounded-[22px] px-3 py-2.5">
        {navLinks.map((link) => {
          const Icon = iconMap[link.href] ?? Home;
          const active = isActive(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-label={link.label}
              aria-current={active ? "page" : undefined}
              className="group relative flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.14, y: -5 }}
                whileTap={{ scale: 0.94 }}
                transition={spring.snappy}
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-[14px] transition-colors duration-300",
                  active
                    ? "bg-primary/15 text-primary shadow-[0_4px_16px_rgba(96,116,86,0.2)]"
                    : "text-muted hover:bg-primary-light hover:text-primary"
                )}
              >
                <Icon className="h-[18px] w-[18px]" />
                {active && (
                  <motion.span
                    layoutId="dock-dot"
                    className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary"
                    transition={spring.snappy}
                  />
                )}
              </motion.div>
              <span className="pointer-events-none absolute -top-10 scale-0 rounded-lg bg-foreground/90 px-2.5 py-1 text-[11px] font-medium text-background opacity-0 backdrop-blur-md transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
