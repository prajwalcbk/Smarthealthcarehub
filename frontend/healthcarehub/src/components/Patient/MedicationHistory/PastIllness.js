import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PastIllness() {
  const [pastIllnesses, setPastIllnesses]  = useState([]);
  const [editMode, setEditMode] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);

  const fetchDataFromApi = async () => {
    try {

      const response = await axios.get('/api/get/pastIllness/history',  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000 // Set timeout to 2 seconds
    });

      console.log(response.data);
      setPastIllnesses(response.data);


    } catch (error) {
      console.error('Error fetching Family History records:', error);
    }
  };


useEffect(() => {
    fetchDataFromApi();
  }, []);

  const handleAddPastIllness = () => {
    const newIllness = { name: '', date: '', editable: true };
    setPastIllnesses([...pastIllnesses, newIllness]);
    setEditMode(true); // Enable edit mode for the newly added illness
  };

  const handleRemovePastIllness = async (index,id) => {

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
    const updatedIllnesses = [...pastIllnesses];
    updatedIllnesses.splice(index, 1);
    setPastIllnesses(updatedIllnesses);
  };


  const handleInputChange = (event, index, key) => {
    const updatedIllnesses = [...pastIllnesses];
    updatedIllnesses[index][key] = event.target.value;
    setPastIllnesses(updatedIllnesses);
  };



  const handleSave = async (id) => {
    try {

      const data=pastIllnesses[id];
      const response = await axios.post('/api/create/history/pastillness', data,  {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      timeout: 2000
      });
      

    const updatedpastIllnesses = pastIllnesses.filter((pastIllnessesdata, index) => index !== id);
    // Add the response data (saved exercise) to the list
    updatedpastIllnesses.push(response.data);

    // Update the exercises state with the modified list
    setPastIllnesses(updatedpastIllnesses);
      

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
    <div className="pastIllnesses-history">
      <h2>Past illness History</h2>
      <form >
        <h3>Past illness:</h3>
        <ul>
          {pastIllnesses.map((illness, index) => (
            <li key={index}>
              <label htmlFor={`name-${index}`}>Name:</label>
              <input
                id={`name-${index}`}
                type="text"
                value={illness.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
                disabled={!illness.editable}
                className={illness.editable ? "editable" : ""}
              />
              <br />
              <label htmlFor={`date-${index}`}>Date:</label>
              <input
                id={`date-${index}`}
                type="text"
                value={illness.date}
                onChange={(e) => handleInputChange(e, index, 'date')}
                disabled={!illness.editable}
                className={illness.editable ? "editable" : ""}
              />
              <label htmlFor={`description-${index}`}>Description:</label>
              <input
                id={`description-${index}`}
                type="text"
                value={illness.description}
                onChange={(e) => handleInputChange(e, index, 'description')}
                disabled={!illness.editable}
                className={illness.editable ? "editable" : ""}
              />
              <button type="button" onClick={() => handleRemovePastIllness(index,illness.id)}>Remove</button>
              <button type="button" onClick={() => handleSave(index)}>Save</button>
            </li>
          ))}
        </ul>
        <div>{successMessage && <p className="success-message">{successMessage}</p>} </div>
        <button type="button"  style={{"width":"100%" , "marginBottom": "30%"}}  onClick={handleAddPastIllness}>Add</button>
      </form>
    </div>
  );
}

export default PastIllness;
