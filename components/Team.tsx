import { Reveal } from "./Reveal";
import { team } from "@/lib/team";

/** Derive initials for the quiet monogram placeholder. */
function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const chars = parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
  return chars.toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="section">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Team</p>
          <hr className="rule-gold mt-6" />
          <h2 className="mt-8 max-w-3xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
            A founder-led firm — with a team behind the thesis.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-sm border border-ink/10 bg-white/40 p-8">
                <div
                  aria-hidden
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 font-serif text-lg text-gold"
                >
                  {initials(member.name)}
                </div>
                <h3 className="mt-6 font-serif text-2xl font-normal text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-gold">
                  {member.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-stone">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
