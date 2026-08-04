# Portfolio Website

A polished, single-page developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The site is designed to showcase your work, experience, and skills with a modern layout, smooth scrolling, and responsive sections.

## Features

- Modern one-page portfolio layout
- Smooth scrolling and animated transitions
- Responsive design for desktop and mobile
- SEO-friendly metadata and sitemap setup
- Easily editable content through JSON and constants files

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis for smooth scrolling
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
app/                Main app routes and page layout
components/         Reusable UI and section components
data/               Portfolio content in JSON files
lib/                Site constants, animation helpers, utilities
public/             Static assets such as images and files
```

## Customize Your Content

Update the following files to personalize the website:

- `lib/constants.ts` — name, role, bio, contact details, links, and site metadata
- `data/projects.json` — project cards and links
- `data/skills.json` — skills and proficiency details
- `data/experience.json` — experience timeline and achievements
- `public/` — images, favicon, resume, and other static assets

## Deployment

This project is ready to deploy on Vercel or any platform that supports Next.js. Make sure to update your production URL in the site constants before publishing.

## Notes

- The site uses a custom color palette and minimalist styling defined in the Tailwind configuration.
- Motion effects respect reduced-motion preferences.
- The contact section is currently set up as a front-end interaction and can be connected to an email service or backend later.
