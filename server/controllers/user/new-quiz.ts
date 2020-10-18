import { userModel, quizModel } from '../../models';
import { Request, Response } from 'express';
import AppError from '../../utils/AppError';
import catchAsync from '../../utils/catchAsync';

export default catchAsync(async (req: Request, res: Response) => {
  const {
    quizId,
    id,
    image,
    username,
    name,
    description,
    creationQuizzes,
    category,
  } = req.body;

  const quizExists = await quizModel.exists({ _id: quizId });

  if (quizExists) {
    return new AppError('Quiz already exists', 409);
  }

  const quizCreated = {
    _id: quizId,
    creator: id,
    creatorName: username,
    name,
    description,
    image,
    category,
    questions: creationQuizzes,
  };

  const newUser = await userModel.findByIdAndUpdate(
    id,
    {
      $push: {
        quizzesCreated: quizCreated,
      } as any,
    },
    { new: true }
  );
  const newQuiz = await quizModel.create(quizCreated);

  res.status(200).json({
    status: 'success',
    data: {
      newUser,
      newQuiz,
    },
  });
});
