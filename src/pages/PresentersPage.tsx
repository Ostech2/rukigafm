import React from 'react';
import { Mic2, Twitter, Facebook, Instagram, ShieldAlert, Sparkles } from 'lucide-react';
import { presentersData } from '../config/stationConfig';

export const PresentersPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-xs font-bold uppercase tracking-wider">
          <Mic2 size={14} />
          <span>Broadcast Presenters & On-Air Personalities</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          MEET OUR <span className="text-brand-gold">PRESENTERS</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          The distinctive voices guiding your mornings, mid-days, sports debates, rush-hour rides, and peaceful nights.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {presentersData.map((presenter) => (
          <div
            key={presenter.id}
            className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-gold/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={presenter.image}
                  alt={presenter.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-black shadow-md">
                    {presenter.role}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-white bg-brand-red px-2.5 py-1 rounded tracking-wide uppercase inline-block">
                    {presenter.show}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                  {presenter.name}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {presenter.bio}
                </p>
              </div>
            </div>

            {/* Socials & Verification */}
            <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
              <span>{presenter.show}</span>
              <div className="flex items-center gap-2">
                <a
                  href={presenter.socials.twitter}
                  className="p-1.5 rounded-lg bg-white/5 text-text-muted hover:text-brand-gold hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href={presenter.socials.facebook}
                  className="p-1.5 rounded-lg bg-white/5 text-text-muted hover:text-brand-gold hover:bg-white/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href={presenter.socials.instagram}
                  className="p-1.5 rounded-lg bg-white/5 text-text-muted hover:text-brand-gold hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
