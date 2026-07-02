import { Reveal } from "./Reveal";

const capabilities = [
  {
    name: "Avodah Family Office",
    role: "Holding & stewardship",
    body: "The holding and stewardship layer — where ownership is held with intent and capital is stewarded for the long horizon.",
  },
  {
    name: "Avodah.cloud",
    role: "The AI edge",
    body: "Agentic AI and NAM processing powering the firm's work — the technical leverage beneath the strategy.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Capabilities — Avodah</p>
          <hr className="rule-gold mt-6" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            Beneath the firm sits quiet infrastructure. Avodah is not a second
            brand — it is the platform that gives Undivided reach and leverage.
          </p>
        </Reveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.name} delay={i * 0.08} className="bg-parchment">
              <div className="h-full p-8">
                <dt>
                  <span className="text-xs uppercase tracking-widest2 text-gold">
                    {cap.role}
                  </span>
                  <span className="mt-3 block font-serif text-xl font-normal text-ink">
                    {cap.name}
                  </span>
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-stone">
                  {cap.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
