import React, { useState } from 'react';
import { Calendar, Clock, User, Radio, Play, Info, Sparkles, Filter } from 'lucide-react';
import { officialProgrammes } from '../config/stationConfig';
import { Programme } from '../types';
import { usePlayer } from '../context/PlayerContext';
import { ProgramDetailModal } from '../components/common/ProgramDetailModal';

export const ProgrammesPage: React.FC = () => {
  const { playLiveStream } = usePlayer();
  const [selectedDay, setSelectedDay] = useState<string>('All Weekdays');
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);

  const weekdays = ['All Weekdays', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const filteredProgrammes = selectedDay === 'All Weekdays'
    ? officialProgrammes
    : officialProgrammes.filter((prog) => prog.days.includes(selectedDay));

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/15 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
          <Calendar size={14} />
          <span>Monday to Friday Schedule</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          OFFICIAL <span className="text-brand-gold">PROGRAMMES TIMETABLE</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          Tune in from dawn to midnight every Monday through Friday for music, community empowerment, sports action, and evening storytelling.
        </p>
      </div>

      {/* Weekday Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {weekdays.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
              selectedDay === day
                ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105'
                : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Bar */}
      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <Info size={16} className="text-brand-gold shrink-0" />
          <span>Official weekday broadcast schedule and on-air lineup for RUKIGA FM — EKICUNCU.</span>
        </div>
        <span className="font-semibold text-brand-gold uppercase tracking-wider text-[11px] shrink-0">
          Showing {filteredProgrammes.length} Weekday Shows
        </span>
      </div>

      {/* Programmes List */}
      <div className="space-y-6">
        {filteredProgrammes.map((prog, index) => (
          <div
            key={prog.id}
            className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-red/40 p-6 sm:p-8 shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            {/* Image */}
            <div className="md:col-span-4 relative h-48 sm:h-56 rounded-xl overflow-hidden bg-neutral-900">
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/30 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-gold border border-white/10">
                  {prog.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-brand-red/90 text-white">
                  <Clock size={12} /> {prog.timeSlot}
                </span>
              </div>
            </div>

            {/* Description & Presenter */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                  Show #{index + 1} • Mon – Fri
                </span>
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand-red transition-colors">
                {prog.title}
              </h3>
              
              <p className="text-brand-gold text-xs font-semibold">
                {prog.subtitle}
              </p>

              <p className="text-text-secondary text-sm leading-relaxed">
                {prog.description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-text-muted">
                <User size={14} className="text-brand-red shrink-0" />
                <span className="font-medium text-white/80">{prog.presenter}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="md:col-span-3 flex flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <button
                onClick={playLiveStream}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-lg shadow-brand-red/30 transition-all hover:scale-102"
              >
                <Radio size={16} />
                <span>Listen Live</span>
              </button>

              <button
                onClick={() => setSelectedProgramme(prog)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <Info size={15} />
                <span>Programme Details</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
      />

    </div>
  );
};
