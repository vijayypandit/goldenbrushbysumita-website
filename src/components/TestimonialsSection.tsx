import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-dark mb-2">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-espresso">
            What My Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="relative group">
              {/* 3D Layered Offset Shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-champagne border border-gold/30 shadow-[8px_12px_24px_-6px_rgba(23,20,18,0.16)]"
              />

              <div className="relative h-full bg-white border border-gold/25 rounded-sm p-7 flex flex-col justify-between shadow-[0_10px_22px_-8px_rgba(23,20,18,0.14)] transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-gold/60" />
                    <div className="flex items-center gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3.5 h-3.5 fill-gold text-gold"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-espresso/80 leading-relaxed italic mb-6">
                    {review.quote}
                  </p>
                </div>

                <div className="border-t border-gold/15 pt-4">
                  <p className="font-serif text-sm font-semibold text-espresso">
                    {review.clientName}
                  </p>
                  <p className="text-xs text-espresso/60">
                    {review.service} · {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
