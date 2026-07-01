# Portfolio Update Guide

**Your one-stop guide to update everything on this website.**

You almost never need to touch components or pages. Edit the data files and replace files in `public/`. Save, refresh the browser — done.

> **Quick start:** `npm run dev` → open [http://localhost:3000](http://localhost:3000)

---

## Table of Contents

1. [Quick Map — What to Edit](#1-quick-map--what-to-edit)
2. [Where to Save Files (Images, Videos, PDFs)](#2-where-to-save-files-images-videos-pdfs)
3. [Personal Info & Home Page](#3-personal-info--home-page)
4. [About Page](#4-about-page)
5. [Social Links & Contact](#5-social-links--contact)
6. [Education](#6-education)
7. [Internship / Work Experience](#7-internship--work-experience)
8. [Tech Stack & Skills](#8-tech-stack--skills)
9. [Projects (Text, Images, Videos)](#9-projects-text-images-videos)
10. [Certifications](#10-certifications)
11. [Resume](#11-resume)
12. [SEO & Site URL](#12-seo--site-url)
13. [Theme & Colors](#13-theme--colors)
14. [Navigation Menu](#14-navigation-menu)
15. [Full Update Checklist](#15-full-update-checklist)
16. [Troubleshooting](#16-troubleshooting)

---

## 1. Quick Map — What to Edit

| I want to change… | Edit this file | Save media here |
|-------------------|----------------|-----------------|
| Name, title, email, bio, stats, interests | `src/data/site.ts` | — |
| GitHub, LinkedIn, email links | `src/data/social.ts` | — |
| Education timeline | `src/data/education.ts` | — |
| Internships / work experience | `src/data/experience.ts` | — |
| Skills & progress bars | `src/data/skills.ts` | — |
| Projects (all text + links) | `src/data/projects.ts` | `public/images/projects/` |
| Project videos (local MP4) | `src/data/projects.ts` | `public/videos/` |
| Project videos (YouTube) | `src/data/projects.ts` | — (just paste YouTube ID) |
| Certifications | `src/data/certifications.ts` | `public/images/certifications/` |
| Resume PDF | — | `public/resume.pdf` |
| Social share preview image | — | `public/og-image.svg` |
| Site URL for SEO | `.env.local` | — |
| Colors / theme | `src/app/globals.css` | — |

### Which page shows what?

| Page | URL | Data source |
|------|-----|-------------|
| Home | `/` | `site.ts` + `projects.ts` (featured) + `skills.ts` (preview) |
| About | `/about` | `site.ts` + `education.ts` + `experience.ts` + `skills.ts` |
| Tech Stack | `/tech-stack` | `skills.ts` |
| Projects gallery | `/projects` | `projects.ts` |
| Project detail | `/projects/your-slug` | `projects.ts` (auto-generated from `slug`) |
| Certifications | `/certifications` | `certifications.ts` |
| Resume | `/resume` | `public/resume.pdf` + `site.ts` (`resumePath`) |
| Contact | `/contact` | `social.ts` + `site.ts` |

---

## 2. Where to Save Files (Images, Videos, PDFs)

All files inside `public/` are accessible on your website at the root path.

```
public/
├── resume.pdf                          ← Your resume
├── og-image.svg                        ← Preview when link is shared (LinkedIn, Twitter)
├── images/
│   ├── certifications/
│   │   ├── ibm-cert.jpg                ← Certificate screenshots
│   │   └── google-ml.png
│   └── projects/
│       ├── telecom-customer-churn/     ← One folder per project (use same name as slug)
│       │   ├── thumb.jpg               ← Card thumbnail
│       │   ├── screenshot-1.png
│       │   ├── screenshot-2.png
│       │   └── screenshot-3.png
│       └── my-new-project/
│           └── ...
└── videos/
    ├── churn-demo.mp4                  ← Local project videos
    └── sign-language-demo.mp4
```

### Path rules

| You save file at | You reference in data as |
|------------------|--------------------------|
| `public/resume.pdf` | `/resume.pdf` |
| `public/images/projects/churn/thumb.jpg` | `/images/projects/churn/thumb.jpg` |
| `public/images/certifications/ibm.jpg` | `/images/certifications/ibm.jpg` |
| `public/videos/demo.mp4` | `/videos/demo.mp4` |

**Always start paths with `/`** — never include `public/` in the path.

### Recommended formats

| Type | Formats | Tips |
|------|---------|------|
| Screenshots | `.jpg`, `.png`, `.webp` | 1280×720 or 1920×1080 works well |
| Thumbnails | `.jpg`, `.png`, `.webp` | 16:9 ratio (e.g. 800×450) |
| Certificates | `.jpg`, `.png` | Crop to readable size |
| Videos | `.mp4` | Keep under ~20 MB for fast loading |
| Resume | `.pdf` | Single file, replace `resume.pdf` |

---

## 3. Personal Info & Home Page

**File:** `src/data/site.ts`

| Field | What it controls |
|-------|------------------|
| `name` | Your name — hero, navbar, footer, SEO |
| `title` | Subtitle under your name on home page |
| `email` | Shown in contact CTA and contact cards |
| `location` | Your location (optional display) |
| `resumePath` | Path to resume PDF (default: `/resume.pdf`) |
| `heroDescription` | Paragraph under title on home page |
| `stats.projects` | "Projects Completed" counter on home |
| `stats.certifications` | "Certifications" counter |
| `stats.internships` | "Internship Experience" counter |
| `stats.technologies` | "Technologies Learned" counter |
| `interests` | Tags on About page |
| `careerObjective` | About page + home "Quick About" card |
| `professionalSummary` | About page + home "About Me" section |
| `careerGoals` | Bullet list on About page |

### Example

```typescript
export const siteConfig: SiteConfig = {
  name: "Sahil Jangid",
  title: "Data Science Student | ML Enthusiast | AI Developer",
  email: "sahil@example.com",
  location: "Mumbai, India",
  resumePath: "/resume.pdf",
  heroDescription: "Your intro paragraph here...",
  stats: {
    projects: 6,
    certifications: 8,
    internships: 2,
    technologies: 25,
  },
  // ... rest of fields
};
```

**After editing:** Home (`/`) and About (`/about`) update automatically.

---

## 4. About Page

The About page pulls from **three files**:

| Section on page | File |
|-----------------|------|
| Professional summary, career objective, interests, goals | `src/data/site.ts` |
| Education timeline | `src/data/education.ts` |
| Internship experience | `src/data/experience.ts` |
| Skills overview grid | `src/data/skills.ts` |

See sections [6](#6-education), [7](#7-internship--work-experience), and [8](#8-tech-stack--skills) below for those files.

---

## 5. Social Links & Contact

**File:** `src/data/social.ts`

Controls: Footer social icons, Contact page cards.

```typescript
{
  id: "github",
  label: "GitHub",
  url: "https://github.com/yourusername",   // ← Change this
  icon: "github",
},
{
  id: "linkedin",
  label: "LinkedIn",
  url: "https://linkedin.com/in/yourusername",  // ← Change this
  icon: "linkedin",
},
{
  id: "email",
  label: "Email",
  url: "mailto:your.email@example.com",    // ← Change this
  icon: "email",
},
{
  id: "portfolio",
  label: "Portfolio",
  url: "https://yourportfolio.vercel.app", // ← Change this
  icon: "portfolio",
},
```

Also update `email` in `src/data/site.ts` so it matches everywhere.

---

## 6. Education

**File:** `src/data/education.ts`

**To add a degree:** copy an existing object and edit.

```typescript
{
  id: "btech-cs",                    // Unique ID (any string)
  degree: "B.Tech in Computer Science",
  institution: "Your University",
  location: "India",
  startDate: "2021-08-01",           // YYYY-MM-DD format
  endDate: "2025-05-01",
  description: "Short paragraph about your studies.",
  highlights: [
    "CGPA: 8.5 / 10",
    "Relevant coursework: ML, Statistics",
  ],
},
```

**To remove a degree:** delete its entire `{ ... },` block from the array.

---

## 7. Internship / Work Experience

**File:** `src/data/experience.ts`

```typescript
{
  id: "ds-intern-1",
  role: "Data Science Intern",
  company: "Company Name",
  location: "Remote",
  startDate: "2024-06-01",
  endDate: "2024-08-01",
  description: "One-line summary of the role.",
  responsibilities: [
    "Built ML models with Scikit-Learn",
    "Created dashboards in Power BI",
  ],
},
```

Copy, paste, edit. No other files need changes.

---

## 8. Tech Stack & Skills

**File:** `src/data/skills.ts`

Each category has a title and a list of skills with proficiency (0–100).

```typescript
{
  id: "programming",
  title: "Programming",
  skills: [
    { name: "Python", proficiency: 90 },   // 90% fills the progress bar
    { name: "SQL", proficiency: 85 },
  ],
},
```

| Action | How |
|--------|-----|
| Add a skill | Add `{ name: "R", proficiency: 70 }` inside a category's `skills` array |
| Add a category | Copy a full category block with a new `id` and `title` |
| Change proficiency | Edit the `proficiency` number (0–100) |
| Remove a skill | Delete its line from the array |

Shown on: **Tech Stack page** (`/tech-stack`) and **home page preview**.

---

## 9. Projects (Text, Images, Videos)

**File:** `src/data/projects.ts`

This is the most important file. Each project = one big object. The `slug` becomes the URL.

```
slug: "telecom-customer-churn"  →  /projects/telecom-customer-churn
```

### Add a new project (3 steps)

**Step 1 — Create image folder**

```
public/images/projects/my-new-project/
```

Add at minimum:
- `thumb.jpg` (thumbnail for cards)
- `screenshot-1.png`, `screenshot-2.png`, etc.

**Step 2 — Copy a project object in `projects.ts`**

**Step 3 — Update all fields and save**

No routing changes. No new pages. The site auto-generates `/projects/my-new-project`.

---

### Project fields explained

| Field | Purpose |
|-------|---------|
| `slug` | URL name — use lowercase, hyphens only (e.g. `fake-news-detection`) |
| `title` | Project name shown everywhere |
| `shortDescription` | 1–2 lines on cards and header |
| `category` | Filter label (e.g. `"Deep Learning"`, `"NLP"`) |
| `techStack` | Tags on project cards |
| `featured` | `true` = shows on home page, `false` = projects page only |
| `thumbnail` | Card image path |
| `overview` | Main summary on detail page |
| `problemStatement` | What problem it solves |
| `features` | Bullet list of features |
| `datasetDescription` | Dataset info |
| `methodology` | How you approached it |
| `modelArchitecture` | Model / system design |
| `results` | Outcomes paragraph |
| `evaluationMetrics` | `{ label, value }` pairs (e.g. Accuracy 92%) |
| `challenges` | Bullet list |
| `futureImprovements` | Bullet list |
| `media` | Images, videos, YouTube (see below) |
| `techStackDetails` | `libraries`, `frameworks`, `tools` arrays |
| `links.github` | GitHub repo URL |
| `links.demo` | Live demo URL |
| `links.documentation` | Docs / README URL |
| `contributors` | Name, role, GitHub, LinkedIn |
| `timeline` | Start/end dates + milestones |
| `completedAt` | Sort date (`YYYY-MM-DD`) — newest first on projects page |

---

### Add project screenshots

1. Save images to `public/images/projects/YOUR-SLUG/`
2. Reference in `thumbnail` and `media`:

```typescript
thumbnail: "/images/projects/my-new-project/thumb.jpg",

media: [
  {
    id: "ss-1",
    type: "image",
    src: "/images/projects/my-new-project/screenshot-1.png",
    alt: "EDA dashboard showing churn distribution",
  },
  {
    id: "ss-2",
    type: "image",
    src: "/images/projects/my-new-project/screenshot-2.png",
    alt: "Model evaluation ROC curve",
  },
],
```

Clicking thumbnails on the project page updates the main viewer. Images support zoom on click.

---

### Add a YouTube video

From URL `https://www.youtube.com/watch?v=ABC123xyz` → ID is `ABC123xyz`

```typescript
{
  id: "demo-youtube",
  type: "youtube",
  youtubeId: "ABC123xyz",
  src: "https://www.youtube.com/watch?v=ABC123xyz",
  alt: "Project walkthrough video",
  autoplay: false,
}
```

No file upload needed — just the YouTube ID.

---

### Add a local MP4 video

1. Save video: `public/videos/my-project-demo.mp4`
2. Add to `media` array:

```typescript
{
  id: "demo-mp4",
  type: "video",
  src: "/videos/my-project-demo.mp4",
  alt: "Screen recording of the app",
  autoplay: false,    // true = autoplays when selected (muted)
}
```

---

### Remove or hide a project

| Goal | Action |
|------|--------|
| Hide from home but keep on projects page | Set `featured: false` |
| Remove completely | Delete the entire project object from the array |

---

## 10. Certifications

**File:** `src/data/certifications.ts`

**Save certificate images:** `public/images/certifications/`

```typescript
{
  id: "ibm-ds",                              // Unique ID
  title: "IBM Data Science Professional Certificate",
  provider: "IBM / Coursera",
  category: "Data Science",                  // Used for filter dropdown
  completionDate: "2024-03-15",              // YYYY-MM-DD
  credentialUrl: "https://coursera.org/verify/xxxxx",
  image: "/images/certifications/ibm-ds.jpg", // ← Your image path
},
```

### Add a certification

1. Save image → `public/images/certifications/your-cert.jpg`
2. Copy an existing object in `certifications.ts`
3. Update all fields
4. Save

### Remove a certification

Delete its object from the array.

---

## 11. Resume

**Save file:** `public/resume.pdf`

Replace the existing `resume.pdf` with your own PDF. Keep the same filename, or:

1. Save as e.g. `public/my-resume.pdf`
2. Update `resumePath` in `src/data/site.ts`:

```typescript
resumePath: "/my-resume.pdf",
```

The Resume page (`/resume`) shows an embedded viewer + download button automatically.

---

## 12. SEO & Site URL

**File:** `.env.local` (create in project root if it doesn't exist)

```env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.vercel.app
```

Used for: sitemap, Open Graph links, social sharing.

**Social preview image:** replace `public/og-image.svg` with your own (1200×630 recommended).

**Page titles & descriptions:** auto-generated from `src/lib/metadata.ts` and each page's data. Project pages use the project's `title` and `shortDescription`.

---

## 13. Theme & Colors

**File:** `src/app/globals.css`

```css
:root {
  --background: #000000;   /* Page background */
  --foreground: #fafafa;   /* Main text */
  --muted: #a3a3a3;        /* Secondary text */
  --border: #262626;       /* Borders */
}
```

The site uses a monochrome palette (black, white, gray). Change these values to tweak the look.

---

## 14. Navigation Menu

**File:** `src/data/site.ts` → `navLinks` array

```typescript
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Add or reorder links here
];
```

Only edit if you add new pages to the site.

---

## 15. Full Update Checklist

Use this when setting up your portfolio for the first time:

```
Personal
  [ ] src/data/site.ts — name, email, title, bio, stats, goals, interests
  [ ] src/data/social.ts — GitHub, LinkedIn, email, portfolio URLs

About
  [ ] src/data/education.ts — degrees and schools
  [ ] src/data/experience.ts — internships and roles

Skills
  [ ] src/data/skills.ts — technologies and proficiency levels

Projects (repeat for each project)
  [ ] public/images/projects/SLUG/ — thumb + screenshots
  [ ] public/videos/ — local MP4s (if any)
  [ ] src/data/projects.ts — all text, links, media array

Certifications (repeat for each cert)
  [ ] public/images/certifications/ — certificate image
  [ ] src/data/certifications.ts — title, provider, date, link

Files
  [ ] public/resume.pdf — your resume
  [ ] public/og-image.svg — social share image
  [ ] .env.local — NEXT_PUBLIC_SITE_URL

Verify
  [ ] npm run dev — check every page
  [ ] npm run build — confirm no errors before deploy
```

---

## 16. Troubleshooting

| Problem | Fix |
|---------|-----|
| Image not showing | Check path starts with `/`, file is in `public/`, filename spelling matches exactly |
| New project page 404 | Check `slug` has no spaces or special characters; restart `npm run dev` |
| Video not playing | Use `.mp4` format; check file is in `public/videos/` |
| YouTube not loading | Verify `youtubeId` is correct (only the ID, not full URL) |
| Changes not visible | Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R) |
| Build fails after edit | Check for missing commas, quotes, or brackets in `.ts` files |
| Resume not loading | Ensure `public/resume.pdf` exists and `resumePath` matches |

---

## Need the technical README?

For architecture, deployment to Vercel, and folder structure details, see [README.md](./README.md).
