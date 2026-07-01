/**
 * Central type definitions for the portfolio.
 * All data files and components import from here to keep types consistent.
 */

/** Supported media types for the Steam-style project showcase */
export type MediaType = "image" | "video" | "youtube";

/** Single media item in a project's gallery */
export interface ProjectMedia {
  id: string;
  type: MediaType;
  /** Local path (/images/...) or external URL */
  src: string;
  alt: string;
  /** YouTube video ID when type is "youtube" */
  youtubeId?: string;
  /** Autoplay for video types */
  autoplay?: boolean;
}

/** External links for a project */
export interface ProjectLinks {
  github?: string;
  demo?: string;
  documentation?: string;
}

/** Contributor card on project detail page */
export interface Contributor {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}


/** Detailed tech stack breakdown */
export interface TechStackDetails {
  libraries: string[];
  frameworks: string[];
  tools: string[];
}

/**
 * Full project schema — copy this object to add a new project.
 * The slug drives the dynamic route: /projects/[slug]
 */
export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  techStack: string[];
  featured: boolean;
  thumbnail: string;
  overview: string;
  problemStatement: string;
  features: string[];
  datasetDescription: string;
  methodology: string;
  modelArchitecture: string;
  results: string;
  evaluationMetrics: { label: string; value: string }[];
  challenges: string[];
  futureImprovements: string[];
  media: ProjectMedia[];
  techStackDetails: TechStackDetails;
  links: ProjectLinks;
  contributors: Contributor[];
  /** ISO date for sorting (newest first) */
  completedAt: string;
}

/** Certification card data */
export interface Certification {
  id: string;
  title: string;
  provider: string;
  category: string;
  completionDate: string;
  credentialUrl: string;
  image: string;
}

/** Single skill within a category */
export interface Skill {
  name: string;
  /** Proficiency 0–100 for progress indicator */
  proficiency: number;
  icon?: string;
}

/** Grouped skills for the tech stack page */
export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

/** Education timeline entry */
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

/** Internship / work experience entry */
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

/** Social and contact links */
export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "portfolio" | "twitter";
}

/** Site-wide personal info and stats */
export interface SiteConfig {
  name: string;
  title: string;
  email: string;
  location: string;
  resumePath: string;
  heroDescription: string;
  stats: {
    projects: number;
    certifications: number;
    internships: number;
    technologies: number;
  };
  interests: string[];
  careerObjective: string;
  professionalSummary: string;
  careerGoals: string[];
}

/** Nav link for header and footer */
export interface NavLink {
  href: string;
  label: string;
}

/** Sort options for project gallery */
export type ProjectSortOption = "newest" | "oldest" | "alphabetical";
