import type { Education } from "@/types";

/**
 * Education timeline — add or edit entries for the About page.
 */
export const education: Education[] = [
  {
    id: "btech-Ds",
    degree: "B.Tech in Data Science",
    institution: "DPG ITM",
    location: "India",
    startDate: "2022-08-01",
    endDate: "2026-06-01",
    description:
      "Focused on data structures, algorithms, database systems, and applied machine learning through coursework and projects.",
    highlights: [
      "Relevant coursework: Probability & Statistics, Linear Algebra, Data Mining",
      "Final year project in Deep Learning",
      "CGPA: 8.00 / 10.0",
    ],
  },
  {
    id: "mhsc",
    degree: "Higher Secondary (Computer Science)",
    institution: "Brijlal Biyani Science College",
    location: "India",
    startDate: "2020-06-01",
    endDate: "2022-03-01",
    description:
      "Computer Science stream with Mathematics, Physics, Computers, and Chemistry.",
    highlights: [
      "Percentage: 60%",
    ],
  },
    {
    id: "mhsc",
    degree: "Secondary School",
    institution: "Naryandas Laddha High School",
    location: "India",
    startDate: "2015-06-01",
    endDate: "2020-03-01",
    description:
      "Completed 10th form a CBSE.",
    highlights: [
      "Percentage: 88%",
    ],
  },
];
