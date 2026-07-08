# Antigravity Implementation Prompt
## Florida Pest Control Center — Sitewide Copy Refinement + Homepage Motion System

Paste everything below this line into Antigravity as a single implementation brief.

---

## 0. Project Summary & Ground Rules

**Site:** https://floridapestcontrolcenter.demo.zeusmediateam.com/
**Scope:** This is a refinement pass, not a rebuild. Do not change page architecture, navigation structure, layout grid, or component structure unless a change is explicitly called for below. Two workstreams, both required:

1. **Copy refinement** — warm up the tone, fix technical/chemical-heavy language, tighten unverified claims, fix real inconsistencies found in the live demo (see Section 5), and standardize CTA/terminology usage sitewide.
2. **Homepage motion system** — add tasteful, scroll-triggered animation to the homepage using reusable components, without hurting performance, accessibility, or usability.

**Audit method:** The copy audit below (Section 4) was built from the actual live text currently on the demo homepage, `/services/`, `/specials/`, `/about/`, `/contact/`, and the footer — not hypothetical placeholder copy. Every "Current copy" quote is verbatim from the live site as of this audit. Where something could not be retrieved (the FAQ accordion answers on the homepage did not render their text on click during this audit), that is flagged explicitly rather than guessed at — Antigravity should pull the real current FAQ answer copy from the codebase and apply the same tone/claims rules to it.

**Non-negotiable constraint:** Do not invent, or let this pass invent, any of the following: exact discount amounts, exact review counts, exact star ratings, license numbers, guarantee terms, or insurance claims that are not already confirmed elsewhere in the codebase. Where the current copy already contains an unconfirmed number or claim, soften it per Section 5 rather than replacing it with a different invented specific.

---

## 1. Tone & Voice Direction

**Positioning to write toward:** "South Florida pests never really stop — so your protection shouldn't be one-time either." Florida Pest Control Center is a serious regional South Florida pest control company with a friendly local face — modern pest protection for Fort Lauderdale homes and businesses, built on year-round prevention, local expertise, clear communication, and service that helps stop problems from coming back.

**The tone should feel:** warm, confident, local, clear, protective, professional, human, trustworthy, proactive, family-safe, South Florida-aware.

**The tone should NOT feel:** luxury, fearmongering, overly aggressive, overly scientific/clinical, cheesy, corporate-generic, cheap/coupon-y, AI-written, or like a interchangeable national franchise page.

**Practical writing rules:**
- Write like a knowledgeable local technician explaining things to a homeowner on their porch, not like a lab report or a sales script.
- Lead with the customer's problem and outcome, then explain method — never lead with method.
- Short paragraphs, plain verbs, concrete nouns. Cut adjectives that don't add information ("cutting-edge," "state-of-the-art," "comprehensive").
- It's fine to name real pest species and real treatment concepts (barriers, exclusion, monitoring) — the goal is warmer language, not vaguer language. The fix is tone, not dumbing content down.
- Every claim should survive the question "would this hold up if a customer asked us to prove it?" If not, soften it per Section 5.

---

## 2. Global Terminology & Vocabulary Rules

Replace these technical/chemical/aggressive terms wherever they appear sitewide (not just on the homepage):

| Replace | With |
|---|---|
| "chemical sprays" / "chemical spray" | "targeted treatment" |
| "eradicate active insects" / "eradication systems" / "total colony elimination" | "treat the active problem" / "help stop [pest] from spreading" |
| "state-of-the-art detection" / "cutting-edge inspection" / "state-of-the-art protection" | "thorough inspection" / "a close look at your property" |
| "scientific barrier" | "protective barrier around the areas pests use most" |
| "species-specific treatments to eradicate" | "treatment matched to what we actually find" |
| "folial barrier spraying and larvicide treatments to suppress breeding" | "treatment where mosquitoes breed and rest, so you can spend more time outside" |

**Approved CTA vocabulary (use only these, consistently):**

Primary: *Book Free Inspection* · *Schedule Free Inspection* · *Request Service* · *Call Now* · *Get Pest Help Today*
Secondary: *View Pest Services* · *Explore Protection Plans* · *Learn About Termite Control* · *Request Commercial Assessment* · *See Service Areas*

The demo currently mixes "Schedule Free Inspection," "Book Free Inspection," "Get Free Plan Quote," "Request Free Assessment," and "Schedule Inspection" somewhat interchangeably across the homepage, services page, and contact page. Standardize: **"Book Free Inspection"** for header/nav and general top-of-funnel entry points sitewide; **"Schedule Free Inspection"** for hero and final-CTA moments; **"Request Free Assessment"** only for the inline lead-capture form submit button (keep form-specific submit buttons distinct from navigational CTAs, e.g., "Request Inspection," "Schedule Inspection," "Get Free Plan Quote" should all converge to "Request Free Assessment" as the form submit label sitewide for consistency).

