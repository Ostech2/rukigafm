import React, { useState } from 'react';
import { Headphones, Play, Pause, Calendar, Clock, Search, Filter } from 'lucide-react';
import { podcastsData } from '../config/stationConfig';
import { usePlayer } from '../context/PlayerContext';

export const PodcastsPage: React.FC = () => {
  const { playPodcast, isPlaying, currentTitle, sourceType, togglePlay } = usePlayer();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShow, setSelectedShow] = useState('All Shows');

  const shows = ['All Shows', 'ORUUME PROGRAM', 'AMANI GOMUKOZI', 'SPORTS MAGAZINE', 'KURIKAYO'];

  const filteredEpisodes = podcastsData.filter((ep) => {
    const matchesShow = selectedShow === 'All Shows' || ep.programmeName === selectedShow;
    const matchesSearch =
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesShow && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-xs font-bold uppercase tracking-wider">
          <Headphones size={14} />
          <span>On-Demand Radio Archive</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          PODCASTS & <span className="text-brand-gold">RECORDED SHOWS</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          Never miss an episode. Stream full recorded editions, keynote community interviews, and sports analyses directly in your browser.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
          {shows.map((show) => (
            <button
              key={show}
              onClick={() => setSelectedShow(show)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedShow === show
                  ? 'bg-brand-gold text-black shadow-md shadow-brand-gold/20'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {show}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search podcast episodes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-xs focus:outline-none focus:border-brand-gold"
          />
        </div>
      </div>

      {/* Episodes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEpisodes.map((episode) => {
          const isThisEpisodePlaying = isPlaying && sourceType === 'podcast' && currentTitle === episode.title;

          return (
            <div
              key={episode.id}
              className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-gold/40 p-6 shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start justify-between"
            >
              {/* Artwork */}
              <div className="relative w-full sm:w-44 aspect-video sm:aspect-square rounded-xl overflow-hidden shrink-0 bg-neutral-900">
                <img
                  src={episode.artwork}
                  alt={episode.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                
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
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
                >
                  {isThisEpisodePlaying ? (
                    <Pause size={20} className="fill-current" />
                  ) : (
                    <Play size={20} className="fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white">
                    {episode.programmeName}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Clock size={11} className="text-brand-gold" /> {episode.duration}
                  </span>
                </div>

                <h3 className="font-extrabold text-white text-lg leading-snug group-hover:text-brand-gold transition-colors">
                  {episode.title}
                </h3>

                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {episode.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-brand-gold" />
                    <span>{episode.date}</span>
                    <span>•</span>
                    <span>{episode.presenter}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (isThisEpisodePlaying) {
                        togglePlay();
                      } else {
                        playPodcast(episode);
                      }
                    }}
                    className="font-bold text-xs text-brand-gold hover:text-white uppercase tracking-wider"
                  >
                    {isThisEpisodePlaying ? 'Pause Audio' : 'Play Audio'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
