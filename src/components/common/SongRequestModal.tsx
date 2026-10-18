import React, { useState } from 'react';
import { X, Music, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { stationConfig } from '../../config/stationConfig';

interface SongRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SongRequestModal: React.FC<SongRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    listenerName: '',
    songTitle: '',
    artist: '',
    dedication: '',
    preferredShow: 'ORUUME PROGRAM',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.listenerName.trim() || !formData.songTitle.trim() || !formData.artist.trim()) {
      setError('Please provide your name, the song title, and the artist name.');
      return;
    }

    setError('');
    // Store request in localStorage queue for demonstration and studio dashboard
    try {
      const existing = JSON.parse(localStorage.getItem('rukiga_song_requests') || '[]');
      const newRequest = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('rukiga_song_requests', JSON.stringify([newRequest, ...existing]));
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      listenerName: '',
      songTitle: '',
      artist: '',
      dedication: '',
      preferredShow: 'ORUUME PROGRAM',
    });
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#141419] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-text-muted hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Song Request Queued!</h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.listenerName}</span>. Your request for <span className="text-brand-gold font-semibold">"{formData.songTitle}"</span> by <span className="text-brand-gold font-semibold">{formData.artist}</span> has been saved and queued for our presenters during <span className="text-white font-semibold">{formData.preferredShow}</span>.
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-text-muted">
              Note: Music requests are selected live on air subject to schedule timing and broadcast rotation.
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-brand-red/15 text-brand-red border border-brand-red/30">
                <Music size={24} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">
                  Request a Song
                </h3>
                <p className="text-text-muted text-xs">
                  Dedicate your favorite track to friends and family across Western Uganda.
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center gap-2 text-xs text-brand-red">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Your Name / Dedicator *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tumusiime David from Muhanga"
                  value={formData.listenerName}
                  onChange={(e) => setFormData({ ...formData, listenerName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Song Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ruhanga Akantorana"
                    value={formData.songTitle}
                    onChange={(e) => setFormData({ ...formData, songTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Artist / Band *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Western Ugandan Choir / Artist"
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Target Radio Show
                </label>
                <select
                  value={formData.preferredShow}
                  onChange={(e) => setFormData({ ...formData, preferredShow: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red"
                >
                  <option value="ORUUME PROGRAM">ORUUME PROGRAM (Morning Show)</option>
                  <option value="AMANI GOMUKOZI">AMANI GOMUKOZI (Midday Forum)</option>
                  <option value="SPORTS MAGAZINE">SPORTS MAGAZINE (Sports Desk)</option>
                  <option value="EVENING OVERDRIVE">EVENING OVERDRIVE (Drive Time)</option>
                  <option value="KURIKAYO">KURIKAYO (Nightly Homecoming)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Dedication Message / Greeting (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Send greeting to family in Kamwezi, Kashambya, Mparo or colleagues at work..."
                  value={formData.dedication}
                  onChange={(e) => setFormData({ ...formData, dedication: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-text-secondary hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-lg shadow-brand-red/30 transition-all"
                >
                  <Send size={14} />
                  <span>Send Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
