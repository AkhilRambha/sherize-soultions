import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Opportunities from "./pages/opportunities";
import Privacy from "./pages/privacy";
import Services from "./pages/services";
import Terms from "./pages/terms";
import GalleryPage from "./pages/gallery";

import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { FloatingContact } from "@/components/shared/FloatingContact";
import { FloatingAppDownload } from "@/components/shared/FloatingAppDownload";

export default function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAdmin = pathname.startsWith("/admin");

  const seo = {
    "/": {
      title: "Sherize Solutions Pvt. Ltd. | Digital Solutions & Careers",
      description:
        "Sherize Solutions Pvt. Ltd. provides digital solutions, web development services, business support, and career opportunities."
    },

    "/about": {
      title: "About Sherize Solutions | Our Company",
      description:
        "Learn about Sherize Solutions Pvt. Ltd., our mission, services, and remote workforce."
    },

    "/services": {
      title: "Services | Sherize Solutions Pvt. Ltd.",
      description:
        "Explore digital strategy, design, web development, and business support services from Sherize Solutions."
    },

    "/opportunities": {
      title: "Career Opportunities | Sherize Solutions",
      description:
        "Explore career and work-from-home opportunities with Sherize Solutions."
    },

    "/gallery": {
      title: "Gallery | Sherize Solutions Pvt. Ltd.",
      description:
        "Explore the Sherize Solutions gallery and discover our work, team, and activities."
    },

    "/contact": {
      title: "Contact Sherize Solutions | Get in Touch",
      description:
        "Contact Sherize Solutions Pvt. Ltd. for services, business enquiries, partnerships, and career opportunities."
    },

    "/privacy": {
      title: "Privacy Policy | Sherize Solutions",
      description:
        "Read the Privacy Policy of Sherize Solutions Pvt. Ltd."
    },

    "/terms": {
      title: "Terms of Service | Sherize Solutions",
      description:
        "Read the Terms of Service for Sherize Solutions Pvt. Ltd."
    }
  };

  const currentSeo = seo[pathname] || {
    title: "Sherize Solutions Pvt. Ltd.",
    description:
      "Sherize Solutions Pvt. Ltd. provides digital solutions, business services, and career opportunities."
  };

  const canonicalUrl = `https://sherize.in${pathname === "/" ? "" : pathname
    }`;

  return (
    <>
      {!isAdmin && (
        <Helmet>
          <title>{currentSeo.title}</title>

          <meta
            name="description"
            content={currentSeo.description}
          />

          <meta
            name="robots"
            content="index, follow"
          />

          <link
            rel="canonical"
            href={canonicalUrl}
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content={currentSeo.title}
          />

          <meta
            property="og:description"
            content={currentSeo.description}
          />

          <meta
            property="og:url"
            content={canonicalUrl}
          />

          <meta
            property="og:type"
            content="website"
          />

          <meta
            property="og:site_name"
            content="Sherize Solutions Pvt. Ltd."
          />

          {/* Twitter / X */}
          <meta
            name="twitter:card"
            content="summary"
          />

          <meta
            name="twitter:title"
            content={currentSeo.title}
          />

          <meta
            name="twitter:description"
            content={currentSeo.description}
          />
        </Helmet>
      )}

      {!isAdmin && <ScrollToTop />}

      {!isAdmin && <Navbar />}

      <Routes>
        {/* Admin */}
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        {/* Main Pages */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/opportunities"
          element={<Opportunities />}
        />

        <Route
          path="/gallery"
          element={<GalleryPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Legal */}
        <Route
          path="/privacy"
          element={<Privacy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />
      </Routes>

      <Toaster />

      <FloatingContact />
      <FloatingAppDownload />
    </>
  );
}