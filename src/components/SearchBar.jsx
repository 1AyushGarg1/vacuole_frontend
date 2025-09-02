import React, { useEffect, useRef, useState } from "react";

const Icon = {
  search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  ),
  store: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  ),
};

const POPULAR_COMPANIES = [
  { label: "Amazon", color: "orange" },
  { label: "Flipkart", color: "blue" },
  { label: "Myntra", color: "purple" },
  { label: "Ebay", color: "yellow" },
  { label: "Nykaa", color: "pink" },
  { label: "Ajio", color: "emerald" }
];

export default function SearchBar({ value, setValue, onSearch, isSearching, theme = 'dark' }) {
  const textareaRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const themeClasses = {
    dark: {
      container: focused 
        ? 'bg-gray-800/95 border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10' 
        : 'bg-gray-800/80 border border-gray-700/50 hover:border-gray-600/50',
      text: 'text-gray-100 placeholder:text-gray-500',
      icon: 'text-gray-400',
      button: value.trim() && !isSearching
        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-gray-900 hover:scale-105 shadow-lg shadow-emerald-500/25'
        : 'bg-gray-800/50 text-gray-500 cursor-not-allowed',
      infoText: 'text-gray-500',
      suggestionsContainer: 'border-t border-gray-800/50',
      suggestionsTitle: 'text-gray-300',
      storeIcon: 'text-emerald-400'
    },
    light: {
      container: focused 
        ? 'bg-white/95 border-2 border-emerald-500/30 shadow-xl shadow-emerald-500/10' 
        : 'bg-white/90 border border-slate-200/60 hover:border-slate-300/50',
      text: 'text-slate-900 placeholder:text-slate-500',
      icon: 'text-slate-500',
      button: value.trim() && !isSearching
        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white hover:scale-105 shadow-lg shadow-emerald-500/25'
        : 'bg-slate-200/50 text-slate-500 cursor-not-allowed',
      infoText: 'text-slate-500',
      suggestionsContainer: 'border-t border-slate-200/50',
      suggestionsTitle: 'text-slate-700',
      storeIcon: 'text-emerald-500'
    }
  };

  const currentTheme = themeClasses[theme];

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = Math.min(scrollHeight, 120) + "px";
  }, [value]);

  const handleSubmit = () => {
    if (value.trim() && !isSearching) {
      onSearch();
      setShowSuggestions(false);
    }
  };

  const handleCompanyClick = (company) => {
    setValue(`Search products on ${company.label}`);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  const getCompanyColorClasses = (color, theme) => {
    const colors = {
      emerald: theme === 'dark' 
        ? "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/20 hover:border-emerald-500/30"
        : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 border-emerald-500/20 hover:border-emerald-500/30",
      blue: theme === 'dark'
        ? "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border-blue-500/20 hover:border-blue-500/30"
        : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 border-blue-500/20 hover:border-blue-500/30",
      purple: theme === 'dark'
        ? "bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/20 hover:border-purple-500/30"
        : "bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 border-purple-500/20 hover:border-purple-500/30",
      orange: theme === 'dark'
        ? "bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border-orange-500/20 hover:border-orange-500/30"
        : "bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 border-orange-500/20 hover:border-orange-500/30",
      yellow: theme === 'dark'
        ? "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 border-yellow-500/20 hover:border-yellow-500/30"
        : "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600 border-yellow-500/20 hover:border-yellow-500/30",
      pink: theme === 'dark'
        ? "bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border-pink-500/20 hover:border-pink-500/30"
        : "bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 border-pink-500/20 hover:border-pink-500/30",
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="relative">
      {/* Main Search Container */}
      <div className={`
        relative rounded-2xl transition-all duration-300 
        ${currentTheme.container}
        backdrop-blur-xl
      `}>
        {/* Search Input Area */}
        <div className="relative">
          <div className="flex items-start gap-4 p-4">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              <Icon.search className={`w-5 h-5 ${currentTheme.icon}`} />
            </div>
            
            {/* Input */}
            <div className="flex-1">
              <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => {
                  setFocused(true);
                  setShowSuggestions(true);
                }}
                onBlur={() => {
                  setFocused(false);
                  setTimeout(() => setShowSuggestions(false), 150);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                  if (e.key === "Escape") {
                    setShowSuggestions(false);
                    textareaRef.current?.blur();
                  }
                }}
                placeholder="Search for products, brands, or categories..."
                className={`w-full bg-transparent resize-none outline-none ${currentTheme.text} text-lg leading-relaxed`}
                rows={1}
                disabled={isSearching}
              />
            </div>
            
            {/* Search Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleSubmit}
                disabled={!value.trim() || isSearching}
                className={`
                  relative p-3 rounded-xl font-medium transition-all duration-300 group
                  ${currentTheme.button}
                `}
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Icon.search className="w-5 h-5" />
                )}
                
                {/* Pulse effect when active */}
                {value.trim() && !isSearching && (
                  <div className="absolute inset-0 rounded-xl bg-emerald-400/20 animate-pulse"></div>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="px-4 pb-3 flex items-center justify-between text-xs">
            <div className={`flex items-center gap-4 ${currentTheme.infoText}`}>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                AI-powered search
              </span>
              <span>Press Enter to search</span>
            </div>
            <div className={`flex items-center gap-2 ${currentTheme.infoText}`}>
              <span>{value.length}/500</span>
              {value.length > 450 && (
                <span className="text-yellow-400 text-xs">!</span>
              )}
            </div>
          </div>
        </div>

        {/* Suggestions Panel */}
        {showSuggestions && !value && (
          <div className={`${currentTheme.suggestionsContainer} p-4`}>
            {/* Popular Companies */}
            <div>
              <h4 className={`text-sm font-medium ${currentTheme.suggestionsTitle} mb-3 flex items-center gap-2`}>
                <Icon.store className={`w-4 h-4 ${currentTheme.storeIcon}`} />
                Popular Stores
              </h4>
              <div className="flex flex-wrap gap-2">
                {POPULAR_COMPANIES.map((company) => (
                  <button
                    key={company.label}
                    onClick={() => handleCompanyClick(company)}
                    className={`
                      px-3 py-2 text-sm rounded-lg border transition-all duration-200 hover:scale-105
                      ${getCompanyColorClasses(company.color, theme)}
                    `}
                  >
                    {company.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Tips */}
      <div className="text-center mt-3 space-y-1">
        <p className={`text-xs ${currentTheme.infoText}`}>
          Search across millions of products from trusted sellers worldwide
        </p>
        {focused && (
          <div className={`flex items-center justify-center gap-4 text-xs ${currentTheme.infoText}`}>
            <span>Try: "wireless headphones under $100"</span>
            <span>•</span>
            <span>Use specific brands for better results</span>
          </div>
        )}
      </div>
    </div>
  );
}