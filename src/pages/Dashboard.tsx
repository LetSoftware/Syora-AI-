import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { MessageSquare, Search, Menu, Send, Mic } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [showVerificationAlert, setShowVerificationAlert] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/login');
    } else {
      setUser(user);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const chats = [
    'Blue Sneakers with Red laces',
    'House in Karu',
    'Pot of land at Abuja'
  ];

  const categories = ['Fashion', 'Housing', 'Shoes', 'Gadgets', 'Job opportunities'];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"></div>
            <Menu className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <MessageSquare className="w-4 h-4" />
            New Chat
          </button>
        </div>

        {/* Search Chat */}
        <div className="px-4 pb-4">
          <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <Search className="w-4 h-4" />
            Search Chat
          </button>
        </div>

        {/* Become a Vendor Button */}
        <div className="px-4 pb-4">
          <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Become a Vendor
          </button>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto px-4">
          <div className="text-xs font-semibold text-gray-500 mb-2 px-2">CHATS</div>
          <div className="space-y-1">
            {chats.map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full hover:bg-gray-100 rounded-lg p-2"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
              {user?.email?.[0].toUpperCase()}
            </div>
            <span className="text-sm text-gray-700 truncate">{user?.email?.split('@')[0]}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Verification Alert */}
        {showVerificationAlert && (
          <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
              <span className="text-sm text-gray-700">Please verify your email address</span>
            </div>
            <button
              onClick={() => setShowVerificationAlert(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          {/* Logo and Brand */}
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 mx-auto mb-4"></div>
            <h1 className="text-4xl font-bold text-center">Syora</h1>
          </div>

          {/* Welcome Message */}
          <p className="text-gray-600 text-center mb-8 max-w-md">
            Tell me about your dream property and I'll help you find the perfect match!
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white rounded-full border border-gray-300 px-6 py-3 shadow-sm">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 outline-none text-sm"
              />
              <button className="text-blue-600 hover:text-blue-700">
                <Mic className="w-5 h-5" />
              </button>
              <button className="text-blue-600 hover:text-blue-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
