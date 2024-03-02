import React, { useState, useEffect } from 'react';
import Allergies from './MedicationHistory/Allergies'
import FamilyHistory from './MedicationHistory/FamilyHistory'
import Surgeries from './MedicationHistory/Surgeries'
import PastIllness from './MedicationHistory/PastIllness'

import Exercise from './HealthRecords/Exercise'
import BasicHealthRecord from './HealthRecords/BasicHealthRecord'
import VitalSigns from './HealthRecords/VitalSigns'

import PrescriptionsList from './PrescriptionsList';
import UserProfile from './UserProfile';
import AppointmentList from './AppointmentLists';

import Navbar from './../navbar/Navbar'
import './User.css'
import medicalrecord from'./../../assets/medical-record.png'
import prescription from './../../assets/prescription.png'
import user from './../../assets/examination.png'
import bar from './../../assets/menu-bar-.png'
import close from './../../assets/cross.png'
import calender from './../../assets/calendar.png';
import vitalsigns from './../../assets/vital-signs.png'
import messenger from './../../assets/online-chat.png'

function User() {


  const [activeComponent, setActiveComponent] = useState('');

  const [isOpen, setIsopen] = useState(true);
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isDropDownOpen1, setDropDownOpen1] = useState(false);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
    setDropDownOpen1(false);
  };

  const handleDropDown1 = () => {
    setDropDownOpen1(!isDropDownOpen1);
    setDropDownOpen(false);
  };

  const handleToggle = () => {
    setIsopen(!isOpen);

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
          <button onClick={handleDropDown1}> <img src={vitalsigns} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} />  Health Records {isDropDownOpen1 && <img src={close} alt="menu bar" style={{ width: '40px', height: '40px' }} />}
          </button>
          {(
            isDropDownOpen1
          ) && (          
          <div className="medical-record-drop-down" >
          
            <button onClick={() => setActiveComponent('BasicHealthRecord')}>  Basic </button>
            <button onClick={() => setActiveComponent('Exercise')}> Exercise </button>
            <button onClick={() => setActiveComponent('VitalSigns')}> Vital Signs </button>
          </div>
          )}
          <button onClick={() => setActiveComponent('AppointmentList')}> <img src={calender} alt="HealthRecords Icon" style={{ width: '40px', height: '40px' }} /> Appointments</button>
          <button onClick={() => setActiveComponent('Messenger')}> <img src={messenger} alt="Messenger Icon" style={{ width: '40px', height: '40px' }} /> Messenger</button>
      </div>
      )}
      {!isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('MedicationHistory')}> <img src={medicalrecord} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} /></button>
          
          
          <button onClick={() => setActiveComponent('PrescriptionsList')}> <img src={prescription} alt="PrescriptionsList Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('HealthRecords')}> <img src={vitalsigns} alt="HealthRecords Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('AppointmentList')}> <img src={calender} alt="Appointments Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('Messenger')}> <img src={messenger} alt="Messenger Icon" style={{ width: '40px', height: '40px' }} /> </button>
      </div>
      )}

        <div className="user-data">
          {activeComponent === 'UserProfile' && <UserProfile />}
          {activeComponent === 'Allergies' && <Allergies />}
          {activeComponent === 'PastIllness' && <PastIllness />}
          {activeComponent === 'Surgeries' && <Surgeries />}
          {activeComponent === 'FamilyHistory' && <FamilyHistory />}

         {activeComponent === 'PrescriptionsList' && <PrescriptionsList />}
          {activeComponent === 'AppointmentList' && <AppointmentList />}
         
          {activeComponent === 'Exercise' && <Exercise />}
          {activeComponent === 'VitalSigns' && <VitalSigns />}
          {activeComponent === 'BasicHealthRecord' && <BasicHealthRecord />}


          
        </div>
    </div>
  );
}

export default User;