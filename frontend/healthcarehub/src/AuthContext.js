// AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authIsReady, setAuthIsReady] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check authentication status or retrieve user information here
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('role')

    if (token) {
      console.log("Adding auth")
      // If token exists, the user is authenticated
      setUser({ 'role': user});
      setAuthIsReady(true);
    } else {
      console.log("removing auth")
      // If token doesn't exist, the user is not authenticated
      setUser(null);
      setAuthIsReady(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authIsReady, user }}>
      {children}
    </AuthContext.Provider>
  );
};
