import React, { useState } from 'react';
import axios from 'axios';

const MainBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
// incomplete project :()
  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
// I am attempting to have another server to host gemini, not working.
      try {
        const response = await axios.post("http://localhost:3001/api/generate", { prompt: input });
        const botMessage = { sender: "bot", text: response.data.response };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    }
  };

  return (
    //the biggest headache was trying to get the api to work. Also using the tailwin guide.
    <div className="w-4/5 max-w-lg h-4/5 bg-white/50 rounded-lg shadow-lg p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      
      {/* Chat Messages Area working */}
      <div className="flex-grow overflow-y-auto bg-white/60 rounded-lg p-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-2 max-w-xs ${
              message.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 self-start"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input Area This seems to be working*/}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send
        </button>
      </div>
      
    </div>
  );
};

export default MainBox;


