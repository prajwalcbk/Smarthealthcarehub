import React from 'react';
import Navbar from '../navbar/Navbar'; // Make sure to import the Navbar component
import { Link } from "react-router-dom";
import './home.css'; // Import your custom CSS for styling
import calender from './../../assets/calendar.png';
import medicalrecord from'./../../assets/medical-record.png'
import prescription from './../../assets/prescription.png'
import symptomchecker from './../../assets/symptomchecker.png'

function Home() {
  return (
    <div className="home-container">
      <Navbar />


      <div className='quote-container'>
        <div className='content-wrapper'>

          <div className='box border'>
          <Link to='doctors'>
            <img src={calender} alt="Calender Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Book an Appointment</h2>
          </Link>
            <p>Schedule appointments with healthcare professionals to discuss health concerns and receive treatment.</p>
          
          </div>

          <div className='box'>
            <img src={medicalrecord} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Track Your Medical Records</h2>
            <p>Access and manage your medical records digitally, ensuring they are available when needed.</p>
          </div>

          <div className='box'>
            <img src={symptomchecker} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Symptom Checker</h2>
            <p>Use symptom checker tool to assess your symptoms and receive guidance on possible causes and next steps.</p>
          </div>

          <div className='box'>
            <img src={prescription} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }}/>
            <h2>Order Prescriptions</h2>
            <p>Conveniently request prescription refills and have them delivered to your preferred Loaction.</p>
          </div>
          
          </div>
      </div>
    </div>
  );
}

export default Home;
