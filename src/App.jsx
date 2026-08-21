import { Routes, Route, useLocation } from "react-router-dom";
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

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <ScrollToTop />}
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Toaster />
      <FloatingContact />
    </>
  );
}
