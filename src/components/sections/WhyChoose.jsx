import { useState, useEffect } from "react";
import { Wallet, UserCheck, Rocket, Cpu, Headphones, Workflow } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { dataService } from "@/services/dataService";

const iconsMap = [Wallet, UserCheck, Rocket, Cpu, Headphones, Workflow];

export function WhyChoose() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = () => setItems(dataService.getWhyChoose());
    loadData();

    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);

  return (
    <section id="services" className="relative pt-10 pb-20 sm:pt-12 sm:pb-24 overflow-visible">
      <div className="w-full max-w-[1280px] mx-auto px-6 max-w-5xl">
        <Reveal className="text-center mb-24">
          <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
            <span className="h-px w-12 bg-primary/50" />
            Why choose Sherize
            <span className="h-px w-12 bg-primary/50" />
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tighter leading-[1.05]">
            Crafted for ambitious teams <br className="hidden md:block" />
            who want <span className="text-gradient">more than vendors</span>.
          </h2>
        </Reveal>

        {/* Sticky Stacking Cards Container */}
        <div className="flex flex-col relative pb-16">
          {items.map((it, i) => {
            const Icon = iconsMap[i % iconsMap.length];
            return (
              <div
                key={it.title}
                className="sticky w-full mb-12 sm:mb-24 last:mb-0"
                style={{
                  top: `calc(15vh + ${i * 1.5}rem)`,
                  zIndex: i + 1,
                }}
              >
                <article
                  className="w-full glass-strong rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row gap-8 items-center bg-background/95 backdrop-blur-3xl transition-transform duration-500 hover:-translate-y-2 origin-top"
                  style={{
                    transform: `scale(${1 - (items.length - 1 - i) * 0.01})`,
                  }}
                >
                  <div className="shrink-0">
                    <span className="grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-[1.5rem] bg-gradient-to-br from-primary/20 to-violet/20 text-primary border border-white/5 shadow-inner">
                      <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
                    </span>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-px w-6 bg-primary/50" />0{i + 1}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-display font-semibold text-white mb-4">
                      {it.title}
                    </h3>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
                      {it.desc}
                    </p>
                  </div>

                  {/* Subtle top shine */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
