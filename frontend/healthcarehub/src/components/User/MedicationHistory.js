import React, { useState } from 'react';
import './MedicationHistory.css'

function MedicalHistory() {
  const [pastIllnesses, setPastIllnesses] = useState([{"name":"fever","index":1, "date": "25-11-200"},{"name":"fever","index":2,"date": "25-11-200"},{"name":"fever","index":3,"date": "25-11-200"}]);

  const [editMode, setEditMode] = useState(false);

  const handleAddPastIllness = () => {
    const newIllness = { name: '', date: '', editable: true };
    setPastIllnesses([...pastIllnesses, newIllness]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemovePastIllness = (index) => {
    const updatedIllnesses = [...pastIllnesses];
    updatedIllnesses.splice(index, 1);
    setPastIllnesses(updatedIllnesses);
  };

  const handleInputChange = (event, index, key) => {
    const updatedIllnesses = [...pastIllnesses];
    updatedIllnesses[index][key] = event.target.value;
    setPastIllnesses(updatedIllnesses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Medical history:', pastIllnesses);
  };

  return (
    <div className="medical-history">
      <h2>Past Illnesses History</h2>
      <form onSubmit={handleSubmit}>
        <h3>Past Illnesses:</h3>
        <ul>
          {pastIllnesses.map((illness, index) => (
            <li key={index}>
              <label htmlFor={`name-${index}`}>Name:</label>
              <input
                id={`name-${index}`}
                type="text"
                value={illness.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                disabled={!illness.editable}
                className={illness.editable ? "editable" : ""}
              />
              <br />
              <label htmlFor={`date-${index}`}>Date:</label>
              <input
                id={`date-${index}`}
                type="text"
                value={illness.date}
                onChange={(e) => handleInputChange(e, index, 'date')}
                disabled={!illness.editable}
                className={illness.editable ? "editable" : ""}
              />
              <button type="button" onClick={() => handleRemovePastIllness(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddPastIllness}>Add</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MedicalHistory;
