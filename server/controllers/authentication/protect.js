const jwt = require('jsonwebtoken');
const { userModel } = require('../../models');
const { catchAsync } = require('../../utils');
const { AppError } = require('../../utils');

module.exports = catchAsync(async (req, res, next) => {
  let token = '';
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('Please, login to get access first', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET || '');

  const decodedUser = await userModel.findById(decoded.id);
  if (!decodedUser) {
    return next(new AppError("User doesn't exists", 401));
  }

  if (decodedUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('User changed password', 401));
  }
  return next();
});
