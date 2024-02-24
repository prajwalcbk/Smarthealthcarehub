import React, { useState, useEffect } from 'react';

function Prescriptions() {
  const [currentPrescriptions, setCurrentPrescriptions] = useState([]);

  // Fetch current prescriptions data from an external source (e.g., API)
  useEffect(() => {
    const fetchCurrentPrescriptions = async () => {
      //const response = await fetch('https://your-api-endpoint.com/current-prescriptions'); // Replace with your API endpoint
      // const prescriptions = await response.json();
      const prescriptions= [ {'id' : '1' , "medicationName" : "prescription" } ]
      setCurrentPrescriptions(prescriptions);
    };

    fetchCurrentPrescriptions();
  }, []);

  return (
    <div className="prescriptions">
      <h2>Current Prescriptions</h2>
      {currentPrescriptions.length > 0 ? (
        <ul>
          {currentPrescriptions.map((prescription) => (
            <li key={prescription.id}>{prescription.medicationName}</li>
          ))}
        </ul>
      ) : (
        <p>No current prescriptions found.</p>
      )}
    </div>
  );
}

export default Prescriptions;