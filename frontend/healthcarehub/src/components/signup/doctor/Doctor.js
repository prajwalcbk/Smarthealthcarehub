// DoctorComponent.js
//import React from 'react';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Doctor.css';

function Doctor(props) {

  const [dateofbirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification]= useState('');
  const [specialization, setSpecialization] = useState('');
  const [licensenumber, setLicenseNumber] = useState();

  const [healthfacilityname, setHealthFacilityName] = useState('');
  const [healthfacilitynameoptions, setHealthFacilityNameOptions] = useState([]);
  
  const [about, setAbout] = useState('');
  

  const [error, setError] = useState(null);

  function isValidDate(dateString) {
  // Check if the input string matches the expected date format (MM/DD/YYYY)
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(dateString)) {
    return false;
  }

  // Check if the date is a valid date
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[1], 10);
  const month = parseInt(dateParts[0], 10) - 1; // Month is 0-based in JavaScript Date object
  const year = parseInt(dateParts[2], 10);
  const date = new Date(year, month, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}


  // Function to fetch primary care provider options from API
  const fetchHealthFacilityName = async (inputValue) => {
    try {
      // Perform API call to fetch primary care providers based on inputValue
      //const response = await fetch(`YOUR_API_ENDPOINT?search=${inputValue}`);
      //const data = await response.json();
      const data= [ {"name":"Prajwal","id":123},{"name":"kenchiiiiii","id":1203},{"name":"ptrajjuuu","id":1243},{"name":"amith","id":12493}]

      // Transform API response data to the format expected by React Select
      const transformedOptions = data.map((provider) => ({
        value: provider.id,
        label: provider.name,
      }));
      setHealthFacilityNameOptions(transformedOptions);
    } catch (error) {
      console.error('Error fetching primary care providers:', error);
    }
  };
  useEffect(() => {
    // Fetch doctors from API when the component mounts
    fetchHealthFacilityName();
  }, []);


    // Function to handle primary care provider selection
  const handleHealthFacilityChange = (selectedOption) => {
    setHealthFacilityName(selectedOption);
  };

  const handleSubmit = () => {
    if (!isValidDate(dateofbirth)) {
      setError('Please enter a valid date (MM/DD/YYYY).');
      return;
    }
    if (!dateofbirth || !gender || !qualification || !specialization || !licensenumber || !about || !healthfacilityname) {
      setError('Please fill out the required fields.');
      return;
    }

  };


  return (
    <div className="container">
      <div className="details-form">
        <h1>Doctor Details</h1>
        <div>{error && <p className="error-message">{error}</p>}</div>
        
        <div className="form-group">
          <label htmlFor="dateofbirth">Date of Birth *</label>
          <input
            type="text"
            id="dateofbirth"
            placeholder="MM/DD/YYYY"
            value={dateofbirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className={!isValidDate(dateofbirth) ? 'invalid' : ''}
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <select
            id="gender"
            value={gender}
            onChange={e => setGender(e.target.value)}
            >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        
        <div className="form-group">
          <label htmlFor="Qualification">Qualification *</label>
          <input
            type="text"
            id="qualification"
            placeholder="MBBS MD Masters"
            value={qualification}
            onChange={e => setQualification(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Specialization">Specialization *</label>
          <input
            type="text"
            id="specialization"
            placeholder="Cardiologist"
            value={specialization}
            onChange={e => setSpecialization(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="License Number">License Number *</label>
          <input
            type="text"
            id="licensenumber"
            placeholder="XXXXXXXXX"
            value={licensenumber}
            onChange={e => setLicenseNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="about">About *</label>
          <textarea
            id="about"
            value={about}
            onChange={e => setAbout(e.target.value)}
            placeholder="Explain YourSelf in few sentences..."
            rows={4} // Set the number of visible rows
          />
        </div>

        <div className="form-group">
          <label htmlFor="healthfacilityname">Health Facility Name *</label>
          <Select
            id="healthfacilityname"
            value={healthfacilityname}
            onChange={handleHealthFacilityChange}
            options={healthfacilitynameoptions}
            placeholder="Search or select Health Facility"
            isSearchable
          />
        </div>



        <button onClick={handleSubmit}>Submit</button>
        <div className="form-links">
          <span>Already have an account? </span>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
