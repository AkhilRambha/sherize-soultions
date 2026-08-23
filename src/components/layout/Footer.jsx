import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/shared/Reveal";
import logo from "@/assets/images/iconshe.png";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { dataService } from "@/services/dataService";

export function Footer() {
  const [contact, setContact] = useState({
    email: "", phone: "", address: "", instagram: "", whatsapp: "", facebook: "", linkedin: ""
  });

  useEffect(() => {
    const loadData = () => {
      const contactData = dataService.getContact() || {};
      const socialData = dataService.getSocial() || {};
      setContact({ ...contactData, ...socialData });
    };
    loadData();

    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);

  return (
    <footer
      id="contact"
      className="relative py-12 sm:py-16 overflow-hidden bg-background border-t border-white/5 z-20"
    >
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden opacity-[0.03] -translate-y-24">
        <h1 className="text-[25vw] font-display font-bold text-white whitespace-nowrap leading-none tracking-tighter">
          SHERIZE
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-12">
          {/* Brand Info & Subscribe (Left Side, 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-[1rem] bg-white border border-white/10 p-2 flex items-center justify-center shadow-lg">
                  <img src={logo} alt="Sherize" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-2xl font-display font-semibold text-white tracking-tight">
                    Sherize <span className="text-white/50">Solutions</span>
                  </div>
                  <div className="text-xs text-primary tracking-widest uppercase font-medium mt-1">
                    Private Limited
                  </div>
                </div>
              </div>

              <p className="text-lg text-white/60 max-w-sm font-light leading-relaxed mb-10">
                A premium digital agency powered by a remote workforce of exceptional women.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.currentTarget.email.value;
                  const mailtoUrl = `mailto:info@sherize.in?subject=New Subscriber&body=New subscriber alert! Please add this email to the newsletter: ${email}`;

                  toast.success("Subscribed successfully!");

                  setTimeout(() => {
                    window.open(mailtoUrl, "_blank");
                  }, 500);

                  e.currentTarget.reset();
                }}
                className="flex items-center gap-3 max-w-sm mt-2"
              >
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-b border-white/20 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-primary/50"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </Reveal>
          </div>

          {/* Links Grid (Right Side, 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:-ml-8">
            <Reveal delay={100}>
              <div className="flex flex-col">
                <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {[
                    { label: "Home", to: "/" },
                    { label: "About", to: "/about" },
                    { label: "Careers", to: "/opportunities" },
                    { label: "Services", to: "/services" },
                    { label: "Gallery", to: "/gallery" },
                    { label: "Contact", to: "/contact" },
                    { label: "Admin Login", to: "/admin" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-white/50 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <FooterCol
                title="Expertise"
                links={["Digital Strategy", "Design Systems", "Web Development", "Growth Ops"]}
              />
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col">
                <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">
                  Contact
                </h4>
                <ul className="space-y-4 text-white/50 text-sm">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Mail size={14} /> {contact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contact.phone}`}
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Phone size={14} /> {contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} /> {contact.address}
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={400}>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-light">
              Â© {new Date().getFullYear()} Sherize Solutions Private Limited.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <SocialLink
                href={contact.instagram}
                icon={<Instagram size={18} />}
                label="Instagram"
              />
              <SocialLink
                href={contact.whatsapp}
                icon={<FaWhatsapp size={18} />}
                label="WhatsApp"
              />
              <SocialLink
                href={contact.facebook}
                icon={<Facebook size={18} />}
                label="Facebook"
              />
              <SocialLink
                href={contact.linkedin}
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/[^a-z]/g, "")}`}
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-primary hover:border-primary hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}



