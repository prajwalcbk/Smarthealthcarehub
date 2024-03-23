import React, { useState, useEffect } from 'react';
import './Prescription.css';

function Prescription() {
  const [prescription, setPrescription] = useState([]);
  const [editedprescription, setEditedprescription] = useState([{}]);
  const [editMode, setEditMode] = useState(false);
  const [viewEdit, setEditClicked] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  

  const handleEdit = () => {
    setEditMode(true);
  };

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedprescription((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setEditMode(false);
  };


  const handleSaveClick = (id) => {

  // Update the prescription state
    setSuccessMessage("Edited successfully");
    setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 
    setEditMode(false);
    setEditClicked(prevClicked => ({
      ...prevClicked,
      [id]: !prevClicked[id]
    }));
  };

    

  useEffect(() => {
    // Fetch prescription history data from an external source
    const fetchPrescription = async () => {
      // Fetch prescription data from API or any other source
      const prescriptionResponse = [
        { "id": 1, "name": "Paracitomol", "dosage": 1, "time": "1-0-1" },
         { "id": 2, "name": "Paracitomol", "dosage": 1, "time": "1-1-1" },
      ];
      setPrescription(prescriptionResponse);
    };

    fetchPrescription();
  }, []);

  const handleEditClick = (id) => {
    setEditMode(!editMode)
    setEditClicked(prevClicked => ({
      ...prevClicked,
      [id]: !prevClicked[id]
    }));
  };



  return (
    <div className="prescription">
      <h2>Prescription Details</h2>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dosage</th>
            <th>Time</th>
            <th>
              {viewEdit[prescription.id] && <button onClick={() => handleEditClick(prescription.id)}>Cancel</button>}
              {viewEdit[prescription.id] && <button onClick={() => handleSaveClick(prescription.id)}>Save</button>}
              {!viewEdit[prescription.id] && <button onClick={() => handleEditClick(prescription.id)}>Edit</button>}
              </th>
          </tr>
        </thead>
        <tbody>
          {prescription.map((prescription) => (
            <tr key={prescription.id}>
              <td>
                <input
                  type="text"
                  value={editMode ? editedprescription.name : prescription.name}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </td>
        
              <td>
                <input
                  type="text"
                  value={editMode ? editedprescription.dosage : prescription.dosage}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </td>
              <td>
                <select value={editMode ? editedprescription.time : prescription.time}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  >
                  <option value="1-1-1">1-1-1</option>
                  <option value="1-0-1">1-0-1</option>
                  <option value="1-0-0">1-0-0</option>
                  <option value="0-0-1">0-0-1</option>
                  <option value="0-1-0">0-1-0</option>
                  <option value="0-1-1">0-1-1</option>
                  <option value="1-1-0">1-1-0</option>     
                </select>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Prescription;
