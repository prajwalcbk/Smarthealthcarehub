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
import UpcomingAppointments from './AppointmentLists';
import OlderAppointments from './AppointmentHistory';
import AnalyticsDashboard from './AnalyticsDashboard/AnalyticsDashboard'

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
import analytics from './../../assets/analytics.png'


import { useHistory, useNavigate } from 'react-router-dom';


function User() {


  const [activeComponent, setActiveComponent] = useState('');

  const [isOpen, setIsopen] = useState(true);
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isDropDownOpen1, setDropDownOpen1] = useState(false);
  const [isDropDownOpen2, setDropDownOpen2] = useState(false);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
    setDropDownOpen1(false);
    setDropDownOpen2(false);
  };

  const handleDropDown1 = () => {
    setDropDownOpen1(!isDropDownOpen1);
    setDropDownOpen(false);
    setDropDownOpen2(false);
  };

  const handleDropDown2 = () => {
    setDropDownOpen2(!isDropDownOpen2);
    setDropDownOpen(false);
    setDropDownOpen1(false);
  };

  const handleToggle = () => {
    setIsopen(!isOpen);

  };

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/messenger');
  };
            // <button onClick={() => setActiveComponent('BasicHealthRecord')}>  Basic </button>
            //button onClick={() => setActiveComponent('Exercise')}> Exercise </button>


  return (
    <div className="user-container">
      <Navbar />
      {isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> Menu Bar </button>
          <button onClick={() => setActiveComponent('UserProfile')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} /> Doctor Details</button>
          <button onClick={handleDropDown}>
            <img src={medicalrecord} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} />
            Medication History 
            {isDropDownOpen && <img src={close} alt="menu bar" style={{ width: '40px', height: '40px' }} />}


          </button>

          {(
            isDropDownOpen
          ) && (          
          <div className="medical-history-drop-down" >
          
            <button onClick={() => setActiveComponent('PastIllness')}> Past illness </button>
            <button onClick={() => setActiveComponent('Allergies')}> Allergies </button>
            <button onClick={() => setActiveComponent('Surgeries')}> Surgeries </button>
             <button onClick={() => setActiveComponent('FamilyHistory')}> Family History </button>
          </div>
          )}
          <button onClick={() => setActiveComponent('PrescriptionsList')}> <img src={prescription} alt="PrescriptionsList Icon" style={{ width: '40px', height: '40px' }} /> Prescriptions</button>
          

          <button onClick={handleDropDown1}> <img src={vitalsigns} alt="MedicationHistory Icon" style={{ width: '40px', height: '40px' }} />  Health Records {isDropDownOpen1 && <img src={close} alt="menu bar" style={{ width: '40px', height: '40px' }} />} </button>
          {(
            isDropDownOpen1
          ) && (          
          <div className="medical-record-drop-down" >
          
            <button onClick={() => setActiveComponent('VitalSigns')}> Vital Signs </button>
          </div>
          )}

          
          <button onClick={handleDropDown2}> <img src={calender} alt="Appointments Icon" style={{ width: '40px', height: '40px' }} />  Appointments {isDropDownOpen2 && <img src={close} alt="menu bar" style={{ width: '40px', height: '40px' }} />} </button>
          {(
            isDropDownOpen2
          ) && (          
          <div className="medical-record-drop-down" >
          
            <button onClick={() => setActiveComponent('UpcomingAppointments')}>  Upcoming </button>
            <button onClick={() => setActiveComponent('OlderAppointments')}> Older </button>
          </div>
          )}
          <button onClick={() => setActiveComponent('AnalyticsDashboard')}> <img src={analytics} alt="HealthRecords Icon" style={{ width: '40px', height: '40px' }} /> Analytics</button>
          <button onClick={handleCreateClick}> <img src={messenger} alt="Messenger Icon" style={{ width: '40px', height: '40px' }} /> Messenger</button>
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
          <button onClick={() => setActiveComponent('AnalyticsDashboard')}> <img src={analytics} alt="Analytics Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={handleCreateClick}> <img src={messenger} alt="Messenger Icon" style={{ width: '40px', height: '40px' }} /> </button>
      </div>
      )}

        <div className="user-data">
          {activeComponent === 'UserProfile' && <UserProfile />}
          {activeComponent === 'Allergies' && <Allergies />}
          {activeComponent === 'PastIllness' && <PastIllness />}
          {activeComponent === 'Surgeries' && <Surgeries />}
          {activeComponent === 'FamilyHistory' && <FamilyHistory />}

         {activeComponent === 'PrescriptionsList' && <PrescriptionsList />}
          {activeComponent === 'UpcomingAppointments' && <UpcomingAppointments />}
          {activeComponent === 'OlderAppointments' && <OlderAppointments />}
         
          {activeComponent === 'Exercise' && <Exercise />}
          {activeComponent === 'VitalSigns' && <VitalSigns />}
          {activeComponent === 'BasicHealthRecord' && <BasicHealthRecord />}
          {activeComponent === 'AnalyticsDashboard' && <AnalyticsDashboard />}


          
        </div>
    </div>
  );
}

export default User;