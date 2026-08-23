import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Instagram,
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
import aboutHero from "@/assets/images/about_hero.jpg";
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

        <div className="w-full max-w-[1280px] mx-auto px-6 max-w-5xl text-center relative z-10">
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

      {/* Sleek Agency Directory (Open Roles) - Split Interactive Layout */}
      <section className="relative py-20 sm:py-32">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left Side: Sticky Image */}
            <div className="lg:sticky lg:top-32 relative h-[400px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />

              <img
                src={aboutHero}
                alt="Sherize Workspace"
                className="w-full h-full object-cover transition-transform duration-[15000ms] group-hover:scale-110 ease-linear"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-white mb-4 leading-[1.1]">
                    Find Your <br />
                    <span className="text-gradient">Calling</span>.
                  </h2>
                  <p className="text-white/70 text-lg font-light leading-relaxed max-w-sm">
                    Join a team of driven, remote professionals building the future of digital services.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right Side: Interactive List */}
            <div className="flex flex-col">
              <Reveal className="mb-10 lg:mb-12">
                <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
                  <span className="h-px w-8 bg-primary/50" />
                  Positions
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight">
                  Open Roles
                </h3>
              </Reveal>

              <div className="flex flex-col border-t border-white/10">
                {opportunities.map((o, i) => (
                  <div
                    key={o.title}
                    className="group border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.04] cursor-pointer"
                  >
                    <Reveal delay={i * 50}>
                      <div className="px-2 sm:px-6 py-6 sm:py-8 flex flex-col justify-center">
                        {/* Persistent Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0">
                          <div className="flex items-center gap-4 sm:gap-6">
                            <span className="text-sm font-medium tracking-widest text-primary/50 group-hover:text-primary transition-colors duration-500">
                              0{i + 1}
                            </span>
                            <h3 className="text-xl sm:text-3xl font-display font-semibold text-white/80 group-hover:text-white transition-all duration-500 group-hover:translate-x-2 tracking-tight">
                              {o.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md transition-transform duration-500 group-hover:scale-105 self-start sm:self-auto shrink-0">
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
                            <div className="pt-6 flex flex-col gap-6 items-start border-t border-white/5 mt-6">
                              <div className="flex items-start gap-4 w-full">
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

                              <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200 shrink-0 self-end mt-2">
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
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Premium "Why Join" Grid Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

        <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-16 sm:mb-24">
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4">
              <span className="h-px w-12 bg-primary/50" />
              Why join us
              <span className="h-px w-12 bg-primary/50" />
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tighter text-white leading-tight">
              More than just <br className="hidden sm:block" /> <span className="text-gradient">a job</span>.
            </h2>
          </Reveal>

          {/* Premium Glassmorphism Interactive Grid - Horizontal Line */}
          <div className="flex overflow-x-auto gap-4 lg:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {careerPerks.map((w, i) => (
              <Reveal key={w.id || w.title || i} delay={i * 50}>
                <div className="relative group p-6 sm:p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer shadow-xl backdrop-blur-sm h-full flex flex-col items-center text-center min-w-[280px] w-[280px] sm:min-w-[300px] sm:w-[300px] snap-center">

                  {/* Subtle hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Dynamic Floating Icon */}
                  <div className="shrink-0 mb-8 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-primary border border-white/10 shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                      {(() => {
                        const Icon = iconsMap[i % iconsMap.length];
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h4 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {w.title}
                    </h4>
                    <p className="text-base text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {w.desc}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
              href={socialLinks?.instagram || "https://www.instagram.com/sherize.solutions"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass group hover:border-pink-500/50 hover:bg-pink-500/10 transition-colors"
            >
              <Instagram className="h-4 w-4 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 group-hover:text-white transition-colors">Join for more updates</span>
            </a>
          </>
        }
      />
    </PageShell>
  );
}
