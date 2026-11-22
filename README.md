# dagap.github.io

Freelance portfolio of Dr. Pankaj Daga, served at **https://dagap.github.io**.

Plain HTML/CSS/JS, no build step, no dependencies, **no third-party requests**
(no web fonts, analytics, CDNs or embeds). Edit and push; GitHub Pages serves
`index.html` from the `main` branch.

## Structure

```
index.html        → landing page (hero, services, work, projects, about, contact)
impressum.html    → Impressum (§ 5 DDG) — German legal notice
datenschutz.html  → Datenschutzerklärung (GDPR privacy policy)
style.css         → styling (dark/light themes)
main.js           → theme toggle, mobile menu, image fallbacks
favicon.svg       → "PD" monogram
og-image.png      → social preview (regenerate from tools/og-image.html)
assets/           → headshot, CV, project thumbnails (to be added)
```

## Before publishing

Run `tools/check-placeholders.sh`. It lists every `{{PLACEHOLDER}}` left and
fails while the legal pages are incomplete. Links on the main page whose href
still contains `{{…}}` are hidden automatically by CSS until filled in.

| Placeholder | Where | What |
|---|---|---|
| `{{EMAIL}}` | all pages | contact email (business address, not employer's) |
| `{{STRASSE_HAUSNUMMER}}`, `{{PLZ}}` | Impressum, Datenschutz | street address — mandatory, no P.O. box |
| `{{TELEFON}}` | Impressum | phone number (recommended second fast contact channel) |
| `{{UST_ID}}` | Impressum | VAT ID — delete the block if you have none |
| `{{EMAIL_ANBIETER}}` | Datenschutz | your email provider, e.g. "Posteo e.K., Berlin" |
| `{{LINKEDIN_URL}}` | index | LinkedIn profile (also add to JSON-LD `sameAs`) |
| `{{BOOKING_URL}}` | index | optional cal.com / Calendly link (link only — never embed the widget) |
| `{{CV_PDF}}` | index | e.g. `./assets/cv-pankaj-daga.pdf` |
| `{{GERMAN_LEVEL}}` | index (About, in a comment) | uncomment once decided |

## Assets to add

- `assets/headshot.webp` — square, ≥ 600×600 (initials avatar shows until then)
- `assets/projects/recalibench.webp`, `assets/projects/ledger.webp` — 16:9 screenshots
- `assets/cv-pankaj-daga.pdf`

## Adding a project

Copy the `PROJECT CARD TEMPLATE` comment block in `index.html`.

## Keeping it legally clean (Germany)

- Never add Google Fonts, analytics, YouTube/Maps/Calendly embeds, social
  widgets or CDN scripts without updating `datenschutz.html` and checking
  whether consent is needed (TDDDG § 25).
- Every page on this domain needs the Impressum/Datenschutz links — including
  sub-sites like `/trade-republic-pnl-ledger/` (separate repo).
- Only publish testimonials with the person's written permission.
