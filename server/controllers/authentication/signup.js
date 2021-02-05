const jwt = require('jsonwebtoken');
const { userModel } = require('../../models');
const { catchAsync } = require('../../utils');

const { sign } = jwt;

const signToken = (id) =>
  sign({ id }, process.env.JWT_SECRET || '', {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

module.exports = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await userModel.create({
    username,
    email,
    password,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    response: {
      user: newUser,
      token,
    },
  });
});
