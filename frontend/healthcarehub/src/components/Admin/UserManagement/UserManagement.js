import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserManagement.css';

function UserManagement() {
  const [UsersList, setUsersList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);


    useEffect(() => {
    const fetchdata = async () => {
    const response = await axios.get('/api/get/users', { withCredentials: true });
    setUsersList(response.data)
  }
  fetchdata();
  }, []);


const handleDeactivateUser = async (userId) => {
  // Update UsersList immutably
  const response = await axios.get(`/api/activate/user/${userId}`, { withCredentials: true });
  const updatedUsersList = UsersList.map(user => {
    if (user.id === userId) {
      // Return a new object with isActive toggled
      return { ...user, is_active: !user.is_active };
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
            <th>Role</th>
            <th>Status</th>
            <th>CreatedDate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {UsersList.map((user) => (
            <React.Fragment key={user.id}>
              <tr>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.is_active ? 'Active' : 'Inactive'}</td>
                <td>{user.created_at ? new Date(user.created_at).toISOString().split('T')[0] : "Invalid Date"}</td>
                <td>
                  
                  <button onClick={() => handleDeactivateUser(user.id)}>
                  {user.is_active ? 'Deactivate' : 'Activate'}
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
