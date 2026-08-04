import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/accura-logo.png";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why ACCURA" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    let scrollY = 0;

    if (open) {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      if (open) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "border-b border-border/60 bg-white/80 shadow-[0_6px_30px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <nav className="container-luxe flex items-center justify-between py-4" aria-label="Main">
        <a href="#home" className="flex items-center gap-3" aria-label="ACCURA Consultancy home">
          <img src={logo} alt="ACCURA Consultancy logo" width={64} height={36} className="h-9 w-16 object-contain" />
          <span className="leading-none">
            <span
              className={`block font-display text-base tracking-[0.28em] transition-colors ${scrolled ? "text-primary" : "text-white"
                }`}
            >
              ACCURA
            </span>
            <span
              className={`mt-1 block text-[0.55rem] tracking-[0.25em] transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
            >
              CONSULTANCY W.L.L
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`group relative text-[0.78rem] font-medium tracking-[0.14em] uppercase transition-colors ${scrolled
                  ? active === link.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                  : active === link.id
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`bg-gold absolute -bottom-2 left-0 h-px w-full origin-left transition-transform duration-500 ease-out ${active === link.id ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${scrolled ? "border-border text-primary" : "border-white/30 text-white"
            }`}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="bg-burgundy-gradient fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 92% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full flex-col bg-maroon px-6 pt-6">
              <div className="flex items-center justify-between">
                <img src={logo} alt="" width={64} height={36} className="h-9 w-16 object-contain" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-14 flex flex-col gap-7">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.5 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl tracking-[0.16em] text-white"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pb-10">
                <span className="gold-rule mb-4 w-full" aria-hidden="true" />
                <p className="text-gold text-[0.6rem] tracking-[0.35em]">
                  INSIGHT • STRATEGY • GROWTH
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
