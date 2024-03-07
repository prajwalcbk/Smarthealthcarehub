import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import './IncidentReportIcon.css';
import Chatbot from '../Chatbot/Chatbot';

function IncidentReportIcon() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    console.log("Toggle chatbot");
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="incident-report-icon" onClick={toggleChatbot}>
      <FaComment className="chat-icon" />
      {isChatbotOpen && <Chatbot />}
    </div>
  );
}

export default IncidentReportIcon;
