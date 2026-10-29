import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import logo from "@/assets/accura-logo.png";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why ACCURA" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
    toast.success("You're subscribed to the ACCURA insight briefing.");
  };

  return (
    <footer className="bg-maroon text-white/70">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" width={64} height={36} loading="lazy" className="h-10 w-16 object-contain" />
              <span>
                <span className="font-display block text-base tracking-[0.28em] text-white">
                  ACCURA
                </span>
                <span className="mt-1 block text-[0.55rem] tracking-[0.25em] text-white/50">
                  CONSULTANCY W.L.L
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Strategic, financial and management advisory for businesses building their next decade.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-gold text-xs tracking-[0.28em] uppercase">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="hover:text-gold text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-gold text-xs tracking-[0.28em] uppercase">Follow</h2>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#contact"
                  aria-label={s.label}
                  className="hover:border-gold hover:text-gold flex h-11 w-11 items-center justify-center border border-white/20 transition-colors"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.4} />
                </a>
              ))}
            </div>

            <a
              href="mailto:Info@accura-consultancy.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Info@accura-consultancy.com
            </a>
          </div>

          <div>
            <h2 className="font-display text-gold text-xs tracking-[0.28em] uppercase">Newsletter</h2>
            <p className="mt-5 text-sm">Quarterly insight on strategy, finance and growth.</p>
            <form onSubmit={subscribe} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="focus:border-gold h-12 w-full border border-white/20 bg-white/5 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/40"
              />
              <button
                type="submit"
                className="bg-gold text-maroon h-12 shrink-0 px-6 text-[0.7rem] font-semibold tracking-[0.2em] uppercase"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div
          className="mt-14 h-px w-full"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden="true"
        />

        <div className="mt-6 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ACCURA Consultancy W.L.L. All rights reserved.</p>
          <p className="tracking-[0.28em] text-white/40 uppercase">Insight • Strategy • Growth</p>
        </div>
      </div>
    </footer>
  );
}
