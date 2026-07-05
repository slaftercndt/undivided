import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Begin a conversation",
    body: "Tell us who you are and what you carry. We listen for the whole system — culture and economics together.",
  },
  {
    number: "02",
    title: "Design the strategy",
    body: "Through the Strategic Operating Process, we connect people, processes, and partners into one executable plan.",
  },
  {
    number: "03",
    title: "Watch communities flourish",
    body: "Economic innovation begins to carry cultural weight — and the communities you serve flourish.",
  },
];

export function Plan() {
  return (
    <section id="plan" className="border-y border-ink/10 px-6 py-20 sm:px-8">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">The Plan</p>
          <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
            The road is walked in three steps.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.08}>
              <p className="font-serif text-4xl font-light text-gold">
                {step.number}
              </p>
              <h3 className="mt-4 font-serif text-xl font-normal text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <a
            href="#connect"
            className="group mt-12 inline-flex items-center gap-3 border-b border-gold pb-1 font-sans text-base text-ink transition-colors hover:text-gold"
          >
            Take the first step
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
