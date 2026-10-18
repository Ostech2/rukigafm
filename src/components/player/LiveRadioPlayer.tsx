import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, AlertCircle, X, Sparkles, ExternalLink, Globe } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';
import { stationConfig } from '../../config/stationConfig';

export const LiveRadioPlayer: React.FC = () => {
  const {
    isPlaying,
    isBuffering,
    volume,
    isMuted,
    streamStatus,
    statusMessage,
    currentTitle,
    currentSubtitle,
    currentArtwork,
    sourceType,
    togglePlay,
    setVolume,
    toggleMute,
    playSampleBroadcast,
    dismissStatus,
  } = usePlayer();

  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside 
      aria-label="Live Radio Player"
      className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300"
    >
      {/* Toast Notification for stream message or error */}
      {statusMessage && (
        <div className="max-w-4xl mx-auto px-4 mb-2 animate-bounce-short">
          <div className="bg-background-card border border-brand-red/50 shadow-2xl rounded-xl p-3 flex items-center justify-between gap-3 text-sm backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <AlertCircle size={18} className="text-brand-gold shrink-0" />
              <span className="text-white font-medium">{statusMessage}</span>
              {streamStatus === 'not-configured' && (
                <button
                  onClick={playSampleBroadcast}
                  className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-black transition-colors"
                >
                  <Sparkles size={12} /> Test Player Audio Check
                </button>
              )}
            </div>
            <button
              onClick={dismissStatus}
              className="text-text-muted hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Main Bar */}
      <div className="bg-[#101015]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Programme Artwork & Info */}
            <div className="flex items-center gap-3.5 min-w-0 max-w-[45%] md:max-w-[35%]">
              <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-background-subtle border border-white/10 shadow-md">
                <img
                  src={currentArtwork}
                  alt={currentTitle}
                  className="w-full h-full object-cover"
                />
                {/* On-air badge on artwork */}
                <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-brand-red border-2 border-background-primary animate-pulse" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-red/15 text-brand-red border border-brand-red/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                    {sourceType === 'live' ? 'ON AIR' : sourceType === 'podcast' ? 'PODCAST' : 'AUDIO CHECK'}
                  </span>
                  <span className="hidden sm:inline-block text-[11px] text-text-muted font-medium">
                    {stationConfig.stationName}
                  </span>
                </div>
                
                <h4 className="text-white font-bold text-sm md:text-base truncate mt-0.5 tracking-tight">
                  {currentTitle}
                </h4>
                <p className="text-text-secondary text-xs truncate font-medium">
                  {currentSubtitle}
                </p>
              </div>
            </div>

            {/* Center: Play Controls & Sound Wave Animation */}
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex items-center gap-3 md:gap-4">
                
                {/* Play / Pause Main Button */}
                <button
                  onClick={togglePlay}
                  disabled={isBuffering}
                  aria-label={isPlaying ? 'Pause broadcast' : 'Play live broadcast'}
                  className="relative group p-3.5 md:p-4 rounded-full bg-gradient-to-r from-brand-red to-red-600 text-white shadow-lg shadow-brand-red/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  {isBuffering ? (
                    <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isPlaying ? (
                    <Pause size={22} className="md:w-6 md:h-6 fill-current" />
                  ) : (
                    <Play size={22} className="md:w-6 md:h-6 fill-current translate-x-0.5" />
                  )}
                  {/* Outer pulse when playing */}
                  {isPlaying && (
                    <span className="absolute -inset-1 rounded-full border border-brand-red/60 animate-ping opacity-40 pointer-events-none" />
                  )}
                </button>

                {/* Animated Sound Waves Display */}
                <div className="hidden lg:flex items-center gap-1 h-6 px-3 bg-black/40 rounded-full border border-white/5">
                  <span className={`w-1 bg-brand-red rounded-full transition-all duration-300 ${isPlaying ? 'h-5 animate-pulse' : 'h-1.5 opacity-40'}`} />
                  <span className={`w-1 bg-brand-gold rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-soundwave' : 'h-1.5 opacity-40'}`} style={{ animationDelay: '0.2s' }} />
                  <span className={`w-1 bg-brand-red rounded-full transition-all duration-300 ${isPlaying ? 'h-6 animate-pulse' : 'h-1.5 opacity-40'}`} style={{ animationDelay: '0.4s' }} />
                  <span className={`w-1 bg-brand-gold rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-soundwave' : 'h-1.5 opacity-40'}`} style={{ animationDelay: '0.1s' }} />
                  <span className={`w-1 bg-brand-red rounded-full transition-all duration-300 ${isPlaying ? 'h-2 animate-pulse' : 'h-1.5 opacity-40'}`} style={{ animationDelay: '0.3s' }} />
                </div>
              </div>

              {/* Status Indicator */}
              <div className="text-[11px] font-medium flex items-center gap-1.5 text-text-muted">
                {isPlaying ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Broadcasting Live High Quality
                  </span>
                ) : (
                  <span>Click to Listen Live</span>
                )}
              </div>
            </div>

            {/* Right: Volume & Station Identity */}
            <div className="flex items-center justify-end gap-3 min-w-[20%] md:min-w-[25%]">
              
              {/* Volume Slider */}
              <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <button
                  onClick={toggleMute}
                  className="text-text-secondary hover:text-white transition-colors focus:outline-none"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX size={18} className="text-brand-red" /> : <Volume2 size={18} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  aria-label="Volume slider"
                  className="w-16 md:w-24 h-1.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
              </div>

              {/* Station Tag & rukigafm.com Online Stream Link */}
              <div className="flex items-center gap-2">
                <a
                  href={stationConfig.onlineWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Listen on official rukigafm.com web portal"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/15 hover:bg-brand-gold text-brand-gold hover:text-black border border-brand-gold/30 text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <Globe size={13} />
                  <span className="hidden sm:inline">rukigafm.com</span>
                  <ExternalLink size={11} />
                </a>

                <div className="hidden xl:flex flex-col text-right">
                  <span className="text-xs font-bold text-white tracking-wider">
                    EKICUNCU
                  </span>
                  <span className="text-[10px] text-brand-gold font-medium">
                    Western Uganda
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </aside>
  );
};
