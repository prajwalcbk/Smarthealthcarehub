// AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authIsReady, setAuthIsReady] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check authentication status or retrieve user information here
    const token = sessionStorage.getItem('token');

    if (token) {
      // If token exists, the user is authenticated
      setUser({ name: "prajwal"});
      setAuthIsReady(true);
    } else {
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
