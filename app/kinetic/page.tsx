// app/kinetic/page.tsx
// Undivided · Kinetic — thesis subpage for undivided.global
// Stack: Next.js App Router + TypeScript + Tailwind + Framer Motion
// Design system: ink #1C2224 · gold #B38E3D · parchment #F5F1E8 · Fraunces/Cormorant + Inter
//
// IMPORTANT (pre-publish): this page is THOUGHT LEADERSHIP, not an offer.
// No fund terms, no projected returns, no solicitation language. Have securities
// counsel review before shipping. Naming is working-title; tagline is locked.

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stories = [
  {
    stage: "Potential",
    title: "Releasing trapped value",
    body: "Real-world assets — real estate, energy, logistics, agriculture, infrastructure — are among the largest asset classes on earth, and much of their value is stuck. Not because the assets are unsound, but because their administrative reality cannot be continuously proven. Ownership records are incomplete, encumbrances unclear, rights entangled with obligations. The asset is sound; the paperwork is the liability. Markets respond by pricing that uncertainty into every credit spread and every illiquidity discount. That stuck value is potential energy — stored, waiting, doing no work.",
  },
  {
    stage: "The conversion",
    title: "Risk removed through proof",
    body: "When a single computable event projects atomically onto five surfaces at once — legal, identity, accounting, payment, and risk — state becomes continuously provable. Audit once, prove many. The information asymmetry that forced premiums into pricing has nothing left to price, and the asset re-prices as the asymmetry closes. The spread between administratively opaque and continuously provable is the return: structural, not speculative, and uncorrelated to conventional market beta.",
  },
  {
    stage: "Kinetic",
    title: "Three layers made one",
    body: "A single re-rating is a trade; a machine that produces re-ratings repeatedly is a strategy. The machine is the integration of three layers into one flow: a substrate that makes assets computable, a capital stack deployed natively through it, and an origination engine that keeps assets moving into the system. Value in continuous motion — potential made kinetic, and sustained.",
  },
];

const onramps = [
  {
    reader: "Family offices & allocators",
    door: "Enter at the asset",
    body: "A non-correlated, income-producing real-world-asset thesis — debt-free, trust-held, asset-backed, underwritten on a discounted-cash-flow basis.",
  },
  {
    reader: "Institutional & growth capital",
    door: "Enter at the engine",
    body: "An origination platform that scales like structured finance — velocity-driven economics with a conventional institutional path.",
  },
  {
    reader: "Sovereign & development mandates",
    door: "Enter at the society",
    body: "The same substrate underwriting productive-economy formation at national scale, with returns tied to real economic activity.",
  },
];

