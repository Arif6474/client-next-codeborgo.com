# CodeBorgo — Website Rewrite & Fix Pack

Everything below is ready to paste into your site. It's written for an **honest, new-agency** positioning that still looks premium and pushes visitors toward booking a call. Work top to bottom — each section tells you what to replace and gives you the exact text.

**How to read this doc:** `REPLACE` = swap existing text. `ADD` = new content that doesn't exist yet. `FIX` = a technical change for your developer.

---

## 0. The two things that hurt you most (do these first)

1. **The stats show "0+ Projects, 0% Satisfaction, 0% Overhead, 0+ Years."** This looks broken and destroys trust in 2 seconds. Replaced in Section 3.
2. **Fake case studies + 15 fake testimonials** ("ABC Company", "250% traffic", "180% sales") on a brand-new agency. This is a legal and trust risk, and it contradicts the "0 projects" stats. Fixed in Sections 3 and 4.

Everything else is upside on top of fixing these two.

---

## 1. SEO & Meta Tags  `FIX` / `REPLACE`

Right now your title is just "CodeBorgo" and your meta description is just "Premium Digital Excellence." That's invisible to Google and looks empty when shared. Replace the `<head>` tags with these.

```html
<!-- Primary -->
<title>CodeBorgo — Web Development & AI Agency in Venice, Italy</title>
<meta name="description" content="CodeBorgo is a Venice-based digital studio building high-performance websites, custom AI agents, and ROI-driven marketing systems for ambitious brands and startups. Book a free consultation." />
<meta name="keywords" content="web development Venice, digital agency Italy, Next.js development, AI chatbot development, SEO agency, custom web design" />
<link rel="canonical" href="https://codeborgo.com/" />

<!-- Open Graph (link previews on WhatsApp, LinkedIn, Facebook) -->
<meta property="og:type" content="website" />
<meta property="og:title" content="CodeBorgo — Web Development & AI Agency in Venice, Italy" />
<meta property="og:description" content="High-performance websites, custom AI agents, and marketing systems built with Italian craftsmanship. Book a free consultation." />
<meta property="og:image" content="https://codeborgo.com/images/og-cover.png" />
<meta property="og:url" content="https://codeborgo.com/" />
<meta property="og:site_name" content="CodeBorgo" />

<!-- Twitter/X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CodeBorgo — Web Development & AI Agency in Venice, Italy" />
<meta name="twitter:description" content="High-performance websites, custom AI agents, and marketing systems built with Italian craftsmanship." />
<meta name="twitter:image" content="https://codeborgo.com/images/og-cover.png" />

<!-- Favicon (create these if you don't have them) -->
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

**To do:**
- Create an `og-cover.png` (1200×630px) — your logo + tagline on your dark background. This is what shows when the link is shared.
- Add a favicon if you don't have one (check the browser tab — a missing favicon looks unfinished).
- Add JSON-LD structured data (below) so Google can show you as a business:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CodeBorgo",
  "image": "https://codeborgo.com/images/og-cover.png",
  "url": "https://codeborgo.com",
  "email": "info@codeborgo.com",
  "telephone": "+39 351 225 5725",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gaspare Gozzi, 53",
    "addressLocality": "Mestre, Venezia",
    "postalCode": "30171",
    "addressCountry": "IT"
  },
  "areaServed": "Worldwide",
  "description": "Venice-based digital studio building high-performance websites, AI agents, and marketing systems."
}
</script>
```

---

## 2. Hero + About Rewrite  `REPLACE`

### Hero

Keep your headline animation, but the subcopy can work harder. Options:

**Badge (keep or swap):**
> ● NOW ACCEPTING NEW PROJECTS FOR Q3 2026

**Headline (keep):**
> Premium Digital Excellence — Web Craftsmanship

**Subcopy (REPLACE):**
> We're a Venice-based studio building high-performance websites, custom AI agents, and marketing systems that actually move numbers. Founder-led, senior-only, and obsessive about detail — no outsourcing, no templates.

**Buttons (REPLACE single button with two):**
> [ Book a Free Consultation → ]   [ See What We Build ]

Two buttons beat one: a primary conversion action + a softer "just looking" path.

### About / Agency Philosophy `REPLACE`

Your current about text is good but leans on implied scale you don't have yet. This version is honest and confident:

**Heading (keep):** Italian Design Meets Digital Engineering.

**Body (REPLACE):**
> CodeBorgo is a new studio built on an old idea: that digital products should be as functional as they are beautiful. We're based in Venezia, and we bring the same standard of craft to a landing page as a Venetian workshop brings to anything it makes.
>
> We're small on purpose. That means you work directly with the people building your product — not an account manager and a queue. We don't ship generic templates; we design and engineer bespoke sites, stores, and automations around your actual business goals.
>
> If you're an ambitious brand or an early-stage startup that wants a partner who cares about the details, that's exactly who we built this for.

---

## 3. Replace the Stats Block & Fake Testimonials  `REPLACE`

### 3a. The "0+" stats block — REPLACE entirely

Zeros look broken. As a new agency, don't fake numbers — swap the metric grid for **honest proof points** that are true on day one:

| Replace this | With this (honest) |
|---|---|
| 0+ Projects Delivered | **100%** Senior-Built (no juniors, no outsourcing) |
| 0% Client Satisfaction | **<24h** Response Time |
| 0% Support Overhead Cut | **98+** Target PageSpeed Score |
| 0+ Years in Venezia | **Venezia** Based & EU-Based Team |

These are all defensible and still feel premium. Alternatively, if you'd rather not have a number grid at all yet, delete the block and use the "How We Work" section (Section 4) as your credibility anchor instead.

### 3b. Testimonials — REMOVE the fake ones

You currently have ~15 invented testimonials with named "CEOs." Remove them all. Fabricated reviews are the fastest way to lose a serious client (and a legal risk under EU consumer law). Replace that whole section with one of these until you have real reviews:

**Option A — Founder's Promise (recommended for launch):**

> ### Why work with a new studio?
>
> Because you get our full attention. We're taking on a limited number of projects this quarter, which means direct access to the people building your product and a level of care larger agencies can't match.
>
> **Our promise to early clients:**
> - You work directly with the founder — every call, every decision.
> - Fixed scope, fixed price. No surprise invoices.
> - If we don't think we're the right fit, we'll tell you and point you somewhere better.
>
> — *[Your name], Founder, CodeBorgo*

**Option B — Guarantee bar** (can sit alongside A):

> **Our Guarantees:** Fixed pricing · On-time delivery or we keep working free · 30-day post-launch support included · You own 100% of the code.

Once you complete 2–3 real projects, ask those clients for a one-line review and rebuild a real testimonial section. Real beats polished every time.

---

## 4. Reframe Portfolio + New Sections to ADD

### 4a. Portfolio — REPLACE the section label and captions

Your project visuals look great — keep them. But relabel the section so they're honest, and remove the invented metrics.

**Section heading (REPLACE):**
> ~~Featured Projects~~ → **Concept Work & Capabilities**

**Section intro (REPLACE):**
> A look at the kind of work we build — concept pieces and sample builds that show our range across web, commerce, AI, and brand. Your project becomes our next case study.

**Captions — REPLACE each so they describe the build, not fake results:**

| Project | Honest caption |
|---|---|
| Luxury Fashion Brand | Concept storefront for a luxury fashion label — editorial layout, headless commerce, and a marketing site built for organic reach. |
| E-Commerce Platform | Full-stack commerce concept for artisan products, with Stripe checkout, CDN delivery, and edge caching. |
| Smart Customer Bot | An AI support agent concept built on the Claude API — designed to resolve common customer questions automatically. |
| SaaS Dashboard | Real-time analytics dashboard concept with sub-200ms query patterns and a clean data-heavy UI. |
| Beauty Brand Campaign | Multi-platform social concept for a beauty brand — cohesive visual system across Instagram, TikTok, and LinkedIn. |
| Restaurant Brand Launch | Localized Venezia restaurant brand concept — site, reservations flow, and local-search foundation. |

The word "concept" once in the intro does the honesty work; you don't need to stamp it on every card.

### 4b. ADD — "How We Work" (process) section

New agencies win by showing they're organized. Add this between Services and Pricing:

> ## How We Work
> A clear, four-step process — no mystery, no scope creep.
>
> **01 · Discovery** — A free call to understand your goals, audience, and what success looks like. You leave with a clear scope and a fixed quote.
>
> **02 · Design** — Wireframes and a high-fidelity design in Figma. You approve the look before a line of code is written.
>
> **03 · Build** — We engineer your site or system with Next.js and modern tooling, sharing progress as we go. Fast, secure, responsive by default.
>
> **04 · Launch & Support** — We deploy, test, and hand over. Every project includes 30 days of post-launch support, plus optional ongoing care.

### 4c. ADD — Final CTA band (above the footer)

> ## Ready to build something worth showing off?
> Tell us about your project. You'll hear back within 24 hours with honest next steps — even if that's "here's who you should talk to instead."
>
> [ Book a Free Consultation → ]

---

## 5. Contact, Footer & Legal (GDPR)  `FIX` / `ADD`

### 5a. Email domain mismatch — FIX

Your site is `codeborgo.com` but the contact email is `hello@codeborgo.it`. Pick one. Recommended: use **info@codeborgo.com** everywhere so it matches the domain people see. (If you own both domains, set the `.it` to forward to the `.com` inbox.)

### 5b. Contact form — ADD a consent checkbox (legally required in the EU)

Add above the Send button:

> ☐ I agree to CodeBorgo processing my details to respond to my inquiry, as described in the [Privacy Policy](/privacy). *

The form should not submit unless this is ticked. Also **test that the form actually delivers** — send yourself a test inquiry and confirm it lands in your inbox.

### 5c. Footer — FIX the dead links & ADD legal info

