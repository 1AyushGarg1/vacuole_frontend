import React from "react";

const Icon = {
  monitor: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  pause: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  ),
  play: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polygon points="5,3 19,12 5,21" />
    </svg>
  ),
  sun: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  moon: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  helpCircle: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  messageSquare: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  download: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
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

function ThemeToggle({ theme, onThemeChange }) {
  const toggleClasses = {
    dark: {
      container: 'bg-gray-700 shadow-inner',
      active: 'bg-emerald-500 shadow-lg shadow-emerald-500/30',
      toggle: {
        inactive: 'left-0.5 bg-gray-400 text-gray-800',
        active: 'left-6 bg-white text-emerald-600 shadow-md'
      }
    },
    light: {
      container: 'bg-slate-300 shadow-inner',
      active: 'bg-emerald-500 shadow-lg shadow-emerald-500/30',
      toggle: {
        inactive: 'left-0.5 bg-slate-100 text-slate-600',
        active: 'left-6 bg-white text-emerald-600 shadow-md'
      }
    }
  };

  const currentToggle = toggleClasses[theme];

  return (
    <button
      onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
        theme === 'dark' ? currentToggle.container : currentToggle.active
      }`}
    >
      <div className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
        theme === 'dark' ? currentToggle.toggle.inactive : currentToggle.toggle.active
      }`}>
        {theme === 'dark' ? (
          <Icon.moon className="w-2.5 h-2.5" />
        ) : (
          <Icon.sun className="w-2.5 h-2.5" />
        )}
      </div>
    </button>
  );
}

function HistoryToggle({ searchHistoryPaused, onToggleSearchHistory, theme }) {
  const toggleClasses = {
    dark: {
      container: 'bg-gray-700 shadow-inner',
      active: 'bg-emerald-500 shadow-lg shadow-emerald-500/30',
      toggle: {
        inactive: 'left-0.5 bg-gray-400 text-gray-800',
        active: 'left-6 bg-white text-emerald-600 shadow-md'
      }
    },
    light: {
      container: 'bg-slate-300 shadow-inner',
      active: 'bg-emerald-500 shadow-lg shadow-emerald-500/30',
      toggle: {
        inactive: 'left-0.5 bg-slate-100 text-slate-600',
        active: 'left-6 bg-white text-emerald-600 shadow-md'
      }
    }
  };

  const currentToggle = toggleClasses[theme];

  return (
    <button
      onClick={onToggleSearchHistory}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
        searchHistoryPaused ? currentToggle.container : currentToggle.active
      }`}
    >
      <div className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
        searchHistoryPaused ? currentToggle.toggle.inactive : currentToggle.toggle.active
      }`}>
        {searchHistoryPaused ? (
          <Icon.pause className="w-2.5 h-2.5" />
        ) : (
          <Icon.play className="w-2.5 h-2.5" />
        )}
      </div>
    </button>
  );
}

