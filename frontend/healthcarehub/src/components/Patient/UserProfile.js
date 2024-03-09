import React, { useState, useEffect } from 'react';
// import './UserProfile.css'

function UserProfileData() {
  const [UserProfile, setUserProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserProfile, seteditedUserProfile] = useState({});

  const fetchUserProfile = async () => {
    try {
      // Replace the URL with your actual API endpoint
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      const sampleUser = {
        email: 'example@gmail.com',
        firstname: 'John',
        lastname: 'Smith',
        phoneNumber: '+1 4084805932',
        emergencycontactnumber: '+1 4084805456',
        dateofbirth: "11/02/2000",
        gender: "male",
        primarycareprovider:"Dr Jon Alert"
      };
      const data=sampleUser;
      setUserProfile(data);
      seteditedUserProfile(data); // Set initial values for editable fields
    } catch (error) {
      console.error('Error fetching UserProfile records:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
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
              <label htmlFor="email">User Email:</label>
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
              <label htmlFor="phoneNumber">Phone Number :</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={editMode ? editedUserProfile.phoneNumber : UserProfile.phoneNumber}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>
            <div>
              <label htmlFor="emergencycontactnumber">Emergency Contact Number: </label>
              <input
                type="text"
                id="emergencycontactnumber"
                name="emergencycontactnumber"
                value={editMode ? editedUserProfile.emergencycontactnumber : UserProfile.emergencycontactnumber}
                onChange={handleInputChange}
                disabled={!editMode}
              />
            </div>
          </div>


            <div>
              <label htmlFor="primarycareprovider">Primary Care Provider:</label>
              <input
                type="text"
                id="primarycareprovideri"
                name="primarycareprovider"
                value={editMode ? editedUserProfile.primarycareprovider : UserProfile.primarycareprovider}
                onChange={handleInputChange}
                disabled={!editMode}
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
