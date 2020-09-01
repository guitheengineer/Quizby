const jwt = require('jsonwebtoken');
const { userModel } = require('../../models');
const { catchAsync } = require('../../utils');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

module.exports = catchAsync(async (req, res) => {
  const newUser = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
    token,
  });
});
