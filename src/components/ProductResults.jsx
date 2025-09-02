import React from "react";

const Icon = {
  heart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  heartFilled: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  star: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" {...props}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
};

// Skeleton loader component
function ProductSkeleton({ theme }) {
  const skeletonClasses = {
    dark: {
      card: "bg-gray-800/60 border border-gray-700/50",
      skeleton: "bg-gray-700/50",
      skeletonPulse: "animate-pulse"
    },
    light: {
      card: "bg-white/80 border border-slate-200/50",
      skeleton: "bg-slate-200/50",
      skeletonPulse: "animate-pulse"
    }
  };

  const currentSkeleton = skeletonClasses[theme];

  return (
    <div className={`${currentSkeleton.card} rounded-2xl p-6 ${currentSkeleton.skeletonPulse}`}>
      <div className={`w-16 h-16 ${currentSkeleton.skeleton} rounded-lg mb-4`}></div>
      <div className={`h-5 ${currentSkeleton.skeleton} rounded mb-2`}></div>
      <div className={`h-4 ${currentSkeleton.skeleton} rounded w-2/3 mb-3`}></div>
      <div className="flex items-center justify-between mb-4">
        <div className={`h-6 ${currentSkeleton.skeleton} rounded w-20`}></div>
        <div className={`h-4 ${currentSkeleton.skeleton} rounded w-16`}></div>
      </div>
      <div className="flex gap-2">
        <div className={`flex-1 h-10 ${currentSkeleton.skeleton} rounded-lg`}></div>
        <div className={`w-10 h-10 ${currentSkeleton.skeleton} rounded-lg`}></div>
      </div>
    </div>
  );
}

export default function ProductResults({ 
  results, 
  searchQuery, 
  theme = 'dark', 
  isSearching = false, 
  favorites = [], 
  onToggleFavorite 
}) {
  const themeClasses = {
    dark: {
      container: "text-white",
      title: "text-zinc-100",
      subtitle: "text-zinc-400",
      card: "bg-gray-800/60 border border-gray-700/50 hover:border-emerald-500/30 hover:bg-gray-700/80",
      cardText: "text-gray-100",
      cardSubtext: "text-gray-400",
      cardPrice: "text-emerald-400",
      cardRating: "text-gray-300",
      addToCartBtn: "bg-emerald-500 text-gray-900 hover:bg-emerald-400",
      heartBtn: "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-emerald-300",
      heartBtnActive: "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
    },
    light: {
      container: "text-slate-900",
      title: "text-slate-900",
      subtitle: "text-slate-600",
      card: "bg-white/80 border border-slate-200/50 hover:border-emerald-500/30 hover:bg-slate-50/80",
      cardText: "text-slate-900",
      cardSubtext: "text-slate-600",
      cardPrice: "text-emerald-600",
      cardRating: "text-slate-700",
      addToCartBtn: "bg-emerald-500 text-white hover:bg-emerald-400",
      heartBtn: "bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-emerald-600",
      heartBtnActive: "bg-emerald-500/20 text-emerald-600 hover:bg-emerald-500/30"
    }
  };

  const currentTheme = themeClasses[theme];

  // Show skeleton loaders while searching
  if (isSearching) {
    return (
      <div className={`flex-1 p-6 overflow-y-auto ${currentTheme.container}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className={`text-xl font-semibold ${currentTheme.title} mb-2`}>
              Searching for "{searchQuery}"...
            </h2>
            <p className={currentTheme.subtitle}>Finding the best products for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Don't render if no search query or results
  if (!searchQuery.trim() || results.length === 0) return null;

  // Check if product is favorited
  const isFavorited = (productId) => {
    return favorites.some(fav => fav.id === productId);
  };

  return (
    <div className={`flex-1 p-6 overflow-y-auto ${currentTheme.container}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className={`text-xl font-semibold ${currentTheme.title} mb-2`}>
            Search results for "{searchQuery}"
          </h2>
          <p className={currentTheme.subtitle}>{results.length} products found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product, index) => (
            <div
              key={product.id}
              className={`group ${currentTheme.card} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>
              <h3 className={`font-semibold ${currentTheme.cardText} mb-2 group-hover:text-emerald-400 transition-colors duration-300`}>
                {product.name}
              </h3>
              <p className={`${currentTheme.cardSubtext} text-sm mb-3`}>{product.category}</p>
              <div className="flex items-center justify-between mb-4">
                <span className={`${currentTheme.cardPrice} font-bold text-lg`}>{product.price}</span>
                <div className="flex items-center gap-1">
                  <Icon.star className="w-4 h-4 text-yellow-400" />
                  <span className={`${currentTheme.cardRating} text-sm`}>{product.rating}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className={`flex-1 py-2 px-4 ${currentTheme.addToCartBtn} rounded-lg font-medium transition-colors duration-300`}>
                  Add to Cart
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(product);
                  }}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isFavorited(product.id) 
                      ? currentTheme.heartBtnActive 
                      : currentTheme.heartBtn
                  }`}
                  title={isFavorited(product.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  {isFavorited(product.id) ? (
                    <Icon.heartFilled className="w-5 h-5" />
                  ) : (
                    <Icon.heart className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}