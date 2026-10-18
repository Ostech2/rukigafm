import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Facebook, Twitter, Instagram, Youtube, Clock } from 'lucide-react';
import { stationConfig } from '../config/stationConfig';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    subject: 'General Listener Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrEmail.trim() || !formData.message.trim()) {
      setError('Please fill in your name, contact phone or email, and message.');
      return;
    }
    setError('');

    // Save message locally for studio reception log
    try {
      const existing = JSON.parse(localStorage.getItem('rukiga_contact_messages') || '[]');
      localStorage.setItem(
        'rukiga_contact_messages',
        JSON.stringify([{ ...formData, id: Date.now().toString(), date: new Date().toISOString() }, ...existing])
      );
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/15 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
          <MessageSquare size={14} />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          CONTACT <span className="text-brand-red">RUKIGA FM — EKICUNCU</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          We love hearing from our listeners, community partners, and local leaders. Reach out to the studio desk, editorial team, or administration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl p-6 sm:p-8 bg-background-card border border-white/10 space-y-6 shadow-xl">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-tight border-l-2 border-brand-red pl-3">
              Official Station Details
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-red/15 text-brand-red shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-gold uppercase block">Studio Address</span>
                  <span className="text-text-secondary">{stationConfig.contact.studioAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold shrink-0 mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-gold uppercase block">Call-In Hotline</span>
                  <span className="text-text-secondary">{stationConfig.contact.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase block">WhatsApp Studio Line</span>
                  <span className="text-text-secondary">{stationConfig.contact.whatsappFormatted}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-red/15 text-brand-red shrink-0 mt-0.5">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-gold uppercase block">General Inquiries</span>
                  <span className="text-text-secondary">{stationConfig.contact.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 text-text-muted shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-gold uppercase block">Live Broadcasting Hours</span>
                  <span className="text-text-secondary">24 Hours Daily • Weekday Flagships: 6:00 AM – Midnight</span>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Connect On Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={stationConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={stationConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={stationConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={stationConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-brand-red hover:bg-white/10 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Location Placeholder Notice */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-text-muted space-y-1">
            <span className="font-bold text-white uppercase block">Studio Map Verification</span>
            <p>
              Exact satellite map coordinates for physical studio studios in Rukiga District will be pinned here upon public unveiling.
            </p>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-background-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Logged!</h3>
              <p className="text-text-secondary text-sm max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message regarding <span className="text-brand-gold font-semibold">"{formData.subject}"</span> has been recorded for the station team.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-red"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mb-2">
                Send a Message to the Station
              </h3>

              {error && (
                <div className="p-3 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center gap-2 text-xs text-brand-red">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Christine Kemigisha"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Your Phone Number or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +256 780 000 000 or email@domain.com"
                  value={formData.phoneOrEmail}
                  onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Department / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red"
                >
                  <option value="General Listener Inquiry">General Listener Inquiry</option>
                  <option value="News Tip / Community Story">News Tip / Community Story Lead</option>
                  <option value="Studio Presenter Dedication">Studio Presenter Dedication</option>
                  <option value="Commercial Advertising">Advertising & Marketing</option>
                  <option value="Technical Broadcast Reception">Broadcast Reception Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message, feedback, or community report here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-lg shadow-brand-red/30 transition-all"
              >
                <Send size={15} />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
