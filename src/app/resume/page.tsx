"use client";

import { Download, Printer } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function ResumePage() {
  const handlePrint = () => {
    const frame = document.getElementById("resume-frame") as HTMLIFrameElement;
    frame?.contentWindow?.print();
  };

  return (
    <PageContainer>
      <SectionHeading
        title="Resume"
        subtitle="View, download, or print my resume."
      />

      <div className="mb-6 flex flex-wrap gap-3">
        <Button href={siteConfig.resumePath} size="md">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
        <Button variant="secondary" size="md" onClick={handlePrint}>
          <Printer className="h-4 w-4" />
          Print Resume
        </Button>
      </div>

      <div className="glass-strong overflow-hidden rounded-[24px]">
        <iframe
          id="resume-frame"
          src={siteConfig.resumePath}
          title="Resume"
          className="h-[80vh] w-full bg-white"
        />
      </div>

      <p className="mt-4 text-center text-sm text-subtle">
        If the PDF does not load,{" "}
        <a
          href={siteConfig.resumePath}
          className="text-primary underline transition-colors duration-300 hover:text-secondary"
        >
          download it directly
        </a>
        .
      </p>
    </PageContainer>
  );
}
