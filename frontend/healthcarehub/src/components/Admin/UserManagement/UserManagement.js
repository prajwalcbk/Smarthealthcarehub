import React, { useState, useEffect } from 'react';
import './UserManagement.css';

function UserManagement() {
  const [UsersList, setUsersList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);

  // Fetch user  data from an external source (e.g., API)
  useEffect(() => {
    const fetchUSers = async () => {
      // Simulated response from API
      const usersResponse = [
         { "id": 1, "name": "John Doe", "CreatedDate": "2024-03-07T10:00:00", "email": "johndoe@example.com", "isActive": true },
        { "id": 2, "name": "Jane Smith", "CreatedDate": "2024-03-07T11:30:00", "email": "janesmith@example.com", "isActive": true },
        { "id": 3, "name": "Alice Johnson", "CreatedDate": "2024-03-07T09:15:00", "email": "alicejohnson@example.com", "isActive": true },
        { "id": 4, "name": "Bob Brown", "CreatedDate": "2024-03-07T13:45:00", "email": "bobbrown@example.com", "isActive": false },
        { "id": 5, "name": "Emily Davis", "CreatedDate": "2024-03-07T08:00:00", "email": "emilydavis@example.com", "isActive": false },
        { "id": 6, "name": "Michael Wilson", "CreatedDate": "2024-03-07T14:20:00", "email": "michaelwilson@example.com", "isActive": false },
        { "id": 7, "name": "Sarah Lee", "CreatedDate": "2024-03-07T12:10:00", "email": "sarahlee@example.com", "isActive": true }
    ];
      setUsersList(usersResponse);
    };

    fetchUSers();
  }, []);

const handleDeactivateUser = (userId) => {
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
      <h2>User Accounts </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>CreatedDate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {UsersList.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                <td>{user.CreatedDate}</td>
                <td>
                  
                  <button onClick={() => handleDeactivateUser(user.id)}>
                  {user.isActive ? 'Deactivate' : 'Activate'}
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

export default UserManagement;
