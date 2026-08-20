import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { ScrollIndicator } from "./ScrollIndicator";

export function CinematicHero() {
  const containerRef = useRef(null);

  // Parallax / Mouse tracking setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Subtle transforms for foreground elements
  const x = useTransform(springX, [-1, 1], [-15, 15]);
  const y = useTransform(springY, [-1, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to center of screen (-1 to 1)
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[600px] flex items-center overflow-hidden"
    >
      <HeroBackground />

      {/* Foreground Content with parallax */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full h-full flex items-center">
        <motion.div style={{ x, y }} className="w-full">
          <HeroContent />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
