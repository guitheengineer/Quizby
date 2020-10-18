import { Request, Response } from 'express';
import { quizModel } from '../../models';
import { catchAsync } from '../../utils';
export default catchAsync(async (_req: Request, res: Response) => {
  const mostPlayed = await quizModel.find().sort({ timesPlayed: -1 }).limit(5);
  const recommended = mostPlayed.pop();
  res.status(200).json({
    status: 'success',
    mostPlayed,
    recommended,
  });
});
