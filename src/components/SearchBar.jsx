import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { getToken } = useAuth()

  const addMessage = async () => {
    console.log("add message called:", searchQuery);
    const formData = new FormData()
    formData.append('query',searchQuery)
    const { data } = await axios.post(
        '/chats',
        formData,
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    console.log("data received : ",data)
    // do your logic here, like sending the query to a backend
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addMessage();
    }
  };

  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search for products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
      />
      <button
        onClick={addMessage}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <ArrowUp size={16} className="text-gray-900" />
      </button>
    </div>
  );
};

export default SearchBar;
