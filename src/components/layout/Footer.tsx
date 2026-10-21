import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Phone, Mail, MapPin, MessageSquare, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import { Logo } from '../common/Logo';
import { stationConfig, officialProgrammes } from '../../config/stationConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-16 pb-28 sm:pb-24 text-text-secondary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" showSlogan={true} />
            
            <p className="text-sm leading-relaxed text-text-muted mt-3">
              {stationConfig.description}
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-brand-gold">
                Official Station Slogan
              </span>
              <p className="text-xs text-white italic font-medium">
                "{stationConfig.slogan}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={stationConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 hover:border-brand-red/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={stationConfig.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 hover:border-brand-red/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={stationConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 hover:border-brand-red/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={stationConfig.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 hover:border-brand-red/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-red pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">
                  About Rukiga FM
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="hover:text-brand-gold transition-colors">
                  Show Timetable
                </Link>
              </li>
              <li>
                <Link to="/presenters" className="hover:text-brand-gold transition-colors">
                  Meet Presenters
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-brand-gold transition-colors">
                  News & Features
                </Link>
              </li>
              <li>
                <Link to="/podcasts" className="hover:text-brand-gold transition-colors">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link to="/advertising" className="hover:text-brand-gold transition-colors">
                  Advertise With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: 5 Official Flagship Programmes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-gold pl-2.5">
              Weekday Shows (Mon - Fri)
            </h4>
            <ul className="space-y-2 text-xs">
              {officialProgrammes.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to="/programmes"
                    className="block p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-colors border border-white/5 hover:border-brand-red/30"
                  >
                    <span className="font-bold text-white block truncate">{prog.title}</span>
                    <span className="text-[11px] text-text-muted">{prog.timeSlot}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Contact & Feedback */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-brand-red pl-2.5">
              Studio & Contact
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-red shrink-0 mt-0.5" />
                <span>{stationConfig.contact.studioAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <div className="flex items-center gap-1.5 flex-wrap">
                  <a href={`tel:${stationConfig.contact.studioLine1.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors font-semibold">
                    {stationConfig.contact.studioLine1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${stationConfig.contact.studioLine2.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors font-semibold">
                    {stationConfig.contact.studioLine2}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-white/60 shrink-0" />
                <div className="flex items-center gap-1.5">
                  <span className="text-text-muted">Reception:</span>
                  <a href={`tel:${stationConfig.contact.receptionLine.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors font-semibold text-white">
                    {stationConfig.contact.receptionLine}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-red shrink-0" />
                <span className="truncate">{stationConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare size={16} className="text-emerald-400 shrink-0" />
                <span>WhatsApp: {stationConfig.contact.whatsappFormatted}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-white/10 hover:bg-brand-red transition-colors border border-white/10"
              >
                Send Studio Message
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">RUKIGA FM — EKICUNCU</span>. All rights reserved. Eiraka ryaitu, omwoyo gwaitu.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={stationConfig.onlineWebsiteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold hover:text-white transition-colors font-bold uppercase tracking-wider text-[11px]"
            >
              Portal: rukigafm.com ↗
            </a>
            <span>Western Uganda Network</span>
            <Link to="/about" className="hover:text-white transition-colors">
              Editorial Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
