import React, { useState, useEffect } from "react";
const Icon = {
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

export default function ConfirmModal({ title, message, onConfirm, onCancel, theme = 'dark' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(onCancel, 300);
  };
  const handleConfirm = () => {
    setIsVisible(false);
    setTimeout(onConfirm, 300);
  };
  const themeClasses = {
    dark: {
      overlay: "bg-black/70",
      modal: "bg-gray-800 border border-gray-700",
      text: "text-white",
      textSecondary: "text-gray-300",
      cancelButton: "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white",
      confirmButton: "bg-red-500 hover:bg-red-600 text-white",
      closeButton: "text-gray-400 hover:text-white hover:bg-gray-700"
    },
    light: {
      overlay: "bg-black/50",
      modal: "bg-white border border-slate-200",
      text: "text-slate-900",
      textSecondary: "text-slate-600",
      cancelButton: "bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900",
      confirmButton: "bg-red-500 hover:bg-red-600 text-white",
      closeButton: "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
    }
  };
  const currentTheme = themeClasses[theme];
  return (
    <div className={`
      fixed inset-0 z-[200] 
      transition-all duration-300
      ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}>
      <div 
        className={`absolute inset-0 ${currentTheme.overlay} backdrop-blur-sm`}
        onClick={handleCancel}
      />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={`
          ${currentTheme.modal} 
          rounded-2xl shadow-2xl backdrop-blur-md
          max-w-md w-full p-6
          transform transition-all duration-300
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}
        `}>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <Icon.alertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className={`text-lg font-semibold ${currentTheme.text}`}>
                {title}
              </h3>
            </div>
            <button
              onClick={handleCancel}
              className={`
                p-2 rounded-lg transition-all duration-200
                ${currentTheme.closeButton}
              `}
            >
              <Icon.x className="w-4 h-4" />
            </button>
          </div>
          <div className="mb-8">
            <p className={`${currentTheme.textSecondary} leading-relaxed`}>
              {message}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={handleCancel}
              className={`
                px-4 py-2 rounded-lg font-medium
                transition-all duration-200
                ${currentTheme.cancelButton}
              `}
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className={`
                px-4 py-2 rounded-lg font-medium
                transition-all duration-200 transform hover:scale-105
                ${currentTheme.confirmButton}
                shadow-lg hover:shadow-red-500/25
              `}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}