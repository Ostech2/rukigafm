import React from 'react';
import { Mic2, Twitter, Facebook, Instagram, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { presentersData } from '../../config/stationConfig';

export const PresentersSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary/50 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
            <Mic2 size={14} />
            <span>Voices of Rukiga FM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            MEET OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-400">PRESENTERS</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3">
            The passionate broadcasters, journalists, and personalities bringing energy, insight, and local warmth to the soundwaves every day.
          </p>
        </div>

        {/* Presenters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {presentersData.map((presenter) => (
            <div
              key={presenter.id}
              className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-gold/50 overflow-hidden shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={presenter.image}
                  alt={presenter.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/20 to-transparent opacity-80" />
                
                {/* Host badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-brand-gold border border-white/10">
                    <Mic2 size={10} /> On Air
                  </span>
                </div>

                {/* Show Tag */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-bold text-white bg-brand-red/90 px-2 py-0.5 rounded tracking-wide uppercase inline-block truncate max-w-full">
                    {presenter.show}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-tight group-hover:text-brand-gold transition-colors truncate">
                    {presenter.name}
                  </h3>
                  <p className="text-brand-gold text-xs font-semibold mt-0.5">
                    {presenter.role}
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed mt-2 line-clamp-3">
                    {presenter.bio}
                  </p>
                </div>

                {/* Social links */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-end">
                  <div className="flex items-center gap-1.5">
                    <a
                      href={presenter.socials.twitter}
                      className="p-1 text-text-muted hover:text-brand-gold transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={14} />
                    </a>
                    <a
                      href={presenter.socials.facebook}
                      className="p-1 text-text-muted hover:text-brand-gold transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={14} />
                    </a>
                    <a
                      href={presenter.socials.instagram}
                      className="p-1 text-text-muted hover:text-brand-gold transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on official verification */}
        <div className="mt-12 text-center">
          <p className="text-xs text-text-muted italic inline-flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-full border border-white/5">
            <UserCheck size={14} className="text-brand-gold" />
            Presenter profiles are configured via station administration and will be updated with confirmed headshots and names upon broadcast launch.
          </p>
        </div>

      </div>
    </section>
  );
};
