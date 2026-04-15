# Herbert Digital-First Lab — Design System

> Generated from the implemented v1 codebase on 2026-04-15.
> This is the source of truth for design decisions. Update it when you change the design.

---

## Brand

**Organization:** Herbert Digital-First Lab
**Institution:** Miami Herbert Business School · University of Miami
**Tagline:** Where Digital Intelligence Meets Real Business Challenge.

**Brand essence:** Academic credibility + modern digital craft. Not a startup. Not a generic university site. Think: premium consulting firm with a university soul.

---

## Color System

Defined in `app/globals.css` via Tailwind v4 `@theme inline`.

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#F8F9FA` | Page base (off-white, not pure white) |
| `surface` | `#EDEEF0` | Section variant, CTABanner, Footer |
| `card` | `#FFFFFF` | Cards, form inputs, stats strip |
| `border` | `rgba(0,0,0,0.08)` | Default border (very subtle) |
| `um-orange` | `#F47321` | Primary accent: CTAs, labels, active states, headline accent |
| `um-orange-dim` | `#c45c18` | Orange hover state |
| `um-green` | `#005030` | Secondary accent: used sparingly (ACE badge, corner lines) |
| `um-green-dim` | `#003d24` | Green hover state |
| `text-primary` | `#0A0A0F` | Headings, body, near-black |
| `text-muted` | `#5C6070` | Subtext, labels, secondary copy |

**Rules:**
- Orange is primary. Green is secondary/decorative. Don't use both at equal weight.
- Card backgrounds are pure white (`#FFFFFF`) — not off-white.
- Never use `bg-black` directly — use `text-primary` token.
- Hover opacity modifiers on orange: `/90` (active), `/12` (tint), `/8` (very light), `/25` (shadow).
- `bg-black/5` and `bg-black/8` for ghost button states on light backgrounds.

---

## Typography

**Font:** Inter (variable, Google Fonts, `next/font/google`)
**CSS variable:** `--font-inter`

| Use | Class | Notes |
|-----|-------|-------|
| Hero headline | `text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04]` | Largest text on site |
| Page title (PageHero) | `text-5xl md:text-7xl font-bold tracking-tight leading-[1.08]` | Inner page H1 |
| Section heading (h2) | `text-3xl md:text-4xl font-bold tracking-tight` or `text-4xl md:text-5xl font-bold tracking-tight` | Context-dependent |
| Card heading (h3) | `text-lg font-semibold leading-snug` | Within cards |
| Section label pill | `text-xs font-semibold tracking-widest uppercase text-um-orange` | Always above section h2 |
| Body / subtext | `text-sm text-text-muted leading-relaxed` | Cards, paragraphs |
| Lead / subtext (hero) | `text-lg md:text-xl text-text-muted leading-relaxed` | Large supporting text |
| Small label | `text-xs text-text-muted` | Footer copy, meta |
| Form label | `text-xs font-semibold tracking-wide text-text-muted uppercase` | Contact form labels |

**No default font stacks.** Inter via CSS variable only. Never `font-sans` without the Inter variable set.

---

## Spacing & Layout

| Context | Value |
|---------|-------|
| Max content width | `max-w-6xl` (most sections), `max-w-5xl` (hero, about), `max-w-4xl` (CTA, contact) |
| Horizontal padding | `px-6` (all sections) |
| Section vertical padding | `py-16` to `py-28` depending on section weight |
| Page hero top padding | `pt-40 pb-24` (clears the fixed navbar at `h-16`) |
| Card padding | `p-8` (primary cards), `p-5` (compact grid cards) |
| Navbar height | `h-16` (fixed). All inner pages use `pt-40` to clear it. |

---

## Border Radius

| Component | Radius |
|-----------|--------|
| Cards (primary) | `rounded-2xl` |
| Cards (compact) | `rounded-2xl` |
| Buttons (primary) | `rounded-xl` |
| Buttons (nav) | `rounded-lg` |
| Input fields | `rounded-xl` |
| Label pills | `rounded-full` |
| Logo icon | `rounded-md` |
| Tag/badge | `rounded-full` or `rounded-md` |
| Stats container | `rounded-3xl` |

**Rule:** Radius decreases with component size. Large containers: `rounded-2xl`/`rounded-3xl`. Controls: `rounded-xl`. Nav items: `rounded-lg`. Pills/tags: `rounded-full`.

