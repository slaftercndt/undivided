# Undivided

Marketing site for **Undivided** — a global firm at the intersection of culture
and economics. One undivided system.

Built with **Next.js (App Router) + TypeScript**, **Tailwind CSS**, and
**Framer Motion**. Single-page, anchor-navigated, editorial, and gravitas-first.
Domain: **[undivided.global](https://undivided.global)**.

---

## Local development

Requires **Node 20+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (must pass clean for Vercel)
npm run start   # serve the production build locally
npm run lint    # eslint (next/core-web-vitals)
```

> Fonts (Fraunces + Inter) are loaded via `next/font/google`, so the first
> `dev`/`build` fetches them once and caches them. That step needs network
> access.

---

## Project structure

```
app/
  layout.tsx            # fonts, SEO metadata, Open Graph, favicon
  page.tsx              # section assembly (single page)
  globals.css           # Tailwind layers + brand CSS variables
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
  api/contact/route.ts  # contact form handler (placeholder — see below)
components/             # Nav, Hero, Thesis, Approach, Team, Solutions,
                        # Capabilities, Connect, Footer, Reveal
lib/
  solutions.ts          # typed, data-driven Solutions (extensible)
  team.ts               # typed, data-driven Team bios
  nav.ts                # anchor nav — single source of truth
public/
  favicon.svg           # brand monogram favicon (placeholder)
  opengraph-image.svg   # 1200×630 OG image (placeholder)
```

### Editing content

- **Solutions** and **Team** are data-driven. Add an entry to the typed array
  in `lib/solutions.ts` or `lib/team.ts` and the grid reflows automatically —
  no layout changes needed.
- Placeholder copy is marked with `PLACEHOLDER` comments and lorem text; swap
  in final prose in place.
- Brand tokens live in `tailwind.config.ts` (`ink`, `gold`, `parchment`,
  `stone`) and are mirrored as CSS variables in `app/globals.css`.

---

## Contact form

The form (`components/Connect.tsx`) validates client-side and `POST`s JSON to
`/api/contact` via `fetch` (no full-page reload). The API route
(`app/api/contact/route.ts`) currently **validates, logs the inquiry, and
returns 200** — it does not send email yet.

### Wiring a real provider

Open `app/api/contact/route.ts` and follow the `TODO`. Two drop-in options are
documented inline:

**Resend** — set in Vercel → Project → Settings → Environment Variables:

| Variable             | Example                                          |
| -------------------- | ------------------------------------------------ |
| `RESEND_API_KEY`     | `re_...`                                         |
| `CONTACT_TO_EMAIL`   | `hello@undivided.global`                         |
| `CONTACT_FROM_EMAIL` | optional — defaults to `onboarding@resend.dev`   |

**Formspree** — set:

| Variable             | Example                                  |
| -------------------- | ---------------------------------------- |
| `FORMSPREE_ENDPOINT` | `https://formspree.io/f/xxxxxxx`         |

No environment variables are required to run the site locally with the
placeholder handler.

---

## Deploying to Vercel

The project is a standard Next.js App Router app and deploys with zero config.

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Framework preset auto-detects as **Next.js** — accept the defaults
   (`Build Command: next build`, `Output: .next`).
4. Add any contact-form environment variables (above) if you've wired a
   provider.
5. **Deploy.** Then add the custom domain `undivided.global` under
   Project → Settings → Domains.

Or via the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Accessibility & SEO

- Semantic landmarks (`header`/`main`/`footer`/`section`), labeled forms,
  keyboard-navigable, visible focus, `alt`/`aria` on non-text elements.
- Honors `prefers-reduced-motion` (Framer Motion + a CSS fallback).
- Metadata, Open Graph, and Twitter card tags in `app/layout.tsx`;
  `sitemap.xml` and `robots.txt` generated at build.

Replace `public/favicon.svg` and `public/opengraph-image.svg` with final brand
assets when available.
