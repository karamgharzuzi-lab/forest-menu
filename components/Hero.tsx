"use client";

import Logo from "./Logo";
import BotanicalCorner from "./BotanicalCorner";

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#F7F1E8" }}
    >
      {/* Botanical corner decorations */}
      <BotanicalCorner position="top-right" size={130} className="absolute top-0 right-0" />
      <BotanicalCorner position="top-left"  size={130} className="absolute top-0 left-0" />
      <BotanicalCorner position="bottom-right" size={100} className="absolute bottom-0 right-0" />
      <BotanicalCorner position="bottom-left"  size={100} className="absolute bottom-0 left-0" />

      {/* Center content — w-full ensures items-center has room to center in */}
      <div className="relative z-10 flex flex-col items-center w-full px-6 gap-5">
        <Logo size="lg" />

        <p
          className="font-cormorant text-base md:text-lg text-charcoal/65 font-light text-center"
          style={{ letterSpacing: "0.18em" }}
        >
          מטבח ים תיכוני מודרני
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center gap-3" style={{ width: "min(220px, 60vw)" }}>
          <div className="flex-1 h-px bg-charcoal/20" />
          <svg width="16" height="16" viewBox="0 0 18 22" aria-hidden="true">
            <ellipse cx="9" cy="11" rx="4.5" ry="7.5" fill="#A08060" opacity="0.5" />
            <ellipse cx="9"  cy="6"  rx="4" ry="2.8" fill="#8B7050" opacity="0.48" />
            <ellipse cx="9" cy="11" rx="4" ry="2.8" fill="#8B7050" opacity="0.48" />
            <ellipse cx="9" cy="16" rx="4" ry="2.8" fill="#8B7050" opacity="0.48" />
          </svg>
          <div className="flex-1 h-px bg-charcoal/20" />
        </div>

        <button
          onClick={scrollToMenu}
          className="mt-1 px-9 py-3 border border-charcoal/30 text-charcoal font-heebo text-sm tracking-widest hover:bg-tan/70 transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal/30 min-h-[44px]"
        >
          תפריט מלא
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-35">
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
          <path d="M2 2l9 9 9-9" stroke="#1F1A14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
