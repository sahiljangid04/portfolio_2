import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCards } from "@/components/contact/ContactCards";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for internships and opportunities.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer>
      <SectionHeading
        title="Contact"
        subtitle="Have a question or opportunity? I'd love to hear from you."
      />

      <div className="glass-strong rounded-[28px] p-6 sm:p-8">
        <ContactCards />
      </div>
    </PageContainer>
  );
}
