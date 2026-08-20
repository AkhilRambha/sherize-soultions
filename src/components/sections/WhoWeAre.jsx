import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1600;
            const tick = (t) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * to));
              if (p < 1) {
                rafId = requestAnimationFrame(tick);
              }
            };
            rafId = requestAnimationFrame(tick);
          } else {
            // Reset the counter and cancel animation when out of view
            cancelAnimationFrame(rafId);
            setN(0);
          }
        });
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

import { dataService } from "@/services/dataService";

export function WhoWeAre() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Load stats from data service
    const loadStats = () => setStats(dataService.getStats());
    loadStats();
    
    // Listen for custom event in case admin updates it in another tab or same window
    window.addEventListener("sherize_data_updated", loadStats);
    return () => window.removeEventListener("sherize_data_updated", loadStats);
  }, []);

  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-12 bg-primary/50" />
            Who we are
            <span className="h-px w-12 bg-primary/50" />
          </span>

          <h2 className="mt-8 text-5xl sm:text-7xl lg:text-[4rem] font-display font-semibold tracking-tighter leading-[0.95]">
            Technology with a <br className="hidden md:block" />
            <span className="text-gradient">human heartbeat.</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
            <span className="text-foreground font-normal">Sherize Solutions Private Limited</span>{" "}
            combines technology and human support services to help businesses scale efficiently
            while creating flexible earning opportunities for women worldwide.
          </p>
        </Reveal>

        <div className="mt-20 max-w-6xl mx-auto border-t border-white/10 pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-6 text-center">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div>
                  <div className="text-5xl sm:text-6xl font-display font-semibold text-foreground">
                    <Counter to={stat.v} suffix={stat.s} />
                  </div>
                  <div className="mt-4 text-sm sm:text-base uppercase tracking-widest font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
