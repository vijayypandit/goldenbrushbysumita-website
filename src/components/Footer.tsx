import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Youtube,
} from "lucide-react";
import { BRAND_CONFIG, SERVICES } from "@/data/siteData";

export default function Footer() {
  return (
    <footer id="contact" className="bg-espresso text-ivory/85 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Unified Socials Column */}
          <div className="lg:col-span-4 space-y-5">
            <img
              src="/images/goldenbrush-logo.png"
              alt="GoldenBrush by Sumita"
              className="h-20 sm:h-24 w-auto max-w-full object-contain object-left mix-blend-screen"
            />

            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed max-w-sm">
              {BRAND_CONFIG.academy} certified Makeup Artist, Hair Stylist &amp; Nail Art Expert serving{" "}
              <span className="text-gold-light font-medium">{BRAND_CONFIG.location}</span>.
            </p>

            {/* All Socials Together in One Place */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold mb-3">
                Connect With Us
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={BRAND_CONFIG.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-espresso-soft border border-gold/35 text-xs text-ivory hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4 text-gold-light" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-espresso-soft border border-gold/35 text-xs text-ivory hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <Facebook className="w-4 h-4 text-gold-light" />
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-espresso-soft border border-gold/35 text-xs text-ivory hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={BRAND_CONFIG.socials.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-espresso-soft border border-gold/35 text-ivory hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <Youtube className="w-4 h-4 text-gold-light" />
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-ivory/75">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#home" className="hover:text-gold transition-colors">About Sumita</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Client Reviews</a></li>
              <li><a href="#contact-form" className="hover:text-gold transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-ivory/75">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-gold transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
              Studio &amp; Contact
            </h3>
            <ul className="space-y-3 text-xs text-ivory/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:+${BRAND_CONFIG.phoneRaw}`} className="hover:text-gold">
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-gold break-all">
                  {BRAND_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>{BRAND_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ivory/55">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName} {BRAND_CONFIG.brandSubline}. All Rights Reserved.
          </p>
          <p>Bridal Makeup · Hair Styling · Nail Art | {BRAND_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}
