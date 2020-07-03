const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { promisify } = require("util");
const Resp = require("../utils/commonResponse");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newUser = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const token = signToken(newUser._id);

  Resp(res, 201, null, "success", null, token, { user: newUser });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500).json({
      status: "error",
      message: "Email or password doesn't exists",
    });
    next();
  }

  const user = await userModel.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    res.status(500).json({
      status: "error",
      message: "User doesn't exists or incorrect password",
    });
    next();
  }
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "Successful login",
    token,
  });
  next();
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Please, login to get access first", 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const decodedUser = await userModel.findById(decoded.id);

  if (!decodedUser) {
    return next(new AppError("User doesnt exists", 401));
  }

  if (decodedUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError("User changed password.", 401));
  }
  req.user = decodedUser;
  next();
});
