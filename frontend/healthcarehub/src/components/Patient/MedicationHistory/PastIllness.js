import React, { useState } from 'react';
import './PastIllness.css'

function PastIllness() {
  const [pastIllnesses, setPastIllnesses] = useState([{"name":"fever","index":1, "date": "25-11-200" , "description" : "Description"},{"name":"fever","index":2,"date": "25-11-200" , "description" : "Description"},{"name":"fever","index":3,"date": "25-11-200" ,"description" : "Description"}]);

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
    console.log('pastIllnesses history:', pastIllnesses);
  };

  return (
    <div className="pastIllnesses-history">
      <h2>Past illness History</h2>
      <form onSubmit={handleSubmit}>
        <h3>Past illness:</h3>
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
              <label htmlFor={`description-${index}`}>Description:</label>
              <input
                id={`description-${index}`}
                type="text"
                value={illness.description}
                onChange={(e) => handleInputChange(e, index, 'description')}
                disabled={!illness.editable}
                className={illness.editable ? "editable" : ""}
              />
              <button type="button" onClick={() => handleRemovePastIllness(index)}>Remove</button>
              <button type="button" onClick={() => handleRemovePastIllness(index)}> Save</button>
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddPastIllness}>Add</button>
      </form>
    </div>
  );
}

export default PastIllness;