---

## Component Vocabulary

### Section Label Pill
Used at the top of every major section to label it. Always orange, uppercase, tracking-widest.
```tsx
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange mb-4">
  Label Here
</span>
```

### Orange Accent Pill (with border)
Used in PageHero and inline CTAs. Bordered version of the label pill.
```tsx
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-um-orange border border-um-orange/30 bg-um-orange/8 px-3 py-1 rounded-full">
  Label
</span>
```

### Primary CTA Button
Orange, white text, scale on hover, shadow.
```tsx
className="px-7 py-3.5 bg-um-orange hover:bg-um-orange-dim text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-um-orange/20"
```

### Ghost Button (on light background)
```tsx
className="px-7 py-3.5 border border-black/12 hover:border-black/25 bg-black/5 hover:bg-black/8 text-text-primary font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
```

### Card (primary)
White, subtle border, hover darkens border slightly, hover changes to `bg-surface`.
```tsx
className="bg-card border border-border rounded-2xl p-8 hover:border-black/12 transition-all duration-300 hover:bg-surface"
```

### Skill/Tag Badge
Very subtle — light gray fill, near-transparent border.
```tsx
className="text-xs px-2 py-0.5 rounded-md bg-black/5 text-text-muted border border-black/6"
```

### Section Divider
Horizontal gradient line, barely visible.
```tsx
<div className="mx-6 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
```

---

## Motion System

All scroll-reveal animations use `AnimatedSection` from `components/ui/AnimatedSection.tsx`.

### Available Variants

| Variant | Use |
|---------|-----|
| `fade-up` | Default — most section intros and copy blocks |
| `fade-in` | Subtle reveals where vertical movement would be wrong |
| `scale-in` | Cards, stats, compact grid items |
| `slide-left` | Left-side content |
| `slide-right` | Right-side content |

**Timing:** Default duration `0.6s`, easing `[0.21, 0.47, 0.32, 0.98]` (custom ease-out). Trigger margin: `-60px` (fires just before viewport edge). All `once: true` by default.

### Stagger Pattern
`StaggerContainer` with `staggerChildren` + `staggerItem` for card grids. Use `stagger={0.08}` for dense grids, `stagger={0.1}` for sparse ones.

### Hero-Specific Patterns
- **Parallax:** `useScroll` + `useTransform` for `contentY` (0→120px) and `contentOpacity` (1→0 at 60% scroll)
- **Headline reveal:** Each line has `y: 110% → 0%` with 0.12s stagger between lines
- **CTA entrance:** `y: 20px → 0`, `opacity: 0 → 1`, delay after headline completes

### Page Navigation Animation
Active nav link: animated `layoutId="nav-pill"` background + `layoutId="nav-underline"` orange underline (Framer Motion shared layout).

### Card Hover
`whileHover={{ y: -6 }}` with spring `{ stiffness: 280, damping: 22 }`.

### Filter Exit
Cards exiting on filter change: `exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}` via `AnimatePresence`.

---

## Ambient Background Elements

### Gradient Orbs
Used in Hero and CTABanner for ambient depth. Never in functional content areas.
- `GradientOrb` component: `color` (orange/green/mixed), `size` (sm/md/lg/xl), `position` (absolute positioning class)
- Positioned partially off-screen (negative offsets like `top-[-300px]`)
- Animated via CSS `@keyframes orb-drift-*` (18-22s loops, 3 variants)

### Dot Grid
Only in Hero. `DotGrid` component with `fadeOnScroll` and `dot-grid-animate` CSS class for subtle pulse.

**Rule:** Orbs and dot grid are Hero-exclusive backgrounds. Inner pages use PageHero with orbs but no dot grid.

---

## Page Structure Patterns

### Homepage Sections (in order)
1. `Hero` — full-height, scroll-to-explore
2. `HomeStats` — animated counter strip
3. `WhatWeDo` — four capability tracks
4. `FeaturedProjects` — 3-card portfolio preview
5. `CTABanner` — partner acquisition CTA

### Inner Page Pattern (PageHero + content)
```
PageHero (pt-40 pb-24, with orbs)
  → label pill → H1 → subtitle
───────────────────────────────── (gradient divider line)
Content sections (py-16 px-6)
───────────────────────────────── (gradient divider)
CTA section (usually links to /contact)
```

