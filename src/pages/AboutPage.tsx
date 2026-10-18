import React from 'react';
import { Radio, Heart, Target, Eye, ShieldCheck, Users, Sparkles, MapPin } from 'lucide-react';
import { stationConfig } from '../config/stationConfig';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background-card via-[#1A1A22] to-background-card border border-white/10 p-8 sm:p-14 text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200')` }} />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/15 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
            <Radio size={14} />
            <span>About The Station</span>
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            RUKIGA FM — <span className="text-brand-gold">EKICUNCU</span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-gold italic font-medium">
            "{stationConfig.slogan}"
          </p>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed pt-2">
            Broadcasting with heart, purpose, and cultural resonance. We are Western Uganda's premier community media platform, giving an authentic voice to our people, our heritage, and our aspirations.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl p-8 bg-background-card border border-white/10 shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-red/15 text-brand-red border border-brand-red/30 flex items-center justify-center">
            <Target size={26} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">
            Our Mission
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            To inform, educate, inspire, and entertain the people of Rukiga District, Kigezi, and Western Uganda through trustworthy journalism, culturally enriching programming, and grassroots dialogue that empowers every listener.
          </p>
        </div>

        <div className="rounded-2xl p-8 bg-background-card border border-white/10 shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30 flex items-center justify-center">
            <Eye size={26} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">
            Our Vision
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            To stand as the most trusted, vibrant, and impactful radio broadcasting voice in the region, bridging local communities with national and global opportunities while preserving our cherished linguistic and cultural identity.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Core Values & Broadcasting Ethics
          </h2>
          <p className="text-text-muted text-sm mt-2">
            The principles that anchor every bulletin, discussion, and melody we broadcast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-white text-base">Editorial Integrity</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Committed to unbiased, verified, and responsible news reporting that respects factual accuracy above sensationalism.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <Users size={20} />
            </div>
            <h3 className="font-bold text-white text-base">Community Solidarity</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Prioritizing grassroots matters: agricultural advice, healthcare access, local enterprise, and uplifting rural families.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
              <Heart size={20} />
            </div>
            <h3 className="font-bold text-white text-base">Cultural Heritage</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Celebrating Rukiga customs, proverbs, indigenous folk music, and linguistic richness across generations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <h3 className="font-bold text-white text-base">Media Innovation</h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Leveraging crystal-clear broadcasting standards and modern digital streaming to reach the diaspora worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Community Connection & Notice */}
      <div className="rounded-2xl p-8 bg-background-card border border-white/10 space-y-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
          <MapPin size={20} className="text-brand-red" />
          The EKICUNCU Identity & Regional Roots
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          The name <span className="text-brand-gold font-bold">EKICUNCU</span> symbolizes warmth, gathering, and the central meeting place where news and companionship are shared. As RUKIGA FM prepares its full terrestrial and digital footprint, our commitment remains anchored in serving the terrace-farming communities, market traders, youth innovators, and elders who make this land so unique.
        </p>
        <div className="pt-2 text-xs text-text-muted italic border-t border-white/5">
          * Factual milestones, exact broadcast transmitter coordinates, and license filings remain editable in the central configuration as station leadership confirms official launch updates.
        </div>
      </div>

    </div>
  );
};
