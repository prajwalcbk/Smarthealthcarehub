import React, { useState, useEffect } from 'react';
import './doctorsearch.css'; // Import your CSS file for DoctorSearchPage styling
import AppointmentManagement from './AppointmentManagement';
import DoctorProfile from './doctorprofile';
import male_doctor from './../../assets/male_doctor.png'
import female_doctor from './../../assets/female_doctor.png'
import location from './../../assets/location.png'
import Navbar from '../navbar/Navbar';



const DoctorSearchPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [specializationFilter, setSpecializationFilter] = useState('');
  const [nameFilter , setNameFilter ]= useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage, setdoctorsPerPage ] = useState(10);
  const [bookAppointmentClicked, setBookAppointmentClicked] = useState([]);
  const [viewprofileClicked, setviewprofileClicked] = useState([]);


    const handleBookAppointmentClick = (doctorId) => {
    setBookAppointmentClicked((prevClicked) => {
      // Create a new array based on the previous state
      const newClicked = [...prevClicked];
      // Toggle the clicked state for the clicked doctor
      newClicked[doctorId] = !newClicked[doctorId];
      return newClicked;
    });
  };

  const handleviewprofileClickedClick = (doctorId) => {
    setviewprofileClicked((prevClicked) => {
      // Create a new array based on the previous state
      const newClicked = [...prevClicked];
      // Toggle the clicked state for the clicked doctor
      newClicked[doctorId] = !newClicked[doctorId];
      return newClicked;
    });
  };

  useEffect(() => {
    // Fetch doctors data from API or any other data source
    // Example API call:
    // fetch('api/doctors')
    //   .then(response => response.json())
    //   .then(data => setDoctors(data));
    // For demonstration purpose, I'll just use some dummy data
    const dummyDoctorsData = [
      { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases.',  location:"US Sillicon valley" , gender:"female"},
      { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"Dallas" ,gender:"male"},
      { id: 3, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco",gender:"female"},
      { id: 4, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male" },
      { id: 5, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" , gender:"male"},
      { id: 6, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male"},
      { id: 7, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female" },
      { id: 8, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco" , gender:"male"},
      { id: 9, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male" },
      { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', about: 'Experienced cardiologist with expertise in treating heart diseases.',location:"US Sillicon valley" ,gender:"female" },
      { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"male" },
      { id: 3, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"male"  },
      { id: 4, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female" },
      { id: 5, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sanfrancisco" ,gender:"male"  },
      { id: 6, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" ,gender:"female" },
      { id: 7, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" ,gender:"female"  },
      { id: 8, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Sillicon valley" ,gender:"male" },
      { id: 9, name: 'Dr. Jane Smith', specialization: 'Pediatrician', about: 'Passionate about children\'s health and well-being.', location:"US Dallas" , gender:"male"  },
      // Add more dummy data as needed
    ];
    setDoctors(dummyDoctorsData);
  }, []);

  useEffect(() => {
    // Apply filters whenever specializationFilter or locationFilter changes
    const filtered = doctors.filter(doctor => {
      const specialization = doctor.specialization || ''
      const location = doctor.location || '';
      const name = doctor.name || '';
      return (
        specialization.toLowerCase().includes(specializationFilter.toLowerCase()) &&
        location.toLowerCase().includes(locationFilter.toLowerCase()) && 
        name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
    setFilteredDoctors(filtered);
  }, [doctors, specializationFilter, locationFilter , nameFilter]);

  // Pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="appointment-container">
    <Navbar />
      <h1 className="doctor-heading">Book Your Doctor Online </h1>
      <div className="filter-container">

        <select
          value={specializationFilter}
          onChange={e => setSpecializationFilter(e.target.value)}
        >
          <option value="">Select specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dentist">Dentist</option>
        </select>


        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by location"

          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
        />
        
      </div>

      <div className="doctor-list">
        {currentDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
          {viewprofileClicked[doctor.id] && <DoctorProfile />}
            <div className="left-section" style={{ display: viewprofileClicked[doctor.id] ? 'none' : 'flex' }}>
              <img src={doctor.gender === 'male' ? male_doctor : female_doctor} alt="Doctor icon" className="profile-pic" style={{ width: '50px', height: '50px' }} />
              <div style={{ paddingLeft: '20px' }}>

                <h2>{doctor.name} </h2>
                <p>Specialization: {doctor.specialization}</p>
                <img src={location} style={{ width: '25px', height: '25px' }} /> {doctor.location}
              </div>
            </div>
            <div className="right-section">

              {!bookAppointmentClicked[doctor.id] && !viewprofileClicked[doctor.id] && <button onClick={() => handleBookAppointmentClick(doctor.id)}>Book Appointment</button>}
              {!bookAppointmentClicked[doctor.id] && !viewprofileClicked[doctor.id] && <button onClick={() => handleviewprofileClickedClick(doctor.id)}>View Profile</button>}

              {bookAppointmentClicked[doctor.id] && <AppointmentManagement />}


              {bookAppointmentClicked[doctor.id] && <button onClick={() => handleBookAppointmentClick(doctor.id)}>Cancel</button>}
              {viewprofileClicked[doctor.id] && <button onClick={() => handleviewprofileClickedClick(doctor.id)}>Close</button>}
            </div>

          </div>
        ))}
      </div>
      <div className="pagination-container">
        {filteredDoctors.length > doctorsPerPage && (
          <div>
          <label>
          Count
          </label>
          <select
            value={doctorsPerPage}
            onChange={e => setdoctorsPerPage(e.target.value)}
          >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
            <button onClick={() => paginate(currentPage + 1)}>Next </button>
            <button onClick={() => paginate(currentPage - 1)}>Previous </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorSearchPage;
