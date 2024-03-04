import React, { useState } from 'react';
import './Exercise.css'

function Exercise() {
  const [exercises, setexercises] = useState([{"workout":"fever","index":1, "date": "25-11-200" , "intensity" : "Description"  , "duration": "10 minutes"},{"workout":"fever","index":2,"date": "25-11-200" , "intensity" : "Description", "duration": "10 minutes"},{"workout":"fever","index":3,"date": "25-11-200" , "intensity" : "Description", "duration": "10 minutes"}]);

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
              <button type="button" onClick={() => handleRemoveExercise(index)}>Save</button>
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddExercise}>Add</button>
      </form>
    </div>
  );
}

export default Exercise;
