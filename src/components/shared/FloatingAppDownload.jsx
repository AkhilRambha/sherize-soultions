import { FaGooglePlay } from "react-icons/fa";
import { useState, useEffect } from "react";

export function FloatingAppDownload() {
  const [playStoreLink, setPlayStoreLink] = useState("#");

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 animate-fade-up pointer-events-none">
      <a
        href={playStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center h-14 w-14 rounded-full bg-background border border-white/20 text-white shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        title="Download on Google Play"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <FaGooglePlay className="h-6 w-6 text-[#00E676] group-hover:scale-110 transition-transform duration-300 z-10" />
      </a>
    </div>
  );
}
