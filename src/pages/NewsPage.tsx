import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticlesData } from '../config/stationConfig';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Rukiga Stories',
    'Local Community',
    'Sports',
    'Entertainment',
    'Education',
    'Business',
  ];

  const filteredArticles = newsArticlesData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/15 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
          <Newspaper size={14} />
          <span>Regional Reporting & Features</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
          NEWS & <span className="text-brand-red">COMMUNITY STORIES</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          In-depth stories, farmer updates, youth innovations, cultural highlights, and sporting action from across Rukiga and Uganda.
        </p>
      </div>

      {/* Editorial Notice Banner */}
      <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-gold">
        <span>Editorial Notice: The articles presented here serve as sample editorial layouts for RUKIGA FM. Factual field reporting will stream directly through this CMS feed upon broadcast deployment.</span>
        <span className="font-bold uppercase tracking-wider text-[10px] bg-brand-gold/20 px-2.5 py-1 rounded shrink-0">
          Sample Layout Data
        </span>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search news & stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted text-xs focus:outline-none focus:border-brand-red"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-background-card rounded-2xl border border-white/5">
          <p className="text-text-muted text-sm">No articles found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-background-card border border-white/10 hover:border-brand-red/40 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-gold border border-white/10">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                      <Clock size={11} /> {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Calendar size={13} className="text-brand-red" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>By {article.author}</span>
                  </div>

                  <h3 className="font-bold text-white text-lg leading-snug group-hover:text-brand-gold transition-colors">
                    <Link to={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-text-muted">RUKIGA FM Desk</span>
                <Link
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-red-400 transition-colors uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

    </div>
  );
};
