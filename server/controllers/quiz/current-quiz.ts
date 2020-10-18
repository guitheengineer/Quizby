import { quizModel } from '../../models';
import catchAsync from '../../utils/catchAsync';
import { Request, Response } from 'express';

export default catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const quiz = await quizModel.findById(id);
  res.status(200).json({
    status: 'success',
    quiz,
  });
});
