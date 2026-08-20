import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg1 from "@/assets/hero/background-image1.avif";
import bg2 from "@/assets/hero/background-image2.avif";
import bg3 from "@/assets/hero/background-image3.avif";

const BACKGROUNDS = [bg1, bg2, bg3, bg1];

const INTERVAL_MS = 7500; // 7.5s per scene (30s loop for 4 scenes)

export function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      {/* Image Crossfade & Cinematic Scale */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: INTERVAL_MS / 1000, ease: "linear" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={BACKGROUNDS[index]}
            alt="Cinematic Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Sophisticated Dark Overlay & Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Cinematic Light Sweep */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 12,
          ease: "linear",
        }}
        className="absolute top-0 bottom-0 w-1/3 bg-white/5 blur-[100px] rounded-full pointer-events-none"
        style={{ skewX: "-20deg" }}
      />
    </div>
  );
}
