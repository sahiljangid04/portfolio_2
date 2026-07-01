"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Calendar,
  Users,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { MediaShowcase } from "@/components/projects/MediaShowcase";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { formatDateRange } from "@/lib/utils";
import type { Project } from "@/types";

/**
 * Full Steam-style project detail layout.
 * All sections rendered dynamically from the Project object passed via dynamic route.
 */
interface ProjectDetailProps {
  project: Project;
}

/** Section with terracotta accent heading */
function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <section className="glass rounded-[24px] p-6 sm:p-8">
        <h2 className="mb-4 border-l-[3px] border-secondary pl-4 text-xl font-semibold text-foreground">
          {title}
        </h2>
        <div className="max-w-none leading-relaxed text-muted">{children}</div>
      </section>
    </ScrollReveal>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div>
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 rounded-[12px] px-3 py-1.5 text-sm text-muted transition-colors duration-300 hover:bg-primary-light hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All Projects
      </Link>

      {/* Header */}
      <ScrollReveal>
        <div className="mb-8">
          <Badge className="mb-3">{project.category}</Badge>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Media showcase */}
      <ScrollReveal>
        <MediaShowcase media={project.media} />
      </ScrollReveal>

      {/* Content sections — data-driven from projects.ts */}
      <div className="mt-12 space-y-5">
        <ContentSection title="Overview">
          <p>{project.overview}</p>
        </ContentSection>

        <ContentSection title="Problem Statement">
          <p>{project.problemStatement}</p>
        </ContentSection>

        <ContentSection title="Features">
          <ul className="list-inside list-disc space-y-2">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection title="Dataset Description">
          <p>{project.datasetDescription}</p>
        </ContentSection>

        <ContentSection title="Methodology">
          <p>{project.methodology}</p>
        </ContentSection>

        <ContentSection title="Model Architecture">
          <p>{project.modelArchitecture}</p>
        </ContentSection>

        <ContentSection title="Results">
          <p>{project.results}</p>
        </ContentSection>

        <ContentSection title="Evaluation Metrics">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.evaluationMetrics.map((metric) => (
              <Card key={metric.label} hover={false} className="border-highlight/20 p-4">
                <p className="text-sm text-muted">{metric.label}</p>
                <p className="mt-1 text-2xl font-bold text-highlight">
                  {metric.value}
                </p>
              </Card>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Challenges Faced">
          <ul className="list-inside list-disc space-y-2">
            {project.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection title="Future Improvements">
          <ul className="list-inside list-disc space-y-2">
            {project.futureImprovements.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </ContentSection>

        {/* Tech stack breakdown */}
        <ContentSection title="Technologies Used">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-sm font-medium text-secondary">
                Libraries
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStackDetails.libraries.map((t) => (
                  <Badge key={t} variant="tech">{t}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-secondary">
                Frameworks
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStackDetails.frameworks.map((t) => (
                  <Badge key={t} variant="tech">{t}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-secondary">
                Tools
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStackDetails.tools.map((t) => (
                  <Badge key={t} variant="tech">{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Links */}
        <ContentSection title="Links">
          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-[14px] px-4 py-2 text-sm text-muted transition-all duration-300 hover:bg-secondary-light hover:text-secondary"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub Repository
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-[14px] px-4 py-2 text-sm text-muted transition-all duration-300 hover:bg-secondary-light hover:text-secondary"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.links.documentation && (
              <a
                href={project.links.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-[14px] px-4 py-2 text-sm text-muted transition-all duration-300 hover:bg-secondary-light hover:text-secondary"
              >
                <FileText className="h-4 w-4" />
                Documentation
              </a>
            )}
          </div>
        </ContentSection>

        {/* Contributors */}
        {project.contributors.length > 0 && (
          <ContentSection title="Contributors">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.contributors.map((c) => (
                <Card key={c.name} className="p-5">
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{c.name}</p>
                      <p className="text-sm text-muted">{c.role}</p>
                      <div className="mt-3 flex gap-3">
                        {c.github && (
                          <a
                            href="https://github.com/sahiljangid04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted transition-colors duration-300 hover:text-primary"
                          >
                            GitHub
                          </a>
                        )}
                        {c.linkedin && (
                          <a
                            href="https://www.linkedin.com/in/sahil-jangid-45018a311/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted transition-colors duration-300 hover:text-primary"
                          >
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ContentSection>
        )}
      </div>
    </div>
  );
}
