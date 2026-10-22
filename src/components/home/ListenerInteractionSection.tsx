import React, { useState, useEffect } from 'react';
import { Vote, Music, Phone, Mail, MessageSquare, Check, Sparkles, Share2, Facebook } from 'lucide-react';
import { initialPoll, stationConfig } from '../../config/stationConfig';
import { Poll } from '../../types';
import { SongRequestModal } from '../common/SongRequestModal';

export const ListenerInteractionSection: React.FC = () => {
  const [poll, setPoll] = useState<Poll>(initialPoll);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isSongModalOpen, setIsSongModalOpen] = useState(false);

  // Check if listener has already voted in this browser session
  useEffect(() => {
    const savedVote = localStorage.getItem(`rukiga_poll_${initialPoll.id}`);
    if (savedVote) {
      setSelectedOption(savedVote);
      setHasVoted(true);
    }
  }, []);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;

    setSelectedOption(optionId);
    setHasVoted(true);
    localStorage.setItem(`rukiga_poll_${initialPoll.id}`, optionId);

    // Update vote count locally
    setPoll((prev) => {
      const updatedOptions = prev.options.map((opt) =>
        opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
      );
      return {
        ...prev,
        options: updatedOptions,
        totalVotes: prev.totalVotes + 1,
      };
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquare size={14} />
          <span>Interactive Community Voice</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">EKICUNCU</span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg mt-3">
          Have your say on regional issues, dedicate music to your loved ones, and engage directly with the broadcast team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Community Poll Component (7 Cols) */}
        <div className="lg:col-span-7 bg-background-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                <Vote size={20} />
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold block">
                  Weekly Listener Poll
                </span>
                <span className="text-xs text-text-muted">
                  Total Votes: {poll.totalVotes} listeners
                </span>
              </div>
            </div>
            {hasVoted && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <Check size={12} /> Vote Recorded
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-6">
            "{poll.question}"
          </h3>

          {/* Options */}
          <div className="space-y-3.5">
            {poll.options.map((option) => {
              const percentage = Math.round((option.votes / poll.totalVotes) * 100) || 0;
              const isSelected = selectedOption === option.id;

              return (
                <div
                  key={option.id}
                  onClick={() => !hasVoted && handleVote(option.id)}
                  className={`relative overflow-hidden rounded-xl p-4 border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-brand-red bg-brand-red/10'
                      : hasVoted
                      ? 'border-white/5 bg-white/[0.02]'
                      : 'border-white/10 bg-white/5 hover:border-brand-gold/50 hover:bg-white/[0.08]'
                  }`}
                >
                  {/* Fill progress bar when voted */}
                  {hasVoted && (
                    <div
                      className={`absolute inset-y-0 left-0 transition-all duration-700 ${
                        isSelected ? 'bg-brand-red/25' : 'bg-white/10'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-brand-red bg-brand-red text-white'
                            : 'border-white/30'
                        }`}
                      >
                        {isSelected && <Check size={12} />}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {option.text}
                      </span>
                    </div>

                    {hasVoted && (
                      <span className="text-xs font-bold text-brand-gold shrink-0">
                        {percentage}% ({option.votes})
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-muted">
            <span>Results are discussed on AMANI GOMUKOZI forum</span>
            <span className="text-white/40">Secure Listener Voting</span>
          </div>
        </div>

        {/* Right: Quick Action Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Song Request Callout */}
          <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-brand-red/20 via-background-card to-background-card border border-brand-red/40 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/30">
                <Music size={24} />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                Dedicate & Request a Song
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Have a special song for a birthday, wedding, anniversary, or workday encouragement? Send it straight to the DJ booth.
              </p>
              <button
                onClick={() => setIsSongModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-md shadow-brand-red/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Make a Song Request</span>
                <Music size={14} />
              </button>
            </div>
          </div>

          {/* Direct Studio Contact Card */}
          <div className="rounded-2xl p-6 bg-background-card border border-white/10 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-2.5">
              Contact Studio Directly
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 gap-2">
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-brand-gold shrink-0" />
                  <span className="text-text-secondary">On-Air Studio Lines:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <a
                    href={`tel:${stationConfig.contact.studioLine1.replace(/\s+/g, '')}`}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-brand-gold hover:text-black text-white font-bold transition-colors"
                  >
                    {stationConfig.contact.studioLine1}
                  </a>
                  <span className="text-text-muted">•</span>
                  <a
                    href={`tel:${stationConfig.contact.studioLine2.replace(/\s+/g, '')}`}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-brand-gold hover:text-black text-white font-bold transition-colors"
                  >
                    {stationConfig.contact.studioLine2}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-brand-red shrink-0" />
                  <span className="text-text-secondary">Reception & Office:</span>
                </div>
                <a
                  href={`tel:${stationConfig.contact.receptionLine.replace(/\s+/g, '')}`}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-brand-red text-white font-bold transition-colors"
                >
                  {stationConfig.contact.receptionLine}
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2.5">
                  <MessageSquare size={15} className="text-emerald-400" />
                  <span className="text-text-secondary">WhatsApp:</span>
                </div>
                <a
                  href={`https://wa.me/${stationConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{stationConfig.contact.whatsappFormatted}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                    Chat
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-brand-red" />
                  <span className="text-text-secondary">Email:</span>
                </div>
                <span className="text-white font-semibold truncate max-w-[160px]">{stationConfig.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Follow Us On Facebook and X */}
          <div className="rounded-2xl p-5 bg-background-card border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Follow Us On Facebook & X
              </span>
              <span className="text-[11px] font-bold text-brand-gold">@rukigafm</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={stationConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600/15 hover:bg-blue-600 border border-blue-500/30 text-white text-xs font-bold transition-all group"
              >
                <Facebook size={16} className="text-blue-400 group-hover:text-white" />
                <span>Facebook</span>
              </a>
              <a
                href={stationConfig.socialLinks.x}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white text-xs font-bold transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Follow on X</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Song Request Modal */}
      <SongRequestModal
        isOpen={isSongModalOpen}
        onClose={() => setIsSongModalOpen(false)}
      />

    </section>
  );
};
