import React, { useState, useEffect } from 'react';
import './DoctorProfile.css'; // Import your CSS for styling
import male_doctor from './../../assets/male_doctor.png'
import axios from 'axios';
import female_doctor from './../../assets/female_doctor.png'
import medicalrecord from'./../../assets/medical-record.png'




function DoctorProfile(props) {
  const [doctor, setDoctor] = useState([]);
  const token = localStorage.getItem('token');
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchDoctor = async () => {
      try {
    const response = await axios.get(`/api/get/doctor/${props.id}`,  {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
    setDoctor(response.data[0]);
  }
  catch (error) {
      
      console.log(error)
        setError('ERROR: Somethig went wrong');
    }
  }
  fetchDoctor();

  }, []);

    



function Profile({ name, specialization, location, about, licenseNumber, affiliatedFacility }) {
  return (
    <div className="doctor-profile">
    <div>{error && <p className="error-message">{error}</p>}</div>
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
        location={doctor.address}
        about={doctor.about}
        licenseNumber={doctor.licensenumber}
        affiliatedFacility={doctor.facility_id}
      />
    </div>
  );
}

export default DoctorProfile;
