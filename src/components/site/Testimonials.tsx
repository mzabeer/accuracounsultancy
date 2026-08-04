import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "./primitives";

const testimonials = [
  {
    quote:
      "ACCURA restructured our financial reporting and gave us the clarity to enter two new markets with confidence. Their discretion and rigour are exceptional.",
    name: "Mariam Al Sayed",
    role: "Managing Director, Regional Retail Group",
  },
  {
    quote:
      "From incorporation to our first funding round, they were the calm, precise partner we needed. Every recommendation was backed by evidence.",
    name: "Hassan Rahim",
    role: "Founder, Technology Startup",
  },
  {
    quote:
      "Our margins improved within two quarters. What impressed us most was how deeply they understood the operational detail of our business.",
    name: "Daniel Fernandes",
    role: "CEO, Construction & Contracting",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  const active = testimonials[index]!;
  const isHassanTestimonial = active.name === "Hassan Rahim";

  return (
    <section className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#fffdf8_0%,#fff8eb_100%)]">
      <div className="container-luxe relative">
        <SectionHeading eyebrow="Client Voices" title="Trusted by ambitious leadership teams." align="center" />

        <div className="relative mx-auto mt-14 min-h-64 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`p-8 sm:p-12 ${isHassanTestimonial
                ? "border border-white/70 bg-white/55 backdrop-blur-xl shadow-[0_30px_80px_-46px_rgba(74,14,26,0.35)]"
                : "border-gold/15 bg-white shadow-[0_28px_70px_-44px_rgba(74,14,26,0.35)]"
                }`}
            >
              <Quote className="text-gold/70 h-9 w-9" strokeWidth={1} />
              <blockquote className="text-primary font-display mt-6 text-lg leading-relaxed sm:text-xl">
                {active.quote}
              </blockquote>
              <figcaption className="mt-8">
                <span className="gold-rule mb-4" aria-hidden="true" />
                <p className="text-primary text-sm">{active.name}</p>
                <p className="text-muted-foreground mt-1 text-xs tracking-[0.16em] uppercase">{active.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "bg-gold w-10" : "bg-primary/20 w-4"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