**Naming fixes (apply sitewide, including footer and nav-adjacent labels):**
- "Rodent Exclusion" → **"Rodent Control & Exclusion"** (currently used as the homepage service card title, the homepage inline form's service dropdown option, and the footer services link — all three need the update; `/services/` already correctly uses "Rodent Control" as its page title, so this aligns everything).
- "Cockroach Control" (homepage service card title) and "Cockroach Treatment" (footer link) → **"Roach Control"** — this matches the target secondary keyword list ("roach control," not "cockroach control") and reads more like homeowner search language. Keep "cockroach" as a parenthetical/body-copy reference for search coverage and clarity (e.g., "Roach Control (German & American Cockroaches)"), matching what `/services/` already does well in its description line.
- "Ant Extermination" (footer link) → **"Ant Control"** to match the rest of the site's naming pattern (every other service uses "___ Control," this one link is the odd one out).

---

## 3. Site-Wide Claims & Consistency Fixes

These are factual/trust issues found on the live demo, not tone issues. Fix all of them:

1. **Review count contradiction.** The homepage hero shows "4.1 Google Rating (52 reviews)" and the homepage reviews section shows "52 Verified Google Reviews," but the `/specials/` page trust section says "rated 5 stars across 44+ reviews" and separately "a rated 5 stars across 44+ reviews credential" (also grammatically broken — see #2). A 4.1 rating and a "5 stars" claim, and 52 vs. 44+ reviews, cannot both be true at once. Establish one single verified rating and review count, pull it from one source (ideally a live Google Business Profile feed/widget), and display it identically everywhere it appears — hero, homepage reviews section, specials page. Until a live feed is connected, use one consistent, clearly-labeled placeholder (e.g., `[GOOGLE RATING — LIVE FEED PENDING]`) rather than two different hardcoded numbers.
2. **Broken sentence on `/specials/`:** "We are proud to maintain a rated 5 stars across 44+ reviews credential from genuine local property owners." Rewrite regardless of the number-verification issue above — this reads as a copy-paste error, not intentional phrasing. Suggested fix: "We're proud of our reputation with genuine local property owners across South Florida — see what they're saying below."
3. **"Verified Local Reviews" (homepage section heading) and "Verified Google Reviews" (stat label):** don't use "verified" language unless the reviews are pulled from a genuinely live, verifiable feed at launch. Replace the section heading with **"What Homeowners Are Saying"** or **"Review Highlights"**, and replace "52 Verified Google Reviews" with a placeholder tied to the live feed per fix #1.
4. **"100% Service Guarantee" (hero trust badge):** absolute guarantee claims are a liability unless the exact guarantee terms are confirmed and written down elsewhere in the business. Replace with **"Service Satisfaction Promise."**
5. **"Full protection warranties & free re-service" (Homeowners section) and "Free Emergency Re-Services" (Protection Plan bullet) and "backed by free callback guarantees" (`/specials/` protection plan card):** all three assert unconditional free service. Soften to **"Re-service support may be available on qualifying plans"** consistently across all three locations, unless the business has confirmed these are unconditional and unlimited.
6. **Termite insurance claim:** "standard homeowners insurance does not cover the cost of repairs" (absolute) → **"Termite damage is often not covered by standard homeowners insurance policies."** (exact replacement text provided by the client — use verbatim.)
7. **About page FDACS license claim:** the About page currently states "Florida Department of Agriculture (FDACS) License Status: Active & Compliant" directly next to "Pest Control License Identifier: [FL-PCO-MOCK9999] (Demo Placeholder)." Asserting "Active & Compliant" status next to an admitted mock license number is a direct contradiction and a real launch risk if it ships as-is. Change the status line to **"License status to be confirmed before production"** and keep it paired with the existing mock-identifier placeholder until the client supplies real, verified license data. Do not let this get "fixed" by inventing a plausible-looking license number — the mock placeholder convention already in the codebase is correct and should be preserved, just made consistent (see next point).
8. **Footer license line** already correctly reads "State License: [FL-PCO-MOCK9999] (Demo Build Only – Verify Before Production)" — this is the right pattern. Match the About page license line to this same convention/wording for consistency.
9. **"Certified & Fully Insured South Florida Pest Specialists" (footer tagline)** and **"Full state compliance, background-checked technicians, and complete liability insurance" (homepage Why Choose card)** and **"Punctual & Drug-Screened" (`/services/` trust bullet):** all three assert specific compliance/screening claims. Keep insurance language general ("Licensed & Insured" is fine and already used elsewhere) but flag "background-checked" and "drug-screened" specifically as claims to verify before launch — either confirm these are real, standing company practices, or soften "Punctual & Drug-Screened" to **"Punctual & Professional"** and drop "background-checked" from the Why Choose card copy unless confirmed.
10. **"Full logs matching local health requirements" and "digital tracking logbooks" (Commercial section):** specific operational/compliance claims. Verify these describe a real system before launch; if unconfirmed, soften to **"documented service records for every visit."**

---

## 4. Section-by-Section Homepage Copy Audit

For each section: current purpose, the actual current copy (quoted from the live demo), the improved heading/body/CTA, and claims to verify before launch.

### 4.1 Hero

**Current purpose:** First impression — establish modern, local, proactive positioning and drive the primary conversion action.

**Current copy:**
> Eyebrow: "LOCAL & FAMILY-OWNED"
> H1: "Modern Pest Protection For Fort Lauderdale Homes & Businesses"
> Subhead: "Providing South Florida properties with proactive pest defense, experienced local technicians, and reliable year-round support. We don't just spray; we protect."
> CTAs: "Schedule Free Inspection" / "Call Now"
> Trust row: "4.1 Google Rating (52 reviews)" / "Licensed & Insured" / "Family-Owned" / "100% Service Guarantee"

**Improved heading:** Keep the H1 — it's genuinely strong, matches the brand's core strength, and should not be changed: **"Modern Pest Protection For Fort Lauderdale Homes & Businesses."**

**Improved subheadline:** "We're your local, family-owned pest team — proactive protection, real local technicians, and year-round support for South Florida homes and businesses. We don't just spray. We protect."

**CTA:** Keep "Schedule Free Inspection" / "Call Now" — correct per Section 2.

**Claims to verify:** the rating/review count per Section 3, fix #1. "100% Service Guarantee" → "Service Satisfaction Promise" per fix #4.

### 4.2 Problem / South Florida Pest Pressure

**Current purpose:** Justify why one-time treatment isn't enough and set up the Protection Plan pitch.

**Current copy:**
> Eyebrow: "YEAR-ROUND SUBTROPICAL PROTECTION"
> Heading: "The South Florida Pest Challenge"
> Body: "Unlike northern states where winter halts bug activity, South Florida's high heat and tropical humidity mean termites, ants, cockroaches, and mosquitoes remain active 365 days a year. Reactive, one-time chemical sprays only address visible pests temporarily. Real protection requires a proactive, scientific barrier designed to stop insects before they enter your property."
> CTA: "Meet Our Local Specialists"

**Improved heading:** **"South Florida Pest Pressure Is Year-Round"**

**Improved body:** "Winter doesn't slow pests down here. South Florida's heat, humidity, and rain keep termites, ants, roaches, and mosquitoes active all year long. A one-time treatment can take care of what you're seeing right now — but lasting protection means stopping pests before they reach your door in the first place. That's why our approach starts outside the home, not just inside it."

**CTA:** Keep "Meet Our Local Specialists" — good, human, on-tone.

**Claims to verify:** none — this section just needs the "chemical sprays" / "scientific barrier" language swap per Section 2.

### 4.3 Services Overview

**Current purpose:** Quick-scan grid introducing all core services, funneling into individual service pages.

**Current copy:**
> Eyebrow: "EXPERT EXTERMINATION" · Heading: "Our Targeted Pest Solutions"
> Sub: "We provide specialized treatments tailored to the unique biology and behavior of Florida's most common pests."
> Cards: "Cockroach Control — Eradication systems targeting invasive German cockroaches and large sewer-dwelling American roaches." / "Rodent Exclusion — Effective trapping, sanitation, and chew-proof exclusion structures to permanently keep rats and mice out." / "Termite Control — State-of-the-art detection and treatment barriers for Drywood, Subterranean, and Formosan termite species." / "Ant Control — Total colony elimination for ghost ants, carpenter ants, fire ants, and white-footed ants." / "Mosquito Protection — Folial barrier spraying and larvicide treatments to suppress breeding in standing water sites." / "Residential Protection — Quarterly maintenance plans creating an active exterior perimeter to block general household pests."
> CTA: "View All 10 Specialized Services"

**Improved heading:** **"Pest Protection Built For South Florida"** (eyebrow: "OUR SERVICES")

**Improved sub:** "Every pest we treat behaves a little differently in South Florida's climate. Here's how we handle the ones homeowners deal with most."

**Improved cards:**
- **Roach Control:** "Roaches spread fast in South Florida homes. We identify where they're coming from, treat the active problem, and help protect the areas they use to get back inside."
- **Rodent Control & Exclusion:** "Rats and mice look for warm, hidden places to nest. We find how they're getting in, clear out the current problem, and seal the entry points so they don't come back."
- **Termite Control:** "Termites can do real damage without any obvious warning signs. We inspect thoroughly, treat active activity, and help protect your home's structure long-term."
- **Ant Control:** "A few ants can turn into a full colony fast. We trace the trail back to the nest, treat the source, and help keep new colonies from moving in."
- **Mosquito Protection:** "Mosquitoes breed fast in South Florida's heat and rain. We treat where they breed and rest, so you can spend more time outside."
- **Residential Protection:** "Ants, roaches, spiders, and everyday pests are a year-round reality here. Our quarterly visits build a protective barrier around your home before they get inside."

**CTA:** Keep "View All 10 Specialized Services."

**Claims to verify:** none beyond the terminology swaps already listed.

### 4.4 Protection Plan

**Current purpose:** Introduce the recurring Quarterly Protection Program as the flagship offering.

**Current copy:**
> Eyebrow: "PROACTIVE HOME DEFENSE" · Heading: "The Florida Home Protection Plan"
> Sub: "A comprehensive, year-round subscription service designed to keep your property free of crawling pests."
> Card: "BEST VALUE — Quarterly Protection Program — We establish a secure boundary around your structure, blocking entry points and neutralizing insect nests exterior-first." Bullets: "4 Scheduled Quarterly Visits / Exterior Web Sweep & De-Webbing / Exterior Granular & Liquid Barriers / Interior Service (As Needed) / Free Emergency Re-Services / Mosquito & Rodent Monitor Add-ons"
> CTA: "Get Free Plan Quote"

**Improved heading:** **"Don't Just Treat The Problem. Help Stop It From Coming Back."**

**Improved sub:** "Our Quarterly Protection Program builds an ongoing barrier around your home, so pests are handled before they ever get inside."

**Improved card body:** "We build a protective boundary around your home — treating entry points and nesting areas from the outside in, before pests become an indoor problem."

**Improved bullets:** "4 Scheduled Visits Each Year" / "Exterior Barrier Treatment" / "Interior Service As Needed" / "Seasonal Pest Checks" / "Re-Service Support On Qualifying Plans" / "Optional Mosquito & Rodent Monitoring"

**CTA:** **"Explore Protection Plans"** (replace "Get Free Plan Quote" with the standardized secondary CTA; keep a distinct form-submit button labeled "Request Free Assessment" if this section links to the inline form).

**Claims to verify:** "Free Emergency Re-Services" per Section 3, fix #5.

### 4.5 Termite Inspection & Shield Protection

**Current purpose:** Treat termites as the flagship high-ticket service; drive inspection leads.

**Current copy:**
> Eyebrow: "FLAGSHIP PROPERTY PROTECTION" · Heading: "Termite Inspection & Shield Protection"
> Body: "Termites cause millions of dollars in damages in Fort Lauderdale every year, and standard homeowners insurance does not cover the cost of repairs. We provide cutting-edge inspection and exclusion treatments targeting South Florida's primary wood-destroyers."
> Bullets: "Formosan Subterranean Termites: Extremely aggressive colonies nesting in sandy soils, consuming studs and load-bearing framing at alarming rates." / "Drywood Termites: Nesting inside door frames, rafters, and furniture, leaving telltale tiny piles of frass."
> CTA: "Schedule Free Termite Inspection"

**Improved heading:** Keep "Termite Inspection & Shield Protection" — clear, on-brand, no change needed.

**Improved body:** "Termites cause serious, costly damage across Fort Lauderdale every year — and termite damage is often not covered by standard homeowners insurance policies. A thorough inspection is the best way to know where you stand. We look for South Florida's most common wood-destroying pests and recommend the right next step."

**Improved bullets:** "Formosan Subterranean Termites: Fast-moving colonies that nest in soil and can affect structural framing over time." / "Drywood Termites: Nest inside door frames, rafters, and furniture — often identified by small piles of frass (termite droppings) left behind."

**CTA:** Keep "Schedule Free Termite Inspection."

**Claims to verify:** insurance line per Section 3, fix #6 — use the exact client-provided replacement text (done above). Soften "at alarming rates" — reads as fear-driven rather than informational.

### 4.6 Residential + Commercial Split

**Current purpose:** Show the site serves both homeowners and businesses with distinct, relevant framing.

**Current copy — Homeowners:**
> Eyebrow: "FAMILY HOME PROTECTION" · Heading: "For Homeowners"
> Body: "Your home is your most significant investment. We protect it from the constant nesting pressure of subtropical pests using safe, eco-responsible materials applied at structural boundaries."
> Bullets: "Quarterly interior-exterior barriers / Pet and child-safe target products / Full protection warranties & free re-service"
> CTA: "Residential Services"

**Current copy — Businesses:**
> Eyebrow: "COMMERCIAL COMPLIANCE & SANITATION" · Heading: "For Businesses"
> Body: "Pest problems can damage your reputation, violate health codes, and cost you customers. We provide discreet, thorough commercial pest management with digital tracking logbooks."
> Bullets: "Restaurants, offices, retail, warehouses, HOAs / Full logs matching local health requirements / Flexible, after-hours scheduled visits"
> CTA: "Request Commercial Assessment"

**Improved heading (Homeowners):** **"Protection That Starts Outside The Home"**

**Improved body (Homeowners):** "Your home is one of your biggest investments. We protect it from South Florida's year-round pest pressure using safe, thoughtful treatment around the areas pests use most to get in."

**Improved bullets (Homeowners):** "Quarterly interior & exterior barriers" / "Pet- and child-safe products" / "Re-service support on qualifying plans"

**CTA (Homeowners):** Keep "Residential Services."

**Improved heading (Businesses):** **"Built For Homes, Businesses, And Everything In Between"** (or, if a distinct commercial-only heading is preferred, use the client's own commercial positioning line as the body lead-in — see 4.9 below.)

**Improved body (Businesses):** "Pest problems can hurt your reputation, put you at risk with health inspectors, and cost you customers. We provide discreet, consistent commercial pest control — with documented service records for every visit."

**Improved bullets (Businesses):** "Restaurants, offices, retail, warehouses, HOAs" / "Documented service records for health & compliance needs" / "Flexible, after-hours scheduling"

**CTA (Businesses):** Keep "Request Commercial Assessment."

**Claims to verify:** "Full protection warranties & free re-service" per Section 3, fix #5. "Full logs matching local health requirements" and "digital tracking logbooks" per Section 3, fix #10.

### 4.7 Process

**Current purpose:** Show a clear, simple 5-step process to reduce uncertainty about what happens after booking.

**Current copy:**
> Eyebrow: "HOW WE WORK" · Heading: "Our Reliable Protection Process"
> Sub: "A clear, transparent path to getting and keeping your property fully pest-free."
> Steps: "1. Schedule Inspection — Book a free assessment online or call our Fort Lauderdale office." / "2. Identify Pressure — Our technician audits entry points, nests, and moisture vectors." / "3. Treat The Problem — We implement species-specific treatments to eradicate active insects." / "4. Protect & Prevent — We seal openings and apply durable protective exterior barriers." / "5. Ongoing Support — Regular maintenance visits and immediate response if pests return."

**Improved heading:** **"A Better Way To Stay Ahead Of Pests"**

**Improved sub:** "A clear, simple process — from your first inspection to ongoing protection."

**Improved steps:** "1. Schedule Inspection — Book a free assessment online or call our Fort Lauderdale office." (keep) / "2. Identify Pressure — We check entry points, nesting areas, and moisture sources around your property." / "3. Treat The Problem — We treat the active problem using methods matched to what we actually find." / "4. Protect & Prevent — We seal up entry points and build a protective barrier around the outside of your home." / "5. Ongoing Support — Regular visits, and a fast response if pests come back." (keep close to original — it's already solid)

**Claims to verify:** none beyond the wording swap in step 3.

### 4.8 Why Choose Florida Pest Control Center

**Current purpose:** Differentiate from national competitors on local, low-pressure, trustworthy service.

**Current copy:**
> Eyebrow: "THE LOCAL ADVANTAGE" · Heading: "Why Choose Florida Pest Control Center?"
> Body: "We are a family-owned, independent company. Unlike massive national corporations, our technicians are local residents who understand the pest biology of Fort Lauderdale neighborhoods. We do not use aggressive sales scripts or push unnecessary services."
> Cards: "Family-Owned & Local — Direct communication with the owner and staff who care about South Florida properties." / "Punctual & Pushing Nothing — Our technicians arrive on time, respect your home, and never push aggressive upsells." / "Licensed & Insured — Full state compliance, background-checked technicians, and complete liability insurance." / "State-of-the-Art Products — We use eco-responsible, low-toxicity materials that eliminate pests without risking health."

**Improved heading:** **"Local Pest Control With Real Follow-Through"**

**Improved body:** "We're a family-owned, independent company — not a call center for a national brand. Our technicians live in the neighborhoods they serve, and we'd rather explain your options clearly than push you toward something you don't need."

**Improved cards:**
- "Family-Owned & Local — Direct communication with people who actually live and work in South Florida." (keep close to original)
- **"Honest Recommendations, No Pressure"** *(exact client-requested replacement for "Punctual & Pushing Nothing")* — "Our technicians show up on time, respect your home, and give you straight answers — no upsell scripts."
- "Licensed & Insured — Full state compliance and complete liability insurance." *(drop "background-checked" unless confirmed per Section 3, fix #9)*
- "Thoughtful, Modern Materials — We use eco-responsible, low-toxicity products that protect your home without putting your family at risk." *(replaces "State-of-the-Art Products" — keep the substance, drop the buzzword-y heading)*

**Claims to verify:** "background-checked technicians" per Section 3, fix #9.

### 4.9 Reviews / Trust

**Current purpose:** Social proof from real, named local customers.

**Current copy:**
> Eyebrow: "CUSTOMER SATISFACTION" · Heading: "Verified Local Reviews"
> Sub: "Real feedback from named homeowners and business managers we protect in South Florida."
> Three named testimonials (John, Fort Lauderdale; Olivia Christian, Plantation; Jorge Padilla, Davie) — all genuinely warm, well-written, on-tone. Keep verbatim, no changes needed.
> Stat block: "4.1 ★★★★★ 52 Verified Google Reviews" — "Read More Reviews"
> Badge row: Google, Yelp, NPMA Member, Expertise.com

**Improved heading:** **"What Homeowners Are Saying"**

**Improved sub:** Keep — "Real feedback from named homeowners and business managers we protect in South Florida" is honest and specific; no change needed.

**Testimonials:** keep all three exactly as written — they're a genuine strength of the current copy.

**Stat block:** resolve per Section 3, fix #1 (single verified number, consistent sitewide) and drop "Verified" per fix #3 unless tied to a live feed.

**CTA:** Keep "Read More Reviews."

**Claims to verify:** rating/count consistency (Section 3, #1).

### 4.10 Service Areas

**Current purpose:** Show real, claimed coverage without overstating service area.

**Current copy:**
> Eyebrow: "LOCAL COVERAGE" · Heading: "Our South Florida Service Areas"
> Body: "We only claim and list the areas we actively service with dedicated technicians. Select your city below to read reviews, learn about common pest pressures in your neighborhood, and schedule a local inspection."
> City list: Fort Lauderdale, Plantation, Davie, Hollywood, Pembroke Pines, Weston, Sunrise, Wilton Manors, Oakland Park, Dania Beach
> CTA: "View Full Coverage Area"

**Improved heading:** Keep — this section is already doing exactly what it should (honest, no overclaiming). Minor tightening only.

**Improved body:** "We only list the cities we actively serve with dedicated local technicians. Pick your city below for local reviews, common pests in your area, and a free inspection."

**CTA:** Keep "View Full Coverage Area" — could also read "See Service Areas" to match Section 2's standardized secondary CTA list; either is acceptable, pick one and use it consistently if this label appears elsewhere.

**Claims to verify:** none — this section is a model for the rest of the site.

### 4.11 FAQ

**Current purpose:** Answer common pre-purchase objections/questions.

**Current copy (questions only — answer copy did not render during this audit and must be pulled directly from the codebase by Antigravity):**
> "How often should pest control service happen in Florida?" / "Are your pest treatments safe for kids and pets?" / "What is covered under the Service Guarantee?" / "What is the termite warranty?"

**Action required:** Antigravity must locate and review the actual answer copy for these four questions in the codebase (not visible in this audit's page-text extraction) and apply the following rules directly:
- The "Service Guarantee" answer must use **"Service Satisfaction Promise"** language, not "100% guaranteed," consistent with Section 3, fix #4, unless the business has confirmed specific guarantee terms — in which case state those specific terms plainly instead of a vague absolute claim.
- The "termite warranty" answer must not assert unconditional/unlimited coverage unless confirmed; if unconfirmed, use language like "Ask your technician about warranty options available for your specific treatment plan."
- Keep answer copy in the same warm, plain-spoken tone as the rest of the audit — no chemical/technical language, no absolute claims without confirmation.

**Claims to verify:** both guarantee-related questions, explicitly.

### 4.12 Final CTA

**Current purpose:** Confident close, final conversion push.

**Current copy:**
> Heading: "Protect Your Home Before The Problem Spreads"
> Body: "Get a comprehensive, free inspection from a licensed Florida Pest Control Center technician. Don't wait until pests establish nests inside your walls."
> CTAs: "Schedule Free Inspection" / "Call (954) 945-5050"

**Improved heading:** Keep as-is — this is strong, matches the client's own recommended final-CTA heading, and needs no change.

**Improved body:** "Get a free inspection from a local, licensed Florida Pest Control Center technician — before pests get comfortable inside your walls." *(tightens "comprehensive" and "establish nests," keeps the same meaning, slightly warmer rhythm)*

**CTA:** Keep both as-is.

**Claims to verify:** none.

---

## 5. Copy Improvements — Other Pages

### 5.1 `/services/` (Services Overview Page)

Current heading/sub ("Our Professional Pest Protection Services" / "Florida Pest Control Center provides scientific, preventative pest defense...") — replace "scientific, preventative pest defense" with **"thoughtful, preventative pest protection."** The individual service description lines on this page (Termite, Rodent, General Pest, Mosquito, Cockroach → Roach, Ant, Bed Bug, Pigeon & Bird, Landscape, Commercial) are already well-written, specific, and benefit-driven — keep them close to verbatim, applying only the "Cockroach Control" → "Roach Control" naming fix and the CTA standardization from Section 2. The inline form section's trust bullet **"Punctual & Drug-Screened"** should become **"Punctual & Professional"** unless drug screening is a confirmed, real practice (Section 3, fix #9); the second bullet **"Custom barriers: Science-backed pest protection programs"** should become **"Custom protection plans, built around your property."**

### 5.2 `/specials/` (Specials Page)

This page is already well-aligned with the "clean offer hub, not a coupon page" direction and already uses the correct placeholder discipline ("Offer details to be confirmed," "Limited-time offer," "Call for current availability," "Starting price / discount TBD," "All discount amounts, expiration dates, and fine-print specifics are managed as CMS-editable parameters"). Keep this page's structure and placeholder approach as the model for the rest of the site. Required fixes on this page specifically:
- Fix the broken trust-section sentence per Section 3, fix #2.
- Resolve the "44+ reviews" vs. sitewide "52 reviews" conflict per Section 3, fix #1.
- Soften "backed by free callback guarantees" (Quarterly Home Protection card) per Section 3, fix #5.
- Apply the chemical-language sweep: "eco-responsible pest defense" (hero intro line) is fine and can stay; leave the rest of this page's copy otherwise untouched — it's a strong template.

### 5.3 `/about/` (About Page)

Strong, warm, already close to the target tone ("providing South Florida properties with the structural defense and service depth of a regional operator, while keeping the personal touch... of a local trades team" is a genuinely good line — keep it). Required fixes:
- Resolve the FDACS "Active & Compliant" contradiction next to the mock license identifier per Section 3, fix #7.
- Replace "scientific" framing if present in surrounding copy with the same warmer alternatives from Section 2 (this page currently reads cleaner than the homepage on this front — do a light pass only).
- Keep "No Pushy Sales," "Punctual & Courteous," and "Advanced Methods" card headings — these already match the target tone well; only lightly tighten "Advanced Methods" body copy if it drifts into chemical/scientific language.

### 5.4 `/contact/` (Contact Page)

Copy here is functional and clear; no major tone issues found. Minor polish: "We dispatch technicians across Broward County daily" is good, keep. Standardize the form submit CTA to **"Request Free Assessment"** per Section 2. No claims-to-verify issues found on this page.

### 5.5 Footer (Sitewide)

Current tagline: "We provide state-of-the-art protection built for Florida's climate." → **"We provide dependable pest protection built for Florida's climate."**
Current sub-tagline: "Certified & Fully Insured South Florida Pest Specialists" → verify "Certified" and treat per Section 3, fix #9; if unconfirmed, use **"Licensed & Insured South Florida Pest Specialists."**
Service links: apply naming fixes from Section 2 ("Rodent Exclusion" → "Rodent Control & Exclusion"; "Cockroach Treatment" → "Roach Control"; "Ant Extermination" → "Ant Control").
License line ("State License: [FL-PCO-MOCK9999] (Demo Build Only – Verify Before Production)") is correctly written — keep verbatim as the sitewide convention for unconfirmed license data, and match the About page's license section to this exact wording pattern.

---

## 6. Local SEO Keyword Preservation

Do not remove or thin out existing location or service keyword coverage while doing this copy pass. Naturally preserve/reinforce:

**Locations:** Fort Lauderdale, South Florida, Broward County, Plantation, Davie, Hollywood, Pembroke Pines, Weston, Sunrise, Wilton Manors, Oakland Park, Dania Beach

**Services:** pest control, termite control, rodent control, roach control, mosquito control, ant control, bed bug control, pigeon control, commercial pest control, residential pest control, quarterly pest control, year-round pest protection

Every rewritten heading/body in Section 4 preserves at least the same location/service keyword density as the original — verify this after implementation rather than assuming it.

---

## 7. Homepage Motion System

### 7.1 Global Motion Rules

- Animate on viewport entry only (`whileInView` pattern) — nothing animates purely on page load except the hero, which is above the fold by definition.
- Use fade + slight vertical movement (8–24px translateY) for headings and body copy.
- Use staggered reveals for any grouped content (card grids, bullet lists, badge rows, testimonials) — stagger delay 60–120ms per item, do not exceed ~6 items in a single stagger group before batching.
- Use slide-in (translateX, 24–48px) sparingly and intentionally — reserved for the specific moments called out in Section 7.3 below (Protection Plan card, Termite CTA card, Residential/Commercial split), not as a default pattern applied everywhere.
- Subtle scale (0.97–0.98 → 1) + fade for cards and hero visuals — never scale from below 0.95 or above 1.05.
- Hover interactions: 2–4px lift + soft shadow deepen on cards; hover state transitions should be fast (150–200ms), separate from scroll-entry animation timing.
- No parallax beyond a very slight, performance-safe background shift (if used at all) — nothing that causes visible jank on mid-range mobile devices.
- Respect `prefers-reduced-motion: reduce` — when set, disable all transform/opacity scroll animations and show content in its final state immediately; hover lift effects may remain but should be minimal.
- Animation durations: 0.3–0.8s for standard entrance animations; staggered groups may run longer in total but each individual item's animation stays under 0.8s.
- Easing: use `cubic-bezier(0.22, 1, 0.36, 1)` (a smooth, confident ease-out) as the sitewide default; plain `easeOut` is an acceptable fallback for simpler CSS-only cases.
- Animations run once per page load (`viewport={{ once: true }}` in Framer Motion terms) — do not re-trigger on scroll-back-up unless there's a specific, deliberate reason (there isn't one on this homepage).
- Never animate `width`, `height`, `top`, or `left` — animate `transform` and `opacity` exclusively for scroll/entrance effects to avoid layout thrash and CLS.

### 7.2 Reusable Animation Components/Utilities

Build these as shared, composable primitives — do not hand-roll one-off animation logic per section.

- **`FadeIn`** — opacity 0→1 on viewport entry, no movement. Used for supporting copy, backgrounds, badge rows.
- **`FadeUp`** — opacity 0→1 + translateY 16–24px→0. Used for headings, section intros, standalone paragraphs.
- **`StaggerContainer`** — wraps a group of children and applies incremented delay to each child via context/variants. Used for card grids, bullet lists, badge rows, testimonial grids, service-area city pills.
- **`SlideIn`** — opacity 0→1 + translateX (direction prop: `"left"` | `"right"`) 24–48px→0. Used for the Protection Plan card, Termite CTA card, and Residential/Commercial split panels only.
- **`AnimatedCard`** — wraps `FadeUp` scroll-entry behavior with a built-in hover state (lift + shadow deepen + optional icon micro-rotation). Used for all service cards, offer cards, and value-prop cards sitewide (not homepage-only — reuse on `/services/` and `/specials/` too).
- **`SectionReveal`** — a higher-level wrapper combining an eyebrow fade, heading `FadeUp`, and an optional animated underline that grows left-to-right beneath the heading (used per Section 7.3.4). This is the standard section-intro pattern to apply consistently across every homepage section.
- **`FloatingContactCard`** — desktop-only persistent card (see Section 7.3.15) with its own enter/exit/minimize animation states, independent of scroll-entry timing.

Centralize animation variants (durations, easing curves, distances) in one shared config/constants file if using Framer Motion, so every component pulls from the same source rather than hardcoding values per instance. Add brief comments explaining non-obvious timing choices (e.g., why a particular section uses a longer stagger delay).

**Library choice:** use Framer Motion if it's already installed in the project; otherwise use the project's existing animation solution (GSAP or CSS-based) rather than introducing a new dependency. Do not add a second animation library if one is already present.

### 7.3 Section-by-Section Motion Spec

**1. Header** — Stable and professional by default. On scroll past ~40–60px, apply a subtle background blur/opacity shift and soft drop shadow to the sticky header (condensed sticky behavior optional if the header has room to shrink slightly). Primary CTA button gets a subtle hover lift (2px) + soft glow/shadow. Phone icon: a very small, slow pulse on desktop hover only — never a constant/looping pulse, and never on mobile (mobile users already see the sticky CTA bar).

**2. Hero** — Eyebrow ("LOCAL & FAMILY-OWNED") fades in first (`FadeIn`, ~0.3s). H1 fades/slides up (`FadeUp`), ideally split into 1–2 line groups with a very short stagger between them (~80ms) rather than animating as one giant block. Subheadline fades in after the H1 completes (~150ms delay). CTA buttons ("Schedule Free Inspection" / "Call Now") fade/slide in together as a small stagger group. Trust row badges (rating, Licensed & Insured, Family-Owned, Service Satisfaction Promise) stagger in last, each with a short delay. Hero visual (image/card) scales in from 0.97→1 with a soft fade — if a floating/ambient motion is added to the hero visual, keep it extremely subtle and slow (a few px of vertical drift over several seconds, not a bounce).

**3. Trust row / badge strip** — Each badge (Google, Yelp, NPMA Member, Expertise.com in the Reviews section; the hero trust row separately) fades up with stagger via `StaggerContainer`. On hover, badges lift 2–4px with a soft shadow reveal — subtle, not playful.

**4. Problem / South Florida Pest Pressure section** — Section heading ("South Florida Pest Pressure Is Year-Round") fades up via `SectionReveal`, including the animated underline growing left-to-right beneath it. Supporting copy fades in shortly after. If this section uses any supporting stat blocks or visual elements, slide them in from alternating left/right directions using `SlideIn` — otherwise a straightforward `FadeUp` on the body copy is sufficient.

**5. Services Overview** — Service cards stagger in via `StaggerContainer` + `AnimatedCard` (fade up + scale from 0.98→1). On hover: card lifts slightly, border/accent deepens, and the service icon does a small 2–3 degree rotation — professional, not playful (no bounce, no spin).

**6. Protection Plan section** — This is the homepage's signature motion moment. As the user scrolls in, the Quarterly Protection Program card slides in from the right (`SlideIn`, direction="right"). Plan benefit bullets fade in one at a time (staggered) after the card settles. If a 4-step progress visual (Inspect → Treat → Protect → Follow Up) is included here or reused from the Process section, animate each step in sequentially rather than all at once. On mobile, the card enters via `FadeUp` instead of a side-slide, and must never be a fixed/floating element that covers page content — it's part of normal scroll flow on mobile.

**7. Termite section** — The Termite Inspection CTA card slides in from the right (`SlideIn`), consistent with the Protection Plan section's pattern (these are the two flagship offer moments on the page, so they should feel like a matched pair). "Signs of termites" bullets (Formosan / Drywood) animate in one at a time. If a small accent/icon is used, fade it in calmly — no shake, no alarm-style animation; this section's tone is protective and informative, not scary.

**8. Residential + Commercial split** — Residential card enters from the left, Commercial card enters from the right (`SlideIn` both directions, timed to arrive together or with a very short stagger). On hover, each card lifts slightly and reveals its CTA more prominently. If either panel has a background image, a very slight scale (1→1.03 over the scroll range) is acceptable if performance testing shows no jank on mobile — otherwise skip it entirely rather than risk a laggy scroll.

**9. Process section** — The connecting line between steps draws in (grows) as the user scrolls down through the section — vertically on mobile, horizontally on desktop if the layout is horizontal. Each of the 5 steps (Schedule Inspection → Identify Pressure → Treat The Problem → Protect & Prevent → Ongoing Support) appears sequentially as the line reaches it, using small numbered circles/pills that scale/fade in. Keep this genuinely simple — a drawing line + sequential step reveal is enough; don't layer additional effects on top.

**10. Why Choose section** — Heading fades up via `SectionReveal`. The four value cards (Family-Owned & Local, Honest Recommendations No Pressure, Licensed & Insured, Thoughtful Modern Materials) stagger in via `AnimatedCard`. If one card is meant to be featured/highlighted, it can slide in from the right slightly after the others settle, with subtle hover lift consistent with the rest of the card system.

**11. Reviews / Trust section** — Testimonial cards (John, Olivia Christian, Jorge Padilla) fade in with stagger. If a carousel/slider is used for additional reviews, keep auto-advance timing slow and unobtrusive (if auto-advance exists at all — manual navigation is preferable). The stat block (rating + review count, once resolved per Section 3) can gently slide/fade in as its own moment.

**12. Service Areas section** — City pills/cards (Fort Lauderdale, Plantation, Davie, Hollywood, Pembroke Pines, Weston, Sunrise, Wilton Manors, Oakland Park, Dania Beach) animate in with stagger via `StaggerContainer`. Any map-style visual or city grid fades/scales in alongside. On hover, city cards shift slightly (1–2px) and reveal an underline — keep all location links fully crawlable, real `<a>` tags, not JS-only click handlers, regardless of animation treatment.

**13. FAQ section** — Accordion open/close should animate height smoothly (use a measured-height or `AnimatePresence`-style approach rather than `display: none` snap-toggling, to keep the motion smooth without causing layout jump). Question rows can fade in sequentially on section entry. The expand/collapse icon (chevron or plus/minus) should rotate smoothly on open/close — keep this fast (150–200ms), it's a UI-state transition, not a scroll-entry animation.

**14. Final CTA section** — Confident closing sequence: background (image or gradient) fades in first, heading fades up, then the CTA area slides/fades up, with the two buttons appearing last in a short stagger. This should read as a calm, confident close — not a popup, not an aggressive final push.

**15. Floating Contact Card (desktop only)** — A small, tasteful "Book Free Inspection" card appears after the user scrolls past the hero (not before — don't compete with the hero's own CTAs). Enters from the right side of the screen, settles into a fixed/sticky position in the lower-right viewport area. Content: short prompt ("Need pest help?"), a one-line sub ("Schedule a free inspection"), a Call button, and a Book button. Must include a close/minimize control. Must never overlap the footer or, on any breakpoint where a sticky mobile CTA bar is also present, must not appear at all — this is strictly a desktop-only component to avoid redundant/competing CTAs.

**16. Mobile motion rules** — Disable all left/right slide-in effects on mobile; use fade-up and stagger only. Keep the sticky bottom mobile CTA bar (Call + Book Free Inspection) clean, always visible, and free of any competing floating elements — do not show the Floating Contact Card on mobile since the sticky bar already serves that purpose.

---

## 8. Accessibility Requirements

- Respect `prefers-reduced-motion: reduce` globally — when set, disable transform/opacity scroll-entry animations and render final states immediately (hover micro-interactions may remain, minimized).
- Never animate content in a way that hides or delays it from screen readers — content must be present in the DOM and readable regardless of animation state; use `aria-hidden` only for genuinely decorative motion elements (e.g., a purely visual underline-grow effect), never for real content.
- FAQ accordions must be fully keyboard-accessible: focusable trigger elements, `Enter`/`Space` to toggle, correct `aria-expanded` state changes, and logical focus order.
- All buttons and links (including the Floating Contact Card and its close control) must have visible, clear focus states for keyboard navigation.
- No animation may cause layout shift (CLS) — reserve space for animated elements before they enter, and animate only `transform`/`opacity`.

---

## 9. Performance Requirements

- Prefer the project's already-installed animation library; avoid adding a new one.
- Animate `transform` and `opacity` only — never `width`, `height`, `top`, `left`, or other layout-triggering properties.
- Lazy-load below-the-fold images; keep the hero image/visual optimized and prioritized for a strong LCP.
- Optimize all images (responsive sizes, modern formats).
- Verify no CLS is introduced by any new animated component — test with real device throttling, not just desktop dev tools.
- Test the Protection Plan and Termite section slide-in effects specifically on mid-range mobile hardware — these are the two most complex motion moments on the page and the most likely to introduce jank if implemented carelessly.

---

## 10. Implementation Notes

- Build the reusable animation components (Section 7.2) first, as a small shared library, before wiring them into individual homepage sections — this keeps the implementation consistent and makes future reuse (on `/services/`, `/specials/`, location pages) straightforward.
- Keep all duration/easing/distance values centralized (a single constants/config file or theme extension) rather than hardcoded per component instance.
- Comment non-obvious timing or sequencing decisions inline, particularly in the Protection Plan and Process section implementations, since those involve sequenced/multi-step animation logic.
- This is a copy + motion pass — do not restructure existing components, change the page's section order, or alter the underlying data/props structure beyond what's needed to update copy strings and wrap elements in the new animation components.

---

## 11. Final QA Checklist

**Copy accuracy**
- [ ] Review rating/count identical across hero, homepage reviews section, and `/specials/` (Section 3, #1)
- [ ] Broken sentence on `/specials/` trust section rewritten (Section 3, #2)
- [ ] "Verified" review language removed unless tied to a genuinely live feed (Section 3, #3)
- [ ] "100% Service Guarantee" replaced with "Service Satisfaction Promise" everywhere it appears, including the FAQ answer (Section 3, #4)
- [ ] All "free re-service"/"free callback"/"free emergency re-service" claims softened to "may be available on qualifying plans" consistently (Section 3, #5)
- [ ] Termite insurance line updated to the exact approved wording (Section 3, #6)
- [ ] About page FDACS "Active & Compliant" contradiction resolved against the mock license placeholder (Section 3, #7)
- [ ] About page license section matches the footer's placeholder wording convention (Section 3, #8)
- [ ] "Certified," "background-checked," and "Drug-Screened" claims either confirmed or softened per Section 3, #9
- [ ] "Digital tracking logbooks" / "full logs matching local health requirements" confirmed or softened per Section 3, #10
- [ ] "Punctual & Pushing Nothing" changed to "Honest Recommendations, No Pressure" (exact client-specified fix)
- [ ] "Rodent Exclusion" → "Rodent Control & Exclusion" applied sitewide (card, dropdown, footer)
- [ ] "Cockroach Control"/"Cockroach Treatment" → "Roach Control" applied sitewide
- [ ] "Ant Extermination" (footer) → "Ant Control"
- [ ] Chemical/scientific language ("chemical sprays," "scientific barrier," "eradicate," "state-of-the-art," "cutting-edge") swept from homepage, `/services/`, and footer per Section 2
- [ ] CTA vocabulary standardized per Section 2 across header, hero, forms, and final CTA
- [ ] FAQ answer copy (not visible during this audit) manually reviewed and brought in line with Sections 1–3

**Local SEO**
- [ ] All location and service keywords from Section 6 still present at comparable density after rewrite
- [ ] No service or location page links broken or renamed inconsistently as a side effect of the terminology fixes

**Motion**
- [ ] All homepage sections use the shared animation components (Section 7.2), not one-off implementations
- [ ] `prefers-reduced-motion` verified to disable scroll-entry animation site-wide
- [ ] No animation triggers layout shift (test with Lighthouse/CLS measurement)
- [ ] Protection Plan and Termite CTA card slide-ins tested on real mid-range mobile hardware, confirmed smooth
- [ ] Floating Contact Card confirmed desktop-only, does not appear alongside the mobile sticky CTA bar, and has a working close/minimize control
- [ ] FAQ accordion keyboard-accessible with correct `aria-expanded` behavior and smooth height animation
- [ ] All animated links/buttons retain full keyboard focus visibility
- [ ] Hero LCP and overall Core Web Vitals re-measured after motion implementation to confirm no regression

---

*End of Antigravity implementation prompt.*
