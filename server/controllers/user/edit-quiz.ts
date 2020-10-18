import { quizModel, userModel } from '../../models';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

export default catchAsync(async (req: Request, res: Response) => {
  const quizData = req.body;
  const { id, quizId } = quizData;
  console.log(quizData);
  const updatedQuiz = await quizModel.findByIdAndUpdate(quizId, quizData, {
    new: true,
  });
  const userUpdatedQuiz = await userModel.findOneAndUpdate(
    { _id: id, 'quizzesCreated._id': quizId },
    {
      'quizzesCreated.$': quizData,
    },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    updatedQuiz,
    userUpdatedQuiz,
  });
});
