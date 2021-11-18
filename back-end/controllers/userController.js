import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';

/*
 * ****************************************************************
 * @desc    Authenticate user & get token
 * @route   POST /api/users/login
 * @access  Public
 * ****************************************************************
 */
const authUser = asyncHandler(async (req, res) => {
  const { account, password } = req.body;
  const user = await User.findOne({ account });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      account: user.account,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid username or password');
  }
});

/*
 * ****************************************************************
 * @desc    Register a new user
 * @route   POST /api/users
 * @access  Public
 * ****************************************************************
 */
const registerUser = asyncHandler(async (req, res) => {
  const { account, password, firstName, lastName, dateOfBirth, gender } =
    req.body;
  const userExists = await User.findOne({ account });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    account,
    password,
    firstName,
    lastName,
    dateOfBirth,
    gender,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      account: user.account,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

/*
 * ****************************************************************
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 * ****************************************************************
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      account: user.account,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { authUser, registerUser, getUserProfile };
