import React, { useState, useEffect } from 'react';
import './IncidentResponse.css'; // Import CSS file for styling

function IncidentResponse() {
  const [viewincidentClicked, setviewpincidentClicked] = useState([]);
    const [ reply , setReply] = useState('');
    const [ comments , setComments] = useState([]);
    const [successMessages, setSuccessMessages] = useState({});


  const [incidents , setIncidents] = useState([]);
    
    const tempincidents = [ {
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
  ];

   useEffect(() => {
  setIncidents(tempincidents);
}, []);

  const Onsubmit =() => {
    if (reply!='') {
    const user= localStorage.getItem('role');
    const newComment = { id: comments.length + 1, user: user, message: reply };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setReply('');
  }
  };

  const handleresolveincidentClicked =(Id) => { 
    const newSuccessMessages = { ...successMessages };
    newSuccessMessages[Id] = "Resolved Successfully";
    setSuccessMessages(newSuccessMessages);

    setTimeout(() => {
        const newSuccessMessages = { ...successMessages };
        delete newSuccessMessages[Id];
        setSuccessMessages(newSuccessMessages);
    }, 2000); 

  
  const updatedIncidents = incidents.map(incident => {
    if (incident.id === Id) {
      return { ...incident, status: 'Closed' }; // Create a new object with updated status
    }
    return incident; // Return other compliances as they are
  });

  // Update the state with the updated compliances
  setIncidents(updatedIncidents);
};



  const handleviewincidentClicked = (incidentId) => {
    setviewpincidentClicked((prevClicked) => {
      // Create a new array based on the previous state
      const newClicked = [...prevClicked];
      // Toggle the clicked state for the clicked doctor
      newClicked[incidentId] = !newClicked[incidentId];

  const dummyCommentsData = [
    { id: 1, user: 'Alice', message: 'Great facility, I had a wonderful experience!' },
    { id: 2, user: 'Bob', message: 'The services offered here are excellent.' },
    { id: 3, user: 'Alice', message: 'I highly recommend this place.' },
    { id: 4, user: 'Bob', message: 'Friendly staff and clean environment.' },
    { id: 5, user: 'Eva', message: 'Very satisfied with the treatment received.' },
  ];

  setComments(dummyCommentsData);
      return newClicked;
    });
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
              {viewincidentClicked[incident.id] && (
                <div>
                  <h2>Comments</h2>
                  {comments.map(comment => (
                    <div key={comment.id} className="comment">
                      <span className="comment-user">{comment.user}: </span>
                      <span className="comment-message">{comment.message}</span>
                    </div>
                  ))}
                  <div className="form-group">
                    <h2>Reply</h2>
                    <textarea
                      id="reply"
                      value={reply}
                      onChange={e => setReply(e.target.value)}
                      rows={3} 
                    />
                    <button onClick={Onsubmit}>Submit</button>
                  </div>
                </div>
              )}
              {!viewincidentClicked[incident.id] && (
                <div>
                <button onClick={() => handleviewincidentClicked(incident.id)}>View</button>
                <div>{successMessages[incident.id] && <p className="success-message">{successMessages[incident.id]}</p>} </div>

                {incident.status === "Open" && (
                    <button onClick={() => handleresolveincidentClicked(incident.id)}>Mark as Resolved</button>
                )}
                
                </div>
              )} 
              {viewincidentClicked[incident.id] && (
                <button onClick={() => handleviewincidentClicked(incident.id)}>Close</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default IncidentResponse;
