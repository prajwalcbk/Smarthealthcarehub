import React from 'react';
import './ServicePage.css'; // Import CSS file for styling

// Import icons for service categories
import UserCentricIcon from './../../assets/patient.png';
import HealthcareProviderIcon from './../../assets/doctor.png';
import AdminIcon from './../../assets/admin.png';
import FacilityManagementIcon from './../../assets/facility-management.png';
import PharmacistIcon from './../../assets/pharmacist.png';
import Navbar from '../navbar/Navbar';

function ServicePage() {
  return (
    <div className='maincontainer'>
      <Navbar />
    <div className="service-container">
      <h1>Our Services</h1>
      <div className="service-list">
        
        <div className="service-category">
          <img src={UserCentricIcon} alt="User-Centric Features" />
          <h2>Healthcare Consumer Features</h2>
          <ul>
            <li>Symptom Checker</li>
            <li>Medication Reminders</li>
            <li>Personal Health Records (PHR)</li>
            <li>Appointment Management</li>
            <li>Community Interaction</li>
            <li>Prescription Management</li>
          </ul>
        </div>
        

        <div className="service-category">
          <img src={HealthcareProviderIcon} alt="Healthcare Provider Features" />
          <h2>Healthcare Provider Features</h2>
          <ul>
            <li>E-Prescriptions</li>
            <li>Appointment Management</li>
            <li>Access to Patient Health Records</li>
            <li>Secure Messaging </li>
            <li>Professional Collaboration</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        <div className="service-category">
          <img src={PharmacistIcon} alt="Pharmacist Features" />
          <h2>Pharmacist Features</h2>
          <ul>
            <li>Medication Dispensation</li>
            <li>Medication History</li>
            <li>Communication</li>
          </ul>
        </div>

        <div className="service-category">
          <img src={FacilityManagementIcon} alt="Facility Management and Compliance" />
          <h2>Health Administrator </h2>
          <ul>
            <li>Facility Management</li>
            <li>Staff Coordination</li>
            <li>Compliance Oversight</li>
            <li>Incident Response</li>

          </ul>
        </div>


        <div className="service-category">
          <img src={AdminIcon} alt="Administrative Features" />
          <h2>Administrative Features</h2>
          <ul>
            <li>User Management</li>
            <li>Healthcare Provider Management</li>
            <li>System Configuration</li>
            <li>Data Oversight</li>
            <li>Report Generation</li>
          </ul>
        </div>



        



        
      </div>
    </div>
    </div>
  );
}

export default ServicePage;
