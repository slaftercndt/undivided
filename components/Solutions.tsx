import { Reveal } from "./Reveal";
import { solutions } from "@/lib/solutions";

export function Solutions() {
  return (
    <section id="solutions" className="section bg-ink text-parchment">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <hr className="rule-gold mt-6" />
          <h2 className="mt-8 max-w-3xl font-serif text-4xl font-light leading-tight sm:text-5xl">
            Not a portfolio. A set of systems, each solving a problem worth
            solving.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal as="li" key={solution.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-sm border border-parchment/15 bg-parchment/[0.03] p-8 transition-colors hover:border-gold/50">
                <p className="text-xs uppercase tracking-widest2 text-gold">
                  {solution.category}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-normal text-parchment">
                  {solution.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-parchment/70">
                  {solution.description}
                </p>

                {solution.standing && (
                  <p className="mt-6 text-sm text-parchment/50">
                    {solution.standing}
                  </p>
                )}

                {solution.href && (
                  <a
                    href={solution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-gold transition-opacity hover:opacity-70"
                  >
                    Visit
                    <span aria-hidden>↗</span>
                    <span className="sr-only">{solution.name} (opens in a new tab)</span>
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-12 max-w-2xl text-base italic text-parchment/50">
            Including but not limited to the above — Hamara, GCN,
            PartnersWorldwide, BSH, KCA, and future solutions join as the work
            grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