function ActionButton({ icon, label, onClick, variant = "default", theme }) {
  const variants = {
    dark: {
      default: "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-gray-200",
      danger: "bg-red-500/10 text-red-300 hover:bg-red-500/20",
      success: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
    },
    light: {
      default: "bg-slate-200/50 text-slate-600 hover:bg-slate-300/50 hover:text-slate-700",
      danger: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
      success: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20"
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 ${variants[theme][variant]}`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

function SettingRow({ icon, label, control, collapsed, theme }) {
  const themeClasses = {
    dark: {
      collapsedBg: "bg-gray-800/30 hover:bg-gray-800/50",
      collapsedIcon: "bg-gray-800/50 text-gray-400",
      iconBg: "bg-emerald-500/10 text-emerald-300",
      text: "text-gray-200"
    },
    light: {
      collapsedBg: "bg-slate-100/30 hover:bg-slate-200/50",
      collapsedIcon: "bg-slate-200/50 text-slate-600",
      iconBg: "bg-emerald-500/10 text-emerald-600",
      text: "text-slate-800"
    }
  };

  const currentTheme = themeClasses[theme];

  if (collapsed) {
    return (
      <div className={`p-2 rounded-lg ${currentTheme.collapsedBg} transition-colors duration-200`} title={label}>
        <div className={`w-8 h-8 mx-auto rounded-lg ${currentTheme.collapsedIcon} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between py-2 px-1">
      <div className="flex items-center gap-2.5">
        <div className={`w-6 h-6 rounded-md ${currentTheme.iconBg} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <span className={`font-medium ${currentTheme.text} text-sm`}>{label}</span>
      </div>
      <div className="flex-shrink-0">
        {control}
      </div>
    </div>
  );
}

export default function Settings({ 
  collapsed, 
  onExportData, 
  onClearAllData, 
  theme, 
  onThemeChange, 
  searchHistoryPaused, 
  onToggleSearchHistory 
}) {
  const themeClasses = {
    dark: {
      text: "text-gray-500",
      textSecondary: "text-gray-600",
      icon: "text-gray-600",
      deleteButton: "text-gray-500 hover:text-red-400",
      separator: "border-gray-800/20"
    },
    light: {
      text: "text-slate-600",
      textSecondary: "text-slate-500",
      icon: "text-slate-500",
      deleteButton: "text-slate-600 hover:text-red-500",
      separator: "border-slate-200/30"
    }
  };

  const currentTheme = themeClasses[theme];

  if (collapsed) {
    return (
      <div className="space-y-1">
        <SettingRow
          icon={<Icon.monitor className="w-3.5 h-3.5" />}
          label="Theme"
          collapsed={true}
          theme={theme}
        />
        <SettingRow
          icon={<Icon.history className="w-3.5 h-3.5" />}
          label="Search History"
          collapsed={true}
          theme={theme}
        />
      </div>
    );
  }

  return (
    <div className="ml-6 space-y-4 max-h-96 overflow-y-auto">
      {/* Theme Settings */}
      <div className="space-y-3">
        <SettingRow
          icon={<Icon.monitor className="w-4 h-4" />}
          label="Theme"
          control={<ThemeToggle theme={theme} onThemeChange={onThemeChange} />}
          theme={theme}
        />
        
        <div className={`border-t ${currentTheme.separator}`}></div>
        
        {/* Search History Control */}
        <SettingRow
          icon={<Icon.history className="w-4 h-4" />}
          label="Search History"
          control={<HistoryToggle searchHistoryPaused={searchHistoryPaused} onToggleSearchHistory={onToggleSearchHistory} theme={theme} />}
          theme={theme}
        />
        
        <div className={`border-t ${currentTheme.separator}`}></div>
        
        {/* Data Management */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 py-1">
            <div className={`w-6 h-6 rounded-md ${theme === 'dark' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-emerald-500/10 text-emerald-600'} flex items-center justify-center shrink-0`}>
              <Icon.download className="w-4 h-4" />
            </div>
            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-800'} text-sm`}>Data Management</span>
          </div>
          <div className="ml-8 space-y-1.5">
            <ActionButton
              icon={<Icon.download className="w-3.5 h-3.5" />}
              label="Export Data"
              onClick={onExportData}
              variant="success"
              theme={theme}
            />
            <ActionButton
              icon={<Icon.trash className="w-3.5 h-3.5" />}
              label="Clear All Data"
              onClick={onClearAllData}
              variant="danger"
              theme={theme}
            />
          </div>
        </div>
        
        <div className={`border-t ${currentTheme.separator}`}></div>
        
        {/* Help & Support */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 py-1">
            <div className={`w-6 h-6 rounded-md ${theme === 'dark' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-emerald-500/10 text-emerald-600'} flex items-center justify-center shrink-0`}>
              <Icon.helpCircle className="w-4 h-4" />
            </div>
            <span className={`font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-slate-800'} text-sm`}>Help & Support</span>
          </div>
          <div className="ml-8 space-y-1.5">
            <ActionButton
              icon={<Icon.helpCircle className="w-3.5 h-3.5" />}
              label="Help & FAQ"
              onClick={() => window.open('https://help.vacuole.com', '_blank')}
              theme={theme}
            />
            <ActionButton
              icon={<Icon.messageSquare className="w-3.5 h-3.5" />}
              label="Send Feedback"
              onClick={() => window.open('mailto:feedback@vacuole.com', '_blank')}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}