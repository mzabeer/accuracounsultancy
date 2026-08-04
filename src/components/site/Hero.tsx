import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/home.mp4";

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 5) % 96}%`,
  delay: `${(i % 7) * 1.4}s`,
  duration: `${9 + (i % 5) * 2}s`,
  size: i % 3 === 0 ? 3 : 2,
}));

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={heroImg}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover [animation:ken-burns_24s_ease-out_forwards] object-center"
        />
        <div className="absolute inset-0 bg-[oklch(0.163_0.066_15_/_0.62)]" />
        <div className="from-maroon/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="bg-gold absolute bottom-24 rounded-full opacity-0"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `float-particle ${p.duration} linear ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-luxe relative z-10 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Insight • Strategy • Growth
          </motion.p>

          <motion.h1
            className="mt-6 text-[2.15rem] leading-[1.12] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Building Businesses
            <br />
            With <span className="text-gold-gradient">Vision.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            We empower entrepreneurs, startups, SMEs, and enterprises through strategic consulting,
            financial planning, management advisory, and sustainable business growth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
          >
            <a
              href="#contact"
              className="bg-gold text-maroon inline-flex min-h-12 items-center justify-center px-8 text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--gold)]"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="hover:border-gold hover:text-gold inline-flex min-h-12 items-center justify-center border border-white/40 px-8 text-[0.75rem] font-semibold tracking-[0.2em] text-white uppercase transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 9, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2.4, repeat: Infinity } }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
