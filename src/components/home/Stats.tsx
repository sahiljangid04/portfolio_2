"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Stats() {
  const { stats } = siteConfig;

  const items = [
    { value: stats.projects, label: "Projects Completed", suffix: "+" },
    { value: stats.certifications, label: "Certifications", suffix: "" },
    { value: stats.internships, label: "Internship Experience", suffix: "" },
    { value: stats.technologies, label: "Technologies Learned", suffix: "+" },
  ];

  return (
    <section className="section-alt border-y border-[var(--border)] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-[24px] md:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="glass-light flex flex-col items-center justify-center px-4 py-8"
              >
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
