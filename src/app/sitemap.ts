import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourportfolio.vercel.app";

/**
 * Dynamic sitemap — includes all static pages and auto-generated project routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/tech-stack",
    "/projects",
    "/certifications",
    "/resume",
    "/contact",
  ];

  const projectPages = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticRoutes = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.9,
  }));

  return [...staticRoutes, ...projectPages];
}
