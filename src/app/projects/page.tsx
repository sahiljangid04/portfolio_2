import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Machine learning, deep learning, NLP, and data analytics projects.",
  path: "/projects",
});

/**
 * Projects gallery — all cards auto-generated from projects.ts data.
 */
export default function ProjectsPage() {
  return (
    <PageContainer>
      <SectionHeading
        title="Projects"
        subtitle="End-to-end data science and machine learning projects with detailed case studies."
      />
      <ProjectGallery />
    </PageContainer>
  );
}
