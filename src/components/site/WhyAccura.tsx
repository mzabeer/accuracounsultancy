import { Reveal, SectionHeading } from "./primitives";

const reasons = [
  {
    title: "Experienced Consultants",
    body: "Senior practitioners with cross-border commercial, financial and regulatory experience.",
  },
  {
    title: "Tailored Business Strategies",
    body: "No recycled frameworks — every strategy is modelled on your data and market position.",
  },
  {
    title: "Long-Term Growth",
    body: "We optimise for durable performance, not short-lived gains that erode value later.",
  },
  {
    title: "Professional Excellence",
    body: "Disciplined delivery, clear documentation and accountability at every milestone.",
  },
  {
    title: "Confidential Advisory",
    body: "Strict discretion protocols protect your commercial and personal information.",
  },
  {
    title: "Result-Driven Approach",
    body: "Defined KPIs from day one so progress is visible, measurable and defensible.",
  },
];

export function WhyAccura() {
  return (
    <section
      id="why"
      className="section-pad relative overflow-hidden bg-[#230005]"
    >
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Why ACCURA"
          title="The standards behind every engagement."
          invert
        />

        <ol className="border-gold/25 mt-14 space-y-10 border-l pl-7 sm:pl-10">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <li className="relative">
                <span className="bg-gold ring-maroon absolute top-2 -left-[2.05rem] h-2 w-2 rounded-full ring-4 sm:-left-[2.8rem]" />
                <div className="grid gap-2 md:grid-cols-[9rem_1fr] md:items-baseline md:gap-8">
                  <span className="text-gold/70 font-display text-sm tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg text-white">{r.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">{r.body}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
