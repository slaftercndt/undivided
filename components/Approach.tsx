import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="section bg-ink text-parchment">
      <div className="container-editorial">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Approach</p>
            <hr className="rule-gold mt-6" />
            <h2 className="mt-8 font-serif text-4xl font-light leading-tight sm:text-5xl">
              The Strategic Operating Process
            </h2>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-parchment/75 md:col-span-6 md:col-start-7">
            <Reveal>
              <p>
                Our method connects{" "}
                <span className="text-parchment">
                  people, processes, and partners
                </span>{" "}
                — structuring an organization for performance and raising the
                probability of success rather than leaving it to chance.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                {/* PLACEHOLDER prose — swap freely. */}
                It is a discipline, not a template: a repeatable way to align
                what an organization believes, how it operates, and who it
                builds with, so that strategy survives contact with reality.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-parchment/60">
                In the lineage of a disciple of{" "}
                <span className="text-parchment/90">Mark Simon</span> — himself
                a protégé of{" "}
                <span className="text-parchment/90">Peter Drucker</span> and{" "}
                <span className="text-parchment/90">Tom Patterson</span>.
              </p>
            </Reveal>
          </div>
        </div>

        {/* quiet global-reach stat block */}
        <div className="mt-20 border-t border-parchment/15 pt-12">
          <div className="grid gap-10 sm:grid-cols-3">
            <Reveal>
              <p className="font-serif text-6xl font-light text-gold">550</p>
              <p className="mt-3 text-sm uppercase tracking-widest text-parchment/60">
                groups engaged
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-serif text-6xl font-light text-gold">40</p>
              <p className="mt-3 text-sm uppercase tracking-widest text-parchment/60">
                countries
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-serif text-6xl font-light text-gold">1</p>
              <p className="mt-3 text-sm uppercase tracking-widest text-parchment/60">
                undivided system
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
