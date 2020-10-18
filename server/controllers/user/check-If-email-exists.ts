import { userModel } from '../../models';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

export default catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const emailExists = await userModel.exists({ email });
    res.status(400).json({
      emailExists,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
});
