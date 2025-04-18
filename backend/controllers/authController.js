import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import User from "../models/user.js";

export const getUser = async (req, res, next) => {
  const id = req.userId;

  try {
    const user = await User.findById(id);

    if(!user) {
      throw new Error('User not found');
    }

    return res.status(200).json({
      success: true,
      message: 'User found',
      data: {
        user,
      }
    });
  } catch(err) {
    console.log(err);
    return res.status(404).json({
      success: false,
      error: 'user not found',
    })
  }
}

export const postRegisterUser = async (req, res, next) => {
  try {
    // Check for any validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      throw new Error('Invalid details');
    }

    const { name, email, password } = req.body;

    // Check for existing user
    const existingUser = await User.findByEmail(email);
    if(existingUser) {
      throw new Error('User already exists with this email.');
    }

    // Hash Password
    const hashedPw = await bcrypt.hash(password, 12);

    // Create user and save to database
    const user = new User(name, email, hashedPw);
    await user.save();

    if(!user) {
      throw new Error('Failed to create user');
    }
    
    // Create JWT Token for authenticating user
    const data = User.authenticate(user.email, user._id);

    return res.status(201).json({
      success: true,
      message: 'user created',
      data,
    });
  } catch(err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      error: 'authentication / submission has failed',
    });
  }
}

export const postLoginUser = async (req, res, next) => {  
  try {
    // Check for any validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      throw new Error('Invalid details');
    }

    const { email, password } = req.body;

    // Check User Exists
    const user = await User.findByEmail(email);
    if(!user) {
      throw new Error('User not found.');
    }

    // Check Password is correct
    const isEqual = await bcrypt.compare(password, user.password);
    if(!isEqual) {
      throw new Error('Incorrect password');
    }

    const data = User.authenticate(user.email, user._id);

    return res.status(200).json({
      success: true,
      message: 'User logged in',
      data,
    });

  } catch(err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      error: 'authentication / submission has failed',
    });
  }
}
