# Track The Breach — Product Requirements Document

## Original Problem Statement
Build a world-class cybersecurity SaaS marketing website for **Track The Breach** — an AI-Powered Digital Identity Protection, Exposure Intelligence & Personal Cybersecurity Platform.

Tagline: *Know What The Internet Knows About You*
Brand motto (header): *Stay Safe, Stay Protected*

## User Choices (cumulative)
- **Scope**: Full marketing site only (user already runs the SaaS product).
- **Auth**: No auth on this site — Sign Up Free / Log in buttons link to existing external SaaS (`https://app.trackthebreach.com`).
- **Tech stack**: React + FastAPI + MongoDB (Emergent template).
- **Theme** (iteration 2): LIGHT mode — off-white background (#FBFCFF) with floating colored gradient orbs (blue/purple/green/orange/cyan). Dark slate text.
- **Logo**: New blue swirl mark (customer asset Logo 1.png).
- **Pricing structure** (iteration 2): 5 paid plans only (no Free plan in pricing). Account creation itself remains free (no credit card at sign-up).
- **Payments**: Razorpay, USD + INR supported.

## User Personas
- Individuals · Families · Professionals · Influencers · Executives & VIPs · Business buyers · Enterprise · Security teams / Researchers · Investors / Press.

## Core Requirements
- Premium LIGHT-mode cybersecurity SaaS aesthetic with glowing gradient orbs, glassmorphism cards.
- 60+ routes covering Home, Product (11), Solutions (9), Investor (9), Enterprise (6), SEO (20), Pricing, Contact, About, Careers, Partners, Blog, Trust Center, FAQ.
- Brand motto banner ("Stay Safe, Stay Protected") at top of every page.
- New blue swirl logo in navbar + footer.
- Pricing page: 5 plans, currency toggle (USD/INR), credit usage table.
- "Free" wording removed everywhere EXCEPT the "Sign Up Free" CTA buttons (kept as-is per user direction).

## What's Been Implemented

### Feb 12, 2026 — MVP (iteration 1)
- 65 routes total (12 explicit pages + 53 dynamic CategoryPage slugs).
- Dark-mode design with mega-menu navigation.
- All sections, pricing matrix, contact form, blog, careers, partners, trust center.
- testing_agent_v3 → 100% pass.

### Feb 12, 2026 — Light-theme + new pricing pivot (iteration 2)
- **Theme inversion**: dark → LIGHT theme across every component (index.css, App.css, every section, every page).
- **Ambient orbs**: animated blue/purple/green/orange/cyan gradient bubbles in `Layout.jsx` (fixed background layer).
- **Logo**: replaced shield icon with `LOGO_URL` (Logo 1.png) in Navbar + Footer.
- **Motto banner**: gradient strip with "Stay Safe, Stay Protected" + data-testid="brand-motto" at the top of every page (hidden on mobile).
- **Pricing rewrite**: 5 plans (Starter $4.99/₹499/20 cr · Professional $19.99/₹1,999/100 cr · Business $49.99/₹4,999/300 cr [Most Popular] · Enterprise $99.99/₹9,999/1,000 cr · Full Secure $249.99/₹24,999/3,000 cr).
- **Currency toggle**: USD/INR switcher updates all 5 prices in place.
- **Credit Usage section**: 6 services (Email 20 · Phone 40 · Social 80 · Gov ID 100 · Photo 150 · Video 300).
- **Razorpay** reassurance pill on pricing.
- **Free word removal**: hero CTA → "Start Your Exposure Report"; "Sign Up Free" retained on navbar + final CTA; FAQ "Is there a free option?" replaced with "Is the account creation free?".
- **Footer**: removed "Free Tools & SEO" heading + "See all plans →" link. SEO link grid kept intact.
- testing_agent_v3 → 100% pass (15/15 acceptance criteria).

## P0 / P1 / P2 Backlog

### P0
- (none — site is launch-ready)

### P1
- Real blog post detail pages (currently `/blog/:slug` reuses Blog index).
- Schema.org Organization + WebSite + FAQ markup for SEO.
- Sitemap.xml + robots.txt generation.
- Open Graph image for social shares.
- Accessibility pass: mega-menu now opens on click too (touch-friendly), still needs full keyboard nav audit.

### P2
- Animate section reveals on scroll (Framer Motion stagger).
- Add a 60s product demo video on Watch Demo CTA.
- Live chat widget (Intercom / Crisp) for Contact page.
- Localized content variants for India/EU/MENA SEO pages.

## Files of Reference
- `/app/frontend/src/index.css` — light theme tokens + ambient orb animations
- `/app/frontend/src/App.js` — all routes
- `/app/frontend/src/data/content.js` — content config (NAV, PAGES, PRICING_PLANS, CREDIT_USAGE, LOGO_URL, BRAND_MOTTO)
- `/app/frontend/src/components/layout/{Navbar,Footer,Layout}.jsx`
- `/app/frontend/src/components/sections/*.jsx` — 12 homepage sections
- `/app/frontend/src/pages/*.jsx` — 11 page components
