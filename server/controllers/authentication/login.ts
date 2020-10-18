import jwt from 'jsonwebtoken';
import { userModel } from '../../models';
import { catchAsync } from '../../utils';
import { Request, Response, NextFunction } from 'express';

const { sign } = jwt;

const signToken = (id: string) =>
  sign({ id }, process.env.JWT_SECRET || '', {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

export default catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password }: { email: string; password: string } = req.body;
    if (!email || !password) {
      res.status(500).json({
        status: 'error',
        message: "Email or password doesn't exists",
      });
      next();
    }

    const user = await userModel.findOne({ email }).select('+password');

    if (!user || !user.correctPassword!(password, user.password || '')) {
      res.status(500).json({
        status: 'error',
        message: "User doesn't exists or incorrect password",
      });
      return next();
    }
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      message: 'Successful login',
      token,
      user,
    });
    return next();
  }
);
