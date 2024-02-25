import React, { useState, useEffect } from 'react';
import './Forum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
//import { useHistory } from 'react-router-dom';


const ForumPage = () => {
  return (
    <div className="forum-container">
    <Navbar />      
     <div className="forum-list">
          <div key='1' className="forum-card">
            <div className="left-section">
              <div style={{ paddingLeft: '20px' }}>

                <h2> Diet Plan </h2>
                <p>Category: C1</p>
                <p className="description">ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.</p>
              </div>
            </div>
          </div>
      </div> 
      
    </div>
  );
};

export default ForumPage;