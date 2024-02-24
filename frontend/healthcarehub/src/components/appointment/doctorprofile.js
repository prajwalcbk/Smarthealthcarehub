import React from 'react';
import './DoctorProfile.css'; // Import your CSS for styling
import male_doctor from './../../assets/male_doctor.png'
import female_doctor from './../../assets/female_doctor.png'
import medicalrecord from'./../../assets/medical-record.png'


function Profile({ name, specialization, location, about, licenseNumber, affiliatedFacility }) {
  return (
    <div className="doctor-profile">
      <div className="profile-info">
        <div>
          <strong> licenseNumber:'12345' , affiliatedFacility:"New york Center" , Specialization:</strong> {specialization}
        </div>
        <div>
          <strong>Location:</strong> {location}
        </div>
        <div>
          <strong>License Number:</strong> {licenseNumber}
        </div>
        <div>
          <strong>Affiliated Facility:</strong> {affiliatedFacility}
        </div>
        <div>
          <strong>About:</strong> {about}
        </div>
      </div>
    </div>
  );
}

function DoctorProfile() {

     const dummyDoctorsData = [
      { id: 1, name: 'Dr. John Doe',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases.',  location:"US Sillicon valley" , gender:"female"},
      { id: 2, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"Dallas" ,gender:"male"},
      { id: 3, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco",gender:"female"},
      { id: 4, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male" },
      { id: 5, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" , gender:"male"},
      { id: 6, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male"},
      { id: 7, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female" },
      { id: 8, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco" , gender:"male"},
      { id: 9, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male" },
      { id: 1, name: 'Dr. John Doe',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases.',location:"US Sillicon valley" ,gender:"female" },
      { id: 2, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"male" },
      { id: 3, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"male"  },
      { id: 4, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female" },
      { id: 5, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco" ,gender:"male"  },
      { id: 6, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" ,gender:"female" },
      { id: 7, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female"  },
      { id: 8, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" ,gender:"male" },
      { id: 9, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male"  },
      // Add more dummy data as needed
    ];
  // Sample doctor data
  const doctor = {
    name: 'John Doe',
    gender: 'male',
    specialization: 'Cardiologist',
    location: 'New York',
    about: 'Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases.',
    licenseNumber: '12345',
    affiliatedFacility: 'New York Heart Center',
  };

  return (
    <div className="DoctorProfile">
      <img src={doctor.gender === 'male' ? male_doctor : female_doctor} alt="Doctor icon" className="profile-pic" style={{ width: '50px', height: '50px' }} />
      <label> {doctor.name} </label>      
      <Profile
        name={doctor.name}
        specialization={doctor.specialization}
        location={doctor.location}
        about={doctor.about}
        licenseNumber={doctor.licenseNumber}
        affiliatedFacility={doctor.affiliatedFacility}
      />
    </div>
  );
}

export default DoctorProfile;
