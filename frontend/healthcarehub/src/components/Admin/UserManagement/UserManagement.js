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
        { "id": 1, "name": "Prajwal", "CreatedDate": "now", "email": "Rahul@gmail.com", "isActive": true },
        { "id": 3, "name": "Rahul ", "CreatedDate": "now", "email": "prajwal@gmail.com", "isActive": true },
        { "id": 2, "name": "Amith", "CreatedDate": "now", "email": "Rahul@gmail.com", "isActive": true },
        { "id": 4, "name": "Kavana", "CreatedDate": "now", "email": "Rahul@gmail.com", "isActive": false },
        { "id": 5, "name": "Naveen", "CreatedDate": "now", "email": "prajwal@gmail.com", "isActive": false },
        { "id": 6, "name": "HM", "CreatedDate": "now", "email": "Rahul@gmail.com", "isActive": false },
        { "id": 7, "name": "Bantuuu", "CreatedDate": "now", "email": "prajwal@gmail.com", "isActive": true },

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
