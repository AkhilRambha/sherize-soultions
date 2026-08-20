import { motion } from "framer-motion";
import { MouseIcon } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
      onClick={() => {
        const nextSection = document.getElementById("home")?.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <MouseIcon className="h-5 w-5" strokeWidth={1.5} />
      </motion.div>
      <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to explore</span>
    </motion.div>
  );
}
