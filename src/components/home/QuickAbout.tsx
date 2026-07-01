import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";

export function QuickAbout() {
  return (
    <section className="section-alt border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <SectionHeading
              title="About Me"
              subtitle="Building intelligent systems with data."
            />
            <p className="leading-relaxed text-muted">
              {siteConfig.professionalSummary}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-300 hover:text-secondary"
            >
              Read more about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Card hover={false} variant="light" className="p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Career Objective
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {siteConfig.careerObjective}
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
