import React, { useState, useEffect } from 'react';
import './DoctorProfile.css'; // Import your CSS for styling
import male_doctor from './../../assets/male_doctor.png'
import axios from 'axios';
import female_doctor from './../../assets/female_doctor.png'
import medicalrecord from'./../../assets/medical-record.png'




function DoctorProfile(props) {
  const [doctor, setDoctor] = useState([]);

  const fetchDoctorData = async (userId) => {
    try {
      const dummyDoctorsData = [
      { id: 1, name: 'Dr. John Doe',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases., Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases. Experienced cardiologist with expertise in treating heart diseases.',  location:"US Sillicon valley" , gender:"female"},
      { id: 2, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"Dallas" ,gender:"male"},
      { id: 3, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco",gender:"female"},
      { id: 4, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male" },
      { id: 5, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" , gender:"male"},
      { id: 6, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male"},
      { id: 7, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female" },
      { id: 8, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco" , gender:"male"},
      { id: 9, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male" },
      { id: 11, name: 'Dr. John Doe',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases.',location:"US Sillicon valley" ,gender:"female" },
      { id: 12, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"male" },
      { id: 13, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"male"  },
      { id: 14, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female" },
      { id: 15, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco" ,gender:"male"  },
      { id: 16, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" ,gender:"female" },
      { id: 17, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female"  },
      { id: 18, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" ,gender:"male" },
      { id: 19, name: 'Dr. Jane Smith',  licenseNumber:'12345' , affiliatedFacility:"New york Center" , specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male"  },
    ];
    console.log("*********")
    console.log(userId)
      //const response = await axios.get(`your_api_endpoint/${userId}`);
      const doctor = dummyDoctorsData.find(doctor => doctor.id ===userId);
      console.log(doctor)
      setDoctor(doctor);
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  // Fetch doctor data when component mounts or when user ID changes
  useEffect(() => {
    fetchDoctorData(props.id);
  }, [props.id]);

    



function Profile({ name, specialization, location, about, licenseNumber, affiliatedFacility }) {
  return (
    <div className="doctor-profile">
      <div className="profile-info">
        <div>
          <strong>  Specialization:</strong> {specialization}
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
