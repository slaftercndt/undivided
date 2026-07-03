import { Reveal } from "./Reveal";
import { principal, partners, advisors } from "@/lib/team";

export function Team() {
  return (
    <section id="team" className="section">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">The Approach</p>
          <hr className="rule-gold mt-6" />
          <h2 className="mt-8 max-w-3xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
            Your organization is the hero. We are the guide.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
            You carry the calling; we have walked the road. At the seam of
            culture and economics, we bring the systems that let economic
            innovation carry cultural weight — so the communities you serve
            flourish.
          </p>
        </Reveal>

        {/* Founder — same row structure and scale as every partner */}
        <Reveal>
          <div className="mt-16 grid gap-3 border-t border-ink/15 py-7 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-serif text-2xl font-light text-ink">
                {principal.name}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-widest2 text-gold">
                {principal.role}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base font-medium text-ink">
                {principal.mandate}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                {principal.bio}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Partners — ruled rows: named principals who carry the work */}
        <Reveal>
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/15 pt-10">
            <h3 className="font-serif text-2xl font-light text-ink">
              Partners
            </h3>
            <p className="text-sm text-stone">
              Named principals who carry the work.
            </p>
          </div>
        </Reveal>
        <ul className="mt-4">
          {partners.map((partner, i) => (
            <Reveal as="li" key={partner.name} delay={i * 0.06}>
              <div className="grid gap-3 border-t border-ink/10 py-7 md:grid-cols-12 md:gap-8">
                <h4 className="font-serif text-2xl font-light text-ink md:col-span-4">
                  {partner.name}
                </h4>
                <p className="text-base leading-relaxed text-ink/70 md:col-span-7 md:col-start-6">
                  {partner.line}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Advisors & Collaborators — the bench, rendered as a roster */}
        <Reveal>
          <div className="mt-12 border-t border-ink/15 pt-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-serif text-2xl font-light text-ink">
                Advisors &amp; Collaborators
              </h3>
              <p className="text-sm text-stone">
                Chosen for domain command, engaged by mandate.
              </p>
            </div>
            <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {advisors.map((advisor, i) => (
                <li
                  key={`${advisor.name}-${i}`}
                  className="border-t border-ink/10 pt-4"
                >
                  <p className="font-sans text-base font-medium text-ink">
                    {advisor.name}
                  </p>
                  <p className="mt-1 text-sm text-stone">{advisor.domain}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
