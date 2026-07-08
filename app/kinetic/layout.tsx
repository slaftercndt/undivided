import type { Metadata } from "next";

/**
 * STAGED, NOT PUBLISHED: this page is live at /kinetic for internal and
 * counsel review only — noindex, and no site navigation links to it.
 * After securities counsel signs off (see kinetic/web/INTEGRATION.md
 * pre-publish checklist), flip robots to index/follow and link it from
 * the main page.
 */
export const metadata: Metadata = {
  title: "Undivided Potential — a thesis",
  description:
    "A thesis on mutualized economics and the re-pricing of real-world assets. Thought leadership and general information only.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KineticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
