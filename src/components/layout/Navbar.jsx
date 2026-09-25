import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import "@/styles/global.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/opportunities", label: "Careers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="navbar-header">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <Link to="/" className="navbar-logo">
          <span className="logo-box">
            <img src={logo} alt="Sherize" className="logo-image" />
          </span>
        </Link>

        <ul className="navbar-links">
          {links.map((l) => {
            const active = pathname === l.to;

            return (
              <li key={l.to}>
                <Link to={l.to} className={`nav-link ${active ? "active-link" : ""}`}>
                  {l.label}
                </Link>
              </li>
            );
          })}

          <li className="relative group">
            <button className="nav-link flex items-center gap-1 py-4">
              BPO <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-[80%] left-0 pt-2 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden py-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <a href="https://admin.sherize.in" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  Admin
                </a>
                <a href="https://client.sherize.in" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  Client
                </a>
                <a href="https://teamleader.sherize.in" target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  Team Leader
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link
            to="/contact#form"
            className="hidden md:inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium btn-glow shine"
          >
            Join With Us
            <ArrowRight size={18} />
          </Link>

          <button
            aria-label="Toggle Menu"
            className="menu-btn md:hidden hover:bg-white/10 hover:scale-105 transition-all"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "mobile-open" : ""}`}>
        <ul className="mobile-links">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}

          <li className="w-full flex flex-col items-center mt-4 pt-4 border-t border-white/10">
            <span className="text-white/40 text-[10px] tracking-widest uppercase mb-2">BPO Portals</span>
            <a href="https://admin.sherize.in" target="_blank" rel="noopener noreferrer" className="mobile-link text-sm py-2">Admin</a>
            <a href="https://client.sherize.in" target="_blank" rel="noopener noreferrer" className="mobile-link text-sm py-2">Client</a>
            <a href="https://teamleader.sherize.in" target="_blank" rel="noopener noreferrer" className="mobile-link text-sm py-2">Team Leader</a>
          </li>

          <li className="pt-4 flex justify-center w-full">
            <Link
              to="/contact#form"
              className="inline-flex justify-center items-center w-max gap-2 rounded-xl px-5 py-2 text-sm font-medium btn-glow shine"
              onClick={() => setOpen(false)}
            >
              Join With Us
              <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
