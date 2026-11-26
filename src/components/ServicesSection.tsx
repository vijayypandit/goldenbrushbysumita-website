import {
  Crown,
  Sparkles,
  Flower2,
  Scissors,
  Camera,
  Paintbrush,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

const ICON_MAP = {
  crown: Crown,
  sparkles: Sparkles,
  flower: Flower2,
  scissors: Scissors,
  camera: Camera,
  brush: Paintbrush,
};

export default function ServicesSection({ onBookService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-dark mb-2">
            What I Do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-espresso">
            Makeup for{" "}
            <span className="font-script text-4xl sm:text-5xl text-gold-dark font-normal">
              Every
            </span>{" "}
            Occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <div key={service.id} className="relative group">
                {/* 3D Layered Offset Shadow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-champagne-deep/90 border border-gold/30 shadow-[8px_12px_24px_-6px_rgba(23,20,18,0.18)] transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
                />

                <div className="relative h-full bg-white border border-gold/25 group-hover:border-gold rounded-sm p-7 flex flex-col items-center text-center shadow-[0_10px_20px_-8px_rgba(23,20,18,0.14)] transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-champagne/70 border border-gold/25 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-gold-dark group-hover:text-white stroke-[1.5] transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-espresso mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-espresso/70 leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onBookService(service.title)}
                    className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-dark hover:text-espresso transition-colors"
                  >
                    Book This Service →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
