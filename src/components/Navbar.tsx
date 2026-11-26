"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Reels", href: "#reels" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact-form" },
];

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#FFF7F9]/95 via-[#FFFDFD]/95 to-[#FAEEF1]/95 backdrop-blur-md border-b border-gold/25 shadow-[0_4px_20px_-6px_rgba(181,91,114,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/images/goldenbrush-logo.png"
            alt="GoldenBrush by Sumita Logo"
            className="h-20 sm:h-[86px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-[0.14em] uppercase text-espresso/80">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold-dark transition-colors py-1 border-b-2 border-transparent hover:border-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#C96F86] to-[#B65D76] text-white text-xs font-semibold tracking-[0.12em] rounded-full border border-white/50 shadow-[0_8px_22px_-8px_rgba(159,76,100,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-8px_rgba(159,76,100,0.72)]"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-espresso hover:text-gold-dark transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-ivory border-t border-gold/15 px-4 py-5 space-y-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium tracking-widest uppercase text-espresso/90 hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onBookClick();
            }}
            className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#C96F86] to-[#B65D76] text-white text-xs font-semibold tracking-[0.12em] rounded-full border border-white/50 shadow-[0_8px_22px_-8px_rgba(159,76,100,0.65)] transition-all"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
