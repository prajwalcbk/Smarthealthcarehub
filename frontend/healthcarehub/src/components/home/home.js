import React from 'react';
import Navbar from '../navbar/Navbar'; // Make sure to import the Navbar component
import Footer from '../footer/Footer'; 
import { Link } from "react-router-dom";
import './home.css'; // Import your custom CSS for styling
import calender from './../../assets/calendar.png';
import medicalrecord from'./../../assets/medical-record.png'
import prescription from './../../assets/prescription.png'
import symptomchecker from './../../assets/symptomchecker.png'
import Notification from '../Patient/Notification'
import IncidentReportIcon from '../IncidentReport/IncidentReportIcon';
import { FaUserMd, FaUserCog, FaUserNurse, FaHospital } from 'react-icons/fa';


function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Notification />
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
          <Link to='patient'>
            <img src={medicalrecord} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Track Your Medical Records</h2>
            </Link>
            <p>Access and manage your medical records digitally, ensuring they are available when needed.</p>
          </div>

          <div className='box'>
          <Link to='symptomchecker'>
            <img src={symptomchecker} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Symptom Checker</h2>
          </Link>
            <p>Use symptom checker tool to assess your symptoms and receive guidance on possible causes and next steps.</p>
          </div>

          <div className='box'>
            <img src={prescription} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }}/>
            <h2>Order Prescriptions</h2>
            <p>Conveniently request prescription refills and have them delivered to your preferred Loaction.</p>
          </div>
          
          </div>
          <div className='icon-container'>
          <div className="icons-row">
      <Link to='/doctor'>
      <div className="icon-container">
        <FaUserMd className="icon" />
        <span className="role">Health Care Provider</span>
      </div>
      </Link>
      <Link to='/admin'>
      <div className="icon-container">
        <FaUserCog className="icon" />
        <span className="role">Admin</span>
      </div>
      </Link>
      <Link to='/pharmacist'>
      <div className="icon-container">
        <FaUserNurse className="icon" />
        <span className="role">Pharmacist</span>
      </div>
      </Link>
      <Link to='/healthadmin'>
      <div className="icon-container">
        <FaHospital className="icon" />
        <span className="role">Health Admin</span>
      </div>
      </Link>
    </div>
          </div>
          <Footer />
      </div>
       <IncidentReportIcon />
    </div>
  );
}

export default Home;
