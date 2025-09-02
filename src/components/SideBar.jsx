import React, { useState } from 'react';
import SearchHistory from "../components/SearchHistory";
import Settings from "../components/Settings";
const Icon = {
  plus: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  ),
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
  user: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  settings: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  historyIcon1: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="8" />
      <circle cx="11" cy="11" r="3" />
      <polyline points="11,7 11,11 14,14" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  ),
  historyIcon2: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <circle cx="12" cy="16" r="3" />
      <polyline points="12,14 12,16 13,17" />
    </svg>
  ),
  historyIcon3: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l4-8 4 8-4 8-4-8z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  ),
  chevronLeft: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  ),
  chevronRight: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  ),
  menu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  ),
  sparkles: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3l1.545 4.635L18.18 9.18l-4.635 1.545L12 15.36l-1.545-4.635L5.82 9.18l4.635-1.545L12 3z" />
      <path d="M8 3h1l1 3-1 1H8l-1-1L8 3zM19 12h1l1 3-1 1h-1l-1-1 1-3z" />
    </svg>
  ),
};

function SidebarButton({ icon, label, count, expanded, onClick, isActive = false, collapsed, theme }) {
  const themeClasses = {
    dark: {
      button: isActive 
        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
        : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-200 border border-transparent',
      count: 'bg-gray-700/50 text-gray-300'
    },
    light: {
      button: isActive 
        ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' 
        : 'hover:bg-slate-100/50 text-slate-600 hover:text-slate-900 border border-transparent',
      count: 'bg-slate-200/50 text-slate-600'
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group relative overflow-hidden ${currentTheme.button}`}
      title={collapsed ? label : undefined}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      
      {!collapsed && (
        <>
          <div className="flex-1 min-w-0 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="font-medium truncate">{label}</span>
              {count > 0 && (
                <span className={`text-xs ${currentTheme.count} px-1.5 py-0.5 rounded-full ml-2`}>
                  {count}
                </span>
              )}
            </div>
          </div>
          
          <Icon.chevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
        </>
      )}
    </button>
  );
}

function FavoriteItem({ product, collapsed, onToggleFavorite, theme }) {
  const themeClasses = {
    dark: {
      item: "hover:bg-gray-800/30 text-gray-300 hover:text-emerald-300 border-transparent hover:border-gray-700/30",
      removeButton: "text-gray-500 hover:text-red-400"
    },
    light: {
      item: "hover:bg-slate-100/30 text-slate-700 hover:text-emerald-600 border-transparent hover:border-slate-300/30",
      removeButton: "text-slate-500 hover:text-red-500"
    }
  };

  const currentTheme = themeClasses[theme];

  if (collapsed) {
    return (
      <div 
        className={`p-1.5 rounded-md ${currentTheme.item} cursor-pointer transition-all duration-200 text-center border`}
        title={product.name}
      >
        <span className="text-xs font-medium">{product.image}</span>
      </div>
    );
  }

  return (
    <div className={`group px-2 py-1.5 rounded-md ${currentTheme.item} cursor-pointer transition-all duration-200 border`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm">{product.image}</span>
          <div className="flex-1 min-w-0">
            <span className="text-xs truncate block">{product.name}</span>
            <span className="text-xs text-emerald-400 font-medium">{product.price}</span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product);
          }}
          className={`opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-red-500/10 ${currentTheme.removeButton} transition-all duration-200 ml-1`}
          title="Remove from favorites"
        >
          <Icon.x className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

function EmptyFavoritesMessage({ theme }) {
  const themeClasses = {
    dark: {
      icon: "text-gray-600",
      text: "text-gray-500",
      subtext: "text-gray-600"
    },
    light: {
      icon: "text-slate-400",
      text: "text-slate-500",
      subtext: "text-slate-400"
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className="ml-6 p-3 text-center">
      <Icon.heart className={`w-6 h-6 ${currentTheme.icon} mx-auto mb-2`} />
      <p className={`text-xs ${currentTheme.text}`}>No favorites yet</p>
      <p className={`text-xs ${currentTheme.subtext} mt-1`}>Click the heart on a product to save it here</p>
    </div>
  );
}

export default function Sidebar({
  searchHistory,
  onSelectSearch,
  onDeleteSearch,
  onClearHistory,
  onExportData,
  onClearAllData,
  currentSearchId,
  collapsed,
  setCollapsed,
  isOpen,
  setIsOpen,
  onNewChat,
  theme,
  onThemeChange,
  searchHistoryPaused,
  onToggleSearchHistory,
  favorites = [],
  onToggleFavorite
}) {
  const [expandedSections, setExpandedSections] = useState({
    favorites: false,
    searchHistory: false,
    settings: false
  });

  const themeClasses = {
    dark: {
      bg: "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-r border-gray-800/50",
      headerBg: "bg-gray-950/80 border-b border-gray-800/30",
      text: "text-gray-100",
      textSecondary: "text-gray-400",
      button: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-gray-900",
      logoButton: "text-gray-400 hover:text-emerald-300",
      userSection: "hover:bg-gray-800/30 text-gray-200",
      footerBg: "bg-gray-950/50 border-t border-gray-800/30"
    },
    light: {
      bg: "bg-gradient-to-b from-slate-50 via-white to-slate-100 border-r border-slate-200/50",
      headerBg: "bg-white/80 border-b border-slate-200/30",
      text: "text-slate-900",
      textSecondary: "text-slate-600",
      button: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white",
      logoButton: "text-slate-600 hover:text-emerald-600",
      userSection: "hover:bg-slate-100/30 text-slate-800",
      footerBg: "bg-white/50 border-t border-slate-200/30"
    }
  };

  const currentTheme = themeClasses[theme];

  const toggleSection = (section) => {
    if (collapsed) return;
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Close sidebar on mobile when clicking outside
  const handleOverlayClick = () => {
    if (window.innerWidth < 1024) { // lg breakpoint
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay - only show on mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}

      <div className={`
        ${collapsed ? "w-16" : "w-64"} 
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        fixed lg:static inset-y-0 left-0 z-50
        transition-all duration-300 ease-in-out
        h-screen ${currentTheme.bg}
        backdrop-blur-xl 
        flex flex-col
        shadow-xl shadow-black/10
      `}>
        {/* Header with Logo */}
        <div className={`p-4 ${currentTheme.headerBg} flex-shrink-0`}>
          <div className="flex items-center justify-between">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Icon.sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className={`text-lg font-bold ${currentTheme.text}`}>Vacuole</h1>
                  <p className={`text-xs ${currentTheme.textSecondary}`}>AI Product Search</p>
                </div>
              </div>
            )}
            
            {collapsed && (
              <div className="w-8 h-8 mx-auto rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg" title="Vacuole">
                <Icon.sparkles className="w-4 h-4 text-white" />
              </div>
            )}
            
            {/* Mobile close button */}
            <button
              onClick={() => setIsOpen(false)}
              className={`p-2 rounded-lg ${currentTheme.logoButton} transition-all duration-200 lg:hidden`}
            >
              <Icon.x className="w-4 h-4" />
            </button>

            {/* Desktop collapse button */}
            {!collapsed && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className={`p-2 rounded-lg ${currentTheme.logoButton} transition-all duration-200 hidden lg:block`}
                title="Collapse sidebar"
              >
                <Icon.chevronLeft className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              className={`w-full mt-2 p-2 rounded-lg ${currentTheme.logoButton} transition-all duration-200 hidden lg:block`}
              title="Expand sidebar"
            >
              <Icon.menu className="w-4 h-4 mx-auto" />
            </button>
          )}
        </div>

        {/* New Chat Button */}
        <div className="p-3 flex-shrink-0">
          <button 
            onClick={onNewChat}
            className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 ${currentTheme.button} font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] ${collapsed ? 'px-2' : ''}`}
            title={collapsed ? "New Chat" : undefined}
          >
            <Icon.plus className={collapsed ? "w-4 h-4" : "w-5 h-5"} />
            {!collapsed && <span>New Chat</span>}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden px-3 pb-4">
          <div 
            className={`h-full space-y-2 ${collapsed ? '' : 'overflow-y-auto pr-1'}`}
            style={{
              scrollbarWidth: collapsed ? 'none' : 'thin',
              scrollbarColor: collapsed ? 'transparent' : theme === 'dark' ? 'rgb(63 63 70 / 0.5) rgb(24 24 27 / 0.5)' : 'rgb(148 163 184 / 0.5) rgb(241 245 249 / 0.5)'
            }}
          >
            {/* Favorites Section */}
            <SidebarButton
              icon={<Icon.heart className={collapsed ? "w-4 h-4" : "w-5 h-5"} />}
              label="Favorites"
              count={favorites.length}
              expanded={expandedSections.favorites}
              onClick={() => toggleSection('favorites')}
              collapsed={collapsed}
              theme={theme}
            />
            
            {/* Only show expanded content if not collapsed */}
            {!collapsed && expandedSections.favorites && (
              <div className="ml-6 space-y-1">
                {favorites.length === 0 ? (
                  <EmptyFavoritesMessage theme={theme} />
                ) : (
                  <div className="max-h-64 overflow-y-auto space-y-0.5 scrollbar-thin">
                    {favorites.map((product) => (
                      <FavoriteItem
                        key={product.id}
                        product={product}
                        collapsed={collapsed}
                        onToggleFavorite={onToggleFavorite}
                        theme={theme}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Search History - Only show when not collapsed */}
            {!collapsed && (
              <>
                <SidebarButton
                  icon={<Icon.historyIcon1 className="w-5 h-5" />}
                  label="Search History"
                  count={searchHistory.length}
                  expanded={expandedSections.searchHistory}
                  onClick={() => toggleSection('searchHistory')}
                  collapsed={collapsed}
                  theme={theme}
                />
                
                {expandedSections.searchHistory && (
                  <SearchHistory
                    searchHistory={searchHistory}
                    onSelectSearch={onSelectSearch}
                    onDeleteSearch={onDeleteSearch}
                    onClearHistory={onClearHistory}
                    currentSearchId={currentSearchId}
                    collapsed={collapsed}
                    theme={theme}
                  />
                )}

                {/* Settings - Only show when not collapsed */}
                <SidebarButton
                  icon={<Icon.settings className="w-5 h-5" />}
                  label="Settings"
                  count={0}
                  expanded={expandedSections.settings}
                  onClick={() => toggleSection('settings')}
                  collapsed={collapsed}
                  theme={theme}
                />
                
                {expandedSections.settings && (
                  <Settings
                    collapsed={collapsed}
                    onExportData={onExportData}
                    onClearAllData={onClearAllData}
                    theme={theme}
                    onThemeChange={onThemeChange}
                    searchHistoryPaused={searchHistoryPaused}
                    onToggleSearchHistory={onToggleSearchHistory}
                  />
                )}
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`p-3 ${currentTheme.footerBg} flex-shrink-0`}>
          {!collapsed ? (
            <div className={`flex items-center gap-3 p-2 rounded-lg ${currentTheme.userSection} transition-all duration-200`}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
                <Icon.user className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${currentTheme.text} truncate`}>John Doe</p>
                <p className={`text-xs ${currentTheme.textSecondary}`}>Premium User</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg" title="John Doe">
              <Icon.user className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}