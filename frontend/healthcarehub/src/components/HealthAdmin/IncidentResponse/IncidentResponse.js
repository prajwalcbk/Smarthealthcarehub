import React, { useState } from 'react';
import './IncidentResponse.css'; // Import CSS file for styling

function IncidentResponse() {
  const [incidents] = useState([
    {
      id: 1,
      type: "Data Breach",
      severity: "High",
      status: "Open",
      timestamp: "2024-02-12T14:30:00"
    },
    {
      id: 2,
      type: "Server Outage",
      severity: "Critical",
      status: "Open",
      timestamp: "2024-02-11T10:15:00"
    },
    {
      id: 3,
      type: "Medical Device Failure",
      severity: "Medium",
      status: "Open",
      timestamp: "2024-02-10T08:45:00"
    },
    {
      id: 4,
      type: "Network Security Breach",
      severity: "Critical",
      status: "Open",
      timestamp: "2024-02-09T16:20:00"
    },
    {
      id: 5,
      type: "Phishing Attack",
      severity: "High",
      status: "Open",
      timestamp: "2024-02-08T09:55:00"
    },
    {
      id: 6,
      type: "Software Bug",
      severity: "Medium",
      status: "Open",
      timestamp: "2024-02-07T11:10:00"
    },
    // Add more incidents as needed
  ]);

  const resolveIncident = (incidentId) => {
    // Implement logic to mark incident as resolved
    console.log(`Resolved incident with ID ${incidentId}`);
  };

  return (
    <div className="incident-response-container">
      <h1>Incident Response</h1>
      <div className="incident-list">
        <h2>Incident List</h2>
        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <div className="incident-details">
                <h3>{incident.type}</h3>
                <p><strong>Severity:</strong> {incident.severity}</p>
                <p><strong>Status:</strong> {incident.status}</p>
                <p><strong>Timestamp:</strong> {incident.timestamp}</p>
                <button onClick={() => resolveIncident(incident.id)}>Resolve Incident</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IncidentResponse;
