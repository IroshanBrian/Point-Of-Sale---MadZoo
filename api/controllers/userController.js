const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
     const { email, password } = req.body;

     const user = await User.findOne({ email });

     if (user && (await user.matchPassword(password))) {
          res.json({
               _id: user._id,
               name: user.name,
               email: user.email,
               isAdmin: user.isAdmin,
               token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '30d',
               }),
          });
     } else {
          res.status(401);
          throw new Error('Invalid email or password');
     }
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
     const { name, email, password } = req.body;

     const userExists = await User.findOne({ email });

     if (userExists) {
          res.status(400);
          throw new Error('User already exists');
     }

     const user = new User({
          name,
          email,
          password,
     });

     const createdUser = await user.save();

     res.status(201).json({
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          isAdmin: createdUser.isAdmin,
          token: jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET, {
               expiresIn: '30d',
          }),
     });
};

module.exports = {
     authUser,
     registerUser,
};
