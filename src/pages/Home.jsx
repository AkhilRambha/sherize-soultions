import { CinematicHero } from "@/components/sections/Hero/CinematicHero";
import { Empowerment } from "@/components/sections/Empowerment";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { OrbCTA } from "@/components/shared/OrbCTA";
import { PageShell } from "@/components/layout/PageShell";

function SectionDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}



export default function Index() {
  return (
    <>
      <PageShell>
        <CinematicHero />
        <SectionDivider />
        <WhoWeAre />
        <SectionDivider />
        <Empowerment />
        <SectionDivider />
        <WhyChoose />
        <SectionDivider />
        <OrbCTA />
      </PageShell>
    </>
  );
}
