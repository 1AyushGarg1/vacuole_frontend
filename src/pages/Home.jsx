import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import NewChat from "../components/NewChat";
import SearchBar from "../components/SearchBar";
import ProductResults from "../components/ProductResults";
import SideBar from "../components/SideBar";
import Toast from "../components/Toast";
import ConfirmModal from "../components/ConfirmModal";

// Mock product data with more variety
const MOCK_PRODUCTS = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: "$89.99", category: "Electronics", rating: 4.5, image: "🎧" },
  { id: 2, name: "Smart Fitness Watch", price: "$299.99", category: "Electronics", rating: 4.7, image: "⌚" },
  { id: 3, name: "Leather Jacket", price: "$159.99", category: "Fashion", rating: 4.3, image: "🧥" },
  { id: 4, name: "Gaming Keyboard", price: "$129.99", category: "Electronics", rating: 4.6, image: "⌨️" },
  { id: 5, name: "Coffee Maker", price: "$79.99", category: "Home", rating: 4.4, image: "☕" },
  { id: 6, name: "Running Shoes", price: "$119.99", category: "Sports", rating: 4.8, image: "👟" }
];

export default function Home({ theme, onThemeChange }) {
  // Core state
  const [searchHistory, setSearchHistory] = useState([]);
  const [currentSearchId, setCurrentSearchId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  // UI state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchHistoryPaused, setSearchHistoryPaused] = useState(false);
  const [favorites, setFavorites] = useState([]);
  
  // Notification state
  const [toast, setToast] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);

  // Initialize data from memory state (in real app, this would come from localStorage or API)
  useEffect(() => {
    // In a real application, you would load from localStorage here
    // For now, we'll use empty initial state
    const initializeData = () => {
      try {
        // Simulate loading from persistent storage
        const savedData = {
          searchHistory: [],
          favorites: [],
          searchHistoryPaused: false
        };
        
        setSearchHistory(savedData.searchHistory);
        setFavorites(savedData.favorites);
        setSearchHistoryPaused(savedData.searchHistoryPaused);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    initializeData();
  }, []);

  // Theme-based styles
  const themeClasses = {
    dark: {
      bg: "min-h-screen w-full bg-gray-900 text-white",
      navBg: "bg-gray-900/90",
      cardBg: "bg-gray-800/60 border-gray-600/40",
      cardHover: "hover:border-green-400/60 hover:bg-gray-700/40",
      searchBg: "bg-gray-800/80 border-gray-700/50",
      text: "text-white",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      sectionBg: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900",
      ctaBg: "bg-gradient-to-br from-green-400/15 via-emerald-400/10 to-green-500/5 border border-green-400/30",
      footerBg: "border-t border-gray-800/60 bg-gray-900/80"
    },
    light: {
      bg: "min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900",
      navBg: "bg-white/90",
      cardBg: "bg-white/80 border-slate-200/60",
      cardHover: "hover:border-emerald-400/60 hover:bg-slate-50/80",
      searchBg: "bg-white/90 border-slate-200/60",
      text: "text-slate-900",
      textSecondary: "text-slate-700",
      textMuted: "text-slate-500",
      sectionBg: "bg-gradient-to-r from-slate-50 via-white to-slate-100",
      ctaBg: "bg-gradient-to-br from-emerald-400/15 via-emerald-400/10 to-emerald-500/5 border border-emerald-400/30",
      footerBg: "border-t border-slate-200/60 bg-white/80"
    }
  };

  const currentTheme = themeClasses[theme];

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Show confirmation modal
  const showConfirmModal = (title, message, onConfirm) => {
    setConfirmModal({ title, message, onConfirm });
  };

  // Create new search session
  const newSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setCurrentSearchId(null);
  };

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle search history pause/resume
  const toggleSearchHistoryPause = () => {
    const newValue = !searchHistoryPaused;
    setSearchHistoryPaused(newValue);
    showToast(newValue ? 'Search history paused' : 'Search history resumed', 'info');
  };

  // Toggle favorite
  const toggleFavorite = (product) => {
    setFavorites(prev => {
      const isAlreadyFavorited = prev.some(fav => fav.id === product.id);
      if (isAlreadyFavorited) {
        showToast('Removed from favorites', 'info');
        return prev.filter(fav => fav.id !== product.id);
      } else {
        showToast('Added to favorites', 'success');
        return [...prev, product];
      }
    });
  };

  // Perform search with enhanced mock logic
  const performSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // Simulate API call with realistic delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Enhanced mock search logic
    const query = searchQuery.toLowerCase();
    let mockResults = MOCK_PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );

    // If no direct matches, perform fuzzy matching or show popular items
    if (mockResults.length === 0) {
      // Check for partial matches or related terms
      const keywords = query.split(' ');
      mockResults = MOCK_PRODUCTS.filter(product => 
        keywords.some(keyword => 
          product.name.toLowerCase().includes(keyword) ||
          product.category.toLowerCase().includes(keyword)
        )
      );
      
      // If still no matches, show some popular products
      if (mockResults.length === 0) {
        mockResults = MOCK_PRODUCTS.slice(0, 3);
      }
    }
    
    setSearchResults(mockResults);
    setIsSearching(false);

    // Add to history only if not paused
    if (!searchHistoryPaused) {
      const searchId = crypto.randomUUID();
      const newSearchEntry = {
        id: searchId,
        query: searchQuery,
        date: Date.now(),
        resultCount: mockResults.length,
        results: mockResults
      };

      setSearchHistory(prev => [newSearchEntry, ...prev.slice(0, 19)]); // Keep last 20 searches
      setCurrentSearchId(searchId);
    }

    // Close mobile sidebar after search
    setSidebarOpen(false);
    showToast(`Found ${mockResults.length} products`, 'success');
  };

  // Select search from history
  const selectSearch = (searchId) => {
    const search = searchHistory.find(s => s.id === searchId);
    if (search) {
      setSearchQuery(search.query);
      setSearchResults(search.results);
      setCurrentSearchId(searchId);
      setSidebarOpen(false);
      showToast('Search loaded from history', 'info');
    }
  };

  // Delete search from history
  const deleteSearch = (searchId) => {
    setSearchHistory(prev => prev.filter(s => s.id !== searchId));
    if (currentSearchId === searchId) {
      newSearch();
    }
    showToast('Search deleted from history', 'info');
  };

  // Clear all search history
  const clearHistory = () => {
    showConfirmModal(
      'Clear Search History',
      'Are you sure you want to clear all search history? This action cannot be undone.',
      () => {
        setSearchHistory([]);
        setCurrentSearchId(null);
        showToast('Search history cleared', 'success');
        setConfirmModal(null);
      }
    );
  };

  // Export data
  const exportData = () => {
    const data = {
      searchHistory: searchHistory,
      favorites: favorites,
      theme: theme,
      searchHistoryPaused: searchHistoryPaused,
      exportDate: new Date().toISOString(),
      version: "1.0"
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vacuole-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Data exported successfully', 'success');
  };

  // Clear all data
  const clearAllData = () => {
    showConfirmModal(
      'Clear All Data',
      'Are you sure you want to clear all data including search history, favorites, and settings? This action cannot be undone.',
      () => {
        setSearchHistory([]);
        setFavorites([]);
        setSearchQuery("");
        setSearchResults([]);
        setCurrentSearchId(null);
        setSearchHistoryPaused(false);
        showToast('All data has been cleared successfully', 'success');
        setConfirmModal(null);
      }
    );
  };

  // Handle suggestion pick
  const pickSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    // Auto-focus the textarea
    setTimeout(() => {
      const textarea = document.querySelector('textarea');
      textarea?.focus();
    }, 100);
  };

  return (
    <div className={`${currentTheme.bg} antialiased`}>
      <div className="flex min-h-screen w-full">
        {/* Sidebar - Fixed positioning with proper mobile behavior */}
        <div className={`
          fixed top-0 left-0 z-50 h-screen
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${sidebarCollapsed ? 'w-16' : 'w-64'}
        `}>
          <SideBar
            searchHistory={searchHistory}
            onSelectSearch={selectSearch}
            onDeleteSearch={deleteSearch}
            onClearHistory={clearHistory}
            onExportData={exportData}
            onClearAllData={clearAllData}
            currentSearchId={currentSearchId}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
            onNewChat={newSearch}
            theme={theme}
            onThemeChange={onThemeChange}
            searchHistoryPaused={searchHistoryPaused}
            onToggleSearchHistory={toggleSearchHistoryPause}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        {/* Main Content - With responsive margin for sidebar */}
        <div className={`
          flex-1 flex flex-col min-h-screen
          ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}
          transition-all duration-300 ease-in-out
        `}>
          {/* Header - Sticky with backdrop */}
          <header className={`sticky top-0 z-30 ${currentTheme.navBg} backdrop-blur-md ${
            theme === 'dark' ? 'border-b border-gray-800/50' : 'border-b border-slate-200/50'
          }`}>
            <NavBar 
              onNewSearch={newSearch} 
              onToggleSidebar={toggleSidebar}
              isSidebarOpen={sidebarOpen}
              theme={theme}
            />
          </header>

          {/* Content Area - Seamless layout */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="min-h-full flex flex-col">
                {/* Welcome Section or Search Results */}
                {searchResults.length === 0 && !isSearching ? (
                  <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
                    <div className="w-full max-w-4xl mx-auto">
                      <NewChat 
                        onPickSuggestion={pickSuggestion} 
                        searchQuery={searchQuery}
                        theme={theme}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex-1">
                    <ProductResults 
                      results={searchResults} 
                      searchQuery={searchQuery}
                      theme={theme}
                      isSearching={isSearching}
                      favorites={favorites}
                      onToggleFavorite={toggleFavorite}
                    />
                  </div>
                )}
              </div>
            </div>
          </main>

          {/* Search Composer - Sticky footer */}
          <footer className={`sticky bottom-0 z-30 ${
            theme === 'dark' 
              ? 'bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent' 
              : 'bg-gradient-to-t from-white via-white/95 to-transparent'
          } p-4 lg:p-6`}>
            <div className="max-w-4xl mx-auto">
              <SearchBar
                value={searchQuery}
                setValue={setSearchQuery}
                onSearch={performSearch}
                isSearching={isSearching}
                theme={theme}
              />
            </div>
          </footer>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)}
          theme={theme}
        />
      )}

      {/* Confirmation Modal */}
      {confirmModal && (
        <ConfirmModal
          title={confirmModal.title}
          message={confirmModal.message}
          onConfirm={confirmModal.onConfirm}
          onCancel={() => setConfirmModal(null)}
          theme={theme}
        />
      )}
    </div>
  );
}