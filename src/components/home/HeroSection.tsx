import React from 'react';
import { Play, Calendar, Radio, Sparkles, Volume2, ArrowRight, ExternalLink, Globe, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import { stationConfig } from '../../config/stationConfig';

export const HeroSection: React.FC = () => {
  const { isPlaying, playLiveStream } = usePlayer();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Studio Photography with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=85&w=1920&auto=format&fit=crop"
          alt="Modern African Radio Studio with Professional Broadcasting Microphone"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Layered dark overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
        {/* Radial highlight for the red/gold brand accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Official Station Brand Logo Emblem */}
        <div className="mb-6 relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-red/60 shadow-2xl shadow-brand-red/30 bg-neutral-900 group-hover:scale-105 group-hover:border-brand-gold transition-all duration-300">
            <img
              src="/images/rukiga-fm-logo.png"
              alt="RUKIGA FM Ekicuncu Official Station Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand-red border-2 border-background-primary animate-pulse" />
        </div>

        {/* ON AIR Badge & Broadcast Status */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md mb-6 shadow-xl animate-fade-in">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
          </span>
          <span className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            <span>ON AIR</span>
            <span className="text-white/40">|</span>
            <span className="text-brand-gold font-semibold">EKICUNCU LIVE</span>
          </span>
          {/* Subtle sound wave in badge */}
          <div className="flex items-center gap-0.5 h-3.5 ml-1">
            <span className="w-0.5 h-2 bg-brand-gold rounded-full animate-pulse" />
            <span className="w-0.5 h-3.5 bg-brand-red rounded-full animate-soundwave" />
            <span className="w-0.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
          </div>
        </div>

        {/* Primary Station Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-4">
          <span className="block drop-shadow-sm">RUKIGA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">FM</span></span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-brand-gold mt-2">
            EKICUNCU
          </span>
        </h1>

        {/* Supporting Quote text */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed font-normal mb-8 italic">
          “Your destination for music, news, conversations, entertainment, sports, and the stories that bring our communities together. Tune in and be part of the experience.”
        </p>

        {/* Two Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* 1. LISTEN LIVE */}
          <button
            onClick={playLiveStream}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-brand-red shadow-xl shadow-brand-red/40 hover:shadow-brand-red/60 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-red/40"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Play size={18} className="fill-current translate-x-0.5 group-hover:scale-110 transition-transform" />
            </div>
            <span>{isPlaying ? 'PLAYING ON AIR' : 'LISTEN LIVE'}</span>
          </button>

          {/* 2. EXPLORE OUR PROGRAMMES */}
          <Link
            to="/programmes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-brand-gold/60 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <Calendar size={18} className="text-brand-gold" />
            <span>EXPLORE OUR PROGRAMMES</span>
            <ArrowRight size={16} className="text-text-muted group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* 3. VISIT RUKIGAFM.COM */}
          <a
            href={stationConfig.onlineWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open official rukigafm.com online portal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-bold tracking-wide text-brand-gold bg-brand-gold/10 hover:bg-brand-gold hover:text-black border border-brand-gold/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <Globe size={18} />
            <span>RUKIGAFM.COM</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Social Follow Pill in Hero */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs text-text-muted">
          <span className="font-semibold text-white/70">Connect with us:</span>
          <a
            href={stationConfig.socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-blue-600/20 text-white hover:text-blue-400 border border-white/10 transition-colors font-semibold"
          >
            <Facebook size={13} className="text-blue-400" />
            <span>Facebook @rukigafm</span>
          </a>
          <a
            href={stationConfig.socialLinks.x}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors font-semibold"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X @rukigafm</span>
          </a>
        </div>

        {/* Sound wave graphic visual */}
        <div className="flex items-center gap-1.5 h-10 px-6 py-2 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
          <span className="text-[11px] font-bold tracking-widest text-text-muted uppercase mr-2 flex items-center gap-1.5">
            <Radio size={14} className="text-brand-red" />
            BROADCAST FREQUENCY
          </span>
          {[40, 70, 30, 90, 60, 100, 45, 80, 95, 50, 75, 35, 85, 60, 90, 40, 65, 30].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full ${i % 3 === 0 ? 'bg-brand-red' : i % 3 === 1 ? 'bg-brand-gold' : 'bg-white'}`}
              style={{
                height: `${h}%`,
                animation: `pulse 1.${(i % 5) + 2}s infinite ease-in-out alternate`,
                animationDelay: `${i * 0.08}s`
              }}
            />
          ))}
          <span className="text-[11px] font-bold text-brand-gold uppercase ml-2">
            KIGEZI & WORLDWIDE
          </span>
        </div>

        {/* Key Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl pt-6 border-t border-white/10">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left">
            <span className="text-brand-gold font-bold text-xs uppercase block">5 Flagship Shows</span>
            <span className="text-white text-sm font-semibold">Monday – Friday</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left">
            <span className="text-brand-red font-bold text-xs uppercase block">Community First</span>
            <span className="text-white text-sm font-semibold">Grassroots & Farming</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left">
            <span className="text-brand-gold font-bold text-xs uppercase block">Sports Coverage</span>
            <span className="text-white text-sm font-semibold">Local & Global Action</span>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left">
            <span className="text-brand-red font-bold text-xs uppercase block">Digital Streaming</span>
            <span className="text-white text-sm font-semibold">High Definition Audio</span>
          </div>
        </div>

      </div>
    </section>
  );
};
