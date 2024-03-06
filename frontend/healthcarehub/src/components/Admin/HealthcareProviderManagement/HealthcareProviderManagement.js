import React, { useState, useEffect } from 'react';
import './HealthcareProviderManagement.css';

function HealthcareProviderManagement() {
  const [UsersList, setUsersList] = useState([]);

  // Fetch user  data from an external source (e.g., API)
  useEffect(() => {
    const fetchUsers = async () => {
      // Simulated response from API
      const usersResponse = [
  { "id": 2, "name": "Samantha", "CreatedDate": "2024-03-06T09:30:00Z", "email": "samantha@example.com", "status": "Verified", "role": "Doctor", "qualification": "MD", "specialization": "Neurology", "licensenumber": "456ghy67" },
  { "id": 3, "name": "Michael", "CreatedDate": "2024-03-05T15:45:00Z", "email": "michael@example.com", "status": "Pending", "role": "Nurse", "qualification": "RN", "specialization": "Pediatrics", "licensenumber": "789zxc12" },
  { "id": 4, "name": "Emily", "CreatedDate": "2024-03-04T14:20:00Z", "email": "emily@example.com", "status": "Verified", "role": "Doctor", "qualification": "MBBS", "specialization": "Dermatology", "licensenumber": "abc456d" },
  { "id": 5, "name": "David", "CreatedDate": "2024-03-03T10:00:00Z", "email": "david@example.com", "status": "Pending", "role": "Doctor", "qualification": "MD", "specialization": "Orthopedics", "licensenumber": "xyz789e" }
]
;
      setUsersList(usersResponse);
    };

    fetchUsers();
  }, []);

const handleVerifyUser = (userId) => {
  // Update UsersList immutably
  const updatedUsersList = UsersList.map(user => {
    if (user.id === userId) {
      // Return a new object with isActive toggled
      
      return { ...user, isActive: !user.isActive };
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
            <th>Role</th>
            <th>Qualification</th>
            <th>Specialization</th>
            <th>License Number </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {UsersList.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.qualification}</td>
                <td>{user.specialization}</td>
                <td>{user.licensenumber}</td>
                <td>{user.status}</td>
                <td>
                {( user.status!="Verified")  && <button onClick={() => handleVerifyUser(user.id)}> Verify </button>}
                   
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
