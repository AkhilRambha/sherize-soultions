import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Home,
  Briefcase,
  PhoneCall,
  Palette,
  GraduationCap,
  TrendingUp,
  Clock,
  Wallet,
  Sparkles,
  Users,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import { PageShell, CTASection } from "@/components/layout/PageShell";
import { Reveal } from "@/components/shared/Reveal";
import { BackButton } from "@/components/layout/BackButton";
import empowerment from "@/assets/images/empowerment.jpg";
import { dataService } from "@/services/dataService";
import { useState, useEffect } from "react";

function SectionDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

const iconsMap = [Home, Briefcase, PhoneCall, Palette, GraduationCap, TrendingUp];

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState([]);
  const [careerPerks, setCareerPerks] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setOpportunities(dataService.getRoles());
      setCareerPerks(dataService.getCareerPerks());
    };
    loadData();
    
    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);
  return (
    <PageShell>
      <BackButton />

      {/* Massive Cinematic Hero */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={empowerment}
            alt="Career at Sherize"
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-pan"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              <span className="h-px w-12 bg-primary/50" />
              Careers
              <span className="h-px w-12 bg-primary/50" />
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-semibold tracking-tighter leading-[0.95] mb-8 text-white">
              Work with us. <br className="hidden md:block" /> Grow with{" "}
              <span className="text-gradient">Sherize</span>.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Join Sherize and become part of a growing women-first platform creating flexible
              career opportunities through technology, digital services, telecalling, and business
              support.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Sleek Agency Directory (Open Roles) */}
      <section className="relative py-20 sm:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal className="mb-16 text-center">
            <h2 className="text-4xl sm:text-6xl font-display font-semibold tracking-tight text-white">
              Open <span className="text-gradient">Roles</span>.
            </h2>
          </Reveal>

          <div className="flex flex-col border-t border-white/10">
            {opportunities.map((o, i) => (
              <div
                key={o.title}
                className="group border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02] cursor-pointer"
              >
                <Reveal delay={i * 50}>
                  <div className="px-4 sm:px-8 py-6 sm:py-8 flex flex-col justify-center">
                    {/* Persistent Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-sm font-medium tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-500">
                          0{i + 1}
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-display font-semibold text-white/80 group-hover:text-white transition-all duration-500 group-hover:translate-x-2 tracking-tight">
                          {o.title}
                        </h3>
                      </div>

                      {/* Pulsing Indicator (Always visible) */}
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md transition-transform duration-500 group-hover:scale-105 self-start sm:self-auto">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-white/70">
                          Hiring
                        </span>
                      </div>
                    </div>

                    {/* Expandable Content Area */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] w-full">
                      <div className="overflow-hidden">
                        <div className="pt-6 flex flex-col sm:flex-row gap-6 items-start justify-between border-t border-white/5 mt-6">
                          <div className="flex items-start gap-4 w-full sm:w-2/3">
                            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-violet/20 text-primary border border-white/5 shadow-inner opacity-0 scale-75 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 delay-100">
                              {(() => {
                                const Icon = iconsMap[i % iconsMap.length];
                                return <Icon className="h-5 w-5" />;
                              })()}
                            </span>
                            <p className="text-base text-white/60 font-light leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-150 pt-1">
                              {o.desc}
                            </p>
                          </div>

                          <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200 mt-2 sm:mt-0 shrink-0">
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                            >
                              Apply Now <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Streamlined "Why Join" Section */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">
              <span className="h-px w-8 bg-primary/50" /> Why join us
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-tight text-white">
              More than just <span className="text-gradient">a job</span>.
            </h2>
          </Reveal>

          {/* Clean, minimalist 2-column checklist */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {careerPerks.map((w, i) => (
              <Reveal key={w.id || w.title} delay={i * 50}>
                <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{w.title}</h4>
                    <p className="text-sm text-white/50 font-light">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTASection
        eyebrow="You belong here"
        title="Be Part of"
        highlight="Sherize"
        text="Your skills have value. Your talent deserves opportunity. Join Sherize to work from home, earn independently, build confidence, and grow with a supportive women-led community."
        actions={
          <>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine"
            >
              Join With Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass"
            >
              <Download className="h-4 w-4" /> Download App
            </a>
          </>
        }
      />
    </PageShell>
  );
}
