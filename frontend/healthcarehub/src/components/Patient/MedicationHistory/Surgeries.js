import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Surgeries() {
  const [surgeries, setsurgeries] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const token = localStorage.getItem('token');
  const [error, setError] = useState(null);


  const fetchDataFromApi = async () => {
    try {

      const response = await axios.get('/api/get/surgeries/history',  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000 // Set timeout to 2 seconds
    });

      console.log(response.data);
      setsurgeries(response.data);


    } catch (error) {
      console.error('Error fetching Family History records:', error);
    }
  };


useEffect(() => {
    fetchDataFromApi();
  }, []);


  const handleAddSurgeries = () => {
    const surgery = { name: '', date: '', editable: true };
    setsurgeries([...surgeries, surgery]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemoveSurgeries = async (index,id) => {
  try {
      const response = await axios.delete(`/api/delete/medicalhistory/${id}`,  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000 // Set timeout to 2 seconds
    });

    } catch (error) {
      console.error('Error fetching health records:', error);
    }
    const updatedsurgery = [...surgeries];
    updatedsurgery.splice(index, 1);
    setsurgeries(updatedsurgery);
  };


  const handleInputChange = (event, index, key) => {
    const updatedsurgery = [...surgeries];
    updatedsurgery[index][key] = event.target.value;
    setsurgeries(updatedsurgery);
  };


  const handleSave = async (id) => {
    try {

      const data=surgeries[id];
      const response = await axios.post('/api/create/history/Surgeries', data,  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000
      });
      

    const updatedsurgeries = surgeries.filter((surgeriesdata, index) => index !== id);
    // Add the response data (saved exercise) to the list
    updatedsurgeries.push(response.data);

    // Update the exercises state with the modified list
    setsurgeries(updatedsurgeries);
      

    } 
    catch (error) {
      console.error('Error fetching health records:', error);
    }


    setSuccessMessage("Added successfully");
    setTimeout(() => {
            setSuccessMessage('');
        }, 2000); 

  };

  return (
    <div className="surgeries">
      <h2>Surgeries</h2>
      <form>
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
              <button type="button" onClick={() => handleRemoveSurgeries(index,surgery.id)}>Remove</button>
              <button type="button" onClick={() => handleSave(index)}>Save</button>
            </li>
          ))}
        </ul>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
        <button type="button"  style={{"width":"100%" , "margin-bottom": "30%"}}  onClick={handleAddSurgeries}>Add</button>
      </form>
    </div>
  );
}

export default Surgeries;
