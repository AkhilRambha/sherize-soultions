import { FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";

export function FloatingAppDownload() {
  const [playStoreLink, setPlayStoreLink] = useState("https://play.google.com/store/apps/details?id=in.sherize.app");

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 animate-fade-up pointer-events-none">
      <a
        href={playStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center gap-3 h-14 px-6 rounded-full bg-background border border-[#00E676]/30 text-white shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#00E676]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        title="Download on Google Play"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-[#00E676]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <FaGooglePlay className="h-5 w-5 text-[#00E676] group-hover:scale-110 transition-transform duration-300 z-10" />
        <span className="font-semibold text-sm tracking-wide z-10 hidden sm:block">Download App</span>
        <span className="font-semibold text-sm tracking-wide z-10 sm:hidden">Download</span>
      </a>
    </div>
  );
}
