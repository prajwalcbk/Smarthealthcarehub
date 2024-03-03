import React from 'react';
import './DataOversight.css'

const DataBreachesComponent = () => {
  const dataBreaches = [
    { id: 1, description: 'Customer information leaked', date: '2023-05-15', severity: 'High' },
    { id: 2, description: 'Payment data exposed', date: '2023-06-20', severity: 'Medium' },
    { id: 3, description: 'Login credentials compromised', date: '2023-07-10', severity: 'High' },
    { id: 4, description: 'Sensitive documents leaked', date: '2023-08-05', severity: 'Low' }
  ];

  return (
    <div className="dataoversight">
      <h2>Data Breaches</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {dataBreaches.map((breach, index) => (
            <tr key={index}>
              <td>{breach.id}</td>
              <td>{breach.description}</td>
              <td>{breach.date}</td>
              <td>{breach.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataBreachesComponent;
