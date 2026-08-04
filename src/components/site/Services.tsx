import {
  ArrowRight,
  Briefcase,
  Calculator,
  ShieldAlert,
  Layers,
} from "lucide-react";
import businessConsultingImage from "@/assets/businessconsulting.png";
import financialAdvisoryImage from "@/assets/financialadvisory.png";
import corporateServicesImage from "@/assets/corporateservicce.png";
import riskManagementImage from "@/assets/riskmanagement.png";
import { Reveal, SectionHeading } from "./primitives";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    body: "Strategic business guidance to improve performance, optimize operations and accelerate growth.",
    image: businessConsultingImage,
  },
  {
    icon: Calculator,
    title: "Financial Advisory",
    body: "Expert financial planning and advisory solutions tailored for sustainable business success.",
    image: financialAdvisoryImage,
  },
  {
    icon: Layers,
    title: "Corporate Services",
    body: "Professional support for company formation, compliance management and governance.",
    image: corporateServicesImage,
  },
  {
    icon: ShieldAlert,
    title: "Risk Management",
    body: "Comprehensive risk assessment and mitigation strategies to protect your organization.",
    image: riskManagementImage,
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-secondary">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Do"
          title="Advisory services engineered for measurable outcomes."
          intro="Every engagement is scoped around your commercial reality — not a template."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07}>
              <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#200406] shadow-[0_30px_80px_-45px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_-45px_rgba(0,0,0,0.6)]">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#200406]/55 transition duration-500 group-hover:bg-[#200406]/60" />
                <div className="relative flex min-h-[24rem] flex-col justify-end gap-6 p-7 sm:min-h-[26rem]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#200406]/30 text-gold shadow-[0_16px_45px_-25px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-white">{s.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-100/85">{s.body}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
