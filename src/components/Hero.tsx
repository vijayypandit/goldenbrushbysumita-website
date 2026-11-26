"use client";

import { useState } from "react";
import { Award, MapPin, Sparkles } from "lucide-react";
import { ABOUT_HIGHLIGHTS, BRAND_CONFIG } from "@/data/siteData";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDFD] via-[#FFF6F8] to-[#F8E8ED]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
        {/* Left Copy: Headline + Merged Bio + Stats */}
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gold/40 shadow-[0_6px_18px_-6px_rgba(163,123,64,0.22)]">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-dark">
              <Award className="w-3.5 h-3.5 text-gold-dark" />
              UK International Certified
            </span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9E3A54]">
              <MapPin className="w-3.5 h-3.5 text-[#B55B72]" />
              {BRAND_CONFIG.location}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-medium text-espresso leading-[1.12]">
            Hi, I&apos;m Sumita —{" "}
            <span className="font-script text-5xl sm:text-6xl lg:text-[66px] text-gold-dark font-normal px-1">
              Your Beauty,
            </span>{" "}
            My Passion.
          </h1>

          <p className="text-espresso/80 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to <strong>GoldenBrush by Sumita</strong>. Trained at{" "}
            <strong>{BRAND_CONFIG.academy}</strong> as a certified{" "}
            <strong>Makeup Artist, Hair Stylist, and Nail Art Expert</strong>, I
            bring <strong>{BRAND_CONFIG.experience}</strong> of professional
            experience in bridal makeovers, party glam, hairstyling, and custom
            nail art across <strong>{BRAND_CONFIG.location}</strong>.
          </p>

          {/* Merged Bio Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {ABOUT_HIGHLIGHTS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/90 border border-gold/25 rounded-sm p-3 text-center lg:text-left shadow-sm"
              >
                <p className="font-serif text-sm sm:text-base font-semibold text-espresso">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-espresso/65 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-7 py-3.5 bg-gold hover:bg-gold-dark text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors shadow-sm"
            >
              Book Your Appointment
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-3.5 border border-gold/60 hover:border-gold-dark bg-white/75 text-espresso hover:text-gold-dark text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors text-center"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right Portrait Frame with 3D Shadow + Experience Badge */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-gold/25 border border-gold/40 shadow-[12px_16px_32px_-8px_rgba(23,20,18,0.25)]"
            />
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border border-gold/30 bg-gradient-to-b from-champagne to-champagne-deep">
              {!imgError ? (
                <img
                  src="/images/about-portrait.jpg"
                  alt="Sumita — GoldenBrush by Sumita"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <Sparkles className="w-8 h-8 text-gold-dark mb-3" />
                  <p className="font-serif text-xl text-espresso">GoldenBrush by Sumita</p>
                </div>
              )}

              <div className="absolute bottom-4 right-4 bg-ivory/95 border border-gold/40 px-4 py-2.5 rounded-sm shadow-md text-center">
                <p className="font-serif text-base font-semibold text-espresso leading-tight">
                  {BRAND_CONFIG.experience}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gold-dark">
                  Bridal &amp; Studio Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
