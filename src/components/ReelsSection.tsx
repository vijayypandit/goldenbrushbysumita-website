import { Instagram, Play, ExternalLink } from "lucide-react";
import { BRAND_CONFIG, FEATURED_REELS } from "@/data/siteData";

export default function ReelsSection() {
  return (
    <section
      id="reels"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF8FA] via-[#FDF6F7] to-ivory border-t border-gold/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#B55B72] mb-1.5">
              Instagram Highlights
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-espresso">
              Featured{" "}
              <span className="font-script text-4xl sm:text-5xl text-gold-dark font-normal">
                Instagram
              </span>{" "}
              Reels
            </h2>
          </div>

          <a
            href={BRAND_CONFIG.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-gold/35 text-xs font-semibold tracking-[0.14em] uppercase text-espresso hover:border-gold hover:text-gold-dark transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#B55B72]" />
            <span>{BRAND_CONFIG.socials.instagramHandle}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {FEATURED_REELS.map((reel) => (
            <div key={reel.id} className="relative group">
              {/* 3D Layered Offset Shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-md bg-gradient-to-br from-[#F4D3DC] via-champagne-deep to-gold/35 border border-gold/35 shadow-[10px_14px_28px_-6px_rgba(23,20,18,0.22)] transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"
              />

              <div className="relative rounded-md overflow-hidden bg-white/95 backdrop-blur-sm border border-gold/30 shadow-[0_12px_28px_-8px_rgba(23,20,18,0.18)] flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                {/* Glossy Top Badge */}
                <div className="px-4 py-3 bg-gradient-to-r from-[#FDF2F5] via-white to-[#FBF4E9] border-b border-gold/20 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B55B72]/10 border border-[#B55B72]/25 text-[10px] font-semibold uppercase tracking-widest text-[#9E3A54]">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    {reel.badge}
                  </span>
                  <Instagram className="w-4 h-4 text-gold-dark" />
                </div>

                {/* Official Instagram Reel Embed */}
                <div className="relative w-full h-[320px] sm:h-[340px] bg-[#FDF8F9]">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.reelCode}/embed`}
                    title={reel.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Direct Redirect Footer */}
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-gradient-to-r from-espresso to-espresso-soft text-ivory flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase hover:from-gold-dark hover:to-gold transition-all"
                >
                  <span className="truncate pr-2">{reel.title}</span>
                  <span className="inline-flex items-center gap-1 text-gold-light shrink-0">
                    Watch <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
