import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HealthcareProviderManagement() {
  const [UsersList, setUsersList] = useState([]);




  useEffect(() => {
    const fetchdata = async () => {
    const response = await axios.get('/api/get/doctors', { withCredentials: true });
    setUsersList(response.data)
  }
  fetchdata();
  }, []);



const handleVerifyUser = async (userId) => {
  // Update UsersList immutably
  const response = await axios.get(`/api/verify/user/${userId}`, { withCredentials: true });
  const updatedUsersList = UsersList.map(user => {
    if (user.user_id  === userId) {
      
      return { ...user, is_verified: !user.is_verified };
    }
    return user; // Return other users as they are
  });

  // Update state with the new array
  setUsersList(updatedUsersList);
};




  return (

      <div className="users-list">
      <h2>Healthcare Provider Accounts </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>Specialization</th>
            <th>License Number </th>
            <th>FacilityName</th>
            <th>Status</th>
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
                <td>{user.healthfacilityname}</td>

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

export default HealthcareProviderManagement;
