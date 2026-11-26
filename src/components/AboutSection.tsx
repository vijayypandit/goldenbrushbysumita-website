"use client";

import { useState } from "react";
import { Award, MapPin } from "lucide-react";
import { ABOUT_HIGHLIGHTS, BRAND_CONFIG } from "@/data/siteData";

interface AboutSectionProps {
  onBookClick: () => void;
}

export default function AboutSection({ onBookClick }: AboutSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-champagne/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Artist Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-gold/25 border border-gold/35 shadow-[12px_16px_28px_-8px_rgba(23,20,18,0.22)]"
            />
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-gold/30 bg-ivory shadow-lg">
              {!imgError ? (
                <img
                  src="/images/about-portrait.jpg"
                  alt="Sumita — Founder of GoldenBrush"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-ivory to-champagne">
                  <Award className="w-10 h-10 text-gold-dark mb-4" />
                  <p className="font-serif text-xl text-espresso mb-1">Sumita</p>
                </div>
              )}

              {/* Floating Experience Badge */}
              <div className="absolute bottom-4 right-4 bg-ivory/95 border border-gold/40 px-4 py-3 rounded-sm shadow-md text-center">
                <p className="font-serif text-lg font-semibold text-espresso leading-tight">
                  {BRAND_CONFIG.experience}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gold-dark">
                  Bridal &amp; Studio Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Bio & Redesigned Credential Card */}
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
          <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-md bg-gradient-to-r from-white via-[#FFF9FA] to-champagne border border-gold/35 shadow-sm">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-gold-dark">
              <Award className="w-4 h-4 text-gold-dark" />
              {BRAND_CONFIG.academy}
            </span>
            <span className="hidden sm:inline-block w-px h-4 bg-gold/35" />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#9E3A54]">
              <MapPin className="w-3.5 h-3.5 text-[#B55B72]" />
              {BRAND_CONFIG.location}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-espresso">
            Hi, I&apos;m Sumita
          </h2>
          <p className="font-script text-3xl text-gold-dark -mt-2">
            Your Beauty, My Passion
          </p>

          <p className="text-espresso/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Welcome to <strong>GoldenBrush by Sumita</strong>. Trained at the{" "}
            <strong>{BRAND_CONFIG.academy}</strong> as a certified{" "}
            <strong>Makeup Artist, Hair Stylist, and Nail Art Expert</strong>, I
            bring <strong>{BRAND_CONFIG.experience}</strong> of hands-on
            experience in luxury bridal makeovers, party glam, hairstyling, and
            custom nail art. Working professionally across{" "}
            <strong>{BRAND_CONFIG.location}</strong>, my goal is to craft
            effortless, long-wearing looks that make you feel radiant and
            confident.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 pb-2">
            {ABOUT_HIGHLIGHTS.map((stat) => (
              <div
                key={stat.label}
                className="bg-ivory/90 border border-gold/25 rounded-sm p-3.5 text-center lg:text-left shadow-sm"
              >
                <p className="font-serif text-sm sm:text-base font-semibold text-espresso">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-espresso/65 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={onBookClick}
              className="px-7 py-3.5 bg-gold hover:bg-gold-dark text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors shadow-sm"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
