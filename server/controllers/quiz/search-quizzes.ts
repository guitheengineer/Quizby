import { Request, Response } from 'express';
import { quizModel } from '../../models';
import catchAsync from '../../utils/catchAsync';

export default catchAsync(async (req: Request, res: Response) => {
  if (req.query.q) {
    const name = req.query.q.toString().toLowerCase();

    const query = {
      name: new RegExp(name, 'i'),
    };

    const quizzesSearchedData = await quizModel.find(query).limit(8);
    res.status(200).json({
      status: 'success',
      quizzesSearchedData,
    });
  }
});
