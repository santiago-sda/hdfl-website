# TODOS

## P1 — Critical

### [P1] Contact form backend
**What:** Wire `ContactForm.tsx` to an email delivery service so partner challenge submissions are actually received.
**Why:** Every form submission is currently silently discarded. `ContactForm.tsx:57` runs a fake `setTimeout` that shows a success state but sends nothing. Real partner leads are being lost.
**Approach:** Resend (free tier, 3000 emails/month). Add `app/api/contact/route.ts` as a Next.js API route handler. Add `RESEND_API_KEY` to Vercel environment variables.
**Effort:** S (human) → S with CC+gstack (~20 min)
**Blocked by:** Resend account + API key setup (5-minute task at resend.com)
**Files:** `components/contact/ContactForm.tsx`, `app/api/contact/route.ts` (new)

---

## P2 — Important

### [P2] Replace OG image placeholder with branded version
**What:** Replace `/public/og-image.png` (solid orange rectangle, committed as Step A) with a real branded OG image.
**Why:** Every link share on Slack/LinkedIn/iMessage shows the placeholder. The final design: background `#F8F9FA`, orange `#F47321` accent, text `#0A0A0F`, lab name + tagline. Size: 1200×630.
**Effort:** XS once design is ready
**Files:** `/public/og-image.png`

### [P2] WCAG contrast — orange text on light background
**What:** Audit all `text-um-orange` uses and swap to `text-um-orange-dim` (#C45C18) where orange text appears on the light `#F8F9FA` background.
**Why:** `#F47321` on `#F8F9FA` = ~3.1:1 contrast ratio, below WCAG AA (4.5:1 for normal text). Affects readability for low-vision users. Orange as a *background* color (filled CTA buttons, category badges) is fine — only orange *text* on light background needs to change.
**Scope:** `text-um-orange` in `app/about/page.tsx`, `components/home/WhatWeDo.tsx`, `components/home/Hero.tsx`, `components/ui/PageHero.tsx` — anywhere it renders as text, not fill.
**Effort:** S (human) → XS with CC+gstack
**Files:** Multiple — grep for `text-um-orange`
