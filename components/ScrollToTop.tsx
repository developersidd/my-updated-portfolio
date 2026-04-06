"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(function toggleScrollButtonVisibility() {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true }); // passive means we won't call preventDefault in the scroll handler, improving performance 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 group"
        >
          {/* Glow ring */}
          {/*<span className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md scale-110 group-hover:bg-emerald-400/35 transition-colors duration-300" />*/}

          {/* Button body */}
          <span className="relative flex items-center justify-center size-12 md:size-14  rounded-full bg-emerald-500  transition-colors duration-300">
            {/* Animated arrow */}
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="flex"
            >
              <ArrowUp className="size-5 md:size-7  text-white" strokeWidth={2} />
            </motion.span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
