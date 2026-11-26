interface CtaBannerProps {
  onBookClick: () => void;
}

export default function CtaBanner({ onBookClick }: CtaBannerProps) {
  return (
    <section className="relative bg-espresso text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-35">
        <img
          src="/images/brushes-cta.jpg"
          alt="Luxury GoldenBrush Makeup Brushes"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/65" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
            Ready to Look &amp; Feel Your Best?
          </h2>
          <p className="text-sm text-ivory/80 max-w-lg">
            Let&apos;s create a bespoke bridal or party look tailored for your
            special celebration in Delhi NCR.
          </p>
        </div>

        <button
          onClick={onBookClick}
          className="shrink-0 px-7 py-3.5 bg-gold hover:bg-gold-dark text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors shadow-md"
        >
          Book Your Appointment →
        </button>
      </div>
    </section>
  );
}
