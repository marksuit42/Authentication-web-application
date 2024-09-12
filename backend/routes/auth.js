const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/auth'); // Import the JWT verification middleware
//const verifyToken = require('./middleware/authMiddleware');

// Public route: user login
router.post('/login', authController.login);

// Protected route: user profile
router.get('/home', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Welcome to the Home Page', user: req.user });
  });

  router.get('/validate-token', verifyToken, (req, res) => {
    // If the token is valid, middleware will pass, and this will be returned
    res.status(200).json({ valid: true, user: req.user });
  });

module.exports = router;