export default function KineticPage() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C2224]">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[88vh] flex flex-col justify-center px-6 md:px-16 lg:px-28">
        <motion.p
          {...fadeUp}
          className="font-inter text-xs md:text-sm tracking-[0.35em] uppercase text-[#B38E3D] mb-6"
        >
          Undivided · A thesis
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="font-fraunces text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          Undivided <span className="italic text-[#B38E3D]">Potential</span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="font-inter mt-8 text-lg md:text-xl text-[#1C2224]/75 max-w-2xl leading-relaxed"
        >
          The world&apos;s most valuable assets are not underperforming — they are
          under-proven. When proof becomes continuous, trapped value converts to
          motion. This is a thesis on mutualized economics and the re-pricing of
          real-world assets.
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="mt-10 h-px w-24 bg-[#B38E3D]"
        />
      </section>

      {/* ---------- THE SPINE ---------- */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-32">
        <motion.blockquote
          {...fadeUp}
          className="font-cormorant text-2xl md:text-4xl leading-snug max-w-4xl italic border-l-2 border-[#B38E3D] pl-8"
        >
          When the administrative reality of a real-world asset is made
          continuous, verifiable, and computable, the information asymmetry that
          forces credit-risk and illiquidity premiums into pricing collapses. As
          the asymmetry closes, the asset re-prices — and that spread is the
          return.
        </motion.blockquote>
      </section>

      {/* ---------- THREE STORIES ---------- */}
      <section className="px-6 md:px-16 lg:px-28 pb-24 md:pb-32">
        <div className="grid gap-16 md:gap-24">
          {stories.map((s, i) => (
            <motion.article
              key={s.stage}
              {...fadeUp}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-14 items-start"
            >
              <div>
                <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#B38E3D]">
                  {String(i + 1).padStart(2, "0")} · {s.stage}
                </p>
              </div>
              <div>
                <h2 className="font-fraunces text-3xl md:text-4xl mb-5">
                  {s.title}
                </h2>
                <p className="font-inter text-base md:text-lg leading-relaxed text-[#1C2224]/80 max-w-3xl">
                  {s.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---------- INK BAND: THE INTEGRATION ---------- */}
      <section className="bg-[#1C2224] text-[#F5F1E8] px-6 md:px-16 lg:px-28 py-24 md:py-32">
        <motion.p
          {...fadeUp}
          className="font-inter text-xs tracking-[0.35em] uppercase text-[#B38E3D] mb-6"
        >
          The seam
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="font-fraunces text-4xl md:text-6xl max-w-4xl leading-[1.1]"
        >
          The innovation is the integration.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="font-inter mt-8 text-lg leading-relaxed text-[#F5F1E8]/70 max-w-3xl"
        >
          Substrate technology that makes assets provable. A capital stack
          deployed natively through it. An origination engine that keeps value
          moving into the system. Any one of these exists somewhere; the seam
          where all three meet is where Undivided operates — as strategist and
          practitioner of a framework whose substrate belongs to its authors,
          cited throughout our work.
        </motion.p>
      </section>

      {/* ---------- ON-RAMPS ---------- */}
      <section className="px-6 md:px-16 lg:px-28 py-24 md:py-32">
        <motion.h2 {...fadeUp} className="font-fraunces text-4xl md:text-5xl mb-4">
          One arc, three doors
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="font-inter text-lg text-[#1C2224]/70 max-w-2xl mb-16"
        >
          The thesis converges regardless of where you enter. Choose the lens
          that fits your mandate.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {onramps.map((o) => (
            <motion.div
              key={o.reader}
              {...fadeUp}
              className="border border-[#1C2224]/15 p-8 flex flex-col gap-4 hover:border-[#B38E3D] transition-colors duration-300"
            >
              <p className="font-inter text-xs tracking-[0.25em] uppercase text-[#B38E3D]">
                {o.door}
              </p>
              <h3 className="font-fraunces text-2xl">{o.reader}</h3>
              <p className="font-inter text-sm leading-relaxed text-[#1C2224]/75">
                {o.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- CTA — conversation, never solicitation ---------- */}
      <section className="px-6 md:px-16 lg:px-28 pb-24 md:pb-32">
        <motion.div
          {...fadeUp}
          className="border-t border-[#B38E3D]/40 pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <h2 className="font-fraunces text-3xl md:text-4xl max-w-xl leading-tight">
              The full whitepaper and framework are available in conversation.
            </h2>
          </div>
          <Link
            href="/#connect"
            className="font-inter inline-block border border-[#1C2224] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#1C2224] hover:text-[#F5F1E8] transition-colors duration-300 self-start md:self-auto"
          >
            Begin a conversation
          </Link>
        </motion.div>
      </section>

      {/* ---------- FOOTNOTE / DISCLAIMER ---------- */}
      <footer className="px-6 md:px-16 lg:px-28 pb-16">
        <p className="font-inter text-xs leading-relaxed text-[#1C2224]/50 max-w-4xl">
          This page is thought leadership and general information only. It is
          not an offer to sell, or a solicitation of an offer to buy, any
          security, and nothing herein constitutes investment, legal, or tax
          advice. Framework substrate — including mutualized asset structures,
          synchronized accounting, and token architectures — is the intellectual
          property of its authors, including Scott Nelson, Michael Hiles, and
          the Conduit Network, and is cited, not claimed. Undivided&apos;s
          contribution is the strategy, synthesis, and integration.
        </p>
      </footer>
    </main>
  );
}
