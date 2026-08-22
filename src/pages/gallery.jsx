import { useState, useEffect } from "react";
import { dataService } from "@/services/dataService";
import { PageShell, CTASection } from "@/components/layout/PageShell";
import galleryHero from "@/assets/images/gallery_hero.jpg";
import aboutHero from "@/assets/images/about_hero.jpg";
import avatar1 from "@/assets/images/avatar1.jpg";
import avatar2 from "@/assets/images/avatar2.jpg";
import avatar3 from "@/assets/images/avatar3.jpg";
import avatar4 from "@/assets/images/avatar4.jpg";
import { Reveal } from "@/components/shared/Reveal";
import { BackButton } from "@/components/layout/BackButton";
import { Instagram, ArrowRight, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function GalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setGallery(dataService.getGallery());
      setTestimonials(dataService.getTestimonials());
    };
    loadData();

    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);

  return (
    <PageShell>
      <BackButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={galleryHero}
            alt="Sherize Culture"
            className="w-full h-full object-cover opacity-70 scale-105 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10 mt-12">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              <span className="h-px w-12 bg-primary/50" />
              Inside Sherize
              <span className="h-px w-12 bg-primary/50" />
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-semibold tracking-tighter leading-[0.95] mb-8 text-white drop-shadow-2xl">
              Life at <span className="text-gradient drop-shadow-2xl">Sherize</span>.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
              Follow our journey. See our team in action, our culture, and the moments that define us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] group">
                <img
                  src={aboutHero}
                  alt="Women collaborating"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6 text-white leading-tight">
                Empowering women, <br />
                <span className="text-gradient">one career at a time.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
                At Sherize, we believe that flexibility and ambition go hand in hand. Our remote-first culture is built on trust, transparency, and the unwavering belief that women can lead successful careers on their own terms.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                Whether it's customer success, digital marketing, or virtual assistance, we provide the platform for you to shine, grow, and connect with a global community.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-background overflow-hidden bg-white/10 z-[${5 - i}] relative`}>
                      <img src={i === 1 ? avatar1 : i === 2 ? avatar2 : i === 3 ? avatar3 : avatar4} alt="Team member" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-white/80">
                  Join <span className="text-primary font-bold">120+</span> women worldwide
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Masonry Gallery Grid */}
      <section className="relative py-12 sm:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
            {gallery.map((item, i) => (
              <Reveal
                key={item.id}
                delay={i * 100}
                className={`relative group overflow-hidden rounded-3xl border border-white/10 ${i % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                {/* Background Image / Video */}
                <div className="absolute inset-0">
                  {item.img && item.img.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                      src={item.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {/* Overlay gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                    <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-white text-sm"><Heart className="h-4 w-4" /> 1.2k</span>
                      <span className="flex items-center gap-1.5 text-white text-sm"><MessageCircle className="h-4 w-4" /> 48</span>
                    </div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[10px] group-hover:translate-y-0 mt-auto">
                    <p className="text-white font-medium text-lg lg:text-xl drop-shadow-md leading-snug">
                      {item.caption}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                      <Instagram className="h-4 w-4" />
                      @sherize.solutions
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Sherize Section */}
      <section className="relative py-24 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-display font-semibold text-white mb-4">
                Voices of <span className="text-gradient">Sherize</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Hear directly from the women who make our community so vibrant and unstoppable.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.id || i} delay={i * 150} className="mt-8 bg-[#0a0a0a] border border-white/5 p-6 pt-10 rounded-3xl relative group hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-[#0f0f0f]">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-purple-500/40 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />

                {/* Breakout Avatar */}
                <div className="absolute -top-8 left-6">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <img src={testimonial.img} alt={testimonial.author} className="w-16 h-16 rounded-full border-4 border-background relative z-10 object-cover" />
                  </div>
                </div>

                <div className="text-white/5 absolute top-6 right-6 font-serif text-8xl leading-none group-hover:text-primary/10 transition-colors duration-500">"</div>

                <p className="text-white/60 text-sm leading-relaxed mb-6 relative z-10 font-light mt-3 group-hover:text-white/90 transition-colors duration-300">
                  {testimonial.quote}
                </p>

                <div className="relative z-10 border-t border-white/5 pt-4 mt-auto">
                  <div className="text-white font-medium text-base">{testimonial.author}</div>
                  <div className="text-primary text-[11px] font-semibold tracking-wider uppercase mt-1">{testimonial.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <CTASection
        eyebrow="Follow the journey"
        title="Stay"
        highlight="Connected"
        text="Join our community on Instagram for daily updates, behind-the-scenes content, and inspiration from the Sherize team."
        actions={
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine"
          >
            <Instagram className="h-4 w-4" /> Follow @sherize.solutions          </a>
        }
      />
    </PageShell>
  );
}



