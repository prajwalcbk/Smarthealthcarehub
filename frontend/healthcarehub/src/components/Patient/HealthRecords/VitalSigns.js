import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VitalSigns() {
  const [vitalsigns, setvitalsigns] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const token = localStorage.getItem('token');

  const fetchVitalSigns = async () => {
    try {


      const response = await axios.get('/api/get/vitalsigns',  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000 // Set timeout to 2 seconds
    });

      console.log(response.data);
      setvitalsigns(response.data);


    } catch (error) {
      console.error('Error fetching health records:', error);
    }
  };


useEffect(() => {
    fetchVitalSigns();
  }, []);



  const handleAddVitalSigns = () => {
    const vitalsign = { bloodpressure: '', date: '', editable: true };
    setvitalsigns([...vitalsigns, vitalsign]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemoveVitalSigns = async (id , vitalId) => {
    try {
      const response = await axios.delete(`/api/delete/vitalsign/${vitalId}`,  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000 // Set timeout to 2 seconds
    });

    } catch (error) {
      console.error('Error fetching health records:', error);
    }
    const updatedvitalsign = [...vitalsigns];
    updatedvitalsign.splice(id, 1);
    setvitalsigns(updatedvitalsign);
  };

  const handleInputChange = (event, id, key) => {
    const updatedvitalsign = [...vitalsigns];
    updatedvitalsign[id][key] = event.target.value;
    setvitalsigns(updatedvitalsign);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('vitalsigns history:', vitalsigns);
  };

    const [successMessage, setSuccessMessage] = useState('');

    const handleSave = async (id) => {
    try {
      const data=vitalsigns[id];
      const response = await axios.post('/api/create/vitalsign', data,  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000 // Set timeout to 2 seconds
    });

    } catch (error) {
      console.error('Error fetching health records:', error);
    }


    setSuccessMessage("Added successfully");
    setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 

  };

  return (
    <div className="vitalsigns">
      <h2>VitalSigns Tracking</h2>
      <form onSubmit={handleSubmit}>
        <h3>Past VitalSigns records:</h3>
        <ul>
          {vitalsigns.map((vitalsign, id) => (
            <li key={id}>
              <label htmlFor={`bloodpressure-${id}`}>BloodPressure:</label>
              <input
                id={`bloodpressure-${id}`}
                type="text"
                value={vitalsign.bloodpressure}
                onChange={(e) => handleInputChange(e, id, 'bloodpressure')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />

              <br />
              <label htmlFor={`bloodsugar-${id}`}>BloodSugar:</label>
              <input
                id={`bloodsugar-${id}`}
                type="text"
                value={vitalsign.bloodsugar}
                onChange={(e) => handleInputChange(e, id, 'bloodsugar')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />

              <br />
              <label htmlFor={`heartrate-${id}`}>HeartRate:</label>
              <input
                id={`heartrate-${id}`}
                type="text"
                value={vitalsign.heartrate}
                onChange={(e) => handleInputChange(e, id, 'heartrate')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />


              <br />
              <label htmlFor={`date-${id}`}>Date:</label>
              <input
                id={`date-${id}`}
                type="text"
                value={vitalsign.date}
                onChange={(e) => handleInputChange(e, id, 'date')}
                disabled={!vitalsign.editable}
                className={vitalsign.editable ? "editable" : ""}
              />

              
              <button type="button" onClick={() => handleRemoveVitalSigns(id,vitalsign.id)}>Remove</button>
              <button type="button" onClick={() => handleSave(id)} >Save</button>
            </li>
          ))}
        </ul>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "30%"}}  onClick={handleAddVitalSigns}>Add</button>
      </form>
    </div>
  );
}

export default VitalSigns;
