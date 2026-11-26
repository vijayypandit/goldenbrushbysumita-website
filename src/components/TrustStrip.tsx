import { Gem, Wand2, MapPin, ShieldCheck } from "lucide-react";
import { TRUST_PILLARS } from "@/data/siteData";

const ICON_MAP = {
  gem: Gem,
  wand: Wand2,
  mapPin: MapPin,
  shieldCheck: ShieldCheck,
};

export default function TrustStrip() {
  return (
    <section className="bg-ivory border-y border-gold/15 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {TRUST_PILLARS.map((item) => {
          const Icon = ICON_MAP[item.iconName];
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center px-3"
            >
              <div className="w-12 h-12 rounded-full border border-gold/30 bg-champagne/60 flex items-center justify-center mb-3.5">
                <Icon className="w-5 h-5 text-gold-dark stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-base font-semibold text-espresso mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-espresso/70 leading-relaxed max-w-[220px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
