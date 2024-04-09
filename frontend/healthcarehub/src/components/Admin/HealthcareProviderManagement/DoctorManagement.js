import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DoctorManagement() {
  const [UsersList, setUsersList] = useState([]);
  const token = localStorage.getItem('token');
  const [successMessage, setSuccessMessage] = useState('');




  useEffect(() => {
    const fetchdata = async () => {
    const response = await axios.get('/api/get/doctors',  {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
    setUsersList(response.data)
  }
  fetchdata();
  }, []);



const handleVerifyUser = async (updateuser) => {
  // Update UsersList immutably
  const response = await axios.get(`/api/verify/user/${updateuser.user_id}`,  {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
  if(updateuser.is_verified){
      setSuccessMessage("User Verification status Changed");
    }
    else{
      setSuccessMessage("User Verified Successfully");
    }
      setTimeout(() => {
            setSuccessMessage('')
          }, 1000); 
 
  const updatedUsersList = UsersList.map(user => {
    if (user.user_id  === updateuser.user_id) {
      
      return { ...user, is_verified: !user.is_verified };
    }
    return user; // Return other users as they are
  });

  setUsersList(updatedUsersList);
};




  return (

      <div className="users-list">
      <h2>Doctors Accounts </h2>
      <div>{successMessage && <p className="success-message">{successMessage}</p>}</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>Specialization</th>
            <th>License Number </th>
            <th>FacilityName</th>
            <th>User Status</th>
          </tr>
        </thead>
        <tbody>
          {UsersList.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.qualification}</td>
                <td>{user.specialization}</td>
                <td>{user.licensenumber}</td>
                <td>{user.facility_name}</td>

                <td>{user.is_verified ? 'Verified' : 'Pending'} </td>
                <td>
                <button onClick={() => handleVerifyUser(user)}>
                  {user.is_verified ? 'ReVerify' : 'Verify'}
                </button>
                   
                </td>

      
                  
                  
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table> 
      </div>

  );
}

export default DoctorManagement;
