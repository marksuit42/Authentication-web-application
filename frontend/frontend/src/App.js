// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import AppRoutes from './routes'; // Assuming you have a routes file
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <AppRoutes />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
