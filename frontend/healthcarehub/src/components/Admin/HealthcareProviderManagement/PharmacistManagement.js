import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PharmacistManagement() {
  const [UsersList, setUsersList] = useState([]);
  const token = localStorage.getItem('token');
  const [successMessage, setSuccessMessage] = useState('');




  useEffect(() => {
    const fetchdata = async () => {
    const response = await axios.get('/api/get/pharmacists',  {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
    setUsersList(response.data)
  }
  fetchdata();
  }, []);



const handleVerifyUser = async (userId) => {
  // Update UsersList immutably
  const response = await axios.get(`/api/verify/user/${userId}`,  {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
  const updatedUsersList = UsersList.map(user => {
    if (user.user_id  === userId) {
      
      return { ...user, is_verified: !user.is_verified };
    }
    return user; // Return other users as they are
  });

  setUsersList(updatedUsersList);
};




  return (

      <div className="users-list">
      <h2>Pharmacist Accounts </h2>
      <div>{successMessage && <p className="success-message">{successMessage}</p>}</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Qualification</th>
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
                <td>{user.licensenumber}</td>
                <td>{user.facility_name}</td>

                <td>{user.is_verified ? 'Verified' : 'Pending'} </td>
                <td>
                <button onClick={() => handleVerifyUser(user.user_id)}>
                  {user.is_active ? 'ReVerify' : 'Verify'}
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

export default PharmacistManagement;
