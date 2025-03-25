import React, { useState, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'bot', message: '🤖: Hello, I am AI chat bot! How can I assist you today?' },
  ]);
  const [isTyping, setIsTyping] = useState(false);  // State for typing indicator

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Function to cut response to 300 characters without splitting words
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    const truncated = text.slice(0, limit);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return truncated.slice(0, lastSpaceIndex);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const newLog = [...chatLog, { sender: 'user', message: input }];
      setChatLog(newLog);
      setInput('');
      
      // Show typing indicator while waiting for response
      setIsTyping(true);

      try {
        const response = await axios.post('http://localhost:8000/api/a2/ai-response/chat', { message: input });
        if (response.data.success) {
          // Hide typing indicator once the response is received
          setIsTyping(false);

          // Truncate response to 300 characters without cutting words
          const botResponse = response.data.data.response;
          console.log(botResponse);
          
          setChatLog((prevLog) => [...prevLog, { sender: 'bot', message: `🤖: ${botResponse}` }]);
        }
      } catch (error) {
        setIsTyping(false); // Hide typing indicator on error
        setChatLog((prevLog) => [...prevLog, { sender: 'bot', message: '🤖: Sorry, an error occurred. Please try again.' }]);
      }
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <div
        onClick={toggleChat}
        className="bg-blue-600 w-12 h-12 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center fixed bottom-20 right-6"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaRobot className="text-xl" />}
      </div>

      {isOpen && (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg w-80 max-w-full mb-16">
          <div className="h-64 overflow-y-auto p-2 border-b">
            {chatLog.map((log, index) => (
              <div
                key={index}
                className={`mb-2 ${log.sender === 'bot' ? 'text-left' : 'text-right'} animate__animated animate__fadeIn`}
              >
                <p
                  className={`inline-block p-2 rounded-lg ${
                    log.sender === 'bot'
                      ? 'bg-gray-100 text-gray-800 font-bold text-sm'
                      : 'bg-blue-600 text-white font-bold text-sm'
                  }`}
                >
                  {log.message}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-2 animate__animated animate__fadeIn">
                <span className="inline-block p-2 rounded-lg bg-gray-100 text-gray-800 font-bold text-sm">
                  <span className="animate-pulse">...</span> {/* Typing dots */}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 ml-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
