import React, { createContext, useState, useContext } from 'react';

const ContextAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ContextAuth.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </ContextAuth.Provider>
  );
};

export const useAuth = () => useContext(ContextAuth);