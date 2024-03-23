import React, { useState } from 'react';
import './Surgeries.css'
import SearchPatient from './../../SearchPatient'

function Surgeries() {
  const [surgeries, setsurgeries] = useState([
  {
    "name": "Appendectomy",
    "index": 1,
    "date": "2020-05-10",
    "description": "Surgical removal of the appendix due to appendicitis.",
    "Patient": "Charlie"
  },
  {
    "name": "Knee Surgery",
    "index": 2,
    "date": "2021-02-28",
    "description": "Arthroscopic knee surgery to repair torn ligaments.",
    "Patient": "Johnson"
  },
  {
    "name": "Gallbladder Removal",
    "index": 3,
    "date": "2019-08-15",
    "description": "Laparoscopic surgery to remove the gallbladder due to gallstones.",
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

  const handleAddSurgeries = () => {
    const surgery = { name: '', date: '', editable: true };
    setsurgeries([...surgeries, surgery]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemoveSurgeries = (index) => {
    const updatedsurgery = [...surgeries];
    updatedsurgery.splice(index, 1);
    setsurgeries(updatedsurgery);
  };

  const handleInputChange = (event, index, key) => {
    const updatedsurgery = [...surgeries];
    updatedsurgery[index][key] = event.target.value;
    setsurgeries(updatedsurgery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('surgeries history:', surgeries);
  };

  return (
    <div className="surgeries">
      <h2>Surgeries</h2>
      <SearchPatient />
      <form onSubmit={handleSubmit}>
        <h3>Past Surgeries:</h3>
        <ul>
          {surgeries.map((surgery, index) => (
            <li key={index}>

            <label htmlFor={`Patient-${index}`}>Patient:</label>
              <input
                id={`Patient-${index}`}
                type="text"
                value={surgery.Patient}
                onChange={(e) => handleInputChange(e, index, 'Patient')}
                disabled={!surgery.editable}
                className={surgery.editable ? "editable" : ""}
              />
              
              <label htmlFor={`name-${index}`}>Name:</label>
              <input
                id={`name-${index}`}
                type="text"
                value={surgery.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                disabled={!surgery.editable}
                className={surgery.editable ? "editable" : ""}
              />
              <br />
              <label htmlFor={`date-${index}`}>Date:</label>
              <input
                id={`date-${index}`}
                type="text"
                value={surgery.date}
                onChange={(e) => handleInputChange(e, index, 'date')}
                disabled={!surgery.editable}
                className={surgery.editable ? "editable" : ""}
              />

              <label htmlFor={`description-${index}`}>Description:</label>
              <input
                id={`description-${index}`}
                type="text"
                value={surgery.description}
                onChange={(e) => handleInputChange(e, index, 'description')}
                disabled={!surgery.editable}
                className={surgery.editable ? "editable" : ""}
              />
              <button type="button" onClick={() => handleRemoveSurgeries(index)}>Remove</button>
              <button type="button" onClick={handleSave}>Save</button>
            </li>
          ))}
        </ul>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "30%"}}  onClick={handleAddSurgeries}>Add</button>
      </form>
    </div>
  );
}

export default Surgeries;
