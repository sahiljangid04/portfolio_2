import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected work spanning machine learning, deep learning, and data analytics."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
