import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/accura-logo.png";

const LETTERS = "ACCURA".split("");
const KEY = "accura-intro-seen";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) {
      onDone();
      return;
    }
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, 3000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="intro"
          className="bg-burgundy-gradient fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Loading ACCURA Consultancy"
          role="status"
        >
          <motion.img
            src={logo}
            alt=""
            width={224}
            height={80}
            className="h-20 w-56 sm:h-28 sm:w-72 object-contain"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <p className="mt-8 flex text-4xl tracking-[0.28em] sm:text-6xl font-display" aria-label="ACCURA">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={letter + i}
                className="shimmer-text inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </p>

          <motion.p
            className="mt-3 font-display text-xs tracking-[0.4em] text-white/80 sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            CONSULTANCY W.L.L
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.05 }}
          >
            <span className="gold-rule w-8" aria-hidden="true" />
            <p className="text-gold text-[0.6rem] tracking-[0.35em] sm:text-[0.7rem]">
              INSIGHT • STRATEGY • GROWTH
            </p>
            <span className="gold-rule w-8" aria-hidden="true" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
