"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 sm:px-8"
    >
      {/* faint editorial backdrop — a single hairline, nothing decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[70vh] w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      </div>

      <div className="container-editorial relative">
        <motion.p {...rise(0.05)} className="eyebrow">
          A global firm
        </motion.p>

        <motion.h1
          {...rise(0.15)}
          className="mt-6 font-serif text-6xl font-light leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          Undivided<span className="text-gold">.</span>
        </motion.h1>

        <motion.p
          {...rise(0.3)}
          className="mt-8 max-w-2xl font-serif text-2xl font-light leading-snug text-ink/80 sm:text-3xl"
        >
          Culture and economics are not two domains to balance. They are one
          undivided system — and we build at the seam.
        </motion.p>

        <motion.div
          {...rise(0.45)}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#connect"
            className="group inline-flex items-center gap-3 border-b border-gold pb-1 font-sans text-base text-ink transition-colors hover:text-gold"
          >
            Begin a conversation
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#thesis"
            className="font-sans text-base text-stone transition-colors hover:text-ink"
          >
            Read the thesis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
