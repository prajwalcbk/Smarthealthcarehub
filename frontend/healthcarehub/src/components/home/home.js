import React from 'react';
import Navbar from '../navbar/Navbar'; // Make sure to import the Navbar component
import './home.css'; // Import your custom CSS for styling
import calender from './../../assets/Calender.svg';
import sethoscope from'./../../assets/stethoscope.svg'


function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className='quote-container'>
        <h1 className='heading'>Protect Your Life And Take Care Of Your Health</h1>
        <div className='content-wrapper'>

          <div className='box border'>
            <img src={calender} alt="Calender Icon" />
            <h2>Book an Appointment</h2>
            <p>Schedule appointments with healthcare professionals to discuss health concerns and receive treatment.</p>
          </div>

          <div className='box border1'>
            <img src={sethoscope} alt="Stethoscope Icon" />
            <h2>Track Your Medical Records</h2>
            <p>Access and manage your medical records digitally, ensuring they are available when needed and shared securely with authorized healthcare providers.</p>
          </div>

          <div className='box border1'>
            <img src={sethoscope} alt="Stethoscope Icon" />
            <h2>Symptom Checker</h2>
            <p>Use our symptom checker tool to assess your symptoms and receive guidance on possible causes and next steps.</p>
          </div>

          <div className='box border1'>
            <img src={sethoscope} alt="Stethoscope Icon" />
            <h2>Order Prescriptions</h2>
            <p>Conveniently request prescription refills and have them delivered to your preferred Loaction.</p>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default Home;
