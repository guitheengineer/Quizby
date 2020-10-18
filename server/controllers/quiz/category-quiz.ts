import { quizModel } from '../../models';
import catchAsync from '../../utils/catchAsync';
import { Request, Response } from 'express';

export default catchAsync(async (req: Request, res: Response) => {
  const { category } = req.params;
  const categoryQuizzes = await quizModel.find({ category }).limit(8);
  res.status(200).json(categoryQuizzes);
});
