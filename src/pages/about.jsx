import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Briefcase,
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  PhoneCall,
  Headphones,
  Code2,
  Sparkles,
} from "lucide-react";
import { PageShell, CTASection } from "@/components/layout/PageShell";
import aboutHero from "@/assets/images/about_hero.jpg";
import { Reveal } from "@/components/shared/Reveal";
import dashboard from "@/assets/images/hero-dashboard.jpg";
import { Empowerment } from "@/components/sections/Empowerment";
import { BackButton } from "@/components/layout/BackButton";
import { dataService } from "@/services/dataService";
import { useState, useEffect } from "react";

const iconsMap = [Briefcase, Globe, Code2, Smartphone, Palette, Megaphone, PhoneCall, Headphones];

function SectionDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function AboutPage() {
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    const loadData = () => setSpecialties(dataService.getAboutSpecialties());
    loadData();

    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);

  return (
    <PageShell>
      <BackButton />

      {/* Massive Cinematic Hero */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="About Sherize" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 mt-12">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6 drop-shadow-md">
              <span className="h-px w-12 bg-primary/50" />
              About Sherize
              <span className="h-px w-12 bg-primary/50" />
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-display font-semibold tracking-tighter leading-[0.95] mb-8 text-white drop-shadow-2xl">
              Where Women Grow, <br className="hidden md:block" /> Work & Build the{" "}
              <span className="text-gradient drop-shadow-2xl">Future Digitally</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-lg">
              Sherize Solutions Private Limited is an IT and digital solutions company that empowers
              businesses with innovative technology, while creating flexible work opportunities for
              women to earn, learn, and lead.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Our Story - Bento Layout */}
      <section className="relative py-20 sm:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6 flex flex-col gap-8">
              <div>
                <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">
                  <span className="h-px w-8 bg-primary/50" />
                  Our Story
                </span>
                <h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight leading-[1.05] text-white">
                  A women-first platform built on{" "}
                  <span className="text-gradient">technology & opportunity</span>.
                </h2>
                <p className="mt-6 text-lg text-white/70 font-light leading-relaxed">
                  Our mission is to help businesses scale with smart digital solutions while
                  creating flexible work opportunities for women to learn, earn, and grow
                  professionally anywhere in the world.
                </p>
              </div>

              {/* Bento Specialties */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                {specialties.map((s, i) => {
                  const Icon = iconsMap[i % iconsMap.length];
                  return (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 glass-strong px-5 py-3 rounded-2xl border border-white/5 shadow-lg transition-transform hover:-translate-y-1 hover:border-white/10"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-violet/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-white/90">{s.label}</span>
                  </div>
                )})}
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6 h-full">
              <div className="relative h-full w-full min-h-[500px]">
                <div className="absolute -inset-10 rounded-[3rem] ring-conic opacity-20 blur-3xl" />
                <div className="relative h-full w-full glass-strong rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <img
                    src={dashboard}
                    alt="Sherize workspace"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8 glass-strong rounded-2xl p-5 flex items-center gap-4 border border-white/10">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary">
                      <Sparkles className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-white">
                        Premium digital craft
                      </div>
                      <div className="text-sm text-white/70">
                        From idea to launch — beautifully delivered.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Unified Empowerment Section */}
      <Empowerment />

      <SectionDivider />

      <CTASection
        eyebrow="Your future, your terms"
        title="Build Your Future With"
        highlight="Sherize"
        text="Join a growing platform where technology meets opportunity. Work flexibly, earn confidently, and grow with purpose."
        actions={
          <>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine"
            >
              <Download className="h-4 w-4" /> Download App
            </a>
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass"
            >
              Explore Careers <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        }
      />
    </PageShell>
  );
}
