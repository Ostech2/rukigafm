import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, Radio } from 'lucide-react';
import { newsArticlesData } from '../config/stationConfig';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = newsArticlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-36 pb-24 px-4 text-center max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
        <p className="text-text-secondary text-sm">
          The requested news article could not be located.
        </p>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red text-white font-bold text-xs uppercase"
        >
          <ArrowLeft size={16} /> Back to News
        </Link>
      </div>
    );
  }

  const relatedArticles = newsArticlesData
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      
      {/* Back Button */}
      <Link
        to="/news"
        className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-white uppercase tracking-wider transition-colors"
      >
        <ArrowLeft size={16} /> Back to News & Editorial
      </Link>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red text-white">
            {article.category}
          </span>
          <span className="text-xs text-text-muted flex items-center gap-1">
            <Clock size={12} /> {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs text-text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <User size={14} className="text-brand-red" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-gold" /> {article.date}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors"
          >
            <Share2 size={13} /> Share Story
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/10 shadow-2xl">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lead Summary */}
      <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-brand-red text-base sm:text-lg text-white font-medium italic leading-relaxed">
        "{article.summary}"
      </div>

      {/* Main Paragraphs */}
      <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
        {article.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Editorial Note */}
      <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-xs text-brand-gold">
        Notice: This editorial piece is part of RUKIGA FM’s sample regional news archive. Official real-time reporting will stream through this channel upon operational station commissioning.
      </div>

      {/* Related News */}
      <div className="pt-12 border-t border-white/10 space-y-6">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight">
          Related Stories
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.id}
              to={`/news/${rel.slug}`}
              className="group block rounded-xl overflow-hidden bg-background-card border border-white/5 hover:border-brand-red/30 p-3 transition-colors"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-neutral-900 mb-2.5">
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] text-brand-gold font-bold uppercase">{rel.category}</span>
              <h4 className="text-xs font-bold text-white group-hover:text-brand-gold transition-colors line-clamp-2 mt-1">
                {rel.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>

    </article>
  );
};
