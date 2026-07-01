import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export function TechStackPreview() {
  const previewSkills = skillCategories
    .flatMap((cat) => cat.skills.slice(0, 2).map((s) => s.name))
    .slice(0, 12);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies I work with daily."
        />

        <ScrollReveal>
          <div className="glass rounded-[24px] p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {previewSkills.map((skill) => (
                <Badge key={skill} variant="tech">
                  {skill}
                </Badge>
              ))}
            </div>

            <Link
              href="/tech-stack"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
            >
              Explore full tech stack
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
