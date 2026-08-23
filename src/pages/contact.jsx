import { useState, useEffect } from "react";
import { Phone, Mail, Instagram, Send, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { PageShell, PageHero, CTASection } from "@/components/layout/PageShell";
import { toast } from "sonner";
import { BackButton } from "@/components/layout/BackButton";
import { motion } from "framer-motion";
import contactBg from "@/assets/images/contact-bg.jpg";
import { dataService } from "@/services/dataService";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [contact, setContact] = useState({
    email: "", phone: "", address: "", instagram: "", whatsapp: "", facebook: "", linkedin: ""
  });

  useEffect(() => {
    const loadData = () => setContact({ ...dataService.getContact(), ...dataService.getSocial() });
    loadData();

    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.phone,
      href: contact.whatsapp,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@sherize.solutions",
      href: contact.instagram,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = `
🌟 New Contact Form Submission - Sherize

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📌 Subject: ${subject}

💬 Message:
${message}
`;

    const whatsappUrl = `https://wa.me/917672073746?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setSending(false);
      window.open(whatsappUrl, "_blank");
      toast.success("Opening WhatsApp...");
      form.reset();
    }, 500);
  };

  return (
    <PageShell>
      {/* Animated Handshake Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.img
          src={contactBg}
          alt="Handshake Partnership"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.4 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10">
        <BackButton />
        <PageHero
          eyebrow="Get in touch"
          title="Let's Connect With"
          highlight="Sherize"
          subtitle="Have a project, business inquiry, partnership idea, or want to work with us? We'd love to hear from you."
        />

        <section className="relative py-16">
          <div className="w-full max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-8">
            {/* Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              {contacts.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group block glass-strong card-hover shine rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-violet/25 text-primary group-hover:scale-110 transition-transform">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="mt-1 font-semibold truncate">{c.value}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}

              <div className="relative glass rounded-2xl p-6 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
                />

                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Remote-first · India</div>
                    <div className="text-xs text-muted-foreground">
                      We respond within 24 business hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              id="form"
              onSubmit={onSubmit}
              className="lg:col-span-7 relative glass-strong rounded-[2rem] p-8 sm:p-10 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-violet/20 blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
              />

              <span className="relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" /> Send a message
              </span>
              <h2 className="relative mt-3 text-2xl sm:text-3xl font-semibold">
                Tell us about your <span className="text-gradient">project</span>
              </h2>

              <div className="relative mt-8 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone Number" name="phone" type="tel" />
                <Field label="Subject" name="subject" type="text" required />
              </div>

              <div className="relative mt-4 group">
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Share a few details about what you need…"
                  className="w-full glass rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 focus:scale-[1.01] transition-all duration-300 resize-none hover:bg-white/[0.03]"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="relative mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine disabled:opacity-70"
              >
                {sending ? "Sending…" : "Send Message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <CTASection
          eyebrow="Together is better"
          title="Let's Build"
          highlight="Together"
          text="Whether you're a business looking for digital solutions or someone looking to grow with Sherize, we're here to connect, collaborate, and create opportunities together."
          actions={
            <>
              <a
                href="mailto:info@sherize.in"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine"
              >
                Email Us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:7672073746"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass"
              >
                Call Now <Phone className="h-4 w-4" />
              </a>
            </>
          }
        />
      </div>
    </PageShell>
  );
}

export function Field({ label, name, type, required }) {
  return (
    <div className="group">
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 group-focus-within:text-primary transition-colors">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={label}
        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 focus:scale-[1.02] transition-all duration-300 hover:bg-white/[0.03]"
      />
    </div>
  );
}

