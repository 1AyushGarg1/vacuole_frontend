import React, { useState, useEffect } from "react";

const Icon = {
  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  ),
  info: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  alertTriangle: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
};

export default function Toast({ message, type = 'success', onClose, theme = 'dark' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Fade in
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const typeConfig = {
    success: {
      icon: <Icon.check className="w-5 h-5" />,
      colors: {
        dark: "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300",
        light: "bg-emerald-50 border border-emerald-200 text-emerald-700"
      },
      iconColors: {
        dark: "text-emerald-400",
        light: "text-emerald-600"
      }
    },
    info: {
      icon: <Icon.info className="w-5 h-5" />,
      colors: {
        dark: "bg-blue-500/10 border border-blue-500/30 text-blue-300",
        light: "bg-blue-50 border border-blue-200 text-blue-700"
      },
      iconColors: {
        dark: "text-blue-400",
        light: "text-blue-600"
      }
    },
    warning: {
      icon: <Icon.alertTriangle className="w-5 h-5" />,
      colors: {
        dark: "bg-yellow-500/10 border border-yellow-500/30 text-yellow-300",
        light: "bg-yellow-50 border border-yellow-200 text-yellow-700"
      },
      iconColors: {
        dark: "text-yellow-400",
        light: "text-yellow-600"
      }
    },
    error: {
      icon: <Icon.alertTriangle className="w-5 h-5" />,
      colors: {
        dark: "bg-red-500/10 border border-red-500/30 text-red-300",
        light: "bg-red-50 border border-red-200 text-red-700"
      },
      iconColors: {
        dark: "text-red-400",
        light: "text-red-600"
      }
    }
  };

  const config = typeConfig[type] || typeConfig.info;

  return (
    <div className={`fixed top-4 right-4 z-[100] transition-all duration-300 transform ${
      isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`
        ${config.colors[theme]}
        backdrop-blur-md rounded-xl px-4 py-3 pr-10 shadow-xl
        max-w-sm min-w-[300px]
        transition-all duration-300
      `}>
        <div className="flex items-center gap-3">
          <div className={config.iconColors[theme]}>
            {config.icon}
          </div>
          <span className="text-sm font-medium flex-1">
            {message}
          </span>
          <button
            onClick={handleClose}
            className={`absolute top-2 right-2 p-1 rounded-lg transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
            }`}
          >
            <Icon.x className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}