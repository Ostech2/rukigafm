import React from 'react';
import { TrendingUp, ArrowRight, Target, Radio, Megaphone, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvertisingBanner: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17171E] via-[#1A1520] to-[#251014] border border-brand-red/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
        
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-xs font-bold uppercase tracking-wider">
              <Megaphone size={14} />
              <span>Commercial & Sponsored Partnerships</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              GROW YOUR BRAND WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-300">RUKIGA FM</span>
            </h2>

            <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed">
              Connect directly with hundreds of thousands of engaged listeners, households, farmers, and commercial traders across Rukiga District, Kigezi, and Western Uganda.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <Radio size={18} className="text-brand-red mb-1.5" />
                <span className="text-xs font-bold text-white block">Spot Ads & Jingles</span>
                <span className="text-[11px] text-text-muted">High frequency spots</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <Target size={18} className="text-brand-gold mb-1.5" />
                <span className="text-xs font-bold text-white block">Sponsored Shows</span>
                <span className="text-[11px] text-text-muted">Brand ownership</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <Users size={18} className="text-brand-red mb-1.5" />
                <span className="text-xs font-bold text-white block">Event Broadcasts</span>
                <span className="text-[11px] text-text-muted">On-site live OB</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <TrendingUp size={18} className="text-brand-gold mb-1.5" />
                <span className="text-xs font-bold text-white block">Digital Packages</span>
                <span className="text-[11px] text-text-muted">Web & social reach</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <Link
              to="/advertising"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-black text-sm tracking-wider uppercase text-white bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-brand-red shadow-xl shadow-brand-red/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Request Media Rate Card</span>
              <ArrowRight size={18} />
            </Link>

            <span className="text-xs text-text-muted italic">
              Customized advertising packages tailored for local SMEs & national brands.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
