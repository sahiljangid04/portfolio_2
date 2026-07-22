import type { Certification } from "@/types";

/**
 * Courses & certifications — copy an object to add a new certificate.
 * Replace image paths with your actual certificate screenshots.
 */
export const certifications: Certification[] = [
  {
    id: "albs-data",
    title: "Data Science",
    provider: "Analytixlabs / E&ICT Academy/ IIT Guwahati",
    category: "Data Science",
    completionDate: "2026-10-6",
    credentialUrl: "https://drive.google.com/file/d/1cAnFIXu8ygVXD0z2gED7fcGeUhCUGchB/view?usp=drive_link",
    image: "/images/certifications/alabs_data.png",
  },
  {
    id: "alabs-dva",
    title: "Data Analyst(Excel, SQL,PowerBI)",
    provider: "Analytixlabs / E&ICT Academy/ IIT Guwahati",
    category: "Data analysis",
    completionDate: "2025-08-15",
    credentialUrl: "https://drive.google.com/file/d/11jfNdj1kpWJYifxDgZ_urpQ6JiG11Wfl/view?usp=drive_link",
    image: "/images/certifications/dva.png",
  },
  {
    id: "alabs-py",
    title: "Data Analyst(Python)",
    provider: "Analytixlabs / E&ICT Academy/ IIT Guwahati",
    category: "Data analysis",
    completionDate: "2026-1-20",
    credentialUrl: "https://drive.google.com/file/d/17mavPzQHOeB85M06I503xY_54fhuNm0W/view?usp=drive_link",
    image: "/images/certifications/alabs_py.png",
  },
  {
    id: "nptel-ai",
    title: "Introduction to Large Language Models",
    provider: "Nptel",
    category: "Deep Learning",
    completionDate: "2025-10-10",
    credentialUrl: "https://drive.google.com/file/d/1BWZTGiE4wVpSmrYrsx_oh-CHrV51xtad/view?usp=drive_link",
    image: "/images/certifications/nptel1.png",
  },
  {
    id: "nptel-ml",
    title: "predective modeling",
    provider: "Nptel",
    category: "ML",
    completionDate: "2026-04-05",
    credentialUrl: "https://drive.google.com/file/d/1iiQL7U_Aq0zaYILODLixGGLYiYbl4mj0/view?usp=drive_link",
    image: "/images/certifications/nptel2.png",
  },
  {
    id: "nptel-ds",
    title: "Python for Data Science",
    provider: "Nptel",
    category: "Data Science",
    completionDate: "2024-08-12",
    credentialUrl: "https://drive.google.com/file/d/1xV9v0f-G6-9oRhNtgiJ3jjAcyTr4sOeg/view?usp=drive_link",
    image: "/images/certifications/nptel3.png",
  },
  {
    id: "nptel-da",
    title: "Data analytics with python",
    provider: "Nptel",
    category: "Data anlytics",
    completionDate: "2025-04-18",
    credentialUrl: "https://drive.google.com/file/d/1MjZaOdyNOY4B_K5rq9BxV5en3Lm_3A0R/view?usp=drive_link",
    image: "/images/certifications/nptel4.png",
  },
  {
    id: "nas-dva",
    title: "Data analytics And Visualization",
    provider: "Nasccom",
    category: "Data anlytics",
    completionDate: "2025-10-10",
    credentialUrl: "https://drive.google.com/file/d/1fVeWZeeT8X6ZXUv6cSWXbR52JDtZoozo/view?usp=drive_link",
    image: "/images/certifications/nas.png",
  },
];

/** Unique certification categories for filtering */
export function getCertificationCategories(): string[] {
  return [...new Set(certifications.map((c) => c.category))].sort();
}
