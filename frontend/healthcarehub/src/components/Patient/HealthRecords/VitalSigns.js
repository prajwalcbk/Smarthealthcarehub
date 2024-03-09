import React, { useState } from 'react';

function VitalSigns() {
  const [vitalsigns, setvitalsigns] = useState([
  {
    "bloodpressure": "120/80 mmHg",
    "index": 1,
    "date": "2020-08-20",
    "heartrate": "70 bpm",
    "bloodsugar": "100 mg/dL"
  },
  {
    "bloodpressure": "130/85 mmHg",
    "index": 2,
    "date": "2021-01-10",
    "heartrate": "75 bpm",
    "bloodsugar": "110 mg/dL"
  },
  {
    "bloodpressure": "115/75 mmHg",
    "index": 3,
    "date": "2019-12-05",
    "heartrate": "65 bpm",
    "bloodsugar": "90 mg/dL"
  }
]);
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
            </li>
          ))}
        </ul>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "5%"}}  onClick={handleAddVitalSigns}>Add</button>
      </form>
    </div>
  );
}

export default VitalSigns;
