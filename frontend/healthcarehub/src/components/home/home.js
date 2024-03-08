import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar'; // Make sure to import the Navbar component
import Footer from '../footer/Footer'; 
import { Link } from "react-router-dom";
import './home.css'; // Import your custom CSS for styling
import calender from './../../assets/calendar.png';
import medicalrecord from'./../../assets/medical-record.png'
import prescription from './../../assets/prescription.png'
import symptomchecker from './../../assets/symptomchecker.png'
import Notification from '../Patient/Notification'
import Support from '../Support/Support';
import { FaUserMd, FaUserCog, FaUserNurse, FaHospital } from 'react-icons/fa';
import doctor from './../../assets/doctor.png'
import patient from './../../assets/patient.png'
import pharmacist from './../../assets/pharmacist.png'
import healthadmin from './../../assets/healthadmin.png'
import admin from './../../assets/admin.png'




function Home() {
  const [toShowAllRoles , setToShowAllRoles]=useState(false)
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

          { toShowAllRoles && 
          <div className='content-wrapper'>


          <div className='box border'>
          <Link to='doctor'>
            <img src={doctor} alt="Calender Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Health Provider</h2>
          </Link>
            <p>Provides medical care and treatment in hospitals and clinics</p>
          
          </div>

          <div className='box'>
          <Link to='patient'>
            <img src={patient} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2> Patients </h2>
            </Link>
            <p>Seeks medical care and plays an active role in health management.</p>
          </div>

          <div className='box'>
          <Link to='pharmacist'>
            <img src={pharmacist} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }} />
            <h2>Pharmacist</h2>
          </Link>
            <p>Dispenses medications and ensures their safety and effectiveness.</p>
          </div>

          <div className='box'>
          <Link to="/healthadmin">
            <img src={healthadmin} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }}/>
            <h2>Health Administrator</h2>
          </Link>
            <p>Oversees healthcare organization management and drives improvement.</p>
          </div>
          
          <div className='box'>
          <Link to='admin'>
            <img src={admin} alt="Stethoscope Icon" style={{ width: '50px', height: '50px' }}/>
            <h2>Administrator</h2>
          </Link>
            <p>Manages operations and supports healthcare providers.</p>
          </div>
          
          </div>

        }
           <Footer />
               <Support />
      </div>
    </div>
  );
}

export default Home;
