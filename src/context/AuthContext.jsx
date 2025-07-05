import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    try {
      const savedUser = localStorage.getItem('pharmastore-user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
      localStorage.removeItem('pharmastore-user');
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('pharmastore-user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('pharmastore-user');
      // Clear user's cart from localStorage
      if (user) {
        localStorage.removeItem(`pharmastore-cart-${user.id}`);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const signup = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('pharmastore-user', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  };

  const value = {
    user,
    login,
    logout,
    signup,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};