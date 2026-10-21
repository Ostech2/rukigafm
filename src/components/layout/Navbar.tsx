import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Radio, Volume2, Globe, ExternalLink, Facebook } from 'lucide-react';
import { Logo } from '../common/Logo';
import { usePlayer } from '../../context/PlayerContext';
import { stationConfig } from '../../config/stationConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isPlaying, playLiveStream } = usePlayer();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programmes', path: '/programmes' },
    { name: 'Presenters', path: '/presenters' },
    { name: 'News', path: '/news' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Advertising', path: '/advertising' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-gold bg-white/5 font-bold shadow-sm'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: rukigafm.com link, Listen Live Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* ONLINE STREAM PORTAL: rukigafm.com */}
            <a
              href={stationConfig.onlineWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Official Streaming Website: rukigafm.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-brand-gold bg-brand-gold/10 hover:bg-brand-gold hover:text-black border border-brand-gold/30 transition-all duration-200"
            >
              <Globe size={13} />
              <span>rukigafm.com</span>
              <ExternalLink size={11} />
            </a>

            {/* LISTEN LIVE BUTTON */}
            <button
              onClick={playLiveStream}
              aria-label="Listen Live to RUKIGA FM"
              className="relative group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-brand-red shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="uppercase tracking-wider">
                {isPlaying ? 'ON AIR NOW' : 'LISTEN LIVE'}
              </span>
              <Radio size={16} className={isPlaying ? 'animate-pulse text-white' : 'text-white/80'} />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-[#0E0E12]/98 border-b border-white/10 backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'text-brand-gold bg-white/10 font-bold border-l-4 border-brand-gold'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span>{link.name}</span>
              <span className="text-xs text-text-muted">→</span>
            </NavLink>
          ))}

          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                playLiveStream();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-red text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-brand-red/30"
            >
              <Radio size={18} />
              <span>{isPlaying ? 'Tune In Live (Broadcasting)' : 'Listen Live To Rukiga FM'}</span>
            </button>

            <a
              href={stationConfig.onlineWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30 font-bold text-xs tracking-wider uppercase hover:bg-brand-gold hover:text-black transition-colors"
            >
              <Globe size={16} />
              <span>Visit Online Portal: rukigafm.com</span>
              <ExternalLink size={14} />
            </a>

            {/* Follow on Facebook & X */}
            <div className="flex items-center justify-center gap-2.5 pt-1">
              <a
                href={stationConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-white text-xs font-semibold"
              >
                <Facebook size={14} className="text-blue-400" />
                <span>Facebook</span>
              </a>
              <a
                href={stationConfig.socialLinks.x}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X @rukigafm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
