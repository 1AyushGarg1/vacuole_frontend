import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import './App.css';

export default function App() {
  // Centralized theme state
  const [theme, setTheme] = useState('dark');

  // Initialize theme from memory (in real app, this would be localStorage)
  useEffect(() => {
    // In a real application, you would load theme from localStorage here
    const savedTheme = 'dark'; // Default theme
    setTheme(savedTheme);
  }, []);

  // Theme toggle function
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    // In a real application, you would save to localStorage here
    // localStorage.setItem('vacuole-theme', newTheme);
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Routes>
        <Route 
          path="/" 
          element={
            <LandingPage 
              theme={theme} 
              onThemeChange={toggleTheme} 
            />
          } 
        />
        <Route 
          path="/home" 
          element={
            <Home 
              theme={theme} 
              onThemeChange={toggleTheme} 
            />
          } 
        />
      </Routes>
    </div>
  );
}