import React, { useState, useEffect } from 'react';
import './Prescription.css';

function Prescription() {
  const [prescription, setPrescription] = useState([]);
  const [editedprescription, setEditedprescription] = useState([{}]);
  const [editMode, setEditMode] = useState(false);

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


  return (
    <div className="prescription">
      <h2>Prescription Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dosage</th>
            <th>Time</th>
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
