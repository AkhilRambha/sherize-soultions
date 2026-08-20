import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const words = "We Build What's Next.".split(" ");

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto pt-32 lg:pt-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center justify-center gap-2 glass rounded-full p-1 pr-4 text-xs text-white/80 uppercase tracking-[0.15em] font-medium backdrop-blur-md border border-white/10 shadow-sm">
            <span className="bg-white/10 text-white rounded-full p-1.5 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            Premium Digital Innovation
          </div>
        </motion.div>

        <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tighter text-white mb-6 overflow-hidden">
          {words.map((word, i) => (
            <motion.span key={i} variants={itemVariants} className="inline-block mr-3 lg:mr-4">
              {i >= 2 ? (
                <strong className="text-gradient font-bold drop-shadow-lg">{word}</strong>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed font-normal mx-auto"
        >
          From intelligent software to immersive digital experiences, Sherize transforms ideas into
          scalable technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/services"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-medium bg-white text-black transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.35)]"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-medium border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            Start a Project
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
