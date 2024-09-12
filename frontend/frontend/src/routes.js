// AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignInForm from './components/SignInForm'; // SignIn component
import SignupForm from './components/SignupForm';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/about" element={<About />} />  {/* Public route */}
      <Route path="/contact" element={<Contact />} />  {/* Public route */}
      
      <Route path="/signup" element={<SignupForm />} />  {/* Public route */}
      <Route path="/" element={<SignInForm />} />  {/* Public route */}
      
      {/* Protect this route */}
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
