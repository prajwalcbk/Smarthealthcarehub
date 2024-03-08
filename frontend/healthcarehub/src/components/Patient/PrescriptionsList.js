import React, { useState, useEffect } from 'react';
import './prescriptionlist.css';
import Prescription from './PrescriptionDetails';

function PrescriptionList() {
  const [prescriptionList, setPrescriptionList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);

  // Fetch prescription history data from an external source (e.g., API)
  useEffect(() => {
    const fetchPrescriptions = async () => {
      // Simulated response from API
      const prescriptionResponse = [
       { "id": 1, "description": "Fever and chills", "issuedDate": "21/01/2023", "provider": "John", "status": "Active" },
        { "id": 3, "description": "Pounding headache", "issuedDate": "2/09/2023", "provider": "Smith", "status": "Active" },
        { "id": 2, "description": "High fever and weakness", "issuedDate": "2/09/2022", "provider": "John", "status": "Active" },
        { "id": 4, "description": "Persistent fever", "issuedDate": "2/09/2023", "provider": "John", "status": "Active" },
        { "id": 5, "description": "Migraine attack", "issuedDate": "2/09/2023", "provider": "Smith", "status": "Active" },
        { "id": 6, "description": "Fever and body aches", "issuedDate": "2/09/2023", "provider": "John", "status": "Active" },
        { "id": 7, "description": "Cluster headache", "issuedDate": "2/01/2023", "provider": "Smith", "status": "Active" },
        { "id": 8, "description": "Fever due to typhoid", "issuedDate": "26/09/2023", "provider": "John", "status": "Active" },
        { "id": 9, "description": "Fever with nausea", "issuedDate": "2/09/2022", "provider": "John", "status": "Active" },
        { "id": 10, "description": "Tension headache", "issuedDate": "2/09/2023", "provider": "Smith", "status": "Active" },
        { "id": 11, "description": "Low-grade fever", "issuedDate": "23/08/2021", "provider": "John", "status": "Active" },
        { "id": 13, "description": "Sinus headache", "issuedDate": "25/02/2019", "provider": "Smith", "status": "Active" },
        { "id": 12, "description": "Fever with cough", "issuedDate": "2/09/2020", "provider": "John", "status": "Active" },
        { "id": 14, "description": "Intermittent fever", "issuedDate": "2/03/2018", "provider": "John", "status": "Active" },
        { "id": 15, "description": "Mild headache", "issuedDate": "2/09/2023", "provider": "Smith", "status": "Active" },
        { "id": 16, "description": "Fever and fatigue", "issuedDate": "2/01/2023", "provider": "John", "status": "Active" },
        { "id": 17, "description": "Headache due to stress", "issuedDate": "29/04/2023", "provider": "Smith", "status": "Active" },
        { "id": 18, "description": "Fever caused by typhoid", "issuedDate": "21/01/2023", "provider": "John", "status": "Active" },
        { "id": 19, "description": "Chronic fever", "issuedDate": "25/01/2023", "provider": "John", "status": "Active" },
        { "id": 20, "description": "Occasional headache", "issuedDate": "11/03/2023", "provider": "Smith", "status": "Active" }
    ];    
      setPrescriptionList(prescriptionResponse);
    };

    fetchPrescriptions();
  }, []);

  const handleViewClick = (id) => {
    setViewClicked(prevClicked => ({
      ...prevClicked,
      [id]: !prevClicked[id]
    }));
  };

  return (
    <div className="prescription-list">
      <h2>Prescriptions</h2>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Description</th>
            <th>Issued On</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {prescriptionList.map((prescription) => (
            <React.Fragment key={prescription.id}>
              <tr>
                <td>{prescription.provider}</td>
                <td>{prescription.description}</td>
                <td>{prescription.issuedDate}</td>
                <td>{prescription.status}</td>
                <td>
                  
                  {viewClicked[prescription.id] && <button onClick={() => handleViewClick(prescription.id)}>Close</button>}
                  {!viewClicked[prescription.id] && <button onClick={() => handleViewClick(prescription.id)}>View</button>}
                </td>
              </tr>
              {viewClicked[prescription.id] && (
                <tr>
                  <td colSpan="5">
                    <Prescription prescription={prescription} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrescriptionList;
