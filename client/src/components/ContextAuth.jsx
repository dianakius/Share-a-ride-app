import React, { createContext, useState, useContext, useEffect } from 'react';

const ContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <ContextAuth.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </ContextAuth.Provider>
  );
};

export const useAuth = () => useContext(ContextAuth);