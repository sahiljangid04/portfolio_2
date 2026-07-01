import { projects } from "@/data/projects";
import type { Project, ProjectSortOption } from "@/types";

/**
 * Project data helpers for dynamic routing and gallery filtering.
 * All project pages derive from the centralized projects.ts data file.
 */

/** Returns all projects */
export function getAllProjects(): Project[] {
  return projects;
}

/** Finds a single project by slug — used by /projects/[slug] */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Returns all slugs for static generation and sitemap */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Featured projects for the home page */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Unique categories for filter dropdown */
export function getProjectCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))].sort();
}

/**
 * Filters and sorts projects for the gallery page.
 * Supports search query, category filter, and sort order.
 */
export function filterProjects(
  search: string,
  category: string,
  sort: ProjectSortOption
): Project[] {
  let filtered = [...projects];

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    );
  }

  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  switch (sort) {
    case "newest":
      filtered.sort(
        (a, b) =>
          new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
      );
      break;
    case "oldest":
      filtered.sort(
        (a, b) =>
          new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime()
      );
      break;
    case "alphabetical":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  return filtered;
}
