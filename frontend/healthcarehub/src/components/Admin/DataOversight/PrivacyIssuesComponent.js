import React from 'react';
import './DataOversight.css'

const PrivacyIssuesComponent = () => {
  const privacyIssues = [
    { id: 1, description: 'Data collection without consent', date: '2023-05-25', type: 'Personal data' },
    { id: 2, description: 'Data shared with third-party without permission', date: '2023-06-30', type: 'Financial data' },
    { id: 3, description: 'Inadequate security measures for sensitive information', date: '2023-07-20', type: 'Health records' },
    { id: 4, description: 'Violation of user privacy policy', date: '2023-08-15', type: 'Location data' }
  ];

  return (
    <div className="dataoversight">
      <h2>Privacy Issues</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {privacyIssues.map((issue, index) => (
            <tr key={index}>
              <td>{issue.id}</td>
              <td>{issue.description}</td>
              <td>{issue.date}</td>
              <td>{issue.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PrivacyIssuesComponent;
