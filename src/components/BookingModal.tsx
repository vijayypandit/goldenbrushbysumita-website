"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, Mail } from "lucide-react";
import { BRAND_CONFIG, SERVICES } from "@/data/siteData";
import { BookingFormData } from "@/types";

interface BookingModalProps {
  isOpen: boolean;
  defaultService: string;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  defaultService,
  onClose,
}: BookingModalProps) {
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    phone: "",
    eventDate: "",
    service: defaultService,
    venueLocation: "",
    notes: "",
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, service: defaultService }));
  }, [defaultService]);

  if (!isOpen) return null;

  const buildInquiryText = () => {
    return [
      `Hello Sumita! I would like to inquire about booking with GoldenBrush by Sumita.`,
      `Name: ${form.name || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.service}`,
      `Event Date: ${form.eventDate || "Flexible / TBD"}`,
      `Venue / Area (Delhi NCR): ${form.venueLocation || "Not provided"}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(
      buildInquiryText()
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    const subject = `Makeup Booking Inquiry - ${form.service} (${form.eventDate || "Date TBD"})`;
    const url = `mailto:${BRAND_CONFIG.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildInquiryText())}`;
    window.location.href = url;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-espresso/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-ivory w-full max-w-lg rounded-sm shadow-2xl border border-gold/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-espresso text-ivory px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl text-white">
              Book Your Appointment
            </h3>
            <p className="text-xs text-gold-light">
              {BRAND_CONFIG.brandName} {BRAND_CONFIG.brandSubline} · {BRAND_CONFIG.location}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-ivory/70 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleWhatsApp();
          }}
          className="p-6 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/75 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold-dark"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/75 mb-1">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98XXX XXXXX"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/75 mb-1">
                Service
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold-dark"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/75 mb-1">
                Event Date
              </label>
              <input
                type="date"
                value={form.eventDate}
                onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold-dark"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/75 mb-1">
              Venue / Area in Delhi NCR
            </label>
            <input
              type="text"
              value={form.venueLocation}
              onChange={(e) =>
                setForm({ ...form, venueLocation: e.target.value })
              }
              placeholder="e.g., South Delhi, Gurugram, Noida"
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold-dark"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/75 mb-1">
              Additional Details
            </label>
            <textarea
              rows={2}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Number of looks, outfit colors, timing..."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-gold/30 rounded-sm focus:outline-none focus:border-gold-dark"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold-dark text-white text-xs font-semibold tracking-[0.14em] uppercase rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gold text-espresso hover:bg-champagne text-xs font-semibold tracking-[0.14em] uppercase rounded-sm transition-colors"
            >
              <Mail className="w-4 h-4 text-gold-dark" />
              <span>Send via Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
