const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()


const User = require('../Models/userSchema');

router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
      
    }
    catch (error) {
        res.json({error: 'An error has been caught - get'})
    }
  })
  

  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      if (username && password) {
        const user = await User.findOne({ username, password });
        if (!user) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
       const token  = jwt.sign({userId:user._id}, process.env.SECRET_CODE,{expiresIn:'1h'})
       console.log(token)
        res.status(200).json({ message: 'Login successful', user, token });
      } 
      
      else {
        res.status(200).json({ message: 'Logout successful' });
      }
    } 
    
    catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  


router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
  module.exports = router