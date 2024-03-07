// Chatbot.js

import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot">
        <div className="chatbot-header">
          <span className="close-btn" onClick={toggleChatbot}>&times;</span>
          <h2>Chatbot</h2>
        </div>
        <div className="chatbot-body">
          <p>What do you want to do?</p>
          <button className="chatbot-option">Option 1</button>
          <button className="chatbot-option">Option 2</button>
          <button className="chatbot-option">Option 3</button>
          <button className="chatbot-option">Option 4</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
