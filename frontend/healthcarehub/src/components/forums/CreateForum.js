import React, { useState, useEffect } from 'react';
import './CreateForum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
//import { useHistory } from 'react-router-dom';


const CreateForum = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
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
    <div className="container">
    <Navbar />
      <div className="healthforum-form">
        <h1>Create New Forum</h1>
        <div className="form-group">
          <label htmlFor="email">Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
        <label htmlFor="category">Category *</label>
          <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          >

          <option value="">Select Category</option>
          <option value="All">All</option>
          <option value="Diet">Diet</option>
          <option value="Exercise">Exercise</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Sleep">Sleep</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Women's Health">Women's Health</option>
          <option value="Men's Health">Men's Health</option>
          <option value="Heart Health">Heart Health</option>
        </select>
        </div>

          <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={8} // Set the number of visible rows
          />
        </div>

        <div className="form-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        
      </div>
    </div>
  );
}

export default CreateForum;