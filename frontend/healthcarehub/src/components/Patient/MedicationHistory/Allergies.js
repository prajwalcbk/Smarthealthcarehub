import React, { useState } from 'react';

function Allergies() {
  const [allergies, setallergies] = useState([{"name":"fever","index":1},{"name":"headache","index":2}]);

  const [editMode, setEditMode] = useState(false);

  const handleAddallergies = () => {
    const newallergies = { name: '', date: '', editable: true };
    setallergies([...allergies, newallergies]);
    setEditMode(true); 
  };

  const handleRemoveallergies = (index) => {
    const updatedallergies = [...allergies];
    updatedallergies.splice(index, 1);
    setallergies(updatedallergies);
  };

  const handleInputChange = (event, index, key) => {
    const updatedallergies = [...allergies];
    updatedallergies[index][key] = event.target.value;
    setallergies(updatedallergies);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('allergies :', allergies);
  };

  return (
    <div className="allergies">
      <h2>Allergies</h2>
      <form onSubmit={handleSubmit}>
        <h3>Allergies:</h3>
        <ul>
          {allergies.map((allergy, index) => (
            <li key={index}>
              
              <input
                id={`name-${index}`}
                type="text"
                value={allergy.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                disabled={!allergy.editable}
                className={allergy.editable ? "editable" : ""}
              />
              <button type="button" style={{ "marginLeft": "5%" }} onClick={() => handleRemoveallergies(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddallergies}>Add</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Allergies;
