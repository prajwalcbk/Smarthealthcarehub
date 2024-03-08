import React from 'react';
import './ServicePage.css'; // Import CSS file for styling

// Import icons for service categories
import SymptomCheckerIcon from './../../assets/symptom-checker.png';
import AppointmentManagementIcon from './../../assets/appointment-management.png';
import PersonalHealthRecordsIcon from './../../assets/personal-health-records.png';
import CommunityInteractionIcon from './../../assets/community-interaction.png';
import PrescriptionManagementIcon from './../../assets/prescription-management.png';
import HealthcareProviderCoordinationIcon from './../../assets/healthcare-provider-coordination.png';
import Navbar from '../navbar/Navbar';

function ServicePage() {
  return (
    <div className='maincontainer'>
      <Navbar />
      <div className="service-container">
        <h1>Our Services</h1>
        <div className="service-list">

          <div className="service-category">
            <img src={SymptomCheckerIcon} alt="Symptom Checker" />
            <h2>Symptom Checker</h2>
            <p>Evaluate your health concerns quickly with our interactive symptom checker, providing initial guidance and recommendations based on your reported symptoms.</p>
          </div>

          <div className="service-category">
            <img src={AppointmentManagementIcon} alt="Appointment Management" />
            <h2>Appointment Management</h2>
            <p>Seamlessly schedule, modify, or cancel appointments with healthcare providers through our user-friendly platform, ensuring convenience and flexibility in managing your healthcare needs.</p>
          </div>

          <div className="service-category">
            <img src={PersonalHealthRecordsIcon} alt="Personal Health Records (PHR)" />
            <h2>Personal Health Records (PHR)</h2>
            <p>Maintain comprehensive health profiles encompassing medical history, prescriptions, and vital signs data, empowering you to track and manage your health information conveniently.</p>
          </div>

          <div className="service-category">
            <img src={CommunityInteractionIcon} alt="Community Interaction" />
            <h2>Community Interaction</h2>
            <p>Engage in health-focused discussions, share experiences, and seek advice from peers through our vibrant community forums, fostering a supportive environment for health-related dialogue and knowledge sharing.</p>
          </div>

          <div className="service-category">
            <img src={PrescriptionManagementIcon} alt="Prescription Management" />
            <h2>Prescription Management</h2>
            <p>Manage your prescriptions, refills, and medication adherence alerts efficiently with our dedicated platform, facilitating effective medication management and ensuring timely refills.</p>
          </div>

          <div className="service-category">
            <img src={HealthcareProviderCoordinationIcon} alt="Healthcare Provider Coordination" />
            <h2>Healthcare Provider Coordination</h2>
            <p>Collaborate seamlessly with healthcare providers, pharmacists, and other professionals through our platform, facilitating effective communication and coordination for personalized healthcare delivery.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServicePage;
