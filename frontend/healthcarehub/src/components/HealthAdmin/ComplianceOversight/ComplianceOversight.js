import React, { useState } from 'react';
import './ComplianceOversight.css'; // Import CSS file for styling

function ComplianceOversight() {

  const [viewcomplianceClicked, setviewpcomplianceClicked] = useState([]);
    const [ reply , setReply] = useState('');
    const [ comments , setComments] = useState([]);

  const [Compliances] = useState([
    {
      id: 1,
      title: "HIPAA Violation",
      description: "Sensitive patient information exposed in logs.",
      severity: "High",
      status: "Open"
    },
    {
      id: 2,
      title: "Data Breach",
      description: "Unauthorized access to patient records.",
      severity: "Critical",
      status: "Open"
    },
    {
      id: 3,
      title: "Expired SSL Certificate",
      description: "Security risk due to an expired SSL certificate.",
      severity: "Medium",
      status: "Open"
    },
    {
      id: 4,
      title: "Expired SSL Certificate",
      description: "Security risk due to an expired SSL certificate.",
      severity: "Medium",
      status: "Open"
    },
    // Add more compliance issues as needed
  ]);





  const handleviewcomplianceClicked = (complianceId) => {
    setviewpcomplianceClicked((prevClicked) => {
      // Create a new array based on the previous state
      const newClicked = [...prevClicked];
      // Toggle the clicked state for the clicked doctor
      newClicked[complianceId] = !newClicked[complianceId];

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
  const handleresolvecomplianceClicked =(complianceId) => { 

  }

return (
  <div className="compliance-response-container">
    <h1>Compliances</h1>
    <div className="compliance-list">
      <h2>Compliances List</h2>
      <ul>
        {Compliances.map(compliance => (
          <li key={compliance.id}>
            <div className="compliance-details">
              <h3>{compliance.title}</h3>
              <p><strong>Severity:</strong> {compliance.severity}</p>
              <p><strong>Status:</strong> {compliance.status}</p>
              <p><strong>Description:</strong> {compliance.description}</p>
              <p><strong>Timestamp:</strong> {compliance.timestamp}</p>
              {viewcomplianceClicked[compliance.id] && (
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
                    <button>Submit</button>
                  </div>
                </div>
              )}
              {!viewcomplianceClicked[compliance.id] && (
                <div>
                <button onClick={() => handleviewcomplianceClicked(compliance.id)}>View</button>
                <button onClick={() => handleresolvecomplianceClicked(compliance.id)}>Mark as Resolved</button>
                
                </div>
              )} 
              {viewcomplianceClicked[compliance.id] && (
                <button onClick={() => handleviewcomplianceClicked(compliance.id)}>Close</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default ComplianceOversight;
