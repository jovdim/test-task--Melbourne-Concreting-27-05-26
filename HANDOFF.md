# Melbourne Concreting Co — landing page handoff

A one-page, SEO-first landing page for a fictional residential concreting business in
Melbourne. Built to show thinking on **copy** and **design**, and to deploy to a real
live link in minutes.

- **Stack:** Astro 5 (static output, zero JS by default) + `@astrojs/sitemap` + sharp image optimization.
- **Primary service:** Concrete driveways. Also pathways, shed slabs, pool surrounds.
- **Look:** premium & clean — charcoal + warm amber on a warm off-white, Fraunces (headings) + Inter (body).
- **Visual motif:** a single "concrete craft" language — a faint **control-joint grid** texture through several sections, **ruler-tick** accents on every section label, and service cards with overlapping icon badges. One idea, repeated, rather than scattered decoration.

> **Note on the About section:** written structurally-true for a fictional business (local crew, how we work, what to expect) with **no invented years or job counts**. The "Fully insured" highlight is covered by the licensing/insurance `CONFIRM` below.

---

## 1. Why Astro (not plain HTML, not a React SPA)

SEO on a landing page is won on **static HTML + speed**. Astro renders to pure static
HTML and ships **zero JavaScript by default**, so Core Web Vitals are excellent out of
the box. A client-rendered React SPA is the opposite of what you want here: slower, and
harder for crawlers. Astro also gives us batteries-included sitemap generation, build-time
image optimization (WebP + responsive `srcset` + explicit dimensions = no layout shift),
and trivial injection of meta tags and JSON-LD. Animations are added with a tiny bit of
JS only where needed, never at the cost of speed.

---

## 2. Copy strategy (the important part)

The brief gave an Ideal Customer Profile. The key call: **the ICP is an input for the
writer, not a script to paste on the page.**

- The brief noted the buyer "has been let down by tradies" and has a "$20k+ budget". An
  early draft transcribed those literally ("you've been let down before", "$20,000-plus
  decision"). That was wrong: it bashes competitors, pins a price that scares off smaller
  jobs, and writes for one imaginary person.
- **Final direction:** lead with the *outcome* the buyer actually wants — a driveway that
  **lasts decades and looks the part**, done by people who quote properly, show up, and
  leave the site clean. That lands with the target buyer *and* everyone else, without
  naming a single ICP attribute.

Principles applied throughout (from the in-house copy spec, adapted to Australian English):

- **Concrete over abstract.** Steel mesh, expansion joints, exposed aggregate, broom and
  coloured finishes, curing time — not "quality solutions".
- **Verb-led.** "We pour", "we break out the old slab", "we cut control joints".
- **Falsifiable trust signals, not self-praise.** No "we're professionals / reliable /
  quality is our priority". Instead: "the quote is the price", "10-year workmanship
  warranty in writing", "we answer the phone", fully insured.
- **Local.** Melbourne is in the H1, the footer, the FAQ, and a section listing 16 suburbs.
- **No invented numbers.** The pricing FAQ deliberately explains the cost *drivers* and
  offers a free measured quote rather than fabricating a dollar figure.
- **No AI tells.** Zero em dashes, zero emoji on the page, varied sentence rhythm.

---

## 3. Technical SEO implemented

- **Title** (54 chars) and **meta description** (151 chars) within Google's display limits.
- **Canonical** URL, `robots` meta (`index, follow, max-image-preview:large`).
- **Open Graph** (10 tags incl. 1200×630 image) + **Twitter** `summary_large_image`.
- **Local SEO geo meta** (`geo.region AU-VIC`, `geo.placename`, `geo.position`, `ICBM`).
- **JSON-LD structured data** (3 blocks), all generated from one data file so they can't
  drift from the visible copy:
  - `GeneralContractor` / `HomeAndConstructionBusiness` — name, phone, email, address,
    geo, opening hours, `areaServed` (16 suburbs), `OfferCatalog` of services, `sameAs`.
  - `WebSite`.
  - `FAQPage` — mirrors the on-page FAQ for rich results.
- **`sitemap-index.xml` + `sitemap-0.xml`** (auto-generated), referenced from `robots.txt`.
- **Favicon set:** SVG + 32px PNG + Apple touch icon + 192/512 PWA icons + `site.webmanifest`.
- **Performance / CWV:** static HTML, WebP with responsive `widths`, hero is `eager` +
  `fetchpriority="high"`, everything else lazy, every image has explicit width/height
  (no CLS), fonts preconnected with `display=swap`.
- **Accessibility:** semantic landmarks, skip link, labelled form fields, focus-visible
  rings, alt text on every image, `prefers-reduced-motion` respected.

---

## 4. ⚠️ Before you go live — confirm these placeholders

Everything below is a realistic stand-in for a fictional business. Search the code for
`CONFIRM` to find them all. Replace with real, client-verified details:

| Item | Where | Current placeholder |
|---|---|---|
| Production domain | `astro.config.mjs`, `src/data/site.ts` | `www.melbourneconcreting.com.au` |
| Phone | `site.ts` `business.phone` / `phoneHref` | (03) 9123 4567 |
| Email | `site.ts` `business.email` | quotes@melbourneconcreting.com.au |
| ABN + legal name | `site.ts` | 12 345 678 901 / "…Pty Ltd" |
| ACN (Pty Ltd) | `site.ts` `business.acn` | 123 456 789 |
| Address + postcode + geo lat/lng | `site.ts` `business.address`, `geo` | Melbourne CBD coords |
| Opening hours | `site.ts` `business.hours` | Mon–Fri 7–5, Sat 8–1 |
| Warranty length | `site.ts` (whyUs, process, FAQ) | 10-year workmanship |
| "Licensed & insured" claims | hero trust bar, FAQ | assumed true |
| Social profile URLs | `site.ts` `business.social` | placeholder links |
| WhatsApp number (float button) | `site.ts` `business.whatsapp` | mobile, digits only |

**Two content items that must be replaced, not just edited:**

1. **Photos are stock (Pexels).** The gallery captions ("Glen Waverley, 2025" etc.) are
   illustrative. Replace every image in `src/assets/images/` with the firm's own real job
   photos before launch. A trades gallery only builds trust if the work is genuinely theirs.
2. **Testimonials are samples.** Replace `site.ts` `testimonials` with real client quotes.
   They're styled as **Google reviews** (Google "G" + "Posted on Google" + a link to the
   profile) — only keep that styling if they're genuinely from the Google Business Profile;
   otherwise relabel them as plain testimonials. Never ship fabricated reviews. Set the real
   profile URL in `business.social.google`.

