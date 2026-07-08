# Antigravity Implementation Prompt
## Florida Pest Control Center — Restructure Reviews Page Into a Specials/Promotions Page

Paste everything below this line into Antigravity as a single implementation brief.

---

## 0. Project Summary

**Client:** Florida Pest Control Center
**Site:** https://www.floridapestcontrolcenter.com/
**Market:** Fort Lauderdale / Broward County / South Florida
**Task:** Restructure the existing `/reviews/` page into a new, dedicated `/specials/` page — a high-converting Specials/Promotions hub. This is a page transformation, not a from-scratch build: reuse the URL slot's SEO equity where sensible, but the new page is a different page with a different job (offer conversion, not review browsing).

**What currently lives at `/reviews/` (confirmed on the live site — do not discard this content, relocate it):**
- H1: "Fort Lauderdale Pest Control Reviews"
- Subhead: "See why local homeowners trust Florida Pest Control Center — rated 5 stars across 44+ reviews"
- A live LeadConnector review widget embed (`services.leadconnectorhq.com/reputation/widgets/review_widget/...`)
- An embedded YouTube testimonial video
- Standard footer CTA ("Remove Your Pests Today! Call Us For A Free Estimate")

This is real, verified proof content (a genuine "44+ reviews, 5-star" stat and a live review widget) — it must not disappear from the site. It gets relocated per Section 9 below, and a decision must be made per Section 1 about whether `/reviews/` remains as its own page or fully folds into the new page's trust section.

**Do not invent facts.** No discount amounts, expiration dates, referral credit values, guarantee terms, or license numbers may be fabricated. Every unconfirmed number becomes a clearly labeled, CMS-editable placeholder (e.g., `[DISCOUNT AMOUNT TBD]`, `[OFFER EXPIRATION TBD]`). Flag all placeholders in a final punch list for the client to fill in before launch.

---

## 1. URL / Migration Strategy

