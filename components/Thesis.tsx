import { Reveal } from "./Reveal";

export function Thesis() {
  return (
    <section id="thesis" className="section">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">The Undivided Thesis</p>
          <hr className="rule-gold mt-6" />
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
              Treat culture and economics as separate, and you will
              underwrite the failure of both.
            </h2>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-ink/80 md:col-span-6 md:col-start-7">
            <Reveal>
              <p>
                {/* PLACEHOLDER prose — gravitas-first voice; swap freely. */}
                Economies do not float above the cultures that produce them,
                and cultures are not decorations on top of an economy. They are
                a single system, and when they are managed as two, the seam
                between them is where value quietly leaks away.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                The bridge is grand strategy: economic innovation deliberately
                aimed at cultural reformation. Not growth for its own sake, but
                growth that changes what a people believes is possible.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We work through a single lens — the{" "}
                <span className="text-ink">
                  philosophy, process, and practice of management
                </span>{" "}
                — that makes strategic governance legible and executable.
              </p>
            </Reveal>
          </div>
        </div>

        {/* the three managerial disciplines */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {[
            {
              title: "Governance",
              gloss: "Driving strategy",
              body: "Managing tomorrow, today — setting direction and the terms of success.",
            },
            {
              title: "Operations",
              gloss: "Managing today",
              body: "Managing today, today — turning direction into disciplined execution.",
            },
            {
              title: "Finance",
              gloss: "Funding the work",
              body: "Funding strategy and operations — the capital that makes both durable.",
            },
          ].map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08} className="bg-parchment">
              <div className="h-full p-8">
                <p className="eyebrow">{d.gloss}</p>
                <h3 className="mt-4 font-serif text-2xl font-normal text-ink">
                  {d.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-stone">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
