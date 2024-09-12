const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Define User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: (password) => /^[a-zA-Z0-9]+$/.test(password),
      message: 'Password must be alphanumeric and at least 6 characters long',
    },
  },
}, { timestamps: true });

// Hash the password before saving
userSchema.pre('save', async function(next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Create User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
