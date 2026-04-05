"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  title: string;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, title, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent(
        (prev) => (prev + newDirection + images.length) % images.length,
      );
    },
    [images.length],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [paginate, onClose]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
      scale: 0.92,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <RemoveScrollBar />
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-sm font-medium backdrop-blur-sm">
        {current + 1} / {images.length}
      </div>

      {/* Main image area */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-16 md:px-24">
        {/* Prev */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 md:left-6 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-emerald-500/30 border border-white/20 hover:border-emerald-500/50 text-white transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Image with slide animation */}
        <div className="relative w-full max-w-7xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              animate="center"
              initial="enter"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                //fill // 
                className="object-fill h-full"
                referrerPolicy="no-referrer"
                priority
                width={1600}
                height={1200}
              />
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.3)] pointer-events-none rounded-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 md:right-6 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-emerald-500/30 border border-white/20 hover:border-emerald-500/50 text-white transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current
                ? "border-emerald-400 scale-110 shadow-lg shadow-emerald-500/30"
                : "border-white/20 opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={img}
              alt={`thumb ${i + 1}`}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
export default Lightbox;
