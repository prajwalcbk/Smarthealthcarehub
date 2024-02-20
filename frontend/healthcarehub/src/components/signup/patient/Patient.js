// DoctorComponent.js
//import React from 'react';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './Patient.css';

function PatientSignup(props) {

  const [dateofbirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [emergencycontactnumber, setEmergencyContactNumber] = useState('');
  const [primarycareprovider, setPrimaryCareProvider] = useState('');
  const [careprovideroptions, setCareProviderOptions] = useState([]);


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
  const fetchPrimaryCareProviders = async (inputValue) => {
    try {
      // Perform API call to fetch primary care providers based on inputValue
      //const response = await fetch(`YOUR_API_ENDPOINT?search=${inputValue}`);
      //const data = await response.json();
      const data= [ {"name":"Prajwal","id":123},{"name":"kenchiiiiii","id":1253},{"name":"ptrajjuuu","id":1243},{"name":"amith","id":12493}]

      // Transform API response data to the format expected by React Select
      const transformedOptions = data.map((provider) => ({
        value: provider.id,
        label: provider.name,
      }));
      setCareProviderOptions(transformedOptions);
    } catch (error) {
      console.error('Error fetching primary care providers:', error);
    }
  };
  useEffect(() => {
    // Fetch doctors from API when the component mounts
    fetchPrimaryCareProviders();
  }, []);

  

    // Function to handle primary care provider selection
  const handlePrimaryCareProviderChange = (selectedOption) => {
    setPrimaryCareProvider(selectedOption.id);
  };

  const handleSubmit = () => {
    if (!isValidDate(dateofbirth)) {
      setError('Please enter a valid date (MM/DD/YYYY).');
      return;
    }
    if (!dateofbirth || !gender ) {
      setError('Please fill out the required fields.');
      return;
    }
    const data= {
    email : props.email ,
    password : props.password ,
    firstname: props.firstname ,
    lastname : props.lastname ,
    phoneNumber : props.phoneNumber,
    dateofbirth: dateofbirth,
    gender: gender,
    emergencycontactnumber: emergencycontactnumber,
    primarycareprovider: primarycareprovider // Replace primaryCareProviderId with the actual provider ID
      }
    console.log(data)
    

      axios.post('http://localhost/register/patients', data)
      .then(response => {
        console.log('Patient data submitted successfully:', response.data);
        // Optionally, reset form fields or perform other actions upon successful submission
      })
      .catch(error => {
        console.error('Error submitting patient data:', error);
        // Handle error appropriately, e.g., display error message to user
      });

  };


  return (
    <div className="container">
      <div className="details-form">
        <h1>User Details</h1>
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
          <label htmlFor="Emergency Contact Number">Emergency Contact Number</label>
          <input
            type="text"
            id="emergencycontactnumber"
            placeholder="+1 408480XXXX"
            value={emergencycontactnumber}
            onChange={e => setEmergencyContactNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="primarycareprovider">Primary Health Care Provider</label>
          <Select
            id="primarycareprovider"
            value={primarycareprovider}
            onChange={handlePrimaryCareProviderChange}
            options={careprovideroptions}
            placeholder="Search or select primary care provider"
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

export default PatientSignup;
