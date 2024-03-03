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
        { "id": 1, "name": "Prajwal", "CreatedDate": "now", "email": "Rahul@gmail.com", "status": "Verified" , "role":"Doctor" },
        { "id": 3, "name": "Rahul ", "CreatedDate": "now", "email": "prajwal@gmail.com", "status": "Inprogess" ,"role":"Pharmacist"  },
        { "id": 2, "name": "Amith", "CreatedDate": "now", "email": "Rahul@gmail.com", "status": "Verified" , "role":"Pharmacist" },
        { "id": 4, "name": "Kavana", "CreatedDate": "now", "email": "Rahul@gmail.com", "status": "Verifition Failed" ,"role":"Pharmacist"  },
        { "id": 5, "name": "Naveen", "CreatedDate": "now", "email": "prajwal@gmail.com", "status": "Inprogess" ,"role":"Pharmacist"  },
        { "id": 6, "name": "HM", "CreatedDate": "now", "email": "Rahul@gmail.com", "status": "verified" , "role":"Doctor" },
        { "id": 7, "name": "Bantuuu", "CreatedDate": "now", "email": "prajwal@gmail.com", "status": "Verifition Failed"  ,"role":"Pharmacist" },

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
