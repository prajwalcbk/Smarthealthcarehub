import React, { useState, useEffect } from 'react';

function MedicationHistory() {
  const [medicationHistory, setMedicationHistory] = useState([]);

  // Fetch medication history data from an external source (e.g., API)
  useEffect(() => {
    const fetchMedicationHistory = async () => {
      // const response = await fetch('https://your-api-endpoint.com/medications'); // Replace with your API endpoint
      // const history = await response.json();
      const history = [{ "id": 1 , "name" : "Prajwal" , "dosage" : 2 , "startDate": "now" , "endDate" : "now"}]
      setMedicationHistory(history);
    };

    fetchMedicationHistory();
  }, []);

  return (
    <div className="medication-history">
      <h2>Medication History</h2>
      <table>
        <thead>
          <tr>
            <th>Medication Name</th>
            <th>Dosage</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {medicationHistory.map((medication) => (
            <tr key={medication.id}>
              <td>{medication.name}</td>
              <td>{medication.dosage}</td>
              <td>{medication.startDate}</td>
              {medication.endDate && <td>{medication.endDate}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicationHistory;