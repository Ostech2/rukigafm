import React, { useState } from 'react';
import { Calendar, Clock, User, Radio, ArrowRight, Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { officialProgrammes } from '../../config/stationConfig';
import { Programme } from '../../types';
import { usePlayer } from '../../context/PlayerContext';
import { ProgramDetailModal } from '../common/ProgramDetailModal';

export const ProgrammesShowcase: React.FC = () => {
  const { playLiveStream } = usePlayer();
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);

  return (
    <section id="programmes-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Radio size={14} />
            <span>Official Station Lineup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">PROGRAMMES</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3">
            Discover the shows, conversations, music, and voices that make RUKIGA FM your daily companion.
          </p>
        </div>

        <Link
          to="/programmes"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-brand-gold font-bold text-sm tracking-wide border border-white/10 hover:border-brand-gold/40 transition-all self-start md:self-auto"
        >
          <span>View Full Weekly Timetable</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Official Programmes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {officialProgrammes.map((prog, index) => (
          <div
            key={prog.id}
            className={`group rounded-2xl overflow-hidden bg-background-card border border-white/10 hover:border-brand-red/50 shadow-xl transition-all duration-300 flex flex-col ${
              index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {/* Image & Badges */}
            <div className={`relative overflow-hidden ${index === 0 ? 'h-64 sm:h-80' : 'h-52'}`}>
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/40 to-transparent" />
              
              {/* Day Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/10">
                  {prog.days.length === 5 && prog.days.includes('Monday') && prog.days.includes('Friday')
                    ? 'Mon – Fri'
                    : prog.days.join(' & ')}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-brand-gold text-black">
                  #{index + 1}
                </span>
              </div>

              {/* Time Slot Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-semibold text-brand-gold border border-white/10">
                  <Clock size={13} />
                  <span>{prog.timeSlot}</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand-red transition-colors">
                  {prog.title}
                </h3>
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mt-1">
                  {prog.subtitle}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mt-3">
                  {prog.description}
                </p>
              </div>

              {/* Presenter / Host Indicator */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-brand-red shrink-0" />
                  <span className="truncate font-medium text-white/90">{prog.presenter}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProgramme(prog)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Info size={14} />
                  <span>Show Details</span>
                </button>
                <button
                  onClick={playLiveStream}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-md shadow-brand-red/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Play size={13} className="fill-current" />
                  <span>Listen Live</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProgramDetailModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
      />
    </section>
  );
};
