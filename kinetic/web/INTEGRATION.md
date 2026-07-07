# Embedding the Kinetic thesis subpage on undivided.global

## Drop-in (matches the existing Claude Code build brief stack)
1. Copy `page.tsx` to `app/kinetic/page.tsx` in the Next.js repo
   (or `app/thesis/page.tsx` — route name is yours; naming is parked).
2. Fonts: the component uses `font-fraunces`, `font-cormorant`, `font-inter`
   utility classes. If the site brief's font setup used next/font with CSS
   variables, map them in tailwind.config:
   fontFamily: { fraunces: ['var(--font-fraunces)'], cormorant: ['var(--font-cormorant)'], inter: ['var(--font-inter)'] }
3. `framer-motion` must be installed (it's in the site brief stack): npm i framer-motion
4. The CTA links to `/contact` — point it at the site's real contact route.
5. Add metadata via a sibling `layout.tsx` or export const metadata for SEO
   (title: "Undivided Potential — a thesis"; keep description thought-leadership,
   not offering language).

## Pre-publish checklist (do not skip)
- [ ] Securities counsel review — page is deliberately thought leadership, not an offer.
      Keep it that way through all future edits: no terms, no return projections.
- [ ] Naming: page uses "Undivided Potential" (locked tagline). Entity name parked.
- [ ] Whitepaper is gated behind conversation, not a public download —
      this is intentional (qualification + relationship-first BD).
- [ ] Diagrams: flywheel.svg and five-surface.svg (in /diagrams) can be added
      as <Image> or inline SVG sections once reviewed.
