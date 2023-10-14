// controllers/userController.js

const userModel = require('../models/userModel');


// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const newUser = await userModel.createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a list of all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
