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
      
      // Transfer guest cart to user cart if exists
      const guestCart = localStorage.getItem('pharmastore-cart-guest');
      if (guestCart) {
        const userCartKey = `pharmastore-cart-${userData.id}`;
        const existingUserCart = localStorage.getItem(userCartKey);
        
        if (!existingUserCart) {
          // If user has no existing cart, transfer guest cart
          localStorage.setItem(userCartKey, guestCart);
        } else {
          // If user has existing cart, merge with guest cart
          try {
            const guestItems = JSON.parse(guestCart);
            const userItems = JSON.parse(existingUserCart);
            
            // Simple merge - add guest items that don't exist in user cart
            const mergedItems = [...userItems];
            guestItems.forEach(guestItem => {
              const existingItem = mergedItems.find(item => item.id === guestItem.id);
              if (!existingItem) {
                mergedItems.push(guestItem);
              } else {
                // Increase quantity if item already exists
                existingItem.quantity += guestItem.quantity;
              }
            });
            
            localStorage.setItem(userCartKey, JSON.stringify(mergedItems));
          } catch (error) {
            console.error('Error merging carts:', error);
          }
        }
        
        // Remove guest cart
        localStorage.removeItem('pharmastore-cart-guest');
      }
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  };

  const logout = () => {
    try {
      // Transfer user cart to guest cart
      if (user) {
        const userCart = localStorage.getItem(`pharmastore-cart-${user.id}`);
        if (userCart) {
          localStorage.setItem('pharmastore-cart-guest', userCart);
        }
        localStorage.removeItem(`pharmastore-cart-${user.id}`);
      }
      
      setUser(null);
      localStorage.removeItem('pharmastore-user');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const signup = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('pharmastore-user', JSON.stringify(userData));
      
      // Transfer guest cart to user cart if exists
      const guestCart = localStorage.getItem('pharmastore-cart-guest');
      if (guestCart) {
        const userCartKey = `pharmastore-cart-${userData.id}`;
        localStorage.setItem(userCartKey, guestCart);
        localStorage.removeItem('pharmastore-cart-guest');
      }
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