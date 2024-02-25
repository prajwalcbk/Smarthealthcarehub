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
import bar from './../../assets/menu-bar-.png'

function User() {


  const [activeComponent, setActiveComponent] = useState('');

  const [isOpen, setIsopen] = useState(true);

  const handleToggle = () => {
    setIsopen(!isOpen);
  };


  return (
    <div className="container">
      <Navbar />
      {isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> Menu Bar </button>
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> User Details</button>
          <button onClick={() => setActiveComponent('MedicationHistory')}> <img src={medicalrecord} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} /> Medication History</button>
          <button onClick={() => setActiveComponent('Prescriptions')}> <img src={prescription} alt="Prescriptions Icon" style={{ width: '40px', height: '40px' }} /> Prescriptions</button>
          <button onClick={() => setActiveComponent('HealthRecords')}> <img src={prescription} alt="HealthRecords Icon" style={{ width: '40px', height: '40px' }} /> Health Records</button>
      </div>
      )}:
      {!isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('MedicationHistory')}> <img src={medicalrecord} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('Prescriptions')}> <img src={prescription} alt="Prescriptions Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('HealthRecords')}> <img src={prescription} alt="HealthRecords Icon" style={{ width: '40px', height: '40px' }} /></button>
      </div>
      )}

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