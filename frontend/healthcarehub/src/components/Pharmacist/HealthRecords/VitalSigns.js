import React, { useState } from 'react';
import './VitalSigns.css'

function VitalSigns() {
  const [vitalsigns, setvitalsigns] = useState([{"bloodpressure":"fever","index":1, "date": "25-11-200" , "heartrate" : "Description"  , "bloodsugar": "10 minutes"},{"workout":"fever","index":2,"date": "25-11-200" , "heartrate" : "Description", "bloodsugar": "10 minutes"},{"workout":"fever","index":3,"date": "25-11-200" , "heartrate" : "Description", "bloodsugar": "10 minutes"}]);

  const [editMode, setEditMode] = useState(false);

  const handleAddVitalSigns = () => {
    const vitalsign = { name: '', date: '', editable: true };
    setvitalsigns([...vitalsigns, vitalsign]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemoveVitalSigns = (index) => {
    const updatedvitalsign = [...vitalsigns];
    updatedvitalsign.splice(index, 1);
    setvitalsigns(updatedvitalsign);
  };

  const handleInputChange = (event, index, key) => {
    const updatedvitalsign = [...vitalsigns];
    updatedvitalsign[index][key] = event.target.value;
    setvitalsigns(updatedvitalsign);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('vitalsigns history:', vitalsigns);
  };

  return (
    <div className="vitalsigns">
      <h2>VitalSigns Tracking</h2>
      <form onSubmit={handleSubmit}>
        <h3>Past VitalSigns records:</h3>
        <ul>
          {vitalsigns.map((vitalsign, index) => (
            <li key={index}>
              <label htmlFor={`bloodpressure-${index}`}>BloodPressure:</label>
              <input
                id={`bloodpressure-${index}`}
                type="text"
                value={vitalsign.bloodpressure}
                onChange={(e) => handleInputChange(e, index, 'bloodpressure')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />

              <br />
              <label htmlFor={`bloodsugar-${index}`}>BloodSugar:</label>
              <input
                id={`bloodsugar-${index}`}
                type="text"
                value={vitalsign.bloodsugar}
                onChange={(e) => handleInputChange(e, index, 'bloodsugar')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />

              <br />
              <label htmlFor={`heartrate-${index}`}>HeartRate:</label>
              <input
                id={`heartrate-${index}`}
                type="text"
                value={vitalsign.heartrate}
                onChange={(e) => handleInputChange(e, index, 'heartrate')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />


              <br />
              <label htmlFor={`date-${index}`}>Date:</label>
              <input
                id={`date-${index}`}
                type="text"
                value={vitalsign.date}
                onChange={(e) => handleInputChange(e, index, 'date')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />

              
              <button type="button" onClick={() => handleRemoveVitalSigns(index)}>Remove</button>
              <button type="button" onClick={() => handleRemoveVitalSigns(index)}>Save</button>
            </li>
          ))}
        </ul>
        <button type="button" style={{"width":"100%"}} onClick={handleAddVitalSigns}>Add</button>
      </form>
    </div>
  );
}

export default VitalSigns;
