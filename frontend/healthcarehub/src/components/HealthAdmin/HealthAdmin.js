import React, { useState, useEffect } from 'react';

import FacilityManagement from './FacilityManagement/FacilityManagement'
import StaffCoordination from './StaffCoordination/StaffCoordination'
import ComplianceOversight from './ComplianceOversight/ComplianceOversight'


import incidentresponse from './../../assets/incidentresponse.png'
import facilitymanagement from './../../assets/facilitymanagement.png'
import complianceoversight from './../../assets/complianceoversight.png'
import staffcoordination from './../../assets/staffcoordination.png'
import user from './../../assets/examination.png'
import bar from './../../assets/menu-bar-.png'
import Navbar from './../navbar/Navbar'
import IncidentResponse from './IncidentResponse/IncidentResponse'

function User() {


  const [activeComponent, setActiveComponent] = useState('');

  const [isOpen, setIsopen] = useState(true);




  const handleToggle = () => {
    setIsopen(!isOpen);

  };


  return (
    <div className="user-container">
      <Navbar />
      {isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> Menu Bar </button>

            <button onClick={() => setActiveComponent('FacilityManagement')}> <img src={facilitymanagement} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  FacilityManagement </button>
            <button onClick={() => setActiveComponent('StaffCoordination')}> <img src={staffcoordination} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  StaffCoordination </button>
            <button onClick={() => setActiveComponent('ComplianceOversight')}> <img src={complianceoversight} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  ComplianceOversight </button>
            <button onClick={() => setActiveComponent('IncidentResponse')}> <img src={incidentresponse} alt="Stethoscope Icon" style={{ width: '40px', height: '40px' }} />  IncidentResponse </button>

      </div>
      )}
      {!isOpen && (
      <div className="sidebar">
          <button onClick={handleToggle}> <img src={bar} alt="menu bar" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('FacilityManagement')}> <img src={facilitymanagement} alt="FacilityManagement Icon" style={{ width: '40px', height: '40px' }} /> </button>
          <button onClick={() => setActiveComponent('StaffCoordination')}> <img src={staffcoordination} alt="StaffCoordination Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('ComplianceOversight')}> <img src={complianceoversight} alt="ComplianceOversight Icon" style={{ width: '40px', height: '40px' }} /></button>
          <button onClick={() => setActiveComponent('IncidentResponse')}> <img src={incidentresponse} alt="IncidentResponse Icon" style={{ width: '40px', height: '40px' }} /></button>
          
      </div>
      )}

        <div className="user-data">
          {activeComponent === 'FacilityManagement' && <FacilityManagement />}
          {activeComponent === 'StaffCoordination' && <StaffCoordination />}
          {activeComponent === 'ComplianceOversight' && <ComplianceOversight />}
          {activeComponent === 'IncidentResponse' && <IncidentResponse />}
          
          
        </div>
    </div>
  );
}

export default User;