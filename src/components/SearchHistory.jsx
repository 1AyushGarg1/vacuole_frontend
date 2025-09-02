import React from "react";

const Icon = {
  clock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  trash: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="3,6 5,6 21,6" />
      <path d="M19,6v14a2,2 0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2" />
    </svg>
  ),
  history: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5M3.05 13A9 9 0 1012 21a9 9 0 01-8.95-8" />
    </svg>
  ),
};

function formatTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}

function SearchHistoryItem({ search, onClick, onDelete, isActive, collapsed, theme }) {
  const themeClasses = {
    dark: {
      active: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
      inactive: 'hover:bg-gray-800/30 text-gray-400 border border-transparent hover:border-gray-700/30',
      text: 'text-gray-200',
      textSecondary: 'text-gray-500',
      deleteButton: 'text-gray-500 hover:text-red-400',
      collapsedBg: 'bg-emerald-500/10'
    },
    light: {
      active: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
      inactive: 'hover:bg-slate-100/30 text-slate-600 border border-transparent hover:border-slate-300/30',
      text: 'text-slate-800',
      textSecondary: 'text-slate-500',
      deleteButton: 'text-slate-500 hover:text-red-500',
      collapsedBg: 'bg-emerald-500/10'
    }
  };

  const currentTheme = themeClasses[theme];

  if (collapsed) {
    return (
      <div
        className={`group cursor-pointer p-2 rounded-lg transition-all duration-200 ${
          isActive 
            ? currentTheme.active
            : currentTheme.inactive
        }`}
        onClick={() => onClick(search.id)}
        title={search.query}
      >
        <div className={`w-8 h-8 mx-auto rounded-lg ${currentTheme.collapsedBg} flex items-center justify-center`}>
          <span className="text-xs font-medium text-emerald-300">{search.query.charAt(0).toUpperCase()}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group cursor-pointer px-2 py-1.5 rounded-md transition-all duration-200 ${
        isActive ? currentTheme.active : currentTheme.inactive
      }`}
      onClick={() => onClick(search.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium ${currentTheme.text} truncate mb-0.5`}>
            {search.query}
          </p>
          <div className={`flex items-center gap-1.5 text-xs ${currentTheme.textSecondary}`}>
            <Icon.clock className="w-3 h-3" />
            <span>{formatTime(search.date)}</span>
            <span>•</span>
            <span>{search.resultCount} results</span>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(search.id);
          }}
          className={`opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-red-500/10 ${currentTheme.deleteButton} transition-all duration-200 ml-1`}
          title="Delete search"
        >
          <Icon.x className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

export default function SearchHistory({ 
  searchHistory, 
  onSelectSearch, 
  onDeleteSearch, 
  onClearHistory,
  currentSearchId,
  collapsed,
  theme = 'dark'
}) {
  const themeClasses = {
    dark: {
      text: 'text-gray-500',
      textSecondary: 'text-gray-600',
      icon: 'text-gray-600',
      deleteButton: 'text-gray-500 hover:text-red-400'
    },
    light: {
      text: 'text-slate-500',
      textSecondary: 'text-slate-400',
      icon: 'text-slate-400',
      deleteButton: 'text-slate-500 hover:text-red-500'
    }
  };

  const currentTheme = themeClasses[theme];

  if (searchHistory.length === 0) {
    return collapsed ? null : (
      <div className="ml-6 p-3 text-center">
        <Icon.history className={`w-6 h-6 ${currentTheme.icon} mx-auto mb-2`} />
        <p className={`text-xs ${currentTheme.text}`}>No search history yet</p>
        <p className={`text-xs ${currentTheme.textSecondary} mt-1`}>Your searches will appear here</p>
      </div>
    );
  }

  return (
    <div className={collapsed ? "space-y-1" : "ml-6 space-y-1"}>
      {!collapsed && (
        <div className="flex items-center justify-between px-2 py-1.5">
          <span className={`text-xs ${currentTheme.text} font-medium`}>
            {searchHistory.length} searches
          </span>
          <button
            onClick={onClearHistory}
            className={`text-xs ${currentTheme.deleteButton} transition-colors duration-200 flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-red-500/10`}
          >
            <Icon.trash className="w-3 h-3" />
            Clear
          </button>
        </div>
      )}
      
      <div className="max-h-64 overflow-y-auto space-y-0.5">
        {searchHistory.map((search) => (
          <SearchHistoryItem
            key={search.id}
            search={search}
            onClick={onSelectSearch}
            onDelete={onDeleteSearch}
            isActive={currentSearchId === search.id}
            collapsed={collapsed}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}