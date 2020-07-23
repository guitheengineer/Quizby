const jwt = require('jsonwebtoken');
const { userModel } = require('../../models');
const { catchAsync } = require('../../utils');

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500).json({
      status: 'error',
      message: "Email or password doesn't exists",
    });
    next();
  }

  const user = await userModel.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(500).json({
      status: 'error',
      message: "User doesn't exists or incorrect password",
    });
    next();
  }
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    message: 'Successful login',
    token,
  });
  next();
});
