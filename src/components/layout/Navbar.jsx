import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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

          <li className="pt-2 flex justify-center">
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
