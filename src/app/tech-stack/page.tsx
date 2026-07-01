import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillCard } from "@/components/tech-stack/SkillCard";
import { skillCategories } from "@/data/skills";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tech Stack",
  description:
    "Programming languages, ML frameworks, data tools, and technologies I use.",
  path: "/tech-stack",
});

export default function TechStackPage() {
  return (
    <PageContainer>
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I use for data science, machine learning, and development."
      />

      <div className="space-y-6">
        {skillCategories.map((category, catIndex) => (
          <ScrollReveal key={category.id} delay={catIndex * 0.05}>
            <div className="glass overflow-hidden rounded-[24px]">
              <div className="flex items-center gap-3 border-b border-[var(--border)] px-6 py-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </PageContainer>
  );
}
