import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="section-alt border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="glass-strong rounded-[28px] p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Let&apos;s work together
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Open to internships and entry-level roles in Data Science, ML, and
              AI. Reach out — I&apos;d love to connect.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                size="lg"
              >
                {siteConfig.email}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
