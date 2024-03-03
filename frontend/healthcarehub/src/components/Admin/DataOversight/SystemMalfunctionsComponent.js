import React from 'react';
import './DataOversight.css'

const SystemMalfunctionsComponent = () => {
  const systemMalfunctions = [
    { id: 1, description: 'Server outage', date: '2023-05-15', status: 'Resolved' },
    { id: 2, description: 'Database corruption', date: '2023-06-20', status: 'Ongoing' },
    { id: 3, description: 'Network connectivity issues', date: '2023-07-10', status: 'Resolved' },
    { id: 4, description: 'Software bug causing crashes', date: '2023-08-05', status: 'Ongoing' }
  ];

  return (
    <div className="dataoversight">
      <h2>System Malfunctions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {systemMalfunctions.map((malfunction, index) => (
            <tr key={index}>
              <td>{malfunction.id}</td>
              <td>{malfunction.description}</td>
              <td>{malfunction.date}</td>
              <td>{malfunction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SystemMalfunctionsComponent;
