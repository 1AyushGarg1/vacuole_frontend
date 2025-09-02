import React from "react";
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

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
  user: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  menu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
};

export default function NavBar({ onNewSearch, onToggleSidebar, isSidebarOpen, theme = 'dark' }) {
  const { signOut, openUserProfile } = useClerk();
  const { user } = useUser()
  const { openSignIn } = useClerk()

  const themeClasses = {
    dark: {
      text: "text-white",
      textSecondary: "text-gray-400",
      accent: "text-emerald-400",
      button: "text-gray-400 hover:text-emerald-300",
      newSearchButton: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
      separator: "bg-gray-700"
    },
    light: {
      text: "text-slate-900",
      textSecondary: "text-slate-600",
      accent: "text-emerald-600",
      button: "text-slate-600 hover:text-emerald-600",
      newSearchButton: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20",
      separator: "bg-slate-300"
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <header className="backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onToggleSidebar}
              className={`lg:hidden p-2 rounded-lg hover:bg-opacity-50 ${currentTheme.button} transition-all duration-300`}
            >
              {isSidebarOpen ? <Icon.x className="w-5 h-5" /> : <Icon.menu className="w-5 h-5" />}
            </button>
            <div className="text-2xl font-bold">
              <span className={currentTheme.accent}>Vacuole</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className={`w-1 h-6 ${currentTheme.separator} rounded-full`}></div>
              <span className={`text-sm ${currentTheme.textSecondary}`}>Product Discovery</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <button
              onClick={onNewSearch}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${currentTheme.newSearchButton} transition-all duration-300 group`}
            >
              <Icon.plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-400" />
              <span className="hidden sm:inline">New Search</span>
            </button>
            
            {/* User menu */}
            <div className="flex items-center gap-2">
              <button className={`p-2.5 rounded-xl hover:bg-opacity-50 ${currentTheme.button} transition-all duration-300`}>
                <UserButton className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}