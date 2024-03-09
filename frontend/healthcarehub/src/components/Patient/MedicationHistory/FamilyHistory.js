import React, { useState } from 'react';

function FamilyHistory() {
  const [familyhistory, setfamilyhistory]  = useState([
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
  }
]);
  const [editMode, setEditMode] = useState(false);

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
      <form onSubmit={handleSubmit}>
        <h3>FamilyHistory:</h3>
        <ul>
          {familyhistory.map((history, index) => (
            <li key={index}>
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
            </li>
          ))}
        </ul>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "5%"}}  onClick={handleAddfamilyhistory}>Add</button>
      </form>
    </div>
  );
}

export default FamilyHistory;
