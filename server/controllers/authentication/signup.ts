import jwt from 'jsonwebtoken';
import { userModel } from '../../models';
import { catchAsync } from '../../utils';
import { Request, Response } from 'express';
import { UserOptional } from '../../types';
const { sign } = jwt;

const signToken = (id: string) =>
  sign({ id }, process.env.JWT_SECRET || '', {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

export default catchAsync(async (req: Request, res: Response) => {
  const { username, email, password }: UserOptional = req.body;
  const newUser = await userModel.create({
    username,
    email,
    password,
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
