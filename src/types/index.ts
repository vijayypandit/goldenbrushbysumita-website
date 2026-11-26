export type ServiceCategory =
  | "All"
  | "Bridal"
  | "Party"
  | "Engagement"
  | "Editorial"
  | "Traditional"
  | "Model";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "crown" | "sparkles" | "flower" | "scissors" | "camera" | "brush";
  category: Exclude<ServiceCategory, "All">;
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: "gem" | "wand" | "mapPin" | "shieldCheck";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "All">;
  imageSrc: string;
  caption: string;
}

export interface ReelItem {
  id: string;
  reelCode: string;
  url: string;
  badge: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  service: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  eventDate: string;
  service: string;
  venueLocation: string;
  notes: string;
}
