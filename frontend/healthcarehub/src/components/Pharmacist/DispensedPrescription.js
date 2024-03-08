import React, { useState, useEffect } from 'react';
import './prescriptionlist.css';
import Prescription from './PrescriptionDetails';

function PrescriptionList() {
  const [prescriptionList, setPrescriptionList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);
  const [filterpatient , setFilterpatient] = useState('');
  const [iscreatenewprescription , setiscreatenewprescription]= useState(false);

  // Fetch prescription history data from an external source (e.g., API)
  useEffect(() => {
    const fetchPrescriptions = async () => {
      // Simulated response from API
      const prescriptionResponse = [
 { "id": 1, "description": "Common Cold", "issuedDate": "25/01/2023", "DispensedDate" : "25/01/2023" ,  "provider": "John", "status": "Delivered" },
        { "id": 3, "description": "Sinusitis", "issuedDate": "25/01/2024","DispensedDate" : "25/01/2023" ,  "provider": "Alice", "status": "Delivered" },
        { "id": 2, "description": "Flu", "issuedDate": "25/01/200", "DispensedDate" : "25/01/2023" , "provider": "Bob", "status": "Cancelled" },
        { "id": 4, "description": "Stomach Flu", "issuedDate": "11/01/2001", "DispensedDate" : "25/01/2023" , "provider": "Alice", "status": "InTransit" },
        { "id": 5, "description": "Migraine", "issuedDate": "22/08/2024","DispensedDate" : "25/01/2023" ,  "provider": "John", "status": "Delivered" },
        { "id": 6, "description": "Food Poisoning", "issuedDate": "22/08/2024","DispensedDate" : "25/01/2023" ,  "provider": "Bob", "status": "Cancelled" },
        { "id": 7, "description": "Allergic Rhinitis", "issuedDate": "11/02/200", "DispensedDate" : "25/01/2023" , "provider": "Alice", "status": "Delivered" }
    ]; 


      setPrescriptionList(prescriptionResponse);
    };

    fetchPrescriptions();
  }, []);

    const SearchPrescriptions = () => {
      // Simulated response from API
      const prescriptionResponse = [
        { "id": 5, "description": "Migraine", "issuedDate": "22/08/2024","DispensedDate" : "25/01/2023" ,  "provider": "John", "status": "Delivered" },
        { "id": 6, "description": "Food Poisoning", "issuedDate": "22/08/2024","DispensedDate" : "25/01/2023" ,  "provider": "Bob", "status": "Cancelled" },
        { "id": 7, "description": "Allergic Rhinitis", "issuedDate": "11/02/200", "DispensedDate" : "25/01/2023" , "provider": "Alice", "status": "Delivered" }



      ];
      setPrescriptionList(prescriptionResponse);
    }

    const CreateNewPrescription = () => {
      setiscreatenewprescription(!iscreatenewprescription)

    }

  const handleViewClick = (id) => {
    setViewClicked(prevClicked => ({
      ...prevClicked,
      [id]: !prevClicked[id]
    }));
  };

  return (
    <div>
    {!iscreatenewprescription ? (
    <div className="prescription-list">
      <h2> Dispensed  Prescriptions</h2>
      <div className="prescription-filter-container">


        <input
          type="text"
          placeholder="Search Patient"
          value={filterpatient}
          onChange={e => setFilterpatient(e.target.value)}
          style={{"width":"60%"}}
        />
        <button style={{"margin":"2%"}} onClick={SearchPrescriptions}> Search </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Issued to</th>
            <th>Description</th>
            <th>Issued On</th>
            <th>Dispensed On</th>
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
                <td>{prescription.DispensedDate}</td>
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
    ) : ( 
    <div>
      </div>
    )}
    </div>
  );
}

export default PrescriptionList;
