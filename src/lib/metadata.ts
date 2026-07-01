import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourportfolio.vercel.app";

/**
 * SEO metadata helpers — used across pages for title, description, Open Graph.
 */
export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-image.svg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Data Science Portfolio`;
  const desc = description ?? siteConfig.heroDescription;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
