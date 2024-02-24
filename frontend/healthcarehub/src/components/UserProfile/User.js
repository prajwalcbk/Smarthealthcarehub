import React, { useState, useEffect } from 'react';
import MedicationHistory from './MedicationHistory';
import Prescriptions from './Prescriptions';
import HealthRecords from './HealthRecords';
import UserProfile from './UserProfile';

import Navbar from './../navbar/Navbar'
import './User.css'
import medicalrecord from'./../../assets/medical-record.png'
import prescription from './../../assets/prescription.png'
import user from './../../assets/examination.png'

function User() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add other relevant user details (age, height, weight, etc.)
  });

  // Fetch user data from an external source (e.g., API)
  useEffect(() => {
    const fetchUserData = async () => {
      //const response = await fetch('https://your-api-endpoint.com/user/data'); // Replace with your API endpoint
      //const user = await response.json();
      const user = { firstName : "Prajwal" , lastName:"A GOwda" , email:"prajwalcbk38@gmail.com"}
      setUserData(user);
    };

    fetchUserData();
  }, []);

  const [activeComponent, setActiveComponent] = useState('');

  return (
    <div className="container">
      <Navbar />
      <div className="sidebar">
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> User Profile</button>
          <button onClick={() => setActiveComponent('MedicationHistory')}> <img src={medicalrecord} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> Medication History</button>
          <button onClick={() => setActiveComponent('Prescriptions')}> <img src={prescription} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> Prescriptions</button>
          <button onClick={() => setActiveComponent('HealthRecords')}> <img src={prescription} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> Health Records</button>
      </div>
        
        <div className="user-data">
          {activeComponent === 'UserProfile' && <UserProfile />}
          {activeComponent === 'MedicationHistory' && <MedicationHistory />}
          {activeComponent === 'Prescriptions' && <Prescriptions />}
          {activeComponent === 'HealthRecords' && <HealthRecords />}
        </div>
    </div>
  );
}

export default User;