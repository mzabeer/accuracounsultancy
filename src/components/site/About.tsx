import { Counter, Reveal, SectionHeading } from "./primitives";
import aboutImg from "@/assets/about-team.jpeg";

const pillars = [
  {
    title: "Our Mission",
    body: "To deliver precise, actionable advisory that turns ambition into measurable commercial performance for every client we serve.",
  },
  {
    title: "Our Vision",
    body: "To be the region's most trusted consultancy for businesses building durable, well-governed and profitable enterprises.",
  },
  {
    title: "Our Values",
    body: "Integrity, discretion, analytical rigour and long-term partnership guide every mandate we accept.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Clients" },
  { value: 100, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Industries" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="border-gold/40 absolute -top-5 -left-5 hidden h-32 w-32 border-t border-l sm:block" />
          <img
            src={aboutImg}
            alt="ACCURA consultants reviewing a client strategy document"
            width={1200}
            height={1504}
            loading="lazy"
            className="shadow-[var(--shadow-luxe)] relative aspect-4/5 w-full object-cover"
          />
          <div className="bg-burgundy-gradient absolute -right-3 -bottom-6 hidden px-7 py-5 sm:block">
            <p className="font-display text-gold text-2xl">15+</p>
            <p className="mt-1 text-[0.6rem] tracking-[0.25em] text-white/70 uppercase">
              Years combined
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A consultancy built on precision and discretion."
            intro="ACCURA Consultancy W.L.L. advises founders, family businesses and enterprises on the decisions that define their next decade — from formation and financial structure to governance and growth."
          />

          <div className="mt-10 space-y-7">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="border-border/70 hover:border-gold/60 border-l-2 pl-5 transition-colors">
                  <h3 className="text-primary text-lg">{p.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="container-luxe mt-20 md:mt-28">
        <div className="border-border/70 grid grid-cols-2 gap-y-10 border-y py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="text-primary font-display text-4xl sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-muted-foreground mt-3 text-[0.65rem] tracking-[0.25em] uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
