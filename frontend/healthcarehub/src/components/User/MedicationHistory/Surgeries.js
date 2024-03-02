import React, { useState } from 'react';
import './Surgeries.css'

function Surgeries() {
  const [surgeries, setsurgeries] = useState([{"name":"fever","index":1, "date": "25-11-200" , "description" : "Description" },{"name":"fever","index":2,"date": "25-11-200" , "description" : "Description"},{"name":"fever","index":3,"date": "25-11-200" , "description" : "Description"}]);

  const [editMode, setEditMode] = useState(false);

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
      <form onSubmit={handleSubmit}>
        <h3>Past Surgeries:</h3>
        <ul>
          {surgeries.map((surgery, index) => (
            <li key={index}>
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
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddSurgeries}>Add</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Surgeries;
