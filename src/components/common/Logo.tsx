import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSlogan?: boolean;
  imageOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSlogan = false, imageOnly = false }) => {
  const imgSizeClass =
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-11 h-11 sm:w-12 sm:h-12';
  const mainTextSize =
    size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl';
  const subTextSize =
    size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs sm:text-sm' : 'text-xs';
  const fmBadgeSize =
    size === 'sm' ? 'w-5 h-5 text-[10px]' : size === 'lg' ? 'w-7 h-7 text-xs' : 'w-5 sm:w-6 h-5 sm:h-6 text-[11px]';

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-xl p-1 transition-transform duration-200"
    >
      {/* Official Uploaded Logo Emblem Badge */}
      <div className="relative shrink-0 flex items-center justify-center">
        <div className={`${imgSizeClass} rounded-xl overflow-hidden border-2 border-brand-red/50 shadow-lg shadow-brand-red/25 group-hover:scale-105 group-hover:border-brand-gold transition-all duration-300 bg-neutral-900`}>
          <img
            src="/images/rukiga-fm-logo.png"
            alt="RUKIGA FM Ekicuncu Official Logo"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Active broadcasting dot indicator */}
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-red border-2 border-background-primary animate-pulse" />
      </div>

      {!imageOnly && (
        <div className="flex flex-col justify-center">
          {/* Main Logo Text with soundwave & gold FM circle */}
          <div className="flex items-center gap-1.5 leading-none">
            {/* White sound wave bars matching the logo emblem */}
            <span className="hidden sm:inline-flex items-center gap-0.5 mr-0.5 text-white">
              <span className="w-0.5 h-2.5 bg-white rounded-full inline-block" />
              <span className="w-0.5 h-4 bg-white rounded-full inline-block" />
              <span className="w-0.5 h-5.5 bg-white rounded-full inline-block" />
              <span className="w-0.5 h-4 bg-white rounded-full inline-block" />
              <span className="w-0.5 h-2.5 bg-white rounded-full inline-block" />
            </span>

            <span className={`font-black tracking-tight text-white uppercase ${mainTextSize} group-hover:text-brand-gold transition-colors`}>
              RUKIGA
            </span>

            {/* Circular Gold FM Badge matching official artwork */}
            <span className={`${fmBadgeSize} rounded-full bg-brand-gold text-black font-black flex items-center justify-center shadow-md shadow-brand-gold/30 shrink-0`}>
              FM
            </span>
          </div>

          {/* Subtitle: "Ekicuncu" */}
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`font-bold text-white/90 tracking-wide ${subTextSize}`}>
              "Ekicuncu"
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};
