import React, { useState, useEffect } from 'react';
import './prescriptionlist.css';
import Prescription from './Prescription';

function PrescriptionList() {
  const [prescriptionList, setPrescriptionList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);

  // Fetch prescription history data from an external source (e.g., API)
  useEffect(() => {
    const fetchPrescriptions = async () => {
      // Simulated response from API
      const prescriptionResponse = [
        { "id": 1, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 3, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 2, "description": "Typhoid", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 4, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 5, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 6, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 7, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 8, "description": "Typhoid", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 9, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 10, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 11, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 13, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 12, "description": "Typhoid", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 14, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 15, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 16, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 17, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
        { "id": 18, "description": "Typhoid", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 19, "description": "Due to Fever", "issuedDate": "now", "provider": "Rahul", "status": "Active" },
        { "id": 20, "description": "Due to Headache", "issuedDate": "now", "provider": "prajwal", "status": "Active" },
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