- **New page:** build at `/specials/`
- **Old page:** `/reviews/` — do not simply delete. Implement one of these two paths and note which was chosen in the build notes:
  - **Option A (recommended if review content is being fully absorbed into the new page):** 301 redirect `/reviews/` → `/specials/`, and ensure the review widget + video + "44+ reviews, 5-star" stat are fully preserved inside the new Trust Section (Section 9) so no proof content is lost in the redirect.
  - **Option B (recommended if the site's overall IA wants a standalone reviews destination too):** keep a slimmed, rebuilt `/reviews/` page live (same review widget + video, restyled to match the refreshed brand system), and build `/specials/` as a fully separate new page. Cross-link the two: Specials page trust section links to "Read Full Reviews" (`/reviews/`), and Reviews page includes a banner/CTA linking to "View Current Specials" (`/specials/`).
- Update all internal links, main navigation, footer "Quick Links," and XML sitemap to reflect whichever option is chosen. Do not leave both `/reviews/` and `/specials/` live with duplicate/competing H1s and overlapping intent — differentiate them clearly if both exist.
- Preserve the existing meta description's real stat ("5-star... 44+ reviews") only on whichever page keeps the review widget — do not carry the review-count claim onto the Specials page unless the review widget/proof is also present there.

---

## 2. Strategic Objective

This page must do double duty:
1. **Convert acquisition and campaign traffic** — GBP profile clicks, Google/Meta ad landing traffic, seasonal campaign traffic (mosquito season, termite season), and referral traffic — into scheduled service.
2. **Feel like a serious regional operator's offer hub**, not a coupon flyer. The current site's tone (family-owned, local, "punctual, courteous, never pushy") should carry through here — offers should read as a natural extension of a trustworthy company, not aggressive discount marketing.

Guiding rule: every offer card must give the visitor a next step that matches their level of readiness — someone who just wants a discount converts through "Redeem Offer," someone who wants ongoing protection converts through the Protection Plan section, someone with an active infestation converts through the pest-specific pathways. Don't force every visitor down one CTA.

---

## 3. Design Direction

**Feel:** Clean, modern, local, trustworthy offer hub for a serious South Florida pest control operator. Elevated but not luxury. Friendly but not cheesy.

**Explicitly avoid:**
- Ugly coupon-clutter design (dashed borders, "scissors cut here" visual clichés, dense grids of clashing offer boxes)
- Red-heavy emergency/spam styling
- Fake urgency ("ONLY 2 SPOTS LEFT TODAY," countdown timers, flashing badges)
- Invented discount amounts or guarantee claims
- Luxury/editorial styling (this is the same brand system as the rest of the site — do not introduce a different visual language just because this page is offer-focused)

**Color system (consistent with sitewide brand):**
- Background: warm off-white
- Primary: deep green
- Secondary/bright accent: brighter green
- Offer-highlight accent: yellow/gold (used sparingly — badge ribbons, "Redeem" buttons, small highlight details only, never full-section backgrounds)
- Text: navy/dark charcoal
- Components: rounded cards, pill-shaped buttons, soft shadows, friendly (not cartoonish) pest icons
- Imagery: realistic technician/van/homeowner photography where available; avoid macro bug close-ups as decorative imagery

---

## 4. Full Page Structure

Build the page as the following ordered, componentized sections.

### 4.1 Hero Section
- H1: **"Pest Control Specials In Fort Lauderdale"**
- Subheadline: **"Save on professional pest control, termite inspections, mosquito treatments, and year-round protection for South Florida homes and businesses."**
- Primary CTA: **"Schedule Service"**
- Secondary CTA: **"Call Now"** (click-to-call, `tel:` link)
- Visual: clean warm off-white/light background, green brand accents, one rounded offer-card or coupon-style visual element (styled, not literal coupon clip-art), optional technician/van photography
- Trust row directly under CTAs: Family-Owned · Local South Florida Service · Residential & Commercial · Satisfaction-Focused Service · Licensed/Insured (display only if confirmed; otherwise omit rather than guess)

### 4.2 Featured Specials Section
Grid of offer cards (responsive: 3-column desktop → 1-column mobile stack). Each card includes: offer title, short description, applicable service tag/icon, expiration placeholder, primary CTA button, and a small fine-print link/disclaimer reference.

Build these six cards exactly as follows (copy is final language, but all figures are intentionally unconfirmed placeholders — do not add dollar amounts):

| # | Title | Description | CTA |
|---|---|---|---|
| 1 | New Customer Pest Control Special | Get started with professional pest protection and save on your initial service. | Redeem New Customer Offer |
| 2 | Free Termite Inspection | Schedule a termite inspection for your South Florida home and get expert recommendations before damage spreads. | Schedule Termite Inspection |
| 3 | Mosquito Control Seasonal Special | Take back your yard with seasonal mosquito control built for South Florida weather. | Claim Mosquito Special |
| 4 | Rodent Control Inspection Offer | Get help identifying entry points, nesting areas, and prevention options before the problem grows. | Request Rodent Inspection |
| 5 | Commercial Pest Control Assessment | Protect your restaurant, office, rental property, HOA, warehouse, or managed property with a custom pest-control plan. | Request Commercial Assessment |
| 6 | Year-Round Home Protection Plan | Ask about recurring pest protection for ants, roaches, spiders, and common South Florida pests. | Build My Protection Plan |

**Placeholder discipline:** every card uses one of these exact placeholder phrases where a specific number would otherwise go — do not substitute an invented figure:
- "Offer details to be confirmed"
- "Limited-time offer"
- "Call for current availability"
- "Starting price / discount TBD"

Each card's fine-print link opens/anchors to the Fine Print section (4.8).

### 4.3 Protection Plan Promo Section
- Headline: **"Save More With Year-Round Pest Protection"**
- Body: explain that recurring protection outperforms one-time spraying for South Florida homes because pest pressure here is year-round, not seasonal.
- Benefits list: exterior barrier treatments · interior service as needed · seasonal pest checks · free re-service language (only if confirmed — otherwise omit) · ant/roach/spider protection · optional mosquito add-on · optional termite inspection · optional rodent monitoring
- CTA: **"Ask About Protection Plans"**
- Layout: large rounded two-panel section — left panel: benefits list; right panel: plan CTA card (headline + button, visually distinct background tint using the secondary brand color)

### 4.4 Referral Program Section
- Headline: **"Refer A Neighbor. Save On Service."**
- Body: **"If a friend, neighbor, family member, or co-worker signs up for service, you may qualify for savings on your next visit."**
- CTA: **"Submit A Referral"**
- **Do not state a specific credit/dollar amount** (e.g., do not say "$25 credit") unless the client confirms an exact figure — use "you may qualify for savings" language as final copy, not a placeholder to be replaced with an invented number.
- Referral form fields: Your Name · Your Phone/Email · Referral's Name · Referral's Phone/Email · Referral's City · Pest Issue (if known) · Consent checkbox
- Route form submissions into the site's existing GoHighLevel/LeadConnector integration, tagged distinctly as "referral" leads (see Section 6 tracking).

### 4.5 Pest-Specific Offer Pathways Section
- Headline: **"What Pest Problem Are You Trying To Solve?"**
- Card grid, one per pest/category, each linking to its existing service page and carrying a short CTA (vary CTA per card as natural — "View Offer," "Schedule Inspection," or "Get Help Today"):
  - Termites → `/termite-control/`
  - Roaches → `/cockroach-control/`
  - Rodents → `/rodent-control/`
  - Mosquitoes → `/mosquito-control/`
  - Ants → `/ant-control/`
  - Bed Bugs → `/bed-bug-control/`
  - Birds / Pigeons → `/pigeon-bird-control/`
  - Commercial Pest Control → `/commercial-pest-control/`
- This section is the page's internal-linking backbone — every card must resolve to a real, existing service page, never a placeholder or `/index.html`-style dead link.

### 4.6 Commercial Specials Section
- Headline: **"Special Offers For South Florida Businesses"**
- Target list (display as a clean tag/icon row, not a dense paragraph): restaurants · retail plazas · property managers · HOAs · offices · warehouses · apartment communities · vacation rentals
- Body copy: **"Commercial pest control requires consistency, documentation, and discreet service. Ask about custom plans for South Florida businesses and managed properties."**
- CTA: **"Request Commercial Pest Assessment"**

### 4.7 How To Redeem Section
Simple five-step visual process:
1. Choose your offer
2. Call or submit the form
3. Mention the special before service
4. Schedule your inspection or treatment
5. Get protected

CTA: **"Redeem A Special"**

### 4.8 Fine Print / Disclaimer Section
Small, clearly legible (not hidden/tiny gray-on-gray) disclaimer block, anchored from every offer card's fine-print link:
- Offers may not be combined with other discounts.
- Must be mentioned before service is performed.
- New customer offers may be limited to first-time customers.
- Some offers may apply only to qualifying services.
- Specialty treatments may require inspection.
- Availability may vary by service area.
- Final pricing depends on inspection, pest issue, property size, and treatment needs.
- Expiration dates and exact offer values are CMS-editable fields — flag these as required client inputs before launch, not hardcoded copy.

### 4.9 Trust Section — "Why South Florida Homeowners Choose Florida Pest Control Center"
This section is the required replacement home for the review content currently living at `/reviews/`. Do not let the page become discount-only — this section is mandatory.
- Headline: **"Why Homeowners Choose Florida Pest Control Center"**
- Include:
  - The real, existing LeadConnector review widget embed (currently live at `/reviews/` — reuse the same embed, restyled to match the new page's card system)
  - The real "rated 5 stars across 44+ reviews" stat line (verify current count before launch — do not let this number go stale; pull dynamically if the widget supports it, otherwise mark for manual refresh)
  - The existing testimonial YouTube video embed, restyled into a rounded video card
  - Family-owned/local positioning line (reuse existing site voice, e.g., "local team, not a national call center")
  - Service van/team imagery if available
  - Satisfaction/guarantee language only if confirmed — otherwise omit
  - Badge row: reuse the real, already-live badges (Google, Yelp, NPMA, Expertise.com); add BBB or license/insurance badges only if verified
- CTA: **"Read Reviews"** (links to `/reviews/` if Option B from Section 1 was chosen; otherwise anchors within this section)
- Secondary CTA: **"Schedule Service"**

### 4.10 Final CTA Section
- Headline: **"Ready To Save On Pest Control?"**
- Subheadline: **"Choose a current special and schedule professional pest control for your South Florida home or business."**
- Buttons: **"Redeem A Special"** (primary) · **"Call Florida Pest Control Center"** (secondary, `tel:` link)
- Keep this section visually simple — single clear close, no competing elements.

---

## 5. Design Requirements (Detail)

- Warm off-white background sitewide-consistent with the rest of the brand
- Deep green + bright green as primary/secondary brand colors; yellow/gold reserved strictly for offer-highlight accents (ribbon badges, CTA button fills on offer cards, small icon accents) — never a full section background
- Navy/dark charcoal for body text (not pure black)
- Rounded cards throughout, pill-shaped buttons for every CTA
- Friendly, simple pest icons (line or soft-fill style) — not cartoonish, not photorealistic bug macro shots
- Realistic technician/van/homeowner photography wherever available; do not substitute generic stock corporate photography
- No dashed "coupon" borders, no scissor-cut iconography, no red alert-style banners, no countdown timers, no invented urgency language

---

## 6. Technical Requirements

- **Mobile-first build.** Offer cards must stack cleanly into a single column on mobile with no horizontal scrolling or cramped text.
- **Sticky mobile CTA bar** with two buttons: **Call** and **Redeem Offer** — persistent across the whole page on mobile, thumb-reachable.
- **Form tracking:** every form on the page (referral form, any inline offer-redemption form) fires a distinct GTM event on submission.
- **Click tracking on every offer CTA**, tracked as distinct, separately named events — do not lump all six offer-card buttons into one generic "CTA click" event. Minimum required distinct events:
  - New Customer Offer click
  - Termite Inspection Offer click
  - Mosquito Special click
  - Rodent Inspection Offer click
  - Commercial Assessment click
  - Protection Plan CTA click
  - Referral submission
  - Pest-pathway card clicks (per pest)
  - "Redeem A Special" (How-To-Redeem + Final CTA) clicks
  - Mobile sticky bar clicks (Call vs. Redeem Offer, tracked separately)
- **Phone click tracking** on every `tel:` link on the page.
- **UTM support:** the page must correctly receive and (where the CRM supports it) pass through UTM parameters from Google Business Profile posts/links, Meta Ads, Google Ads, and email campaigns, so specials-page conversions can be attributed back to the campaign/channel that drove them.
- **Schema:** if the FAQ section (Section 7) is included on this page, mark it up with FAQPage schema. Add BreadcrumbList schema (Home → Specials).
- **SEO-friendly metadata** per Section 8 below.
- All CTAs route into the existing GoHighLevel/LeadConnector integration — do not introduce a separate form system.

---

## 7. Optional FAQ Section

If included, place after the Fine Print section and before or inside the Trust section — mark up with FAQPage schema. Use these questions:
- Do pest control specials apply to new customers?
- Can I combine pest control offers?
- Do you offer termite inspection specials?
- Are there mosquito control specials in South Florida?
- Do you offer commercial pest control discounts?
- How do I redeem a special?
- Are specials available outside Fort Lauderdale?

Answer each with honest, non-specific language consistent with the Fine Print section (e.g., "Offer availability can vary by service area — call our team to confirm current specials for your address") rather than inventing coverage claims.

---

## 8. SEO Requirements

**Primary keyword:** pest control specials Fort Lauderdale

**Secondary keywords:** pest control coupons Fort Lauderdale · pest control deals Fort Lauderdale · termite inspection Fort Lauderdale · mosquito control special Fort Lauderdale · rodent control Fort Lauderdale · commercial pest control Fort Lauderdale · South Florida pest control specials

**Meta title:** Pest Control Specials Fort Lauderdale | Florida Pest Control Center

**Meta description:** View current pest control specials from Florida Pest Control Center. Save on pest control, termite inspections, mosquito treatment, rodent service, and year-round protection in Fort Lauderdale and South Florida.

**On-page SEO requirements:**
- Single `<h1>` = page title exactly as specified in Section 4.1
- Logical `<h2>`/`<h3>` hierarchy following the section order in Section 4 — no skipped levels
- Internal links from this page to every service page (via Section 4.5) and to the commercial page (Section 4.6) — real URLs only
- Internal link into this page from: main navigation, footer, homepage (add a "Current Specials" nav item or homepage banner CTA pointing to `/specials/` if not already planned elsewhere), and relevant service/location pages ("View Current Specials" cross-link)
- Add `/specials/` to the XML sitemap
- Canonical tag self-referencing `/specials/`

---

## 9. Constraints Checklist (Do Not Violate)

- [ ] Do not invent exact discount amounts, dollar figures, percentages, expiration dates, or referral credit values anywhere on the page — use the approved placeholder language from Section 4.2 and 4.4 exclusively.
- [ ] Do not remove review/trust proof from the site. The real "5 stars, 44+ reviews" stat, the live LeadConnector review widget, and the testimonial video must all be relocated (Section 4.9), not deleted.
- [ ] Resolve `/reviews/` per Section 1 (Option A redirect or Option B standalone rebuild) — do not leave it as a broken or orphaned URL.
- [ ] Every pest-pathway and service-related link must point to a real, existing page — never `/index.html` or a placeholder anchor.
- [ ] No fake urgency, no red-heavy alert styling, no invented guarantees.
- [ ] Page must remain conversion-focused throughout — no section should read as purely informational without a clear next-step CTA.
- [ ] All discount amounts, expiration dates, and fine-print specifics must be implemented as CMS-editable fields, not hardcoded copy, so the client can update them without a developer.
- [ ] Deliver a final punch list of every placeholder left on the page (offer values, expiration dates, referral credit amount, guarantee language, license/insurance confirmation) for the client to complete before public launch.

---

*End of Antigravity implementation prompt.*
