// IncidentReportPage.js

import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './IncidentReportPage.css'; // Import CSS file for styling

function IncidentReportPage() {
  // State variables to store incident details
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('low');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send incident report data to backend or perform necessary actions
    console.log('Incident Report Submitted:', { title, description, severity });
    // Reset form fields
    setTitle('');
    setDescription('');
    setSeverity('low');
  };

  return (
    <div className='incident-container'>
        <Navbar />
    <div className="incident-report-container">
      <h1>Incident Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default IncidentReportPage;
