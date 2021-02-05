const { userModel } = require('../../models');
const { quizModel } = require('../../models');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const {
    quizId,
    _id: id,
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

  await userModel.findByIdAndUpdate(
    id,
    {
      $push: {
        quizzesCreated: quizCreated,
      },
    },
    { new: true }
  );
  const newQuiz = await quizModel.create(quizCreated);

  res.status(200).json({
    status: 'success',
    response: newQuiz,
  });
});
