import React from 'react';
import { Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewChatButton = () => {
  const navigate = useNavigate();

  const handleNewChat = () => {
    // const newChatId = uuidv4();         
    navigate(`/home`);
  };

  return (
    <button
      onClick={handleNewChat}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md text-sm font-medium transition duration-200 w-full"
    >
      <Edit3 size={16} />
      New Chat
    </button>
  );
};

export default NewChatButton;
