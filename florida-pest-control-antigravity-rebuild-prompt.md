# Antigravity Implementation Prompt
## Florida Pest Control Center — Full Website Rebuild

Paste everything below this line into Antigravity as a single implementation brief.

---

## 0. How To Use This Prompt

You are building a complete website rebuild for **Florida Pest Control Center**, a family-owned pest control company serving Fort Lauderdale and South Florida. This is not a visual refresh. You are rebuilding the information architecture, conversion system, trust infrastructure, and technical SEO foundation from the ground up. Treat this as a new build that happens to reuse the company's real name, real license status, real address, real phone number, and real service history — not as a template reskin.

Do not invent facts. Where real data (review counts, certifications, license numbers, technician names, fleet size) is not supplied to you, insert a clearly labeled placeholder (e.g., `[INSERT VERIFIED GOOGLE REVIEW COUNT]`) rather than fabricating a number. Flag every placeholder in a final punch list so a human can fill it in before launch.

---

## 1. Project Overview

**Client:** Florida Pest Control Center
**Current site:** https://www.floridapestcontrolcenter.com/
**Market:** Fort Lauderdale / Broward County / South Florida
**Industry:** Residential & commercial pest control (termite, rodent, ant, mosquito, cockroach, bed bug, pigeon/bird, landscape pest control)
**Current stack:** Site is CRM-integrated with GoHighLevel/LeadConnector (contact form is a LeadConnector widget embed at `api.leadconnectorhq.com/widget/form/...`). Preserve this integration path — do not force a CRM migration as part of this rebuild.

