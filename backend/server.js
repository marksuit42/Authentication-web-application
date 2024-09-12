const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const cors = require('cors');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.error('MongoDB connection error:', error));

// Basic route
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type' , 'Authorization']
  }));

app.use(express.json()); // This middleware is essential for parsing JSON

app.use('/api/auth', authRoutes);


app.post('/register', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Create a new user
      const newUser = new User({
        email,
        password,
      });
  
      // Save the user to the database
      await newUser.save();
      res.status(201).send('User created successfully');
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating user');
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
