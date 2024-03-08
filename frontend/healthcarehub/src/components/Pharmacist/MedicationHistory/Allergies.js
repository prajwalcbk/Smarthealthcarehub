import React, { useState } from 'react';
import './Allergies.css'
import SearchPatient from './../../SearchPatient'

function Allergies() {
  const [allergies, setallergies] = useState([{"name":"fever","index":1, "Patient":"Charlie"},{"name":"headache","index":2, "Patient":"Johnson"}]);

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
      <h2>Allergies </h2>
      <form onSubmit={handleSubmit}>
      <SearchPatient />
        <h3>Allergies:</h3>
        <ul>
          {allergies.map((allergy, index) => (
            <li key={index}>
            <h3> Patient Name: {allergy.Patient} </h3>
              <label htmlFor={`name-${index}`}></label>
              <input
                id={`name-${index}`}
                type="text"
                value={allergy.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                disabled={!allergy.editable}
                className={allergy.editable ? "editable" : ""}
              />
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Allergies;
