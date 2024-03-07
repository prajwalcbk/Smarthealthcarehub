import React, { useState, useEffect } from 'react';
import './HealthcareProviderManagement.css';

function HealthcareProviderManagement() {
  const [UsersList, setPrescriptionList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);

  // Fetch user  data from an external source (e.g., API)
  useEffect(() => {
    const fetchUsers = async () => {
      // Simulated response from API
      const usersResponse = [
        { "id": 1, "name": "John Doe", "CreatedDate": "2024-03-07T10:00:00", "email": "johndoe@example.com", "status": "Verified", "role": "Doctor" },
        { "id": 2, "name": "Jane Smith", "CreatedDate": "2024-03-07T11:30:00", "email": "janesmith@example.com", "status": "InProgress", "role": "Pharmacist" },
        { "id": 3, "name": "Alice Johnson", "CreatedDate": "2024-03-07T09:15:00", "email": "alicejohnson@example.com", "status": "Verified", "role": "Pharmacist" },
        { "id": 4, "name": "Bob Brown", "CreatedDate": "2024-03-07T13:45:00", "email": "bobbrown@example.com", "status": "Verification Failed", "role": "Pharmacist" },
        { "id": 5, "name": "Emily Davis", "CreatedDate": "2024-03-07T08:00:00", "email": "emilydavis@example.com", "status": "InProgress", "role": "Pharmacist" },
        { "id": 6, "name": "Michael Wilson", "CreatedDate": "2024-03-07T14:20:00", "email": "michaelwilson@example.com", "status": "Verified", "role": "Doctor" },
        { "id": 7, "name": "Sarah Lee", "CreatedDate": "2024-03-07T12:10:00", "email": "sarahlee@example.com", "status": "Verification Failed", "role": "Pharmacist" }
    ];
      setPrescriptionList(usersResponse);
    };

    fetchUsers();
  }, []);

  const handleDeactivateUser = async (userId) => {
  // Implement logic to send request to your API endpoint for deactivation/activation
  
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
            <th>CreatedDate</th>
             <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {UsersList.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.CreatedDate}</td>
                <td>{user.status}</td>
                <td>
                   <button onClick={() => handleDeactivateUser(user.id)}> View</button>
                  
                  
                
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
