import React, { useState } from 'react';
import { Menu, X, Search, User, Heart, Edit3 } from 'lucide-react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const chatItems = [
    "Chat with Nike",
    "Amazon product",
    "Best headphones",
    "Top phones 2025",
    "Eco-friendly bags",
    "Smart watches"
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block">
        <SideBar chatItems={chatItems} />
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="absolute top-4 left-4 md:hidden z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded bg-gray-800 text-white focus:outline-none"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 z-40 p-4 md:hidden transition-all duration-300">
          <SideBar chatItems={chatItems} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 overflow-auto">
          <div className="max-w-2xl w-full text-center">
            <h2 className="text-6xl font-bold mb-4">Hi, I'm Vacuole</h2>
            <p className="text-gray-400 mb-12">Describe what product is on your mind!</p>

            {/* Search Bar */}
            <SearchBar />

            {/* Tags */}
            <div className="flex items-center justify-center space-x-3 mt-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-700 text-gray-300 border border-gray-600">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                tag brand
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-gray-700 text-gray-300 border border-gray-600">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                tag e-commerce
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
