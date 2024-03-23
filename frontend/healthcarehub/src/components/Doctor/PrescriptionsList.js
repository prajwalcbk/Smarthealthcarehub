import React, { useState, useEffect } from 'react';
import './prescriptionlist.css';
import Prescription from './PrescriptionDetails';
import AddMedication from './AddMedication'

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
         { "id": 1, "description": "Due to Fever", "issuedDate": "25/01/2023", "provider": "Alice", "status": "Active" },
        { "id": 2, "description": "Due to Headache", "issuedDate": "25/01/2024", "provider": "Bob", "status": "Active" },
        { "id": 3, "description": "Typhoid", "issuedDate": "25/01/200", "provider": "Charlie", "status": "Active" },
        { "id": 4, "description": "Due to Fever", "issuedDate": "11/01/2001", "provider": "David", "status": "Active" },
        { "id": 5, "description": "Due to Headache", "issuedDate": "22/08/2024", "provider": "Emily", "status": "Active" },
        { "id": 6, "description": "Due to Fever", "issuedDate": "22/08/2024", "provider": "Frank", "status": "InActive" },
        { "id": 7, "description": "Due to Headache", "issuedDate": "11/02/200", "provider": "Grace", "status": "Active" }
    ]; 
      setPrescriptionList(prescriptionResponse);
    };

    fetchPrescriptions();
  }, []);

    const SearchPrescriptions = () => {
      // Simulated response from API
      const prescriptionResponse = [


        { "id": 5, "description": "Due to Headache", "issuedDate": "22/08/2024", "provider": "Emily", "status": "Active" },
        { "id": 6, "description": "Due to Fever", "issuedDate": "22/08/2024", "provider": "Frank", "status": "InActive" },
        { "id": 7, "description": "Due to Headache", "issuedDate": "11/02/200", "provider": "Grace", "status": "Active" }

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
      <h2>Prescriptions</h2>
      <div className="prescription-filter-container">


        <input
          type="text"
          placeholder="Search Patient"
          value={filterpatient}
          onChange={e => setFilterpatient(e.target.value)}
          style={{"width":"60%"}}
        />
        <button style={{"margin":"2%"}} onClick={SearchPrescriptions}> Search </button>
        <button style={{"margin":"2%"}} onClick={CreateNewPrescription}> Create</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Description</th>
            <th>Date</th>
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
    ) : ( 
    <div>
     <AddMedication />
      </div>
    )}
    </div>
  );
}

export default PrescriptionList;
