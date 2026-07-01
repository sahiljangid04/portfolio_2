import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { formatDateRange } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: `Learn more about ${siteConfig.name} — background, education, experience, and career goals.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionHeading
        title="About Me"
        subtitle="Data science fresher passionate about ML, AI, and building data-driven solutions."
      />

      <ScrollReveal>
        <p className="max-w-3xl leading-relaxed text-muted">
          {siteConfig.professionalSummary}
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-12">
        <Card hover={false} variant="light" className="p-6">
          <h3 className="text-lg font-semibold text-foreground">Career Objective</h3>
          <p className="mt-3 leading-relaxed text-muted">
            {siteConfig.careerObjective}
          </p>
        </Card>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-foreground">Education</h3>
        <div className="relative space-y-4 pl-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-primary/20">
          {education.map((edu) => (
            <div key={edu.id} className="relative">
              <div className="absolute -left-6 top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
              <Card hover={false} variant="light" className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-subtle">
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </p>
                </div>
                <p className="mt-3 text-sm text-muted">{edu.description}</p>
                <ul className="mt-3 list-inside list-disc text-sm text-subtle">
                  {edu.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-foreground">
          Internship Experience
        </h3>
        <div className="relative space-y-4 pl-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-secondary/25">
          {experience.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="absolute -left-6 top-6 h-3.5 w-3.5 rounded-full border-2 border-secondary bg-background" />
              <Card hover={false} variant="light" className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-muted">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-subtle">
                    {formatDateRange(exp.startDate, exp.endDate)}
                  </p>
                </div>
                <p className="mt-3 text-sm text-muted">{exp.description}</p>
                <ul className="mt-3 list-inside list-disc text-sm text-subtle">
                  {exp.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-foreground">Skills Overview</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <Card key={cat.id} hover={false} variant="light" className="p-5">
              <h4 className="font-medium text-primary">{cat.title}</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <Badge key={s.name} variant="tech">
                    {s.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {siteConfig.interests.map((interest) => (
            <Badge key={interest}>{interest}</Badge>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-16">
        <h3 className="mb-6 text-xl font-semibold text-foreground">Career Goals</h3>
        <Card hover={false} variant="light" className="p-6">
          <ul className="space-y-3">
            {siteConfig.careerGoals.map((goal) => (
              <li
                key={goal}
                className="flex items-start gap-3 text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                {goal}
              </li>
            ))}
          </ul>
        </Card>
      </ScrollReveal>
    </PageContainer>
  );
}
