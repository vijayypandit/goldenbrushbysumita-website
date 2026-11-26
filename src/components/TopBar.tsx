import { MapPin, Phone, Mail } from "lucide-react";
import { BRAND_CONFIG } from "@/data/siteData";

export default function TopBar() {
  return (
    <div className="bg-espresso text-ivory/90 text-sm py-2.5 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{BRAND_CONFIG.location}</span>
          </span>
          <a
            href={`tel:+${BRAND_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>{BRAND_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${BRAND_CONFIG.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>{BRAND_CONFIG.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-ivory/65">Follow Me:</span>
          <a
            href={BRAND_CONFIG.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 p-0.5 hover:scale-110 transition-transform shadow-sm"
          >
            <img
              src="/images/instagram-24.png"
              alt="Instagram"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href={BRAND_CONFIG.socials.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 p-0.5 hover:scale-110 transition-transform shadow-sm"
          >
            <img
              src="/images/youtube-24.png"
              alt="YouTube"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href={BRAND_CONFIG.socials.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/95 p-0.5 hover:scale-110 transition-transform shadow-sm"
          >
            <img
              src="/images/facebook-24.png"
              alt="Facebook"
              className="w-5 h-5 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
