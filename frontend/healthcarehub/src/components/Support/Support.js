// IncidentReportIcon.js
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import comments from './../../assets/comments.png'
import Logo from '../../assets/daily-health-app.png';

import { FaExclamationCircle } from 'react-icons/fa'; // Import icon from react-icons library
import './Support.css'; // Import CSS file for styling


function Support() {

  const [showChat, setShowChat] = useState(false);
  const [showForum, setshowForum] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    userEmail: '',
    reportType: 'General'
  });

  const toggleChat = () => {
    setShowChat(prevState => !prevState);
  };

  const toggleForum = () => {
    setshowForum(prevState => !prevState);

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = () => {
    setSuccessMessage("Reported  successfully");
    setTimeout(() => {
            setSuccessMessage('');
            setFormData({
      title: '',
      description: '',
      userEmail: '',
      reportType: 'General'
    });
    }, 5000); 
    
  };

  return (
    <div className="chatbox-container">
      <div className="chatIcon" onClick={toggleChat}>
        <img src={comments} alt="Chat Icon" />
      </div>
      {showChat && (
        <div className="chatbox">
          <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
          <div className="chatbox-header">
            <div className="chatbox-header-title"><img src={Logo} width="20" height="20" alt="Logo" /> SmartHealthCare Support</div>
            <div className="chatbox-header-close" onClick={toggleChat}>×</div>
          </div>
          <div className="chatbox-body">
          { !showForum && ( 
            <div>
            <div className="chatbox-message">Welcome to SmartHealthCare Hub 
            <p>If you encounter any issues such as data breaches or system impairments, please use the support form below to report them.</p>
            </div>
          
            <div className="chatbox-buttons">
              <button className="button" onClick={toggleForum}>Report us</button>
            </div>
            </div>
          )} 

        { showForum && (
          <form className="forum-form" onSubmit={handleSubmit}>

          <h1 style={{"text-align":"left"}}>Report us </h1>

            <label>Report Type *</label>
            <select name="reportType" value={formData.reportType} onChange={handleInputChange}>
              <option value="Data Breach">Data Breach</option>
              <option value="General">General</option>
              <option value="Incident">Incident Report</option>
              <option value="System Malfunctions">System Malfunctions</option>
              <option value="Privacy Issues">Privacy Issues</option>
              <option value="Compliance Issues">Compliance Issues</option>

              

            </select>


            <label>Title *</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

            <label>Description *</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange}  required rows={5}  />

            <label>Email</label>
            <input type="email" name="userEmail" value={formData.userEmail} onChange={handleInputChange} required />



            <button className="button" onClick={toggleForum}>Cancel</button>
            <button type="submit">Submit</button>
          </form>
        )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Support;
