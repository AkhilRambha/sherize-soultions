import { Footer } from "./Footer";
import { Reveal } from "@/components/shared/Reveal";
import { motion } from "framer-motion";

export function PageShell({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Cinematic Curtain Overlay */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="fixed inset-0 z-[990] bg-background border-b border-white/5 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="relative min-h-screen flex flex-col"
      >
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </motion.div>
    </div>
  );
}

export function PageHero({ eyebrow, title, highlight, subtitle }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary uppercase tracking-[0.15em] font-medium border border-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tighter">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function CTASection({ eyebrow, title, highlight, text, actions }) {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="relative glass-strong rounded-[2rem] p-10 sm:p-16 text-center overflow-hidden">
            {eyebrow && (
              <span className="relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-primary font-medium">
                <span className="h-px w-8 bg-primary/50" /> {eyebrow}
              </span>
            )}
            <h2 className="relative mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tighter">
              {title} {highlight && <span className="text-gradient">{highlight}</span>}
            </h2>
            <p className="relative mt-5 text-muted-foreground max-w-2xl mx-auto">{text}</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">{actions}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
