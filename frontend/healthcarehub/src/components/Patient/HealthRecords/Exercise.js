import React, { useState } from 'react';

function Exercise() {
  const [exercises, setexercises] = useState([
  {
    "workout": "Running",
    "index": 1,
    "date": "2020-08-20",
    "intensity": "Moderate",
    "duration": "30 minutes"
  },
  {
    "workout": "Yoga",
    "index": 2,
    "date": "2021-01-10",
    "intensity": "Low",
    "duration": "45 minutes"
  },
  {
    "workout": "Weightlifting",
    "index": 3,
    "date": "2019-12-05",
    "intensity": "High",
    "duration": "60 minutes"
  }
]);
  const [editMode, setEditMode] = useState(false);

  const handleAddExercise = () => {
    const exercise = { name: '', date: '', editable: true };
    setexercises([...exercises, exercise]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemoveExercise = (index) => {
    const updatedexercise = [...exercises];
    updatedexercise.splice(index, 1);
    setexercises(updatedexercise);
  };

  const handleInputChange = (event, index, key) => {
    const updatedexercise = [...exercises];
    updatedexercise[index][key] = event.target.value;
    setexercises(updatedexercise);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('exercises history:', exercises);
  };

    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = (event) => {
    setSuccessMessage("Added successfully");
    setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 

  };

  return (
    <div className="exercises">
      <h2>Exercise Tracking</h2>
      <form onSubmit={handleSubmit}>
        <h3>Exercise records</h3>
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>
              <label htmlFor={`workout-${index}`}>WorkOut:</label>
              <input
                id={`workout-${index}`}
                type="text"
                value={exercise.workout}
                onChange={(e) => handleInputChange(e, index, 'workout')}
                disabled={!exercise.editable}
                className={exercise.editable ? "editable" : ""}
              />

              <br />
              <label htmlFor={`duration-${index}`}>Duration:</label>
              <input
                id={`duration-${index}`}
                type="text"
                value={exercise.duration}
                onChange={(e) => handleInputChange(e, index, 'duration')}
                disabled={!exercise.editable}
                className={exercise.editable ? "editable" : ""}
              />

              <br />
              <label htmlFor={`date-${index}`}>Date:</label>
              <input
                id={`date-${index}`}
                type="text"
                value={exercise.date}
                onChange={(e) => handleInputChange(e, index, 'date')}
                disabled={!exercise.editable}
                className={exercise.editable ? "editable" : ""}
              />

              <label htmlFor={`intensity-${index}`}>Intensity:</label>
              <input
                id={`intensity-${index}`}
                type="text"
                value={exercise.intensity}
                onChange={(e) => handleInputChange(e, index, 'intensity')}
                disabled={!exercise.editable}
                className={exercise.editable ? "editable" : ""}
              />
              <button type="button" onClick={() => handleRemoveExercise(index)}>Remove</button>
              <button type="button" onClick={handleSave}>Save</button>
            </li>
          ))}
        </ul>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "30%"}}  onClick={handleAddExercise}>Add</button>
      </form>
    </div>
  );
}

export default Exercise;
