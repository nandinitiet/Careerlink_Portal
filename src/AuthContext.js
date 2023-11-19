import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (formData) => {
    const roles = [];
    formData.getAll('student') && roles.push('student');
    formData.getAll('admin') && roles.push('admin');

    const email = formData.get('email');
    const password = formData.get('password');

    try {
      // Replace this with your actual authentication logic
      // Ensure your authentication API can handle roles during login
      // Example: const response = await authService.login(email, password, roles);
      // ...

      // Mocked response for testing
      const response = { data: { role: roles[0] || 'student' } };

      const userData = response.data;
      const userRole = userData.role || roles[0];

      setIsAdmin(userRole === 'admin');
      setLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setIsAdmin(false);
    setLoggedIn(false);
    // Add any additional logout logic here
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loggedIn, login, logout }}>
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
