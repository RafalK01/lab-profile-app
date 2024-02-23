const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon", "Remote"],
    required: true
  },
  course: {
    type: String,
    enum: ["Web Dev", "UX/UI", "Data Analytics", "Cyber Security"],
    required: true
  },
  image: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

