import { userModel, quizModel } from '../../models';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

export default catchAsync(async (req: Request, res: Response) => {
  const username = req.params;
  const { quizId } = req.body;
  await userModel.updateOne(username, {
    $pull: { quizzesCreated: { _id: quizId } },
  });
  const quizDeleted = await quizModel.findByIdAndDelete(quizId);
  res.status(200).json({
    status: 'success',
    quizDeleted,
  });
});
