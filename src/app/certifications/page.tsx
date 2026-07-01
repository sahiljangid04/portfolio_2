"use client";

import { useMemo, useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import {
  certifications,
  getCertificationCategories,
} from "@/data/certifications";

/**
 * Certifications page with category filter.
 * Data rendered from certifications.ts — copy an object to add new certs.
 */
export default function CertificationsPage() {
  const [category, setCategory] = useState("all");
  const categories = useMemo(() => getCertificationCategories(), []);

  const filtered = useMemo(() => {
    if (category === "all") return certifications;
    return certifications.filter((c) => c.category === category);
  }, [category]);

  return (
    <PageContainer>
      <SectionHeading
        title="Courses & Certifications"
        subtitle="Professional certifications in data science, machine learning, and related technologies."
      />

      <div className="glass mb-8 inline-block rounded-[14px] p-1">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-warm rounded-[12px] bg-transparent px-4 py-2.5 text-sm"
          aria-label="Filter by category"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert, i) => (
          <ScrollReveal key={cert.id} delay={(i % 3) * 0.08}>
            <CertificationCard certification={cert} />
          </ScrollReveal>
        ))}
      </div>
    </PageContainer>
  );
}
