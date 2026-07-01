"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { filterProjects, getProjectCategories } from "@/lib/projects";
import type { ProjectSortOption } from "@/types";

/**
 * Interactive project gallery with search, filter, and sort.
 * All projects rendered from centralized data — no manual page creation.
 */
export function ProjectGallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<ProjectSortOption>("newest");

  const categories = useMemo(() => getProjectCategories(), []);

  const filtered = useMemo(
    () => filterProjects(search, category, sort),
    [search, category, sort]
  );

  return (
    <div>
      <ProjectFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
        categories={categories}
      />

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted">
          No projects match your search. Try different filters.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
