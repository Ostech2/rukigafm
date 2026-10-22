import React from 'react';
import { X, Calendar, Clock, User, Radio, Play, Sparkles } from 'lucide-react';
import { Programme } from '../../types';
import { usePlayer } from '../../context/PlayerContext';

interface ProgramDetailModalProps {
  programme: Programme | null;
  onClose: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ programme, onClose }) => {
  const { playLiveStream } = usePlayer();

  if (!programme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#14141A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden">
          <img
            src={programme.image}
            alt={programme.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-[#14141A]/50 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-brand-red transition-colors"
          >
            <X size={20} />
          </button>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-black">
              Official Show
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              {programme.title}
            </h3>
            <p className="text-brand-gold font-medium text-sm mt-0.5">
              {programme.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-brand-red shrink-0" />
              <div>
                <span className="text-text-muted block">Days:</span>
                <span className="text-white font-semibold">
                  {programme.days.length === 5 && programme.days.includes('Monday') && programme.days.includes('Friday')
                    ? 'Monday – Friday'
                    : programme.days.join(' & ')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-gold shrink-0" />
              <div>
                <span className="text-text-muted block">Schedule:</span>
                <span className="text-white font-semibold">{programme.timeSlot}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <User size={16} className="text-brand-red shrink-0" />
              <div>
                <span className="text-text-muted block">Host:</span>
                <span className="text-white font-semibold truncate">{programme.presenter}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">About the Programme</h4>
            <p className="text-sm leading-relaxed text-text-secondary">
              {programme.fullDescription || programme.description}
            </p>
            <p className="text-xs text-text-muted italic border-l-2 border-brand-gold pl-3">
              Atmosphere & Theme: {programme.theme}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-white/10">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                playLiveStream();
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-lg shadow-brand-red/30 transition-all"
            >
              <Radio size={16} />
              <span>Listen Live To Rukiga FM</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
