import React, { useState, useEffect } from 'react';
import './CreateForum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
//import { useHistory } from 'react-router-dom';


const CreateForum = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can send the title and description to your backend or perform any other action
      console.log('Title:', title);
      console.log('Description:', description);
      // Clear input fields after submission
      setTitle('');
      setDescription('');
    };
  return (
    <div className="createforum-container">
    <Navbar />
    <div className="createforum-card">     
    <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div >
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form> 
      </div>
    </div>
  );
};

export default CreateForum;