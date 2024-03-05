// IncidentReportIcon.js

import React from 'react';
import { Link } from "react-router-dom";
import comments from './../../assets/comments.png'

import { FaExclamationCircle } from 'react-icons/fa'; // Import icon from react-icons library
import './IncidentReportIcon.css'; // Import CSS file for styling

function IncidentReportIcon() {
 
  return (
    <Link to='/incidentreport'>
    <div className="incident-report-icon" >
      <img src={comments} alt="comments Icon" style={{ width: '60px', height: '60px' }} />
    </div>
    </Link>
  );
}

export default IncidentReportIcon;
