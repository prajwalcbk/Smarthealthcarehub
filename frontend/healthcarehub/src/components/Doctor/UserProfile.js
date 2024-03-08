import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import Select from 'react-select';

function UserProfileData() {
  const [UserProfile, setUserProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserProfile, seteditedUserProfile] = useState({});
  const [healthfacilitynameoptions, setHealthFacilityNameOptions] = useState([]);
  const [healthfacilityname, setHealthFacilityName] = useState('David');



  const fetchUserProfile = async () => {
    try {
      // Replace the URL with your actual API endpoint
      const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // const sampleUser = { "id": 2, "name": "Samantha", "CreatedDate": "2024-03-06T09:30:00Z", "email": "samantha@example.com", "status": "Verified", "role": "Doctor", "qualification": "MD", "specialization": "Neurology", "licensenumber": "456ghy67" };
      const sampleUser = {
        "id": 2,
        email: 'example@gmail.com',
        firstname: 'David',
        lastname: 'John',
        qualification: "MD", 
        dateofbirth:"11/02/2000",
        specialization: "Neurology", 
        licensenumber: "456ghy67",
        phoneNumber: '+1 4084805932',
        emergencycontactnumber: '+1 4084805456',
        gender: "male",
        healthfacilityname:"David",
        about: "Dr. David John is a board-certified neurologist with extensive experience in diagnosing and treating neurological disorders. He is dedicated to providing compassionate care and personalized treatment plans to his patients."
      };
      const data=sampleUser;
      console.log(data.healthfacilityname)
      setHealthFacilityName(data.healthfacilityname);
      setUserProfile(data);
      seteditedUserProfile(data); // Set initial values for editable fields
    } catch (error) {
      console.error('Error fetching UserProfile records:', error);
    }
  };


  // Function to fetch primary care provider options from API
  const fetchHealthFacilityName = async (inputValue) => {
    try {
      // Perform API call to fetch primary care providers based on inputValue
      //const response = await fetch(`YOUR_API_ENDPOINT?search=${inputValue}`);
      //const data = await response.json();
      const data= [ {"name":"John","id":123},{"name":"David","id":1203},{"name":"Frank","id":1243},{"name":"Joe","id":12439}]

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
    fetchHealthFacilityName();
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

      // Function to handle primary care provider selection
  const handleHealthFacilityChange = (selectedOption) => {
    setHealthFacilityName(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data or make API call to update health records
    // After successful update, setEditMode to false
    setEditMode(false);
    // Here, you can use editedUserProfile to update the health records
    console.log('Edited UserProfile records:', editedUserProfile);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    seteditedUserProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="user-profile">
      <h2>User Details</h2>
      {UserProfile ? (
        <div>
          <form method="POST">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={editMode ? editedUserProfile.email : UserProfile.email}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>

            <div className="input-row">

            <div>
              <label htmlFor="firstname">FirstName:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={editMode ? editedUserProfile.firstname : UserProfile.firstname}
                onChange={handleInputChange}
                disabled={!editMode}
              />
              </div>

              <div className="form-group">
              <label htmlFor="lastname">LastName:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={editMode ? editedUserProfile.lastname : UserProfile.lastname}
                onChange={handleInputChange}
                disabled={!editMode}
              />
              </div>
            </div>


          <div className="input-row">  
            
            <div>
              <label htmlFor="dateofbirth">Date of Birth: </label>
              <input
                type="text"
                id="dateofbirth"
                name="dateofbirth"
                value={editMode ? editedUserProfile.dateofbirth : UserProfile.dateofbirth}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>

            <div>
              <label htmlFor="gender">Gender: </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={editMode ? editedUserProfile.gender : UserProfile.gender}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>
          </div>

          <div className="input-row">  
            
            <div>
              <label htmlFor="qualification">Qualification: </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={editMode ? editedUserProfile.qualification : UserProfile.qualification}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>

            <div>
              <label htmlFor="specialization">Specialization: </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={editMode ? editedUserProfile.specialization : UserProfile.specialization}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>
          </div>

          <div>
              <label htmlFor="licensenumber">License Number: </label>
              <input
                type="text"
                id="licensenumber"
                name="licensenumber"
                value={editMode ? editedUserProfile.licensenumber : UserProfile.licensenumber}
                onChange={handleInputChange}
                disabled={!editMode}
              />
          </div>

          <div>
          <label htmlFor="about">About *</label>
            <textarea
            id="about"
            name="about"
            value={editMode ? editedUserProfile.about : UserProfile.about}
            onChange={handleInputChange}
            disabled={!editMode}
            rows={6} 
          />
          </div>


        <div>
          <label htmlFor="healthfacilityname">Health Facility Name *</label>
          <Select
            id="healthfacilityname"
            value={healthfacilityname}
            onChange={handleHealthFacilityChange}
            options={healthfacilitynameoptions}
            style={{ "height": "0px"}}
            isSearchable
          />
        </div>



            {editMode && <button onClick={handleCancel}>Cancel</button>}
            {editMode && <button type="submit" onClick={handleSubmit}>Save</button>}
          </form>
          
          {!editMode && <button onClick={handleEdit}>Edit</button>}
        </div>
      ) : (
        <p>Loading  UserProfile Data...</p>
      )}
    </div>
  );
}

export default UserProfileData;
