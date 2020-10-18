import { userModel } from '../../models';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

export default catchAsync(async (req: Request, res: Response) => {
  try {
    const userExists = await userModel.exists({ username: req.body.username });
    return res.status(200).json({
      userExists,
    });
  } catch (err) {
    return res.status(500).json({
      err,
    });
  }
});
