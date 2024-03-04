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

          <div className='content-wrapper'>


          <div className='box border'>
          <Link to='doctor'>
            <img src={calender} alt="Calender Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Health Provider</h2>
          </Link>
            <p>Schedule appointments with healthcare professionals to discuss health concerns and receive treatment.</p>
          
          </div>

          <div className='box'>
          <Link to='patient'>
            <img src={medicalrecord} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2> Patients </h2>
            </Link>
            <p>Access and manage your medical records digitally, ensuring they are available when needed.</p>
          </div>

          <div className='box'>
          <Link to='pharmacist'>
            <img src={symptomchecker} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Pharmacist</h2>
          </Link>
            <p>Use symptom checker tool to assess your symptoms and receive guidance on possible causes and next steps.</p>
          </div>

          <div className='box'>
          <Link to='admin'>
            <img src={prescription} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }}/>
            <h2>Administrator</h2>
          </Link>
            <p>Conveniently request prescription refills and have them delivered to your preferred Loaction.</p>
          </div>
          
          <div className='box'>
          <Link to="/healthadmin">
            <img src={prescription} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }}/>
            <h2>Health Administrator</h2>
          </Link>
            <p>Conveniently request prescription refills and have them delivered to your preferred Loaction.</p>
          </div>

          </div>



          <Footer />
      </div>
       <IncidentReportIcon />
    </div>
  );
}

export default Home;
