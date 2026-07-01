"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring.smooth, delay: 0.05 }}
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-[20px] px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled ? "glass-strong shadow-[0_8px_40px_rgba(44,36,24,0.1)]" : "glass"
        )}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-primary"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-secondary">.</span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-[12px] px-3 py-1.5 text-[13px] font-medium transition-colors duration-300",
                  isActive(link.href) ? "text-primary" : "text-muted hover:text-foreground"
                )}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-[12px] bg-primary-light"
                    transition={spring.snappy}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-[12px] text-muted transition-colors duration-300 hover:bg-primary-light hover:text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={spring.smooth}
            className="glass-strong mx-auto mt-2 max-w-5xl overflow-hidden rounded-[20px] md:hidden"
          >
            <ul className="flex flex-col gap-0.5 p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-[14px] px-4 py-3 text-[14px] font-medium transition-colors duration-300",
                      isActive(link.href)
                        ? "bg-primary-light text-primary"
                        : "text-muted hover:bg-primary-light/50 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
