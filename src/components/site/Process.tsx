import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./primitives";

const steps = [
  { name: "Discover", body: "We immerse in your business, data and market to establish the real baseline." },
  { name: "Analyze", body: "Financial and operational diagnostics identify where value is created or lost." },
  { name: "Strategize", body: "A prioritised plan with owners, timelines and measurable targets." },
  { name: "Execute", body: "Hands-on support through implementation, governance and course correction." },
  { name: "Grow", body: "Performance tracking and advisory that compounds results year over year." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-pad bg-secondary">
      <div className="container-luxe">
        <SectionHeading eyebrow="Our Process" title="Five deliberate stages, one outcome." align="center" />

        <div ref={ref} className="relative mt-16">
          <div className="bg-border absolute top-0 bottom-0 left-[7px] w-px lg:top-[7px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full" />
          <motion.div
            style={{ scaleY: scale }}
            className="bg-gold absolute top-0 bottom-0 left-[7px] w-px origin-top lg:hidden"
          />
          <motion.div
            style={{ scaleX: scale }}
            className="bg-gold absolute top-[7px] right-0 left-0 hidden h-px origin-left lg:block"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <li className="relative pl-10 lg:pt-10 lg:pl-0">
                  <span className="bg-secondary border-gold absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2 lg:top-0 lg:left-0" />
                  <p className="text-gold font-display text-xs tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-primary mt-2 text-lg">{s.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
