import React, { useState, useEffect } from 'react';
import Allergies from './MedicationHistory/Allergies'
import FamilyHistory from './MedicationHistory/FamilyHistory'
import Surgeries from './MedicationHistory/Surgeries'
import PastIllness from './MedicationHistory/PastIllness'


import PrescriptionsList from './PrescriptionsList';
import UserProfile from './UserProfile';

import Navbar from './../navbar/Navbar'
import './User.css'
import medicalrecord from'./../../assets/medical-record.png'
import prescription from './../../assets/prescription.png'
import user from './../../assets/examination.png'
import bar from './../../assets/menu-bar-.png'
import close from './../../assets/cross.png'
import calender from './../../assets/calendar.png';
import messenger from './../../assets/online-chat.png'
import MedicationDispensation from './MedicationDispensation/MedicationDispensation'

import { useHistory, useNavigate } from 'react-router-dom';

function User() {


  const [activeComponent, setActiveComponent] = useState('');

  const [isOpen, setIsopen] = useState(true);
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };



  const handleToggle = () => {
    setIsopen(!isOpen);

  };

    const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/messenger');
  };



  return (
    <div className="user-container">
      <Navbar />
      {isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> Menu Bar </button>
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> User Details</button>
          <button onClick={handleDropDown}>
            <img src={medicalrecord} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} />
            Medication History 
            {isDropDownOpen && <img src={close} alt="menu bar" style={{ width: '40px', height: '40px' }} />}
          </button>

          {(
            isDropDownOpen
          ) && (          
          <div className="medical-history-drop-down" >
          
            <button onClick={() => setActiveComponent('PastIllness')}> PastIllness </button>
            <button onClick={() => setActiveComponent('Allergies')}> Allergies </button>
            <button onClick={() => setActiveComponent('Surgeries')}> Surgeries </button>
             <button onClick={() => setActiveComponent('FamilyHistory')}> Family History </button>
          </div>
          )}
          <button onClick={() => setActiveComponent('PrescriptionsList')}> <img src={prescription} alt="PrescriptionsList Icon" style={{ width: '40px', height: '40px' }} /> Prescriptions</button>
          
          <button onClick={handleCreateClick}> <img src={messenger} alt="Messenger Icon" style={{ width: '40px', height: '40px' }} /> Messenger</button>
      </div>
      )}
      {!isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('MedicationHistory')}> <img src={medicalrecord} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} /></button>
          
          
          <button onClick={() => setActiveComponent('PrescriptionsList')}> <img src={prescription} alt="PrescriptionsList Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={handleCreateClick}> <img src={messenger} alt="Messenger Icon" style={{ width: '40px', height: '40px' }} /> </button>

      </div>
      )}

        <div className="user-data">
          {activeComponent === 'UserProfile' && <MedicationDispensation />}
          {activeComponent === 'Allergies' && <Allergies />}
          {activeComponent === 'PastIllness' && <PastIllness />}
          {activeComponent === 'Surgeries' && <Surgeries />}
          {activeComponent === 'FamilyHistory' && <FamilyHistory />}

         {activeComponent === 'PrescriptionsList' && <PrescriptionsList />}
         


          
        </div>
    </div>
  );
}

export default User;