- The social icons currently link to `#` (dead). Either add real profile URLs or remove the icons entirely. Empty social links look worse than none.
- Add your **Partita IVA (VAT number)** — legally required for an Italian business. Example format:
  > CodeBorgo di [Name] · P.IVA IT01234567890 · Mestre, Venezia, Italy
- Add footer links: **Privacy Policy · Cookie Policy · Terms**

### 5d. ADD — Cookie consent banner

If you run any analytics (Google Analytics, Vercel Analytics, etc.), EU law requires a consent banner before non-essential cookies load. Short version:

> This site uses cookies to improve your experience and analyze traffic. [Accept] [Reject non-essential] [Learn more](/cookie-policy)

Use a library like `vanilla-cookieconsent` or Cookiebot — don't hand-roll it.

### 5e. ADD — Privacy Policy page (`/privacy`)

Full starter text below. **Fill in the bracketed parts**, and have it reviewed if you can — this is a template, not legal advice.

> # Privacy Policy
> _Last updated: [date]_
>
> CodeBorgo ("we", "us") respects your privacy. This policy explains what personal data we collect and how we use it, in line with the EU General Data Protection Regulation (GDPR).
>
> **Who we are.** CodeBorgo, [legal name], Gaspare Gozzi 53, 30171 Mestre, Venezia, Italy. Contact: info@codeborgo.com. VAT: [P.IVA].
>
> **What we collect.** When you submit our contact form we collect your name, email, company name (optional), and the details of your message. If analytics cookies are enabled, we also collect anonymized usage data (pages visited, device type, approximate region).
>
> **Why we collect it.** To respond to your inquiry and provide the services you request (legal basis: your consent and our legitimate interest in replying to you), and to understand and improve our website (legal basis: consent, via the cookie banner).
>
> **How long we keep it.** Contact inquiries are kept for up to 24 months unless you ask us to delete them sooner. Analytics data is retained per our provider's default period.
>
> **Who we share it with.** We do not sell your data. We use trusted processors to run our site and email (e.g., our hosting provider, email provider, analytics provider). Each processes data on our behalf under contract.
>
> **Your rights.** Under the GDPR you can request access to, correction of, or deletion of your data, object to processing, or withdraw consent at any time. Email info@codeborgo.com and we'll respond within 30 days. You may also complain to the Italian Data Protection Authority (Garante per la protezione dei dati personali).
>
> **Cookies.** See our [Cookie Policy](/cookie-policy) for details and to change your preferences.
>
> **Changes.** We may update this policy; the "last updated" date reflects the latest version.

---

## 6. Technical Fixes for Your Developer  `FIX`

These aren't copy — they're things to change in the code.

**1. Blank-screen-on-load (high priority).** Every section renders empty black for 2–3 seconds until the scroll/entrance animation fires. First impression is an empty page, and it hurts SEO + bounce rate.
- Make hero content visible on first paint (animate opacity from ~0.4 → 1, not 0 → 1, or trigger immediately on load rather than on a timer).
- For scroll-reveal sections, reduce the delay and add a fallback so content is visible even if JS/IntersectionObserver is slow. Never let a fold be 100% invisible before animation.

**2. Fix the stats counter.** Whatever drives the count-up is stuck at 0. If you keep a number block (Section 3a), make sure the target values are set and the animation actually runs when scrolled into view. Test on a fresh reload.

**3. Accessibility / contrast.** A lot of body text is low-contrast grey on black and likely fails WCAG AA (4.5:1). Lighten secondary text (aim for at least #A0A0A0 on your dark background, ideally lighter) and check headings too. Run the Lighthouse Accessibility audit in Chrome DevTools.

**4. Performance.** Run Lighthouse (DevTools → Lighthouse → Mobile). Your homepage loads several large PNG project images — serve them as WebP/AVIF and use Next.js `<Image>` for automatic lazy-loading and sizing. Target 90+ on Performance.

**5. Mobile.** Test the whole page on a real phone (or DevTools device mode). Check the hero animation, the services grid, the marquee testimonials/logos, and the contact form all behave.

**6. Duplicate content check.** The services list shows card "01 Digital Marketing" twice and the logo/testimonial marquees repeat — that's normal for an infinite-scroll marquee, but confirm it's a seamless loop and not an accidental duplicate render.

---

## 7. Priority Order (what to do first)

1. **Fix or replace the "0+" stats** — biggest credibility killer. (Sec 3a)
2. **Remove fake testimonials + relabel portfolio as concept work.** (Sec 3b, 4a)
3. **Fix the email domain mismatch.** (Sec 5a)
4. **Fix the blank-on-load animation.** (Sec 6.1)
5. **Add SEO/meta tags + favicon + OG image.** (Sec 1)
6. **Add privacy policy, consent checkbox, VAT, real/removed social links.** (Sec 5)
7. **Add the "How We Work" + founder's promise + final CTA sections.** (Sec 3b, 4b, 4c)
8. **Polish: contrast, image formats, mobile, test the form.** (Sec 6)

Do 1–4 today; they're fast and they're the ones costing you trust right now.
