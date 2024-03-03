import React, { useState } from 'react';
import './AddMedication.css'
import Navbar from '../navbar/Navbar';

function AddMedication() {


  const [medications, setMedication] = useState([]);

  const [editMode, setEditMode] = useState(false);

    const [patientname, setPatientName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

  const handleAddMedication = () => {
    const medicine = { medicationname: '', dosage: '' , editable: true };
    setMedication([...medications, medicine]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemoveMedications = (index) => {
    const updatedmedicine = [...medications];
    updatedmedicine.splice(index, 1);
    setMedication(updatedmedicine);
  };

  const handleInputChange = (event, index, key) => {
    const updatedmedicine = [...medications];
    updatedmedicine[index][key] = event.target.value;
    setMedication(updatedmedicine);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('medications history:', medications);
    console.log(patientname)
    console.log(description)
    console.log(status)
  };




return (
	    <div className="prescription-form">
       	<h1>Create New Prescription</h1>
        <div className="form-group">
          <label htmlFor="name">Patient Name *</label>
          <input
            type="text"
            id="patientname"
            value={patientname}
            onChange={e => setPatientName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>


        <div className="form-group">
        <label htmlFor="status">Status *</label>
          <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          >

          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>
        </div>

      <h3>Medications:</h3>
        <ul className="addmedications">
          {medications.map((medicine, index) => (
            <li key={index}>
              <label htmlFor={`medicationname-${index}`}>Medication Name:</label>
              <input
                id={`medicationname-${index}`}
                type="text"
                value={medicine.medicationname}
                onChange={(e) => handleInputChange(e, index, 'medicationname')}
                disabled={!medicine.editable}
                className={medicine.editable ? "editable" : ""}
              />

              <label htmlFor={`dosage-${index}`}>Dosage:</label>
              <input
                id={`dosage-${index}`}
                type="text"
                value={medicine.dosage}
                onChange={(e) => handleInputChange(e, index, 'dosage')}
                disabled={!medicine.editable}
                className={medicine.editable ? "editable" : ""}
              />

              <label htmlFor={`time-${index}`}>Time:</label>
              <input
                id={`time-${index}`}
                type="text"
                value={medicine.time}
                onChange={(e) => handleInputChange(e, index, 'time')}
                disabled={!medicine.editable}
                className={medicine.editable ? "editable" : ""}
              />
              <button type="button" style={{"width":"20%"}} onClick={() => handleRemoveMedications(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddMedication}>Add Medications</button>  
        <div className="form-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>      
      </div>

      )

  }

export default AddMedication;