// Function to get the users collection

const { ObjectId } = require('mongodb');

const client = require('../db');

function getUsersCollection() {
    return client.db().collection('users');
  }
  
  // Create a new user
async function createUser(user) {
    const usersCollection = getUsersCollection();
    const result = await usersCollection.insertOne(user);
    return result.ops[0];
  }
  
  // Get all users
async function getAllUsers() {
    const usersCollection = getUsersCollection();
    const users = await usersCollection.find().toArray();
    return users;
  }
  
  module.exports = {
    createUser,
    getAllUsers,
  };