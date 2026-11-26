import {
  PortfolioItem,
  ReelItem,
  ServiceItem,
  TestimonialItem,
  TrustPillar,
} from "@/types";

export const BRAND_CONFIG = {
  brandName: "GoldenBrush",
  brandSubline: "by Sumita",
  tagline: "ENHANCE. EMPOWER. ELEVATE.",
  location: "Delhi NCR & Nepal",
  academy: "UK International London Beauty School, New Delhi",
  experience: "2–3+ Years",
  phoneDisplay: "+91 8700836541",
  phoneRaw: "918700836541",
  email: "panditsumita9315@gmail.com",
  hours: "Mon – Sun: By Appointment",
  socials: {
    instagramHandle: "@goldenbrush.by.sumita",
    instagramUrl: "https://www.instagram.com/goldenbrush.by.sumita/",
    youtubeHandle: "@sumita_makeover",
    youtubeUrl: "https://www.youtube.com/@sumita_makeover",
    facebookUrl: "https://www.facebook.com/share/1GfWiVdH57/?mibextid=wwXIfr",
  },
};

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "certified-academy",
    title: "UK International Certified",
    description: "Trained at UK International London Beauty School, New Delhi",
    iconName: "gem",
  },
  {
    id: "customized-looks",
    title: "Makeup, Hair & Nails",
    description: "Complete bridal glam, hairstyling, saree draping & nail art",
    iconName: "wand",
  },
  {
    id: "on-location",
    title: "Delhi NCR & Nepal",
    description: "Available for on-location bridal & event bookings in both regions",
    iconName: "mapPin",
  },
  {
    id: "hygienic-safe",
    title: "Hygienic & Safe",
    description: "Sanitized brushes, luxury skin-safe brands & strict hygiene",
    iconName: "shieldCheck",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "Bespoke HD & Airbrush bridal transformations crafted to stay luminous from pheras to reception.",
    iconName: "crown",
    category: "Bridal",
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    description:
      "Soft glam to bold evening looks for wedding guests, cocktail nights, and family celebrations.",
    iconName: "sparkles",
    category: "Party",
  },
  {
    id: "engagement-mehendi",
    title: "Engagement & Mehendi",
    description:
      "Fresh, dewy daytime and sangeet-ready glam designed to complement floral and festive attire.",
    iconName: "flower",
    category: "Engagement",
  },
  {
    id: "hair-saree-draping",
    title: "Hair Styling & Draping",
    description:
      "Certified hairstyling—intricate bridal buns, soft waves, floral styling, dupatta & saree draping.",
    iconName: "scissors",
    category: "Bridal",
  },
  {
    id: "nail-art",
    title: "Nail Art & Extensions",
    description:
      "Custom bridal nail art, gel extensions, and luxury nail finishes by a certified Nail Art Expert.",
    iconName: "brush",
    category: "Bridal",
  },
  {
    id: "photoshoots-lessons",
    title: "Editorial & Makeup Lessons",
    description:
      "Camera-ready looks for pre-wedding & fashion shoots, plus one-on-one self-grooming lessons.",
    iconName: "camera",
    category: "Editorial",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "portfolio-bridal-1",
    title: "The Crimson Bride",
    category: "Bridal",
    imageSrc: "/images/portfolio-bridal.jpg",
    caption: "Bridal makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-bridal-2",
    title: "Bridal Radiance",
    category: "Bridal",
    imageSrc: "/images/portfolio-bridal-2.jpg",
    caption: "A bridal look created for a memorable celebration.",
  },
  {
    id: "portfolio-bridal-3",
    title: "Classic Bridal Glam",
    category: "Bridal",
    imageSrc: "/images/portfolio-bridal-3.jpg",
    caption: "Bridal makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-engagement",
    title: "Engagement Glow",
    category: "Engagement",
    imageSrc: "/images/portfolio-engagement.jpg",
    caption: "An engagement look for a special celebration.",
  },
  {
    id: "portfolio-engagement-1",
    title: "Celebration in Bloom",
    category: "Engagement",
    imageSrc: "/images/portfolio-engagement1.jpg",
    caption: "Engagement makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-model",
    title: "Editorial Model Look",
    category: "Model",
    imageSrc: "/images/portfolio-model.jpg",
    caption: "A camera-ready makeup look by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-party",
    title: "Soft Party Glam",
    category: "Party",
    imageSrc: "/images/portfolio-party.jpg",
    caption: "Party makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-party-1",
    title: "Evening Celebration",
    category: "Party",
    imageSrc: "/images/portfolio-party1.jpg",
    caption: "A polished look for an evening celebration.",
  },
  {
    id: "portfolio-party-2",
    title: "Fresh Occasion Glam",
    category: "Party",
    imageSrc: "/images/portfolio-party2.jpg",
    caption: "Party makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-traditional",
    title: "Traditional Elegance",
    category: "Traditional",
    imageSrc: "/images/portfolio-traditional.jpg",
    caption: "Traditional makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-traditional-1",
    title: "Festive Traditional Look",
    category: "Traditional",
    imageSrc: "/images/portfolio-traditional1.jpg",
    caption: "A traditional look for a festive celebration.",
  },
  {
    id: "portfolio-traditional-2",
    title: "Classic Cultural Glam",
    category: "Traditional",
    imageSrc: "/images/portfolio-traditional2.jpg",
    caption: "Traditional makeup and styling by GoldenBrush by Sumita.",
  },
  {
    id: "portfolio-traditional-3",
    title: "Timeless Traditional Style",
    category: "Traditional",
    imageSrc: "/images/portfolio-traditiona3.jpg",
    caption: "A timeless look for a special occasion.",
  },
  {
    id: "portfolio-original",
    title: "Evening Party Finish",
    category: "Party",
    imageSrc: "/images/portfolio-1.png",
    caption: "A finished occasion look by GoldenBrush by Sumita.",
  },
];

