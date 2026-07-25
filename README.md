# Hyve Energy — Public Website

Marketing site for Hyve Energy, built as a fully static export so it can be
hosted for free on Cloudflare Pages (or any static host / CDN).

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Geist Sans / Geist Mono (via the `geist` package)

## Project structure

```
src/
  app/                 Routes (one folder per page) + layout, sitemap, robots
    capabilities/
    industries/
    technology/
    about/
    contact/
  components/          Reusable UI: Navbar, Footer, cards, diagrams, form, etc.
  lib/
    site.ts            All copy/content: nav, capabilities, industries, process, values
public/
  favicon.svg
```

Content lives in `src/lib/site.ts` — edit copy for capabilities, industries,
process steps, and "why Hyve" there without touching component code.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build (static export)

```bash
npm run build
```

This outputs a fully static site to `out/`. `next.config.ts` sets
`output: "export"` and `images.unoptimized: true`, which are required for a
static export (there is no Node.js server at runtime).

You can preview the exported build locally with any static file server, e.g.:

```bash
npx serve out
```

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo, then set:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Framework preset:** Next.js (Static HTML Export) — or leave as "None"
     since the build command already produces static files.
4. Deploy. Cloudflare will rebuild automatically on every push.
5. Under **Custom domains**, attach your existing Cloudflare-purchased domain.

### Option B — Direct upload (no Git)

```bash
npm run build
npx wrangler pages deploy out --project-name=hyve-energy
```

(Requires `npx wrangler login` once, or a `CLOUDFLARE_API_TOKEN` in your
environment.)

## Contact form

Because this is a static export, there is no server to receive form
submissions. `src/components/ContactForm.tsx` currently builds a pre-filled
`mailto:` link on submit so inquiries reach `sales@hyveenergy.co` without any
backend.

For a fully hosted submission flow, either:

- Add a [Cloudflare Pages Function](https://developers.cloudflare.com/pages/functions/)
  under `functions/api/contact.ts` that emails or stores submissions (Pages
  Functions deploy alongside static output and don't require `output: "export"`
  changes), or
- Point the form at a hosted form backend (e.g. Formspree, Basin) by changing
  the `onSubmit` handler to a `fetch()` POST.

## SEO

- Per-page `metadata` exports (title, description) in each `page.tsx`
- Open Graph + Twitter card metadata in `src/app/layout.tsx`
- JSON-LD `Organization` schema in the root layout
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` /
  `robots.txt` at build time
- `public/favicon.svg`

Update `src/lib/site.ts` → `site.url` once the production domain is finalized
so canonical URLs and the sitemap are correct.

## Accessibility & performance notes

- Visible focus states on all interactive elements
- `prefers-reduced-motion` respected (Framer Motion + CSS)
- Skip-to-content link
- Static export + minimal client JS keeps Lighthouse performance high;
  re-run Lighthouse after adding real imagery/fonts to confirm the 95+ target
  once production content (photos, real map embed) is added.
