# Personal Portfolio

A premium, single-page developer portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — personalize it

All personal content lives in a few files, so you never need to touch component code just to update your info:

- **`lib/constants.ts`** — your name, role, tagline, bio, email, phone, location, birthday, resume URL, nav links, and social links.
- **`data/projects.json`** — your project cards (title, description, tech stack, links).
- **`data/skills.json`** — skill categories, proficiency bars, and tool logos.
- **`data/experience.json`** — timeline entries, core strengths, education, and stats.
- **`public/`** — drop in `favicon.ico`, `og-image.png` (1200×630), and `resume.pdf`.

The placeholder content (name, email, phone, bio) is intentionally generic — swap it for your real details in `lib/constants.ts` and the `data/*.json` files.

## Project structure

```
app/
  layout.tsx        Root layout, metadata, Open Graph, JSON-LD
  page.tsx           Assembles all sections
  sitemap.ts          Dynamic sitemap.xml
  robots.ts           Dynamic robots.txt
  globals.css         Design tokens, base styles, focus states
components/
  navbar.tsx           Sticky nav with active-section tracking
  footer.tsx
  scroll-progress.tsx  Top progress bar
  smooth-scroll-provider.tsx  Lenis smooth scroll
  json-ld.tsx
  ui/                  Button, Magnetic wrapper, AnimatedCounter
  sections/            Hero, About, Skills, Projects, Experience, Contact
lib/
  constants.ts         Site content & config
  animations.ts        Shared Framer Motion variants
  utils.ts             cn() className helper
data/
  projects.json, skills.json, experience.json
```

## Notes

- **Color system**: white + navy (`#0B1F5E`) + accent blue (`#2563EB`) only, defined as Tailwind tokens in `tailwind.config.ts`. No dark mode.
- **Motion**: respects `prefers-reduced-motion`; all scroll-triggered reveals fire once.
- **Accessibility**: semantic landmarks, visible focus rings, skip-to-content link, `aria-label`s on icon-only controls.
- **Contact form**: currently client-side only (shows a success state on submit). Wire `handleSubmit` in `components/sections/contact.tsx` to an API route, email service (e.g. Resend), or form backend of your choice.
- **Deploying**: works out of the box on Vercel. Update `SITE.url` in `lib/constants.ts` to your production domain before deploying (it feeds metadata, Open Graph, JSON-LD, and the sitemap).
