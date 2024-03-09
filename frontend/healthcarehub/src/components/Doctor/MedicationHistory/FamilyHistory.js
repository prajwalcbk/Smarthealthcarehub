import React, { useState } from 'react';
import './FamilyHistory.css'
import SearchPatient from './../../SearchPatient'

function FamilyHistory() {
  const [familyhistory, setfamilyhistory] = useState([
  {
    "title": "Diabetes",
    "index": 1,
    "description": "My father has a history of diabetes and requires insulin medication.",
    "Patient": "John"
  },
  {
    "title": "Hypertension",
    "index": 2,
    "description": "My mother has a history of hypertension and takes blood pressure medication.",
    "Patient": "Charlie"
  },
  {
    "title": "Cancer",
    "index": 3,
    "description": "There is a family history of breast cancer on my maternal side.",
    "Patient": "Smith"
  }
]);
  const [editMode, setEditMode] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = (event) => {
    setSuccessMessage("Added successfully");
    setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 

  };

  const handleAddfamilyhistory = () => {
    const newfamilyhistory = { name: '', date: '', editable: true };
    setfamilyhistory([...familyhistory, newfamilyhistory]);
    setEditMode(true); 
  };

  const handleRemovefamilyhistory = (index) => {
    const updatedfamilyhistory = [...familyhistory];
    updatedfamilyhistory.splice(index, 1);
    setfamilyhistory(updatedfamilyhistory);
  };

  const handleInputChange = (event, index, key) => {
    const updatedfamilyhistory = [...familyhistory];
    updatedfamilyhistory[index][key] = event.target.value;
    setfamilyhistory(updatedfamilyhistory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('familyhistory :', familyhistory);
  };

  return (
    <div className="family-history">
      <h2>Family Health History</h2>
      <SearchPatient />
      <form onSubmit={handleSubmit}>
        <h3>FamilyHistory:</h3>
        <ul>
          {familyhistory.map((history, index) => (
            <li key={index}>

            <label htmlFor={`patient-${index}`}>Patient:</label>
              <input
                id={`patient-${index}`}
                type="text"
                value={history.Patient}
                onChange={(e) => handleInputChange(e, index, 'Patient')}
                disabled={!history.editable}
                className={history.editable ? "editable" : ""}
              />

              
              <label htmlFor={`name-${index}`}>Title:</label>
              <input
                id={`name-${index}`}
                type="text"
                value={history.title}
                onChange={(e) => handleInputChange(e, index, 'title')}
                disabled={!history.editable}
                className={history.editable ? "editable" : ""}
              />
              <br />
              <label htmlFor={`description-${index}`}>Description:</label>
              <input
                id={`description-${index}`}
                type="text"
                value={history.description}
                onChange={(e) => handleInputChange(e, index, 'description')}
                disabled={!history.editable}
                className={history.editable ? "editable" : ""}
              />
              <button type="button" onClick={() => handleRemovefamilyhistory(index)}>Remove</button>
              <button type="button" onClick={handleSave}>Save</button>
            </li>
          ))}
        </ul>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "30%"}}  onClick={handleAddfamilyhistory}>Add</button>
      </form>
    </div>
  );
}

export default FamilyHistory;
