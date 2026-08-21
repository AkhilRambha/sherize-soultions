import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { dataService } from "@/services/dataService";
import { useState, useEffect } from "react";

export function FloatingContact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    const loadData = () => setContact(dataService.getContact());
    loadData();
    window.addEventListener("sherize_data_updated", loadData);
    return () => window.removeEventListener("sherize_data_updated", loadData);
  }, []);

  const whatsappUrl = contact?.whatsapp || "https://wa.me/7672073746";
  const phoneUrl = contact?.phone ? `tel:${contact.phone}` : "tel:+7672073746";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 animate-fade-up pointer-events-none">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] border border-white/20 text-white shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </a>

      <a
        href={phoneUrl}
        className="pointer-events-auto group relative flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 border border-white/20 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
        title="Call Us"
      >
        <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
