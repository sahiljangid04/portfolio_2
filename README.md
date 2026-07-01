# Data Science Portfolio Website

A production-ready, multi-page portfolio for data science freshers seeking internships and entry-level roles. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

**Monochrome dark theme** · **Dynamic project routing** · **Centralized data management**

---

## Update your portfolio

**[UPDATE_GUIDE.md](./UPDATE_GUIDE.md)** — step-by-step guide to change everything:

- Personal info, bio, stats, email
- Projects (text, screenshots, YouTube, MP4 videos)
- Certifications and where to save images
- Education, internships, skills
- Resume, social links, theme, SEO

You only need to edit files in `src/data/` and `public/` — no component changes required.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm start       # Serve production build
```

---

## Folder Structure

```
portfolio_2/
├── public/
│   ├── images/
│   │   ├── certifications/     # Certificate images
│   │   └── projects/             # Per-project screenshots & thumbnails
│   ├── resume.pdf                # Your resume (replace this file)
│   └── og-image.svg              # Open Graph preview image
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/
│   │   ├── certifications/
│   │   ├── contact/
│   │   ├── projects/
│   │   │   └── [slug]/           # Dynamic project detail routes
│   │   ├── resume/
│   │   ├── tech-stack/
│   │   ├── layout.tsx            # Root layout (nav, footer, SEO)
│   │   ├── page.tsx              # Home page
│   │   ├── sitemap.ts            # Auto-generated sitemap
│   │   └── robots.ts
│   ├── components/
│   │   ├── certifications/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── layout/               # Navbar, Footer, ScrollProgress
│   │   ├── projects/             # ProjectCard, MediaShowcase, etc.
│   │   ├── tech-stack/
│   │   └── ui/                   # Reusable UI primitives
│   ├── data/                     # ⭐ Centralized content (edit here)
│   │   ├── projects.ts
│   │   ├── certifications.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── social.ts
│   │   └── site.ts
│   ├── lib/                      # Utilities & data helpers
│   └── types/                    # TypeScript interfaces
└── README.md
```

---

## Architecture

| Layer | Purpose |
|-------|---------|
| `src/data/` | Single source of truth for all content |
| `src/types/` | Shared TypeScript interfaces |
| `src/lib/` | Helpers (`getProjectBySlug`, `filterProjects`, SEO) |
| `src/components/` | Reusable, composable UI |
| `src/app/` | Routes and page composition |

**Data flows one way:** `data/*.ts` → `lib/*.ts` helpers → components → pages.

No content is hardcoded in page files. Update data files to change what appears on the site.

---

## How Dynamic Routing Works

Project detail pages use Next.js dynamic segments:

```
/projects/[slug]  →  src/app/projects/[slug]/page.tsx
```

1. **`src/data/projects.ts`** — each project has a unique `slug` (e.g. `telecom-customer-churn`)
2. **`generateStaticParams()`** — reads all slugs at build time and pre-renders every project page
3. **`getProjectBySlug(slug)`** — loads the matching project object
4. **`ProjectDetail`** — renders all sections from that object

**Example URLs (auto-generated):**

- `/projects/telecom-customer-churn`
- `/projects/sign-language-recognition`
- `/projects/fake-news-detection`

The sitemap (`src/app/sitemap.ts`) also auto-includes all project slugs.

---

## How To Add New Projects

1. Open `src/data/projects.ts`
2. Copy any existing project object
3. Update these fields:

```typescript
{
  slug: "my-new-project",           // URL: /projects/my-new-project
  title: "My New Project",
  shortDescription: "...",
  category: "Machine Learning",
  techStack: ["Python", "..."],
  featured: true,                   // Show on home page if true
  thumbnail: "/images/projects/my-new-project/thumb.jpg",
  // ... all other sections
  media: [
    { id: "1", type: "image", src: "/images/...", alt: "..." },
    { id: "2", type: "youtube", youtubeId: "VIDEO_ID", src: "...", alt: "..." },
    { id: "3", type: "video", src: "/videos/demo.mp4", alt: "...", autoplay: false },
  ],
  completedAt: "2024-06-01",        // Used for sorting
}
```

4. Save the file — **no routing or component changes needed**

---

## How To Add Screenshots

1. Create a folder: `public/images/projects/your-project-slug/`
2. Add images (`.jpg`, `.png`, `.webp`, or `.svg`)
3. Reference them in the project's `thumbnail` and `media` array:

```typescript
thumbnail: "/images/projects/your-project-slug/thumb.jpg",
media: [
  {
    id: "ss-1",
    type: "image",
    src: "/images/projects/your-project-slug/screenshot-1.png",
    alt: "Dashboard overview",
  },
],
```

Files in `public/` are served from the site root (`/images/...`).

---

## How To Add Videos

**YouTube embed:**

```typescript
{
  id: "demo-vid",
  type: "youtube",
  youtubeId: "dQw4w9WgXcQ",  // ID from youtube.com/watch?v=ID
  src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  alt: "Project demo",
  autoplay: false,
}
```

**Local MP4:**

1. Place file in `public/videos/my-demo.mp4`
2. Add to media array:

```typescript
{
  id: "local-vid",
  type: "video",
  src: "/videos/my-demo.mp4",
  alt: "Demo recording",
  autoplay: false,
}
```

---

## How To Add Certifications

1. Open `src/data/certifications.ts`
2. Copy an existing certification object
3. Update fields and add image to `public/images/certifications/`

```typescript
{
  id: "unique-id",
  title: "Course Name",
  provider: "Coursera",
  category: "Machine Learning",
  completionDate: "2024-01-15",
  credentialUrl: "https://...",
  image: "/images/certifications/my-cert.jpg",
}
```

---

## How To Change Theme

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #fafafa;
  --muted: #a3a3a3;
  --border: #262626;
}
```

The site uses a **monochrome palette** (black, white, gray). Tailwind utility classes use `neutral-*` throughout components.

To switch personal info, stats, and hero text, edit `src/data/site.ts`.

---

## How To Customize Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Navbar | `src/components/layout/Navbar.tsx` | Sticky nav, mobile menu |
| Footer | `src/components/layout/Footer.tsx` | Links, social, copyright |
| ProjectCard | `src/components/projects/ProjectCard.tsx` | Gallery cards |
| MediaShowcase | `src/components/projects/MediaShowcase.tsx` | Steam-style media viewer |
| Hero | `src/components/home/Hero.tsx` | Home page hero section |

Components include inline comments explaining props, state, and customization points.

---

## Personalization Checklist

- [ ] `src/data/site.ts` — name, email, title, stats, bio
- [ ] `src/data/social.ts` — GitHub, LinkedIn URLs
- [ ] `src/data/education.ts` — education timeline
- [ ] `src/data/experience.ts` — internships
- [ ] `src/data/projects.ts` — project content & images
- [ ] `src/data/certifications.ts` — certificates
- [ ] `public/resume.pdf` — your resume
- [ ] `public/og-image.svg` — social preview image
- [ ] `.env.local` — set `NEXT_PUBLIC_SITE_URL`

---

## Deploy To Vercel

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Framework preset: **Next.js** (auto-detected)
4. Add environment variable:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```
5. Click **Deploy**

Vercel runs `npm run build` automatically. Dynamic project routes are pre-rendered at build time via `generateStaticParams`.

**Custom domain:** Vercel Dashboard → Project → Settings → Domains.

---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — animations & page transitions
- **Lucide React** — icons

---

## Features

- Sticky navigation with active link indicator
- Mobile hamburger menu
- Scroll progress bar & back-to-top button
- Scroll reveal animations
- Animated stat counters
- Project search, filter, and sort
- Steam-style project media gallery (images, video, YouTube)
- Image zoom lightbox
- Skeleton loaders
- SEO metadata & Open Graph tags
- Dynamic sitemap & robots.txt
- Fully responsive, mobile-first layout
- Accessibility-friendly focus states

---

## License

MIT — use freely for your personal portfolio.
