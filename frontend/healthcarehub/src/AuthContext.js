// AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [authIsReady, setAuthIsReady] = useState(null);
  const [user, setUser] = useState(null);


  useEffect(() => {

    const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    //window.location.reload();
    

  };
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('/api/get/user', {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });

          if (response.status === 200) {
            localStorage.setItem('name', response.data.user.firstname); 
            localStorage.setItem('role', response.data.user.role); 
            setUser({ role: response.data.user.role , name: response.data.user.firstname  });
            setAuthIsReady(true);
          }
        } 
        else {
          handleLogout();
          setUser(null);
          setAuthIsReady(false);
        }
      } catch (error) {
            handleLogout();
            setUser(null);
            setAuthIsReady(false);
            console.error('Error fetching user data:', error);
        // Handle errors here, e.g., set state accordingly
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ authIsReady, user }}>
      {children}
    </AuthContext.Provider>
  );
};
