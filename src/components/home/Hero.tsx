"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { spring } from "@/lib/motion";

/** Apple product-page hero with floating avatar, glass cards, parallax */
export function Hero() {
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 400], [0, 70]);
  const avatarY = useTransform(scrollY, [0, 400], [0, -35]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.35]);

  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden px-4 pt-28 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <motion.div style={{ y: headlineY, opacity }} className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring.smooth, delay: 0.1 }}
            className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-secondary"
          >
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring.smooth, delay: 0.2 }}
            className="text-[40px] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-[56px] lg:text-[64px]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring.smooth, delay: 0.32 }}
            className="mt-5 text-[19px] font-medium leading-snug text-muted sm:text-[21px]"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring.smooth, delay: 0.42 }}
            className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-subtle lg:mx-0"
          >
            {siteConfig.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring.smooth, delay: 0.52 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button href="/projects" size="lg">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={siteConfig.resumePath} variant="secondary" size="lg">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: avatarY }}
          className="relative mx-auto flex flex-col items-center lg:mx-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ ...spring.elastic, delay: 0.28 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong glass-reflection relative flex h-36 w-36 items-center justify-center rounded-full border border-primary/25 sm:h-44 sm:w-44"
            >
              <span className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {initials}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring.smooth, delay: 0.65 }}
            className="glass glass-reflection absolute -right-2 top-6 hidden rounded-[16px] px-4 py-3 sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-subtle">
              Projects
            </p>
            <p className="text-xl font-semibold text-primary">
              {siteConfig.stats.projects}+
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring.smooth, delay: 0.78 }}
            className="glass glass-reflection absolute -left-6 bottom-2 hidden rounded-[16px] px-4 py-3 sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-subtle">
              Open to work
            </p>
            <p className="text-sm font-medium text-secondary">Internships</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
