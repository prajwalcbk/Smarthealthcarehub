import React, { useState, useEffect } from 'react';
import Prescription from './PrescriptionDetails';

function PrescriptionList() {
  const [prescriptionList, setPrescriptionList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);
  const [filterpatient , setFilterpatient] = useState('');
  const [iscreatenewprescription , setiscreatenewprescription]= useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch prescription history data from an external source (e.g., API)
  useEffect(() => {
    const fetchPrescriptions = async () => {
      // Simulated response from API
      const prescriptionResponse = [
         { "id": 1, "description": "Cold", "issuedDate": "15/03/2023", "provider": "David", "status": "Active" },
        { "id": 3, "description": "Migraine", "issuedDate": "22/05/2024", "provider": "Alice", "status": "InActive" },
        { "id": 2, "description": "Food Poisoning", "issuedDate": "05/12/200", "provider": "John", "status": "Active" },
        { "id": 4, "description": "Stomach Flu", "issuedDate": "20/07/2001", "provider": "David", "status": "Active" },
        { "id": 5, "description": "Allergy", "issuedDate": "10/10/2024", "provider": "Alice", "status": "InActive" },
        { "id": 6, "description": "Sinusitis", "issuedDate": "18/09/2024", "provider": "John", "status": "Active" },
        { "id": 7, "description": "Indigestion", "issuedDate": "30/04/200", "provider": "Alice", "status": "Active" }
    ];  
      setPrescriptionList(prescriptionResponse);
    };

    fetchPrescriptions();
  }, []);

    const SearchPrescriptions = () => {
      // Simulated response from API
      const prescriptionResponse = [
        { "id": 5, "description": "Allergy", "issuedDate": "10/10/2024", "provider": "Alice", "status": "InActive" },
        { "id": 6, "description": "Sinusitis", "issuedDate": "18/09/2024", "provider": "John", "status": "Active" },
        { "id": 7, "description": "Indigestion", "issuedDate": "30/04/200", "provider": "Alice", "status": "Active" }



      ];
      setPrescriptionList(prescriptionResponse);
    }

    const CreateNewPrescription = () => {
      setiscreatenewprescription(!iscreatenewprescription)

    }

  const handleDispenseclick = (id) => {
    setSuccessMessage("Prescription Dispense in progess");
       setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 
    const updatedPrescriptionList = prescriptionList.filter(prescription => prescription.id !== id);
    setPrescriptionList(updatedPrescriptionList);
  };

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
      </div>
      <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
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
                  {viewClicked[prescription.id] && <button onClick={() => handleDispenseclick(prescription.id)}>Dispense</button>}
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
