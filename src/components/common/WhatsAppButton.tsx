import React from 'react';
import { MessageCircle } from 'lucide-react';
import { stationConfig } from '../../config/stationConfig';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${stationConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello RUKIGA FM — EKICUNCU! I am tuning in and would like to connect with the studio.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RUKIGA FM on WhatsApp"
      className="fixed bottom-24 right-5 sm:right-8 z-40 group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <MessageCircle size={24} className="fill-current animate-pulse-subtle" />
      <span className="hidden sm:inline-block font-bold text-xs uppercase tracking-wider">
        Chat With Studio
      </span>
      {/* Pulse wave ring */}
      <span className="absolute -inset-1 rounded-full border border-[#25D366] animate-ping opacity-30 pointer-events-none" />
    </a>
  );
};
