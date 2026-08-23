import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  PhoneCall,
  Headphones,
} from "lucide-react";
import { PageShell, CTASection } from "@/components/layout/PageShell";
import { Reveal } from "@/components/shared/Reveal";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BackButton } from "@/components/layout/BackButton";
import servicesHeroBg from "@/assets/images/services_hero_bg.jpg";
import { dataService } from "@/services/dataService";
import { useState, useEffect } from "react";

const iconsMap = [Globe, Code2, Smartphone, Palette, Megaphone, PhoneCall, Headphones];

function SectionDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = () => setServices(dataService.getServices());
    loadServices();

    window.addEventListener("sherize_data_updated", loadServices);
    return () => window.removeEventListener("sherize_data_updated", loadServices);
  }, []);

  return (
    <PageShell>
      <BackButton />

      {/* Massive Cinematic Hero */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="Digital Services"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-pan"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>
        <div className="w-full max-w-[1280px] mx-auto px-6 max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              <span className="h-px w-12 bg-primary/50" />
              Our Services
              <span className="h-px w-12 bg-primary/50" />
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-semibold tracking-tighter leading-[0.95] mb-8 text-white">
              Digital Craft & <br className="hidden md:block" />{" "}
              <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              From robust web applications to comprehensive digital marketing and BPO support, we
              provide the end-to-end services your business needs to scale.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Expanding Image Accordion */}
      <section className="relative py-12 sm:py-20 bg-background overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 max-w-[1400px]">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-tight text-white">
              Explore <span className="text-gradient">Services</span>
            </h2>
          </Reveal>

          <div className="flex w-full h-[320px] sm:h-[350px] gap-2 sm:gap-4 overflow-hidden rounded-[2rem]">
            {services.map((s, i) => {
              const Icon = iconsMap[i % iconsMap.length];
              return (
                <div
                  key={s.title}
                  className="group relative flex-1 hover:grow-[6] sm:hover:grow-[8] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer rounded-[2rem] bg-white/5 border border-white/10"
                >
                  {/* Background Image */}
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-125 group-hover:scale-100"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end">
                    {/* Compressed State (Vertical Title) */}
                    <div className="flex flex-col items-center justify-end h-full gap-4 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500 absolute inset-0 pb-8 pointer-events-none">
                      <Icon className="h-6 w-6 text-white/50" />
                      <div
                        style={{ writingMode: "vertical-rl" }}
                        className="rotate-180 text-lg sm:text-xl font-display font-medium tracking-wider text-white/70 whitespace-nowrap overflow-hidden text-ellipsis h-2/3 text-center"
                      >
                        {s.title}
                      </div>
                    </div>

                    {/* Expanded State Content */}
                    <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 relative z-10 w-[300px] sm:w-[450px] flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h3 className="text-xl sm:text-3xl font-display font-semibold text-white drop-shadow-md">
                          {s.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed mb-4 w-full max-w-[320px] drop-shadow line-clamp-3">
                        {s.desc}
                      </p>

                      <div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
                        >
                          Inquire Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Unified Why Choose Us Section */}
      <WhyChoose />

      <SectionDivider />

      <CTASection
        eyebrow="Let's collaborate"
        title="Let's Build Something"
        highlight="Great Together"
        text="Whether you need a website, app, design support, digital marketing, telecalling, or BPO solutions, Sherize helps your business grow with creativity, technology, and reliable support."
        actions={
          <>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        }
      />
    </PageShell>
  );
}
