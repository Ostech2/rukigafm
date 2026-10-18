import React from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticlesData } from '../../config/stationConfig';

export const NewsSection: React.FC = () => {
  // Show top 3 featured stories on home
  const featuredArticles = newsArticlesData.slice(0, 3);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper size={14} />
            <span>Editorial & Community Reporting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            NEWS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">ENTERTAINMENT</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3">
            Trusted regional reporting, grassroots stories, cultural spotlights, and national updates affecting the Rukiga community.
          </p>
        </div>

        <Link
          to="/news"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-brand-gold font-bold text-sm tracking-wide border border-white/10 hover:border-brand-gold/40 transition-all self-start md:self-auto"
        >
          <span>All News & Features</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Notice about sample content */}
      <div className="mb-8 p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-between text-xs text-brand-gold">
        <span>Editorial Notice: The articles below demonstrate the station layout with sample community features. Official editorial reporting connects directly to this feed.</span>
        <span className="font-bold uppercase tracking-wider text-[10px] bg-brand-gold/20 px-2 py-0.5 rounded">Sample Content</span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredArticles.map((article) => (
          <article
            key={article.id}
            className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-red/40 overflow-hidden shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-neutral-900">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/20 to-transparent" />
              
              {/* Category */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-gold border border-white/10">
                  {article.category}
                </span>
              </div>

              {/* Read time */}
              <div className="absolute bottom-3 right-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                  <Clock size={11} /> {article.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <Calendar size={13} className="text-brand-red" />
                  <span>{article.date}</span>
                </div>

                <h3 className="font-extrabold text-white text-lg leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                  <Link to={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-text-muted truncate">
                  By {article.author}
                </span>
                
                <Link
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-red group-hover:text-red-400 transition-colors uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
