import type { NavLink, SiteConfig } from "@/types";

/**
 * Site-wide configuration — update name, stats, and personal info here.
 * Future customization: change placeholders to your real details.
 */
export const siteConfig: SiteConfig = {
  name: "Sahil Jangid",
  title:
    "Data Anlysts | Data Science Student | Machine Learning Enthusiast | AI Developer",
  email: "sahiljangid09@gmail.com",
  location: "India",
  resumePath: "/resume.pdf",
  heroDescription:
    "Passionate data science fresher building intelligent solutions with machine learning, deep learning, and data analytics. Seeking internships and entry-level opportunities to apply analytical thinking and technical skills to real-world problems.",
  stats: {
    projects:6,
    certifications: 7,
    internships: 1,
    technologies: 20,
  },
  interests: [
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Drawing",
    "Anime",
  ],
  careerObjective:
    "To secure a role in Data Science, Machine Learning, or AI where I can contribute to impactful projects while continuing to grow through hands-on experience and mentorship.",
  professionalSummary:
    "Motivated data science student with a strong foundation in Python, statistical modeling, and machine learning. Experienced in end-to-end ML pipelines—from data preprocessing and exploratory analysis to model training, evaluation, and deployment. Comfortable working with structured and unstructured data, building dashboards, and collaborating on team projects.",
  careerGoals: [
    "Build production-grade ML systems and contribute to open-source AI projects",
    "Deepen expertise in deep learning, NLP, and MLOps",
    "Transition into a full-time Data Scientist or ML Engineer role",
    "Publish research or technical articles on applied machine learning",
  ],
};

/** Primary navigation — add new top-level pages here */
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];
