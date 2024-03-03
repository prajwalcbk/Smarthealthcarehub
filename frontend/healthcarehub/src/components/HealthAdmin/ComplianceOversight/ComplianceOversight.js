import React, { useState } from 'react';
import './ComplianceOversight.css'; // Import CSS file for styling

function ComplianceOversight() {
  const [complianceIssues] = useState([
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

  const resolveIssue = (issueId) => {
    // Implement logic to mark issue as resolved
    console.log(`Resolved issue with ID ${issueId}`);
  };

  return (
    <div className="compliance-oversight-container">
      <h1>Compliance Oversight</h1>
      <div className="compliance-issues-list">
        <h2>Compliance Issues</h2>
        <ul>
          {complianceIssues.map(issue => (
            <li key={issue.id}>
              <div className="issue-details">
                <h3>{issue.title}</h3>
                <p><strong>Description:</strong> {issue.description}</p>
                <p><strong>Severity:</strong> {issue.severity}</p>
                <p><strong>Status:</strong> {issue.status}</p>
                <button onClick={() => resolveIssue(issue.id)}>Resolve Issue</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ComplianceOversight;
