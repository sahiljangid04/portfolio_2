import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { createMetadata } from "@/lib/metadata";

/**
 * DYNAMIC ROUTING — Project Detail Page
 *
 * Route: /projects/[slug]
 * Example: /projects/telecom-customer-churn
 *
 * How it works:
 * 1. generateStaticParams() reads all slugs from projects.ts
 * 2. Each slug gets a pre-rendered page at build time
 * 3. getProjectBySlug() loads the matching project data
 * 4. ProjectDetail renders all sections from that object
 *
 * To add a new project: add an object to projects.ts with a unique slug.
 * No changes needed here.
 */

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-generate all project routes from centralized data */
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

/** Dynamic SEO metadata per project */
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found" });
  }

  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${slug}`,
    image: project.thumbnail,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer>
      <ProjectDetail project={project} />
    </PageContainer>
  );
}
