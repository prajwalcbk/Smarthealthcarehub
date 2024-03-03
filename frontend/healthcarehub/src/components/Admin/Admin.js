import React, { useState, useEffect } from 'react';

import UserManagement from './UserManagement/UserManagement'
import HealthcareProviderManagement from './HealthcareProviderManagement/HealthcareProviderManagement'
import SystemConfiguration from './SystemConfiguration/SystemConfiguration'
import DataOversight from './DataOversight/DataOversight'
import ReportGeneration from './ReportGeneration/ReportGeneration'
import PrivacyIssuesComponent from './DataOversight/PrivacyIssuesComponent'
import DataBreachesComponent from './DataOversight/DataBreachesComponent'
import SystemMalfunctionsComponent from './DataOversight/SystemMalfunctionsComponent'
import close from './../../assets/cross.png'



import user from './../../assets/examination.png'
import bar from './../../assets/menu-bar-.png'
import Navbar from './../navbar/Navbar'

function Admin() {


  const [activeComponent, setActiveComponent] = useState('');

  const [isOpen, setIsopen] = useState(true);
  const [isDropDownOpen, setDropDownOpen] = useState(false);




  const handleToggle = () => {
    setIsopen(!isOpen);

  };

    const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };


  return (
    <div className="user-container">
      <Navbar />
      {isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> Menu Bar </button>

          
            <button onClick={() => setActiveComponent('UserManagement')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  Users </button>
            <button onClick={() => setActiveComponent('HealthcareProviderManagement')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  HealthcareProviders </button>
            <button onClick={() => setActiveComponent('SystemConfiguration')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  SystemConfiguration </button>
            <button onClick={handleDropDown}>
              <img src={user} alt="DataOversight Icon" style={{ width: '40px', height: '40px' }} />
              Oversights
              {isDropDownOpen && <img src={close} alt="menu bar" style={{ width: '40px', height: '40px' }} />}
            </button>
            {(
            isDropDownOpen
          ) && (          
          <div className="medical-record-drop-down" >
          
            <button onClick={() => setActiveComponent('DataBreachesComponent')}>  DataBreaches </button>
            <button onClick={() => setActiveComponent('SystemMalfunctionsComponent')}> SystemMalfunctions </button>
            <button onClick={() => setActiveComponent('PrivacyIssuesComponent')}> PrivacyIssues </button>
          </div>
          )}

            <button onClick={() => setActiveComponent('ReportGeneration')}> <img src={user} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  Reports </button>

      </div>
      )}
      {!isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('UserManagement')}> <img src={user} alt="UserManagement Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('HealthcareProviderManagement')}> <img src={user} alt="HealthcareProviderManagement Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('SystemConfiguration')}> <img src={user} alt="SystemConfiguration Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('DataOversight')}> <img src={user} alt="DataOversight Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('ReportGeneration')}> <img src={user} alt="ReportGeneration Icon" style={{ width: '40px', height: '40px' }} /></button>
          
      </div>
      )}

        <div className="user-data">
          {activeComponent === 'UserManagement' && <UserManagement />}
          {activeComponent === 'HealthcareProviderManagement' && <HealthcareProviderManagement />}
          {activeComponent === 'SystemConfiguration' && <SystemConfiguration />}
          {activeComponent === 'DataOversight' && <DataOversight />}
          {activeComponent === 'ReportGeneration' && <ReportGeneration />}

          {activeComponent === 'PrivacyIssuesComponent' && <PrivacyIssuesComponent />}
          {activeComponent === 'SystemMalfunctionsComponent' && <SystemMalfunctionsComponent />}
          {activeComponent === 'DataBreachesComponent' && <DataBreachesComponent />}
          
          
        </div>
    </div>
  );
}

export default Admin;