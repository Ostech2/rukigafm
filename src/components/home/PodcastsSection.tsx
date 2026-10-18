import React from 'react';
import { Headphones, Play, Pause, Calendar, Clock, ArrowRight, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import { podcastsData } from '../../config/stationConfig';
import { usePlayer } from '../../context/PlayerContext';

export const PodcastsSection: React.FC = () => {
  const { playPodcast, isPlaying, currentTitle, sourceType, togglePlay } = usePlayer();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-3">
              <Headphones size={14} />
              <span>Catch-Up On Demand</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              PODCASTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-400">RECORDED SHOWS</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3">
              Missed a live broadcast? Listen back to highlight interviews, sports roundups, community discussions, and special features at your convenience.
            </p>
          </div>

          <Link
            to="/podcasts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-brand-gold font-bold text-sm tracking-wide border border-white/10 hover:border-brand-gold/40 transition-all self-start md:self-auto"
          >
            <span>Explore All Episodes</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Podcast Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {podcastsData.map((episode) => {
            const isThisEpisodePlaying = isPlaying && sourceType === 'podcast' && currentTitle === episode.title;

            return (
              <div
                key={episode.id}
                className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-gold/40 overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Artwork & Play overlay */}
                  <div className="relative aspect-video overflow-hidden bg-neutral-900">
                    <img
                      src={episode.artwork}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/40 to-transparent" />
                    
                    {/* Programme Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white shadow-sm">
                        {episode.programmeName}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded">
                        <Clock size={11} className="text-brand-gold" /> {episode.duration}
                      </span>
                    </div>

                    {/* Play Button Overlay */}
                    <button
                      onClick={() => {
                        if (isThisEpisodePlaying) {
                          togglePlay();
                        } else {
                          playPodcast(episode);
                        }
                      }}
                      aria-label={`Play ${episode.title}`}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
                    >
                      {isThisEpisodePlaying ? (
                        <Pause size={20} className="fill-current" />
                      ) : (
                        <Play size={20} className="fill-current translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <Calendar size={12} className="text-brand-gold" />
                      <span>{episode.date}</span>
                      <span>•</span>
                      <span className="truncate">{episode.presenter}</span>
                    </div>

                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                      {episode.title}
                    </h3>

                    <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                      {episode.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      if (isThisEpisodePlaying) {
                        togglePlay();
                      } else {
                        playPodcast(episode);
                      }
                    }}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
                      isThisEpisodePlaying
                        ? 'bg-brand-gold text-black'
                        : 'bg-white/5 hover:bg-white/10 text-white'
                    }`}
                  >
                    {isThisEpisodePlaying ? (
                      <>
                        <Pause size={13} className="fill-current" />
                        <span>Now Playing</span>
                      </>
                    ) : (
                      <>
                        <Play size={13} className="fill-current" />
                        <span>Listen Episode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
