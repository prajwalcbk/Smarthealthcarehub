// IncidentReportIcon.js

import React from 'react';
import { Link } from "react-router-dom";

import { FaExclamationCircle } from 'react-icons/fa'; // Import icon from react-icons library
import './IncidentReportIcon.css'; // Import CSS file for styling

function IncidentReportIcon() {
 
  return (
    <Link to='/incidentreport'>
    <div className="incident-report-icon" >
      <FaExclamationCircle className="icon" />
    </div>
    </Link>
  );
}

export default IncidentReportIcon;
