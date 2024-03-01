
import Navbar from '../navbar/Navbar';
import React, { useState } from 'react';
import './IncidentForm.css'; // Importing CSS file

const IncidentForm = () => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [responseStatus, setResponseStatus] = useState('open');
  const [resolutionNotes, setResolutionNotes] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the form data to your backend or handle it as needed
    console.log({
      type,
      description,
      responseStatus,
      resolutionNotes
    });
    // Reset form fields after submission
    setType('');
    setDescription('');
    setResponseStatus('open');
    setResolutionNotes('');
  };

  return (
    <div className='incident-main-container'>
        <Navbar />
    <div className="incident-form-container">
      <h2>Report Incident</h2>
      <form onSubmit={handleSubmit} className="incident-form">
        <div className="form-group">
          <label>
            Type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="medical error">Medical Error</option>
              <option value="data breach">Data Breach</option>
              <option value="security incident">Security Incident</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Response Status:
            <select value={responseStatus} onChange={(e) => setResponseStatus(e.target.value)}>
              <option value="open">Open</option>
              <option value="ongoing">Ongoing</option>
              <option value="resolved">Resolved</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Resolution Notes:
            <textarea value={resolutionNotes} onChange={(e) => setResolutionNotes(e.target.value)} />
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default IncidentForm;