**What's real and already working (preserve and elevate, don't discard):**
- Real NAP: Florida Pest Control Center, 3900 SW 2nd Court, Fort Lauderdale, FL 33312, (954) 945-5050
- Real trust badges already in use: Google, Yelp, National Pest Management Association (NPMA), Expertise.com
- Existing individual service pages for ant, pigeon, landscape, mosquito, rodent, termite, bed bug, and bed bug inspection
- Existing blog
- Existing Google Reviews testimonial content (John, Olivia Christian, Jorge Padilla — real named reviews with location tags)
- Independent/family-owned positioning against big national brands (this is a genuine differentiator — keep it, don't sand it down)
- GoHighLevel/LeadConnector form infrastructure

**What's broken and must be fixed (see Section 18 for full list):**
- Conflicting business hours on the same page (contact page body: "Sat – Sun: 8:00am–8:00pm"; site-wide footer, including on that same contact page: "Sat – Sun: Closed")
- Google Plus icon and link still live in the footer, pointing to a Google Maps redirect — a visible signal the site hasn't been maintained
- A stray "Conroe" entry sitting inside the Florida service-area list on the homepage and contact page, directly under "Fort Lauderdale" — an obvious leftover template artifact from a different market (Conroe is in Texas)
- One static phone number sitewide, no call tracking or dynamic number insertion
- Lead form exists only on the Contact page, not embedded in core conversion sections
- No visible live chat or online scheduling
- Internal service links on the homepage that dead-end at `/index.html` instead of the actual service page (e.g., commercial pest control "View More," cockroach control "Learn More")

**The core narrative to design around:**

> They had the trucks. They had the services. They had the market. Their website just wasn't telling the same story.

This company is operationally larger and more serious than its current website communicates. Design and build so that a visitor's first impression matches the reality of a real regional South Florida pest control operator — not a solo exterminator with a template site.

---

## 2. Strategic Objective

The strategic bottleneck is **trust proof and attribution**, not aesthetics alone. Regional and national competitors in this market — Hulett, Nozzle Nolen, Orkin, Truly Nolen, Terminix, Massey — win partly on service and partly on the sheer weight of visible proof (review volume, certifications, structured content, tracked conversion systems). Florida Pest Control Center needs three things simultaneously:

1. **A site that looks and feels like a real regional operator** — clean, modern, rounded, professional, not a small operation and not overproduced luxury.
2. **A conversion system that captures both callers and quiet researchers** — not everyone wants to pick up the phone first. Every core page needs an inline path to convert without a call.
3. **An attribution and local SEO architecture** — so that every lead can be traced to its source, and every service area claimed publicly is backed by a real, indexable page.

Guiding principles to apply throughout the build:
- A service page should not just explain what the company does — it should help the visitor choose this company over the five others they're also looking at.
- If you can't tell where a lead came from, you can't tell what to scale. Every conversion point needs a distinct tracked identity.
- You cannot claim a service area online without a page to back it up. Do not list a city in navigation, footer, or schema unless a real location page exists for it.
- Small, visible errors (wrong hours, dead social icons, orphaned city names) create outsized trust damage relative to their size. Treat every one of these as a launch blocker, not a nice-to-have fix.

---

## 3. Design Direction

**Feel:** Modern South Florida pest protection — clean, local, reliable, and built like a real regional operation.

**Explicitly NOT:**
- Not luxury or editorial (pest control is not a luxury category — avoid serif display type, oversized whitespace-as-status, or high-fashion photography treatment)
- Not dark, aggressive, or "performance contractor" energy (no black backgrounds, no slashing diagonal shapes, no countdown-timer urgency language)
- Not a cluttered, coupon-heavy pest control template (no stacked popups, no flashing "$50 OFF" banners competing with each other, no dense wall of stock bug photos)

**Reference direction, applied selectively:**

| Site | What to take from it |
|---|---|
| Alta Pest Control | Modern polish, generous white space, approachable trust-building, clean rounded cards, simple homeowner-first flow |
| Black Pest Prevention | Mature, calm, established authority — tone more than visuals |
| Termio Pest Control | Clean service structure, rounded UI components, service-plan presentation pattern, simple CTA hierarchy |
| Orkin | Conversion architecture: quote-first flow, city/service page structure, pest education content, scheduling logic |
| Agro Pest Pros | Specificity in service descriptions, pricing/plan cues, pest-specific landing page structure, practical conversion sections |
| Nozzle Nolen | South Florida regional relevance, local personality, credibility specific to this market |

Synthesize these — do not copy layouts wholesale. The end result should feel like its own brand system that happens to share DNA with these references.

---

## 4. Visual Style Guide

**Color palette:**

| Role | Color | Hex |
|---|---|---|
| Primary background | Warm white | `#FAFAF7` |
| Secondary background | Soft sand / light beige (section alternation) | `#F8F6F0` |
| Primary brand color | Deep clean green | `#174A36` |
| Secondary accent | Teal-green | `#2A7C6F` |
| Accent (sparing use only — CTAs, highlights, badges) | Citrus/gold | `#F2B84B` |
| Primary text | Near-black green-gray | `#16211C` |
| Muted/secondary text | Soft gray-green | `#66736C` |
| Borders/dividers | Light warm gray | `#E3E0D8` |

Use the citrus accent sparingly — for a highlighted CTA button, a badge ribbon, or an icon accent. It should never dominate a section. Green and teal carry the brand; citrus punctuates it.

**Typography:**
- Clean modern sans-serif throughout (e.g., a geometric-humanist family like Inter, Söhne, General Sans, or similar — avoid condensed or aggressive display fonts)
- Headings: confident and friendly, title case, not editorial/serif, not oversized to the point of feeling like a luxury brand
- Body: highly readable, minimum 16px base, generous line-height (1.5–1.7)
- Avoid all-caps for large blocks of text; reserve for small labels/eyebrows only

**Components:**
- Rounded cards (16–24px radius) with soft drop shadows, not hard borders
- Rounded pill-shaped buttons for all primary CTAs
- Consistent icon set: simple, line-based or softly-filled pest/service icons — not cartoonish, not photorealistic bug close-ups
- Generous section padding; let content breathe rather than compressing it
- Alternate background bands (warm white / sand) to create visual rhythm between sections without hard dividing lines

**Photography:**
- Use real technician, fleet, and South Florida home exterior photography wherever available
- Where real photography isn't available, use clean stock imagery of homes, neighborhoods, and technicians at work — never staged "gross bug" macro shots as hero or section imagery
- Macro pest photography is allowed only in clearly educational contexts (e.g., a "how to identify" FAQ accordion or an inline identification graphic), and should be tastefully cropped/styled, not shock imagery
- Avoid stock photography that looks generic-corporate (handshakes, lab coats) — this is a trades/home-services brand, not B2B SaaS

---

## 5. Homepage Structure

Build the homepage as the following ordered sections. Each is a distinct, componentized block so it can be reused/reordered on other pages.

### 5.1 Header
- Logo, left-aligned
- Primary nav (see Section 6)
- Phone number, click-to-call, visible at all breakpoints
- Primary CTA button: **"Schedule Free Inspection"**
- Mobile: collapse nav into a menu icon; add a persistent sticky bottom bar with two buttons — **Call** and **Schedule** — visible on scroll on all mobile pages

### 5.2 Hero Section
- H1: **"Modern Pest Protection For Fort Lauderdale Homes & Businesses"**
- Subheadline: communicate local, family-owned pest control backed by the systems and service depth to protect South Florida properties year-round (not a one-time spray shop)
- Primary CTA: **"Schedule A Free Inspection"**
- Secondary CTA: **"Call Now"** (click-to-call)
- Trust row directly beneath CTAs: Google rating + review count (placeholder until verified), "Licensed & Insured," "Family-Owned," "Serving South Florida," satisfaction guarantee badge
- Visual: clean South Florida home exterior, technician/fleet imagery, or a rounded image composition (layered rounded image cards). No gross bug close-ups in the hero.

### 5.3 Problem / Trust Gap Section
- Establish that South Florida pest pressure is year-round, not seasonal — humidity, heat, and proximity to green space keep termites, ants, roaches, and mosquitoes active continuously
- Reframe the company as a proactive protection partner rather than a reactive, one-time spray service
- This section sets up the Protection Plan section that follows

### 5.4 Services Overview
Rounded card grid, one card per service, each linking to its dedicated service page:
- Termite Control
- Rodent Control
- General/Residential Pest Control
- Mosquito Control
- Cockroach Control
- Ant Control
- Bed Bug Control
- Pigeon / Bird Control
- Landscape Pest Control
- Commercial Pest Control

Each card: icon, service name, one-sentence description, "Learn More" link. Cards must link to real, unique URLs — never to `/index.html` or a placeholder.

### 5.5 Protection Plan Section
Introduce the **"Florida Home Protection Plan"** — a recurring service concept, not a one-time treatment:
- Routine pest control visits
- Exterior barrier treatment
- Interior service as needed
- Seasonal pest checks
- Optional add-ons: mosquito control, termite inspection, rodent monitoring

Present as a simple visual plan card (not a rigid pricing table unless real pricing tiers are supplied) with a CTA to build/request a plan.

### 5.6 Termite Inspection Feature Section
Treat termite control as the flagship, high-ticket service — give it a full dedicated homepage section, not just a service card:
- Signs of termites (visual checklist)
- South Florida termite risk framing (subterranean, drywood, Formosan — the existing site already lists these; preserve and expand)
- Treatment approach overview
- Warranty/guarantee language (use real guarantee terms if supplied; otherwise placeholder)
- Dedicated CTA: **"Schedule A Free Termite Inspection"**

### 5.7 Residential + Commercial Split Section
Two-column or two-panel layout:
- **Homeowners:** year-round pest protection framing
- **Businesses/Property Managers:** discreet, scheduled commercial pest control

List commercial categories explicitly: restaurants, offices, retail, warehouses, HOAs, apartments, property managers, medical offices, vacation rentals. Each panel gets its own CTA (**"Request Service"** for residential, **"Request Commercial Assessment"** for commercial).

### 5.8 Process Section
Five-step visual process:
1. Schedule Inspection
2. Identify Pest Pressure
3. Treat The Problem
4. Protect Against Return
5. Ongoing Support / Re-Service If Needed

### 5.9 Why Choose Florida Pest Control Center
Grid or icon-row layout covering:
- Local South Florida team
- Family-owned and independent (explicit contrast with large national companies — this is a real differentiator on the current site, preserve it)
- Licensed and insured
- Experienced with Florida-specific pests
- Residential and commercial capability
- Fast response times
- Clear communication, no upsell pressure
- Guaranteed service language
- Fleet/team presence (photography of trucks/techs if available)

### 5.10 Review / Trust Section
- Live Google review feed placeholder (component ready for real API/widget integration — do not hardcode fake counts)
- Service-specific review cards (reuse and expand the real testimonials already on the current site: John/Fort Lauderdale "Very Honest," Olivia Christian "Such A Good Help," Jorge Padilla "Highly Recommended" — these are real and should carry forward)
- Badge row: NPMA, Expertise.com, Google, Yelp, BBB (if verified), license/insurance badge — reuse the real badges already present on the current site; do not add unverified certifications
- CTA: **"Read Reviews"** + **"Schedule Inspection"**

### 5.11 Service Area Section
- Fort Lauderdale positioned first and primary
- Initial expansion cities, each only if a real location page is built (see Section 9): Plantation, Davie, Hollywood, Pembroke Pines, Weston, Sunrise, Wilton Manors, Oakland Park, Dania Beach, Lauderdale Lakes
- Clean city grid or lightweight map-style section — replace the current bare Google My Maps embed with a styled, on-brand component
- Do not list any city without a corresponding indexable page

### 5.12 FAQ Section
Accordion covering:
- How often should pest control service happen?
- Termite inspection process and cost questions
- Is treatment safe for kids and pets?
- What's the service guarantee?
- Same-day/next-day availability?
- Residential vs. commercial service differences
- Mosquito and rodent seasonal questions

Mark this section up with FAQPage schema (see Section 12).

### 5.13 Final CTA Section
- Headline: **"Protect Your Home Before The Problem Spreads"**
- Primary CTA: **"Schedule A Free Inspection"**
- Secondary CTA: **"Call Florida Pest Control Center"**
- Keep this section visually simple — no competing elements, single clear close

---

## 6. Navigation Structure

**Primary nav:**
- Services (mega-menu or dropdown listing all individual service pages)
- Termite Control (elevated to its own top-level nav item given its flagship status)
- Residential
- Commercial
- Service Areas
- Reviews
- About
- Contact
- CTA button, visually distinct from nav links: **"Schedule Free Inspection"**

**Footer nav (rebuilt, not the current broken version):**
- Quick Links: Home, Services, About, Reviews, Sitemap, Contact
- Services list: all individual service links
- Service Areas list: all real location pages
- Contact block: address, phone (click-to-call), email, **corrected and single source of truth for hours** (see Section 18)
- Social icons: Facebook and X/Twitter only, both verified live — **remove the Google Plus icon and its link entirely** (Google+ was discontinued; the current icon links out to a Google Maps redirect, which is both broken branding and a dead product reference)
- License/insurance line if real license number is supplied

---

## 7. Core Page Architecture

Build the following URL structure. Every URL listed must resolve to a real, unique, fully built page — no orphaned links, no pages that just redirect to `/index.html`.

```
/                                       Homepage
/services/                             Services hub/overview
/residential-pest-control/             Residential overview
/commercial-pest-control/              Commercial overview
/termite-control/                      Termite (flagship service page)
/rodent-control/
/cockroach-control/
/mosquito-control/
/ant-control/
/bed-bug-control/
/pigeon-bird-control/
/landscape-pest-control/
/service-areas/                        Service area hub
/pest-control-fort-lauderdale/         Primary location page
/pest-control-plantation/
/pest-control-davie/
/pest-control-hollywood/
/pest-control-pembroke-pines/
/pest-control-weston/
/pest-control-sunrise/
/pest-control-wilton-manors/
/pest-control-oakland-park/
/pest-control-dania-beach/
/reviews/
/about/
/contact/
```

Set up 301 redirects from all existing legacy URLs (e.g., `/pest-control/ant-control`, `/pest-control/mosquito-control`, `/service-location/fort-lauderdale`, `/about/blog`) to their new equivalents to preserve existing SEO equity. Do not orphan the existing blog — migrate it to `/blog/` and preserve individual post URLs where possible.

---

## 8. Service Page Templates

Every one of the ten service pages (termite, rodent, cockroach, mosquito, ant, bed bug, pigeon/bird, landscape, residential, commercial) uses this template:

1. **Service-specific H1** (e.g., "Termite Control in Fort Lauderdale, FL")
2. **Short local intro** — 2–3 sentences connecting the pest to the South Florida climate/context
3. **Signs of the pest/problem** — visual checklist or icon list
4. **Why it matters in South Florida** — climate, building stock, or regional-specific framing (reuse and expand real facts already on-site, e.g., termite damage cost statistics)
5. **Treatment approach** — plain-language explanation of method, not overly technical
6. **Prevention approach** — what ongoing protection looks like
7. **Residential/commercial relevance** — note where the service applies to both
8. **Related services** — internal links to 2–3 adjacent service pages
9. **Service-area internal links** — links to relevant location pages this service is offered in
10. **Review/testimonial block** — pest-specific or general reviews
11. **FAQ block** — 3–5 questions specific to that pest, marked up with FAQPage schema
12. **CTA block** — inline lead form or scheduling widget, not just a link to `/contact/`
13. **Schema-ready structure** — Service schema + BreadcrumbList (see Section 12)

---

## 9. Location Page Templates

Every location page (Fort Lauderdale plus the nine expansion cities) uses this template:

1. **City-specific H1** (e.g., "Pest Control in Plantation, FL")
2. **Unique city intro** — do not template-swap the city name into identical boilerplate; write distinct content per city referencing real local context (neighborhoods, geography, known local pest pressure)
3. **Common pests in that city** — 3–5 relevant pests with links to the matching service pages
4. **Services available in that city** — list of services offered there, each linking to the service page
5. **Neighborhoods served** — named neighborhoods/subdivisions within that city, where known
6. **Nearby city internal links** — links to 2–3 adjacent location pages
7. **Review/testimonial section** — prioritize reviews tagged to that city if available; otherwise general reviews
8. **FAQ block** — location-specific questions (permit/HOA considerations, response time in that city, etc.)
9. **CTA block** — inline scheduling form
10. **Schema-ready local content** — LocalBusiness schema with `areaServed` set to that city, plus BreadcrumbList

**Hard rule:** do not publish a location page for any city until it has genuinely unique content per the template above. A thin, swapped-city-name page is worse for local SEO than no page at all (duplicate/near-duplicate content risk). Build Fort Lauderdale first and fully, then expand city by city.

---

## 10. Conversion System

- **Inline forms, not just a contact page.** Embed a short lead form (name, phone, service needed, address/zip) directly in: hero section, Protection Plan section, Termite Inspection section, bottom of every service page, bottom of every location page, and the Final CTA section. Route all forms into the existing GoHighLevel/LeadConnector integration.
- **Distinct CTA identity per placement** so each can be tracked separately: hero CTA, mid-page CTA, termite-specific CTA, commercial assessment CTA, mobile sticky CTA, location-page CTA, service-page CTA, exit/final CTA.
- **Click-to-call everywhere**, using `tel:` links, not just displayed text.
- **Mobile sticky CTA bar** on every page — Call + Schedule, always visible, thumb-reachable.
- **Dynamic Number Insertion (DNI) readiness:** build the phone number as a templated component (not hardcoded text repeated across the site) so a call-tracking number can be swapped in per traffic source without a manual site-wide find/replace. Document this as a required post-launch integration if a call tracking platform (CallRail or equivalent) is added.
- **Live chat / scheduling widget slot:** reserve a persistent bottom-corner slot (desktop) / integrate into the mobile sticky bar for a future live chat or online scheduling tool, even if not activated at launch.
- Avoid stacking multiple competing popups or modals — one well-placed exit-intent or scroll-triggered offer at most, never layered.

---

## 11. Trust-Building System

- **Review infrastructure:** build a live Google Review feed component (ready to connect to Google Business Profile API or a review aggregation widget) rather than hardcoding review counts or star ratings. Until a real, verified count is supplied, use a labeled placeholder like `[LIVE GOOGLE REVIEW COUNT]` — never invent a number.
- **Badge system:** display only real, verifiable badges — the current site already has legitimate Google, Yelp, NPMA, and Expertise.com badges; carry these forward and add BBB or license badges only if verified. Do not add generic "5-star rated" graphics without a real source.
- **License and insurance:** display Florida pest control license number and insurance status prominently in the footer and About page once supplied. This single credibility signal often outweighs generic trust badges in this industry.
- **Fleet and team presence:** if photography of trucks, technicians, or the office exists, use it — this is the company's genuine competitive advantage (operationally larger than the site currently suggests) and should be made visible, not hidden behind stock photography.
- **Named, located testimonials:** preserve the pattern already used on the current site (name + city, e.g., "John, Fort Lauderdale") rather than switching to anonymous quotes — specificity reads as more credible.
- **Guarantee language:** state the actual service guarantee/warranty terms clearly on the termite page and general FAQ; do not use vague "we guarantee satisfaction" language without specifics if real terms are available.
- **About page:** build out a real About page with the family-owned story, years in business, and local-team framing — this page currently exists but should be expanded to do more trust-building work, not just list credentials.

---

## 12. Technical SEO Strategy

- **Semantic HTML** throughout: proper `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, one `<h1>` per page, logical `<h2>`/`<h3>` hierarchy — no skipped heading levels, no heading tags used purely for visual sizing.
- **Schema markup** (JSON-LD) required sitewide:
  - `LocalBusiness` / `PestControl` schema on homepage and every location page (name, address, phone, hours, geo, areaServed, priceRange if applicable)
  - `Service` schema on every service page
  - `FAQPage` schema on every page with an FAQ accordion
  - `BreadcrumbList` schema on every interior page
  - `Organization` schema sitewide (logo, sameAs links to real, live social profiles only)
  - `ContactPoint` schema tied to the phone number
  - `WebPage` schema with correct page-level metadata
- **NAP consistency**: the exact same name, address, and phone number format must appear identically in the header, footer, Contact page, all location pages, and all schema — this is a known current weakness (verify hours and any secondary listings match too).
- **301 redirect map** from every legacy URL to its new equivalent (see Section 7).
- **XML sitemap** auto-generated and submitted, covering all real pages only — never include thin or unbuilt location pages in the sitemap.
- **Robots.txt** reviewed and updated to reflect the new structure.
- **Canonical tags** on every page, self-referencing unless a specific consolidation is needed.
- **Image optimization**: responsive, compressed, modern formats (WebP/AVIF) with descriptive alt text — the current site's alt text is decent (keep that discipline) but images should be served at appropriate sizes, not full-resolution originals.
- **Core Web Vitals**: target good LCP/CLS/INP scores — avoid render-blocking scripts, lazy-load below-the-fold imagery, size images explicitly to prevent layout shift.
- **Internal linking**: every service page links to related services and relevant location pages; every location page links to related services and nearby locations — build a real internal linking mesh, not just top-nav-only navigation.

---

## 13. Tracking and Analytics Requirements

Build with slots/hooks ready for the following, even if final IDs are supplied post-launch:

- **Google Analytics 4 (GA4)** — sitewide
- **Google Tag Manager (GTM)** — as the container for all tags below, so future tracking changes don't require code deploys
- **Meta Pixel** — sitewide
- **Google Ads conversion tracking** — tied to form submissions and call clicks
- **Call tracking integration slot** — for a dynamic-number-insertion provider (e.g., CallRail); phone number must be a reusable component, not hardcoded, to support this
- **Form submission tracking** — every form (inline and Contact page) fires a distinct GTM event
- **GBP UTM attribution** — ensure any links from Google Business Profile use trackable UTM parameters, and that the site can distinguish GBP-sourced traffic in GA4

**Required distinct event tracking:**
- Phone number clicks (`tel:` link clicks)
- Form submissions (per form location — hero, mid-page, termite section, commercial, location page, service page, final CTA)
- Inspection CTA clicks
- Commercial assessment requests
- Mobile sticky CTA clicks (call vs. schedule, tracked separately)
- Service page CTA clicks
- Location page CTA clicks

The underlying principle: no lead should be able to convert anywhere on the site without that conversion being attributable to a specific page, section, and CTA. This directly supports the strategic objective in Section 2 — if you don't know where a lead came from, you can't tell what to scale.

---

## 14. Local SEO Requirements

- Build one genuinely unique, fully templated location page per real service city — Fort Lauderdale first, then the nine expansion cities listed in Section 7, each launched only when its unique content is complete.
- Maintain exact NAP consistency across site, schema, and (post-launch) Google Business Profile.
- Do not list, claim, or imply service in any city without a matching page — remove any stray/unsupported area references (see Section 18, the "Conroe" fix).
- Structure location pages to reference real, local geography (named neighborhoods, nearby landmarks/waterways where natural) rather than generic city-name templating.
- Prepare the site to support a Google Business Profile content strategy (consistent categories, service list matching site service pages, city list matching site location pages).
- Internal linking between location pages should mirror real regional geography (e.g., Fort Lauderdale links to Wilton Manors and Oakland Park as neighbors, not to Weston as a "nearby" city if it isn't).

---

## 15. Mobile UX Requirements

- Mobile-first build — design and test mobile layouts first, then scale up to desktop, not the reverse.
- Persistent sticky bottom CTA bar with **Call** and **Schedule** buttons, thumb-reachable, on every page.
- Tap targets sized for real thumbs (minimum ~44px), adequate spacing between adjacent links/buttons.
- Forms optimized for mobile input: correct keyboard types for phone/email fields, minimal required fields on inline forms (name, phone, service, zip — save detailed intake for the full Contact page form).
- Collapsible nav that doesn't bury the phone number or CTA — phone/CTA should remain visible or one tap away at all times.
- Fast mobile load times — this is a "someone has ants right now and is searching from their kitchen" use case; slow mobile load directly costs leads.
- Avoid mobile popups that cover the CTA bar or are difficult to dismiss.

---

## 16. Copywriting Direction

**Tone:** calm, confident, local, friendly, clear, protective, professional.

**Explicitly avoid:** fearmongering, luxury/editorial voice, cheesy pun-heavy copy, aggressive urgency tactics ("ACT NOW OR ELSE"), generic corporate-speak.

**Core messaging themes to weave throughout:**
- South Florida pest pressure is year-round, not seasonal — this justifies the Protection Plan model over one-time service
- Local, family-owned service with real regional operational capability (the trucks-and-services-but-not-the-website narrative should inform every page, implicitly, never stated as marketing copy itself)
- Modern pest protection, not one-time spraying — prevention-first framing
- Protecting both homes and businesses — don't let commercial feel like an afterthought
- Fast inspections, clear communication, no pushy upsells (this mirrors real language already on the current site — "punctual, courteous, and never pushy" — preserve that voice)
- Trust, proof, and accountability over hype

**Practical copywriting rules:**
- Every H1 should be specific to the page's service/city, never generic ("Pest Control Services" is weak; "Termite Control in Fort Lauderdale, FL" is strong)
- Lead with the local/regional framing before the generic service description
- Keep paragraphs short — 2–4 sentences — for scan-ability on mobile
- Use real statistics where the current site already has them (e.g., termite damage cost figures) rather than dropping them for generic claims
- CTAs should read like natural next steps, not command-shouting

---

## 17. Specific Sections To Build

Beyond the homepage sections in Section 5, ensure these standalone components exist and are reusable across the site:

- Reusable **inline lead form** component (short version) for embedding mid-page across service/location pages
- Reusable **FAQ accordion** component with schema markup baked in
- Reusable **review/testimonial card** component, filterable by service or city if review volume supports it
- Reusable **CTA banner** component (headline + two buttons) for use at the bottom of every template
- Reusable **service card** and **location card** grid components
- Reusable **badge row** component for trust signals
- **Sticky mobile CTA bar** component, sitewide
- **Breadcrumb** component, sitewide on interior pages

---

## 18. Specific Outdated Elements To Remove Or Fix

These are launch blockers, not polish items:

1. **Remove the Google Plus icon and link from the footer entirely.** It currently links to a Google Maps redirect (`maps.app.goo.gl/...`) and is a visible dead-product reference. Replace the social icon row with only real, live, verified profiles (Facebook and X/Twitter are currently live and should remain; add Instagram/LinkedIn only if real active profiles exist).
2. **Fix the business hours conflict.** The current Contact page body states "Sat – Sun: 8:00am–8:00pm" while the sitewide footer — including on that same page — states "Sat – Sun: Closed." Establish one verified, correct set of hours and use it everywhere: header (if shown), footer, Contact page, About page, and all schema markup. This must be a single source of truth, ideally pulled from one config/component rather than hardcoded in multiple places.
3. **Remove the stray "Conroe" entry** from the Florida service-area list (currently appears directly beneath "Fort Lauderdale" in the homepage and contact page service-area dropdown). This is a leftover template artifact from an unrelated market and should never have shipped — treat its removal as non-negotiable.
4. **Fix dead-end internal links.** Several homepage service "Learn More"/"View More" links currently point to `/index.html` instead of the actual service page (observed on Commercial Pest Control and Cockroach Control at minimum — audit all service card links). Every link must resolve to its real destination.
5. **Replace the static, untracked phone number** with a componentized, DNI-ready number so call tracking can be layered in without a sitewide manual edit.
6. **Move lead capture off the Contact page only.** Add inline forms across the site per Section 10.
7. **Rebuild the bare Google My Maps embed** in the Service Area section into a styled, on-brand component consistent with the rest of the design system.
8. **Do not overclaim service areas.** Only list cities in nav, footer, homepage, and schema that have real, unique location pages built per Section 9.
9. **Do not invent review counts, star ratings, or certifications.** Use verified data or clearly labeled placeholders only.

---

## 19. Recommended Calls-To-Action

**Primary CTAs (used for main conversion actions):**
- Schedule A Free Inspection
- Get Pest Help Today
- Call Now
- Request Service
- Build A Protection Plan

**Secondary CTAs (used for navigation/exploration actions):**
- View Services
- See Service Areas
- Read Reviews
- Learn About Termite Control
- Request Commercial Assessment

Keep CTA button copy consistent sitewide — don't invent new variants per page beyond this list unless a specific section genuinely needs a unique action (e.g., "Request Commercial Assessment" only appears in commercial-facing contexts).

---

## 20. Final QA Checklist

Run through this checklist before considering the build launch-ready.

**Accuracy / trust fixes**
- [ ] Business hours identical in every location they appear (header, footer, Contact page, About page, schema)
- [ ] Google Plus icon and link fully removed from footer
- [ ] "Conroe" and any other stray/non-Florida location references removed from every service-area list
- [ ] NAP (name, address, phone) identical across header, footer, Contact page, all location pages, and all schema
- [ ] No invented review counts, ratings, or certifications anywhere on the site
- [ ] Every badge displayed is real and verifiable (Google, Yelp, NPMA, Expertise.com carried forward; others only if verified)

**Links / architecture**
- [ ] Every service card and nav link resolves to its real, unique page — zero links pointing to `/index.html` or dead anchors
- [ ] Every city listed anywhere on the site (nav, footer, homepage, schema) has a corresponding real, unique location page
- [ ] All legacy URLs 301-redirect to their new equivalents
- [ ] Blog migrated and preserved, not orphaned
- [ ] XML sitemap includes only real, complete pages

**Conversion system**
- [ ] Inline lead form present on: homepage (2+ placements), every service page, every location page, Contact page
- [ ] Mobile sticky CTA bar (Call + Schedule) present and functional on every page
- [ ] All phone numbers are `tel:` links and componentized (not hardcoded plain text repeated across files)
- [ ] Distinct, trackable CTA identities confirmed for each placement listed in Section 10

**Tracking**
- [ ] GTM container installed sitewide with GA4, Meta Pixel, and Google Ads conversion tags configured
- [ ] Event tracking firing correctly for: phone clicks, form submissions (per location), inspection CTA clicks, commercial assessment requests, mobile sticky CTA clicks, service page CTA clicks, location page CTA clicks
- [ ] Call tracking / DNI integration slot confirmed ready (even if provider not yet connected)
- [ ] GBP UTM attribution plan confirmed for post-launch Business Profile links

**Technical SEO**
- [ ] One `<h1>` per page, logical heading hierarchy with no skipped levels
- [ ] LocalBusiness/PestControl, Service, FAQPage, BreadcrumbList, Organization, ContactPoint, and WebPage schema implemented and validated (test with Google's Rich Results Test)
- [ ] All images compressed, responsive, served in modern formats, with descriptive alt text
- [ ] Core Web Vitals (LCP, CLS, INP) pass in the "Good" range on mobile
- [ ] Canonical tags present and correct on every page
- [ ] Robots.txt reviewed and accurate

**Design / brand consistency**
- [ ] Color palette, typography, and component styles (rounded cards, pill buttons, soft shadows) consistent across every template
- [ ] No macro/gross bug imagery used outside clearly educational, tastefully-styled contexts
- [ ] No luxury-editorial or dark-aggressive stylistic elements present anywhere
- [ ] Mobile layouts tested independently, not just scaled-down desktop views

**Content**
- [ ] Every location page has genuinely unique content — no swapped-city-name duplicate pages
- [ ] Tone consistent with Section 16 direction across all pages (calm, confident, local, not fearmongering or cheesy)
- [ ] All placeholders (`[INSERT ...]`) clearly flagged in a final punch list delivered alongside the build for the client to fill in with verified data before public launch

---

*End of Antigravity implementation prompt.*
