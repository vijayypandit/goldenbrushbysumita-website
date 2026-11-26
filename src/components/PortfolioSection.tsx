"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { BRAND_CONFIG, PORTFOLIO_ITEMS } from "@/data/siteData";
import { PortfolioItem, ServiceCategory } from "@/types";

const CATEGORIES: ServiceCategory[] = [
  "All",
  "Bridal",
  "Party",
  "Engagement",
  "Traditional",
  "Model",
];

function PortfolioCard({
  item,
  onSelect,
}: {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`View ${item.title}, ${item.category}`}
      className="group relative block w-full aspect-[4/5] overflow-hidden rounded-md bg-champagne text-left shadow-[0_12px_28px_-14px_rgba(58,36,43,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
    >
      {!imgError ? (
        <img
          src={item.imageSrc}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#FFF8FA] to-[#F2D7DE] p-5 text-center">
          <Sparkles className="mb-3 h-7 w-7 text-gold-dark" />
          <p className="font-serif text-lg text-espresso">{item.title}</p>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-espresso/25 via-transparent to-espresso/85 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wide text-espresso shadow-sm backdrop-blur-sm">
        {item.category}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="font-serif text-lg leading-tight text-white sm:text-xl">
          {item.title}
        </p>
        <p className="mt-1 text-xs text-white/80">{item.caption}</p>
      </div>
    </button>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("All");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, filtered.length - slidesPerView);

  useEffect(() => {
    setCurrentIndex((previous) => (previous > maxIndex ? 0 : previous));
  }, [activeCategory, maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((previous) => (previous >= maxIndex ? 0 : previous + 1));
  }, [maxIndex]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((previous) => (previous <= 0 ? maxIndex : previous - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || lightboxItem || maxIndex === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(nextSlide, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused, lightboxItem, maxIndex, nextSlide]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-y border-gold/15 bg-gradient-to-b from-[#FFF7F9] via-ivory to-[#FFF9FA] py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 h-80 w-80 rounded-full bg-[#F2D7DE]/35 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-gold-dark">
              A closer look at our work
            </p>
            <h2 className="font-serif text-3xl font-medium text-espresso sm:text-4xl">
              Looks for every celebration
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-espresso/70">
              Browse real bridal, party, engagement, traditional, and editorial
              looks created by GoldenBrush by Sumita.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold-dark transition-colors hover:text-espresso"
          >
            More on Instagram
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div
          className="mb-7 flex flex-wrap gap-2"
          aria-label="Filter portfolio by look"
        >
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? PORTFOLIO_ITEMS.length
                : PORTFOLIO_ITEMS.filter((item) => item.category === category)
                    .length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0);
                }}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 ${
                  activeCategory === category
                    ? "border-espresso bg-espresso text-white"
                    : "border-gold/30 bg-white/80 text-espresso/75 hover:border-gold-dark hover:text-espresso"
                }`}
              >
                {category}
                <span className="ml-1.5 opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs text-espresso/60">
            {activeCategory === "All" ? "All looks" : `${activeCategory} looks`}
            <span className="ml-1">({filtered.length})</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-label={isPaused ? "Play portfolio slider" : "Pause portfolio slider"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white text-espresso/75 transition-colors hover:border-gold-dark hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous portfolio images"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white text-espresso transition-colors hover:border-gold-dark hover:bg-gold-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next portfolio images"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-white text-espresso transition-colors hover:border-gold-dark hover:bg-gold-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
            }}
          >
            {filtered.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-1.5 sm:px-2"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <PortfolioCard item={item} onSelect={setLightboxItem} />
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show portfolio slide ${index + 1}`}
                aria-current={currentIndex === index}
                className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  currentIndex === index
                    ? "w-7 bg-gold-dark"
                    : "w-2 bg-gold/35 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxItem.category}: ${lightboxItem.title}`}
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-lg bg-ivory shadow-2xl md:grid-cols-[1.2fr_0.8fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex max-h-[65vh] items-center justify-center bg-espresso md:max-h-[82vh]">
              <img
                src={lightboxItem.imageSrc}
                alt={lightboxItem.title}
                className="max-h-[65vh] w-full object-contain md:max-h-[82vh]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <span className="mb-3 text-xs font-semibold text-gold-dark">
                {lightboxItem.category}
              </span>
              <h3 className="font-serif text-2xl text-espresso sm:text-3xl">
                {lightboxItem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                {lightboxItem.caption}
              </p>
              <a
                href={BRAND_CONFIG.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-gold-dark hover:text-espresso"
              >
                See more on Instagram
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-espresso shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