### Capability Track Card (WhatWeDo)
```
[Symbol icon]               [Level badge]
Course code (xs, muted, uppercase)
Track name (h3)
Description (sm, muted)
[Skill] [Skill] [Skill]   (tag badges)
```
Per-track accent colors:
- HCD & Product Design → orange (`bg-um-orange/12 text-um-orange`)
- AI Engineering → blue (`bg-blue-500/12 text-blue-400`)
- BI & Dashboards → green (`bg-emerald-500/12 text-emerald-400`)
- Graduate Capstone → purple (`bg-purple-500/12 text-purple-400`)

---

## Navbar

**Fixed, sticky, z-50.** Transparent at top → `rgba(248,249,250,0.96)` + blur(20px) after 50px scroll.

| Breakpoint | Behavior |
|------------|----------|
| < `md` (768px) | Hamburger → animated drawer below navbar |
| ≥ `md` | Full horizontal nav with active-state animated pill |

Active state: shared-layout `nav-pill` background + `nav-underline` orange underline.

CTA "Submit a Challenge" always visible (desktop: right of nav / mobile: bottom of drawer).

---

## Footer

3-column grid (`md:grid-cols-3`), `bg-surface`.
- Col 1 (md:col-span-1): Brand mark + tagline + ACE badge
- Col 2: Quick Links (mirrors navLinks)
- Col 3: Contact info (email, address)
- Bottom bar: copyright + "Built with Next.js & Tailwind CSS"

Top accent: subtle orange gradient line (`via-um-orange/40`).

---

## Accessibility Baselines

Current state (v1):
- `aria-pressed` on filter toggle buttons (`ProjectFilter.tsx`) ✓
- `aria-label` on hamburger button (`Navbar.tsx`) ✓
- Form fields: all inputs have visible `<label>` elements ✓
- Orange `#F47321` on white `#FFFFFF`: **4.03:1 contrast ratio** — passes WCAG AA for large text only, **fails for small text** (< 18px or < 14px bold)
- Orange `#F47321` on background `#F8F9FA`: **3.97:1** — fails AA for small text

**Known gap:** Orange text in small UI elements (filter pills, section labels, tags) does not meet WCAG AA. Tracked in TODOS.md.

**Keyboard navigation:** Desktop nav is keyboard-navigable (anchor elements). Mobile drawer: hamburger has `aria-label` but the drawer items lack `aria-expanded` on the trigger button.

**Touch targets:** Nav items are `h-16` bar with `px-4 py-2` items (~36px hit area). Filter pills are `py-1.5` (~36px). Below the recommended 44px. Acceptable for desktop but should be audited for mobile.

---

## Design Anti-Patterns to Avoid

Based on the v1 implementation, these patterns are explicitly NOT used and should not be introduced:
1. Purple/violet gradients — not in brand
2. Icon-in-colored-circle patterns as section decoration
3. Generic 3-column icon grid (WhatWeDo uses 2×2, not 3-col)
4. Centered all text with symmetrical card grids (hero is centered; cards are not)
5. Decorative SVG blobs or wavy dividers (use gradient orbs + dot grid only)
6. Placeholder-as-label for form fields (all inputs have explicit `<label>`)
7. Dead social icons (removed in v1 — if social links return, they must have real URLs)

---

## Responsive Breakpoints

| Breakpoint | Tailwind | Behavior |
|------------|----------|----------|
| Mobile | default | Single column, font sizes step down, hamburger nav |
| Tablet | `sm` (640px) | Two columns appear (stats 2-col, some card grids) |
| Desktop | `md` (768px) | Full nav, multi-column layouts, larger type sizes |
| Wide | `lg` (1024px) | Project grid goes 3-col |

Hero type scale: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` — deliberate staircase, not jumping from mobile to desktop.

---

## File Locations

| Asset | Location |
|-------|----------|
| Color tokens | `app/globals.css` → `@theme inline` |
| Animation variants | `components/ui/AnimatedSection.tsx` |
| Ambient backgrounds | `components/ui/DotGrid.tsx`, `components/ui/GradientOrb.tsx` |
| Reusable hero | `components/ui/PageHero.tsx` |
| All content/data | `lib/data.ts` |
| Nav links | `lib/data.ts` → `navLinks[]` |
| OG image | `public/og-image.png` (placeholder — see TODOS.md) |
