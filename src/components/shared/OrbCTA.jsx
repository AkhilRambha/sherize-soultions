import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Orb from "@/components/ui/Orb";

export function OrbCTA() {
  return (
    <section className="relative py-20 bg-background flex flex-col items-center text-center">
      <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Orb Container with everything inside */}
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full flex flex-col items-center justify-center p-6">
            {/* The Orb Background */}
            <div className="absolute inset-0 pointer-events-auto overflow-hidden rounded-full mask-image-radial">
              <Orb
                hoverIntensity={0.8}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
                backgroundColor="transparent"
              />
            </div>

            {/* Content inside Orb */}
            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none w-full h-full px-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tighter mb-4 leading-tight pointer-events-auto">
                Let's Build <span className="block text-gradient mt-1 text-3xl sm:text-4xl">Together</span>
              </h2>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold btn-glow shine shadow-2xl pointer-events-auto"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

