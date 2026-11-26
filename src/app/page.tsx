"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReelsSection from "@/components/ReelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Bridal Makeup");

  const openBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar onBookClick={() => openBooking()} />

      <main className="flex-1">
        <Hero onBookClick={() => openBooking("Bridal Makeup")} />
        <TrustStrip />
        <ServicesSection onBookService={(service) => openBooking(service)} />
        <PortfolioSection />
        <ReelsSection />
        <TestimonialsSection />
        <CtaBanner onBookClick={() => openBooking()} />
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        defaultService={selectedService}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
