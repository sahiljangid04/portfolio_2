import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { QuickAbout } from "@/components/home/QuickAbout";
import { TechStackPreview } from "@/components/home/TechStackPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

/**
 * Home page — hero, stats, featured projects, about preview, tech stack, contact CTA.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <QuickAbout />
      <TechStackPreview />
      <ContactCTA />
    </>
  );
}
