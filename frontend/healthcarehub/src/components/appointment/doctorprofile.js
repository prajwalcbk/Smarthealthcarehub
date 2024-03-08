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
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases.', location: 'US Sillicon valley', gender: 'female', licenseNumber: 'MD12345', affiliatedFacility: 'Heart Hospital' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location: 'Dallas', gender: 'male', licenseNumber: 'MD67890', affiliatedFacility: 'Children\'s Hospital' },
  { id: 3, name: 'Dr. Emily Johnson', specialization: 'Dermatologist', about: 'Expert in diagnosing and treating skin conditions.', location: 'New York', gender: 'female', licenseNumber: 'MD54321', affiliatedFacility: 'Dermatology Clinic' },
  { id: 4, name: 'Dr. Michael Lee', specialization: 'Orthopedic Surgeon', about: 'Skilled in surgical and non-surgical treatment of musculoskeletal injuries and disorders.', location: 'Los Angeles', gender: 'male', licenseNumber: 'MD98765', affiliatedFacility: 'Orthopedic Center' },
  { id: 5, name: 'Dr. Sarah Brown', specialization: 'Obstetrician-Gynecologist', about: 'Provides comprehensive care for women\'s reproductive health.', location: 'Chicago', gender: 'female', licenseNumber: 'MD24680', affiliatedFacility: 'Women\'s Clinic' },
  { id: 6, name: 'Dr. Robert Wilson', specialization: 'Neurologist', about: 'Expert in diagnosing and treating disorders of the nervous system.', location: 'Houston', gender: 'male', licenseNumber: 'MD13579', affiliatedFacility: 'Neurology Center' },
  { id: 7, name: 'Dr. Elizabeth Martinez', specialization: 'Psychiatrist', about: 'Offers compassionate care for individuals with mental health disorders.', location: 'Miami', gender: 'female', licenseNumber: 'MD02468', affiliatedFacility: 'Psychiatry Clinic' },
  { id: 8, name: 'Dr. David Wilson', specialization: 'Ophthalmologist', about: 'Specializes in the diagnosis and treatment of eye disorders.', location: 'San Francisco', gender: 'male', licenseNumber: 'MD97531', affiliatedFacility: 'Eye Clinic' },
  { id: 9, name: 'Dr. Jennifer Garcia', specialization: 'Family Physician', about: 'Provides comprehensive primary care for patients of all ages.', location: 'Seattle', gender: 'female', licenseNumber: 'MD86420', affiliatedFacility: 'Family Medicine Clinic' },
  { id: 10, name: 'Dr. Christopher Taylor', specialization: 'Endocrinologist', about: 'Specializes in diagnosing and treating hormonal disorders.', location: 'Boston', gender: 'male', licenseNumber: 'MD75319', affiliatedFacility: 'Endocrinology Clinic' }
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
