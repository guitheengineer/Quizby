import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../models';
import { catchAsync } from '../../utils';
import { AppError } from '../../utils';
const { verify } = jwt;

export default catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = '';
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(new AppError('Please, login to get access first', 401));
    }

    const decoded: any = verify(token, process.env.JWT_SECRET || '');

    const decodedUser = await userModel.findById(decoded.id);
    if (!decodedUser) {
      return next(new AppError("User doesn't exists", 401));
    }

    if (decodedUser.changedPasswordAfter!(decoded.iat)) {
      return next(new AppError('User changed password.', 401));
    }
    res.status(200).json({
      status: 'success',
      user: decodedUser,
    });
    return next();
  }
);
