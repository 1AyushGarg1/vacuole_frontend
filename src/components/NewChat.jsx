import React, { useEffect, useState } from "react";

const Icon = {
  trending: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
      <polyline points="17,6 23,6 23,12" />
    </svg>
  ),
  sparkles: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3l1.545 4.635L18.18 9.18l-4.635 1.545L12 15.36l-1.545-4.635L5.82 9.18l4.635-1.545L12 3z" />
      <path d="M8 3h1l1 3-1 1H8l-1-1L8 3zM19 12h1l1 3-1 1h-1l-1-1 1-3z" />
    </svg>
  ),
  heart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  tag: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  ),
  arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  ),
};

// Popular search suggestions
const SEARCH_SUGGESTIONS = [
  { title: "Find trending products", subtitle: "Discover what's popular now", icon: <Icon.trending className="w-5 h-5" />, tags: ["trending", "popular"] },
  { title: "Search electronics", subtitle: "Phones, laptops & gadgets", icon: <Icon.sparkles className="w-5 h-5" />, tags: ["electronics", "tech"] },
  { title: "Browse fashion items", subtitle: "Clothing, shoes & accessories", icon: <Icon.heart className="w-5 h-5" />, tags: ["fashion", "clothing"] },
  { title: "Home & kitchen", subtitle: "Furniture & appliances", icon: <Icon.tag className="w-5 h-5" />, tags: ["home", "kitchen"] }
];

const POPULAR_TAGS = [
  "electronics", "fashion", "home", "books", "sports", "beauty", "toys", "automotive"
];

export default function NewChat({ onPickSuggestion, searchQuery, theme = 'dark' }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const themeClasses = {
    dark: {
      text: "text-gray-100",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-500",
      accent: "text-emerald-400",
      card: "bg-gray-800/60 border border-gray-600/50 hover:border-emerald-500/30 hover:bg-gray-700/80",
      cardIcon: "bg-emerald-500/10 group-hover:bg-emerald-500/20 text-emerald-300",
      tag: "bg-gray-800/30 text-gray-400 hover:bg-emerald-500/10 hover:text-emerald-300 border-gray-700/50 hover:border-emerald-500/30",
      tagBg: "bg-gray-800/50 text-emerald-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-300",
      arrow: "text-gray-600 group-hover:text-emerald-400"
    },
    light: {
      text: "text-slate-900",
      textSecondary: "text-slate-700",
      textMuted: "text-slate-500",
      accent: "text-emerald-600",
      card: "bg-white/80 border border-slate-200/50 hover:border-emerald-400/30 hover:bg-slate-50/80",
      cardIcon: "bg-emerald-500/10 group-hover:bg-emerald-500/20 text-emerald-600",
      tag: "bg-slate-100/30 text-slate-600 hover:bg-emerald-500/10 hover:text-emerald-600 border-slate-300/50 hover:border-emerald-500/30",
      tagBg: "bg-slate-200/50 text-emerald-600 group-hover:bg-emerald-500/10 group-hover:text-emerald-600",
      arrow: "text-slate-400 group-hover:text-emerald-500"
    }
  };

  const currentTheme = themeClasses[theme];
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (searchQuery.trim()) return null;

  return (
    <div className="flex-1 flex items-center justify-center min-h-0 px-4">
      <div className="max-w-4xl w-full">
        {/* Welcome Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={currentTheme.text}>Hi, I'm </span>
            <span className={`${currentTheme.accent} inline-block`}>
              Vacuole
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-2"></div>
            </span>
          </h1>
          <p className={`text-xl md:text-2xl ${currentTheme.textSecondary} font-light`}>
            Describe what product is on your mind!
          </p>
        </div>

        {/* Search Suggestions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {SEARCH_SUGGESTIONS.map((suggestion, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <button
                onClick={() => onPickSuggestion(`${suggestion.title}`)}
                className={`w-full p-6 rounded-2xl ${currentTheme.card} text-left transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${currentTheme.cardIcon} flex items-center justify-center transition-all duration-300`}>
                    {suggestion.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${currentTheme.text} mb-1 group-hover:text-emerald-300 transition-colors duration-300`}>
                      {suggestion.title}
                    </h3>
                    <p className={`${currentTheme.textSecondary} text-sm group-hover:text-gray-300 transition-colors duration-300`}>
                      {suggestion.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {suggestion.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-xs rounded-md ${currentTheme.tagBg} transition-all duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Icon.arrow className={`w-5 h-5 ${currentTheme.arrow} opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300`} />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Popular Tags */}
        <div className={`text-center transition-all duration-1000 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1000ms' }}>
          <p className={`text-sm ${currentTheme.textMuted} mb-4`}>Popular categories:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_TAGS.map((tag, index) => (
              <button
                key={index}
                onClick={() => onPickSuggestion(`Search for ${tag} products`)}
                className={`px-3 py-1.5 text-sm rounded-full ${currentTheme.tag} transition-all duration-300 hover:scale-105`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}