**Optional, recommended next steps:** add a real price range to the pricing FAQ once the
client confirms it; set up Google Business Profile; add analytics.

---

## 5. The quote form

It's wired for **Netlify Forms** (`data-netlify`, honeypot, hidden `form-name`). For the
local demo, `data-demo="true"` on the form intercepts submit and shows the success state.
**To go live on Netlify:** remove `data-demo="true"` from the form in
`src/components/Contact.astro`. (For other hosts, point `action` at Formspree/your endpoint.)

**Map:** the section between Contact and the footer is a keyless Google Maps embed
centred on Melbourne (`src/components/Map.astro`). It renders fine in real browsers;
for guaranteed production reliability, swap to the official Maps Embed API with a key.

**Floating buttons:** a WhatsApp button (uses `business.whatsapp`) and a back-to-top
button sit bottom-right (`src/components/FloatingActions.astro`).

---

## 6. Run & deploy

```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # static output to ./dist
npm run preview    # preview the built site
```

**Get a live link (any one):**
- **Netlify:** drag the `dist/` folder onto app.netlify.com/drop, or connect the repo
  (build: `npm run build`, publish: `dist`). Forms work automatically.
- **Vercel / Cloudflare Pages:** import the repo, framework preset "Astro".
- **GitHub Pages:** push `dist/` (or use the Astro Pages action).

After deploying, set the real domain in `astro.config.mjs` (`site:`) and rebuild so the
sitemap, canonical and OG URLs are correct.

---

## 7. Structure

```
src/
  data/site.ts          ← single source of truth: all copy + business data + CONFIRM flags
  layouts/Base.astro     ← <head>: meta, OG/Twitter, geo, 3× JSON-LD, fonts, UI script
  components/             ← Header, Hero, Problem, Services, About, WhyUs,
                            Process, Gallery, Testimonials, FAQ, Contact, Footer
  styles/global.css      ← design tokens + base + shared primitives
  assets/images/         ← optimized at build time (replace with real photos)
public/                  ← favicon set, manifest, robots.txt, og-image.jpg
scripts/                 ← icon generation + screenshot helpers (dev only)
```

Helper scripts (`scripts/gen-icons.mjs`, `scripts/shoot*.mjs`) are dev tooling only and
are not part of the shipped site.
