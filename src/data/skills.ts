import type { SkillCategory } from "@/types";

/**
 * Categorized skills for the Tech Stack page.
 * proficiency: 0–100 (drives progress bar width)
 * Future customization: adjust proficiency values or add new skills.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "SQL", proficiency: 85 },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    skills: [
      { name: "Pandas", proficiency: 90 },
      { name: "NumPy", proficiency: 88 },
      { name: "Matplotlib", proficiency: 82 },
      { name: "Seaborn", proficiency: 80 },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", proficiency: 88 },
      { name: "XGBoost", proficiency: 85 },
      { name: "LightGBM", proficiency: 80 },
      { name: "Classification", proficiency: 80 },
      { name: "Feature Engineering", proficiency: 70 },
      { name: "K-Means", proficiency: 70 },
      { name: "RFM Analysis", proficiency: 80 },
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    skills: [
      { name: "TensorFlow", proficiency: 82 },
      { name: "Keras", proficiency: 85 },
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    skills: [
      { name: "Power BI", proficiency: 80 },
      { name: "Tableau", proficiency: 75 },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    skills: [
      { name: "Flask", proficiency: 75 },
      { name: "Streamlit", proficiency: 82 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 88 },
      { name: "VS Code", proficiency: 92 },
      { name: "Jupyter Notebook", proficiency: 90 },
    ],
  },
];
