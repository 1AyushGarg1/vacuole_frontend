import React, { useState } from 'react';
import { User, Heart, Edit3, ChevronDown, ChevronUp, UserCircle } from 'lucide-react';
import NewChatButton from './NewChatButton';
import { UserButton } from '@clerk/clerk-react';
import { useUser,useClerk } from '@clerk/clerk-react'



const SideBar = ({ chatItems = [] }) => {
  const [showChats, setShowChats] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showAmazon, setShowAmazon] = useState(false);
  const [showFlipkart, setShowFlipkart] = useState(false);
  const [showMyntra, setShowMyntra] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const { user } = useUser();
  const { signOut,openUserProfile } = useClerk()

  // Sample data
  const amazonProducts = ['Echo Dot', 'Kindle', 'Amazon Basics Cable'];
  const flipkartProducts = ['Realme Phone', 'Boat Headphones'];
  const myntraProducts = ['Nike Shoes', 'Adidas T-shirt'];
  const otherProducts = ['AliExpress Watch', 'Snapdeal Charger'];

  return (
    <div className="w-64 h-full bg-gray-800 flex flex-col p-4 overflow-y-auto">
      {/* Title */}
      <div className="px-4 py-3 ">
        <h1 className="text-4xl font-bold text-green-400 text-center">Vacuole</h1>
      </div>
      <br/><br/>
      {/* New Chat*/}
      <NewChatButton />
      {/* Chats Dropdown */}
      <div className='mt-4'>
        <button
          className="flex items-center justify-between px-3 py-2 text-white text-sm font-semibold bg-gray-700 rounded hover:bg-gray-600 transition w-full"
          onClick={() => setShowChats(!showChats)}
        >
          <span>Chats</span>
          {showChats ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showChats && (
          <div className="mt-2 flex flex-col space-y-2">
            {chatItems.map((chat, index) => (
              <div
                key={index}
                className="p-2 rounded hover:bg-gray-700 cursor-pointer text-sm text-gray-300"
              >
                {chat}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Favorites Dropdown */}
      <div className="mt-4">
        <button
          className="flex items-center justify-between px-3 py-2 text-white text-sm font-semibold bg-gray-700 rounded hover:bg-gray-600 transition w-full"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          <span className="flex items-center gap-2">
            <Heart size={18} /> Favorites
          </span>
          {showFavorites ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showFavorites && (
          <div className="ml-3 mt-2 space-y-2">
            {/* Amazon */}
            <button
              className="flex justify-between w-full text-gray-300 text-sm hover:text-white"
              onClick={() => setShowAmazon(!showAmazon)}
            >
              Amazon
              {showAmazon ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showAmazon && (
              <ul className="ml-4 space-y-1 text-gray-400 text-sm">
                {amazonProducts.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            )}

            {/* Flipkart */}
            <button
              className="flex justify-between w-full text-gray-300 text-sm hover:text-white"
              onClick={() => setShowFlipkart(!showFlipkart)}
            >
              Flipkart
              {showFlipkart ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showFlipkart && (
              <ul className="ml-4 space-y-1 text-gray-400 text-sm">
                {flipkartProducts.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            )}

            {/* Myntra */}
            <button
              className="flex justify-between w-full text-gray-300 text-sm hover:text-white"
              onClick={() => setShowMyntra(!showMyntra)}
            >
              Myntra
              {showMyntra ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showMyntra && (
              <ul className="ml-4 space-y-1 text-gray-400 text-sm">
                {myntraProducts.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            )}

            {/* Others */}
            <button
              className="flex justify-between w-full text-gray-300 text-sm hover:text-white"
              onClick={() => setShowOther(!showOther)}
            >
              Others
              {showOther ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showOther && (
              <ul className="ml-4 space-y-1 text-gray-400 text-sm">
                {otherProducts.map((item, index) => (
                  <li key={index} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User Button */}
      <div className="mt-4f flex gap-2 items-center cursor-pointer">
        <UserButton />
        <div className='text-bold' >{user.fullName}</div>
      </div>
    </div>
  );
};

export default SideBar;
