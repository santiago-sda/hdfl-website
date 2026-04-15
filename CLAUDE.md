# Digital First Lab — Main Website

## Overview
Public-facing informational website for Digital First Lab (DFL) at the University of Miami. No auth, no backend, no database. Focus: aesthetics, professionalism, modern/techy design.

## Tech Stack
- **Framework**: Next.js 16+ with App Router, TypeScript
- **Styling**: Tailwind CSS v4 (CSS-based config via `@theme` in `globals.css`)
- **Animations**: Framer Motion v12
- **Font**: Inter (via `next/font/google`)
- **Deployment**: Vercel
- **Images**: `picsum.photos`, `i.pravatar.cc` (configured in `next.config.ts`)

## Project Structure
```
app/                  # Next.js App Router pages and root layout
  layout.tsx          # Root layout: Navbar + Footer, Inter font
  page.tsx            # Home page
  about/page.tsx
  team/page.tsx
  projects/page.tsx
  contact/page.tsx
  globals.css         # Tailwind v4 config + CSS custom properties

components/
  layout/
    Navbar.tsx        # Sticky navbar, blur on scroll, mobile hamburger
    Footer.tsx        # Footer with links and UM branding
  ui/
    AnimatedSection.tsx   # Framer Motion scroll-reveal wrappers
    DotGrid.tsx           # Animated dot grid (hero background)
    GradientOrb.tsx       # Blurred ambient gradient orbs
    PageHero.tsx          # Reusable page hero banner
  home/
    Hero.tsx              # Full-height hero with parallax + animated headline
    WhatWeDo.tsx          # 3-column feature grid
    FeaturedProjects.tsx  # 3-card project preview
    HomeStats.tsx         # Animated counter strip
    CTABanner.tsx         # Full-width CTA section
  team/
    TeamCard.tsx          # Member card with hover micro-interactions
  projects/
    ProjectCard.tsx       # Project card with image zoom + hover glow
  contact/
    ContactForm.tsx       # Form with local success state (no backend)

lib/
  data.ts               # All placeholder data: teamMembers, projects, stats
```

## Design System

### Colors
Defined in `app/globals.css` via Tailwind v4 `@theme inline`:

| Class | Value | Usage |
|-------|-------|-------|
| `bg-background` | `#0A0A0F` | Page base background |
| `bg-surface` | `#111118` | Section background variant |
| `bg-card` | `#16161F` | Card backgrounds |
| `border-border` | `rgba(255,255,255,0.07)` | Default border |
| `text-um-orange` / `bg-um-orange` | `#F47321` | UM brand — CTAs, accents |
| `bg-um-orange-dim` | `#c45c18` | Hover state for orange buttons |
| `bg-um-green` | `#005030` | UM brand — secondary accents |
| `text-text-primary` | `#F8F8F8` | Primary text |
| `text-text-muted` | `#888899` | Secondary/muted text |

### Typography
- Font: **Inter** (Google Fonts, loaded via `next/font/google`)
- Headings: `font-bold` or `font-extrabold`, `tracking-tight`
- Body: `text-text-muted`, `leading-relaxed`
- Labels: `text-xs font-semibold tracking-widest uppercase`

### Animation Patterns
- Scroll reveals: use `<AnimatedSection>` or `<StaggerContainer>` from `components/ui/AnimatedSection.tsx`
- Page heroes: Framer Motion `initial` + `animate` with `transition.delay`
- Cards: `motion.div` with `whileHover={{ y: -6 }}`
- Hero parallax: `useScroll` + `useTransform` in `components/home/Hero.tsx`
- Gradient orbs: CSS `@keyframes` `orb-drift-*` (classes: `orb-1`, `orb-2`, `orb-3`)

## Key Conventions
- All Framer Motion / useState / useEffect components must have `'use client'` at the top
- Server components (pages) can import client components freely
- Images from external domains: add to `next.config.ts` `remotePatterns`
- Placeholder data lives in `lib/data.ts` — update this to real content later
- Use the `AnimatedSection` component for all scroll-triggered content — don't inline `useInView` logic

## Running Locally
```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build
npm run lint       # ESLint
```

## Deploying to Vercel
Push to GitHub and import the repo at vercel.com. Zero config required.