export const ABOUT_HIGHLIGHTS = [
  { label: "Experience", value: "2–3+ Years" },
  { label: "Certified From", value: "UK International" },
  { label: "Regions Served", value: "Delhi NCR & Nepal" },
  { label: "Specialties", value: "Makeup, Hair & Nails" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-1",
    quote:
      "Sumita did my bridal makeup and hairstyling and made me feel so comfortable from the very first trial. The base looked natural yet radiant in every photo and stayed flawless all night!",
    clientName: "Yashika",
    location: "Delhi NCR",
    service: "Bridal Makeup",
  },
  {
    id: "review-2",
    quote:
      "Booked Sumita for a family wedding party look and saree draping—everyone complimented how soft, luminous, and long-lasting my makeup was. Super punctual and warm!",
    clientName: "Kamini",
    location: "Delhi NCR",
    service: "Party Makeup",
  },
  {
    id: "review-3",
    quote:
      "Her nail art and extensions are top-notch! The gold-accented bridal nails held up beautifully without chipping, and her hygiene and attention to detail are unmatched.",
    clientName: "Sarika",
    location: "Delhi NCR",
    service: "Nail Art & Extensions",
  },
];

export const FEATURED_REELS: ReelItem[] = [
  {
    id: "reel-1",
    reelCode: "DdyZuitS2v9",
    url: "https://www.instagram.com/reel/DdyZuitS2v9/",
    badge: "Top Viewed Reel",
    title: "Signature Bridal Transformation",
  },
  {
    id: "reel-2",
    reelCode: "DfMs2r9zwf5",
    url: "https://www.instagram.com/reel/DfMs2r9zwf5/",
    badge: "Featured Reel",
    title: "Luminous Glam & Hairstyling",
  },
  {
    id: "reel-3",
    reelCode: "De6zOU6vHF9",
    url: "https://www.instagram.com/reel/De6zOU6vHF9/",
    badge: "Trending Look",
    title: "GoldenBrush Studio Showcase",
  },
];
