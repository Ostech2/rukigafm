import React, { useState } from 'react';
import { Megaphone, CheckCircle2, TrendingUp, Users, Radio, Calendar, Send, AlertCircle, FileText } from 'lucide-react';
import { stationConfig } from '../config/stationConfig';

export const AdvertisingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    interest: 'Spot Advertisements (Jingles/Classifieds)',
    budgetRange: 'UGX 500k – 2M',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.contactPerson || !formData.phone) {
      setError('Please provide your business name, contact person name, and phone number.');
      return;
    }
    setError('');

    // Save inquiry to localStorage queue for studio marketing team
    try {
      const existing = JSON.parse(localStorage.getItem('rukiga_ad_inquiries') || '[]');
      localStorage.setItem(
        'rukiga_ad_inquiries',
        JSON.stringify([{ ...formData, id: Date.now().toString(), date: new Date().toISOString() }, ...existing])
      );
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17171E] via-[#1B141C] to-[#251015] border border-brand-red/30 p-8 sm:p-14 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-xs font-bold uppercase tracking-wider">
          <Megaphone size={14} />
          <span>Commercial Partnerships</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
          GROW YOUR BRAND WITH <span className="text-brand-gold">RUKIGA FM</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Reach thousands of loyal consumers, agricultural cooperatives, retail merchants, and households across Western Uganda. High listener trust translates to real commercial growth.
        </p>
      </div>

      {/* 4 Commercial Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-background-card border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-brand-red/15 text-brand-red border border-brand-red/30 flex items-center justify-center">
            <Radio size={24} />
          </div>
          <h3 className="font-bold text-white text-lg">Spot Advertisements</h3>
          <p className="text-text-secondary text-xs leading-relaxed">
            30-second and 45-second recorded jingles, voiceover mentions, and classified bulletins placed at peak breakfast, midday, and rush hour slots.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-background-card border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30 flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          <h3 className="font-bold text-white text-lg">Sponsored Shows</h3>
          <p className="text-text-secondary text-xs leading-relaxed">
            Exclusive title sponsorships for flagship shows like SPORTS MAGAZINE, AMANI GOMUKOZI, or ORUUME PROGRAM with brand ownership and live presenter reads.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-background-card border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-brand-red/15 text-brand-red border border-brand-red/30 flex items-center justify-center">
            <Users size={24} />
          </div>
          <h3 className="font-bold text-white text-lg">Live Outside Broadcasts</h3>
          <p className="text-text-secondary text-xs leading-relaxed">
            On-site radio coverage for product launches, store openings, agricultural expos, trade fairs, and regional sporting finals.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-background-card border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30 flex items-center justify-center">
            <FileText size={24} />
          </div>
          <h3 className="font-bold text-white text-lg">Digital & Social Packages</h3>
          <p className="text-text-secondary text-xs leading-relaxed">
            Banner placements on the official RUKIGA FM website, live stream video tags, and social media shoutouts across Western Uganda.
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
            Request Advertising Media Kit & Rate Card
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            Our commercial sales team creates tailored campaign schedules tailored to match your marketing budget and demographic reach.
          </p>

          <div className="space-y-3 text-xs text-text-muted">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="font-bold text-white uppercase text-[11px] block">Official Marketing Desk</span>
              <span>Phone: {stationConfig.contact.phone}</span>
              <br />
              <span>Email: info@rukigafm.co.ug</span>
            </div>
            <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
              * Local SME discounts are available for agricultural cooperatives, schools, clinics, and district traders.
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-background-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">Media Request Received!</h3>
              <p className="text-text-secondary text-sm max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.contactPerson}</span> from <span className="text-brand-gold font-semibold">{formData.businessName}</span>. Our commercial sales coordinator will review your request and get in touch with rate cards.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-red"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-brand-red/15 border border-brand-red/30 flex items-center gap-2 text-xs text-brand-red">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kigezi Highlands Coffee"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grace Tumwine"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+256 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@business.co.ug"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Advertising Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red"
                  >
                    <option value="Spot Advertisements (Jingles/Classifieds)">Spot Advertisements</option>
                    <option value="Sponsored Programme (e.g. Sports or Midday)">Sponsored Programme</option>
                    <option value="Live Event / Outside Broadcast">Live Event Broadcast</option>
                    <option value="Digital Banner & Stream Sponsorship">Digital & Stream Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red"
                  >
                    <option value="Under UGX 500k">Under UGX 500k</option>
                    <option value="UGX 500k – 2M">UGX 500k – 2M</option>
                    <option value="UGX 2M – 5M">UGX 2M – 5M</option>
                    <option value="UGX 5M+">UGX 5M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
                  Campaign Goals / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your target audience, timeline, or preferred programme slots..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-red resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-red-700 shadow-lg shadow-brand-red/30 transition-all"
              >
                <Send size={15} />
                <span>Submit Advertising Enquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
