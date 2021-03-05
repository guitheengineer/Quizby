const { userModel } = require('../../models');
const { quizModel } = require('../../models');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
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

  // check if quiz already exists
  const quizExists = await quizModel.exists({ _id: quizId });

  if (quizExists) {
    throw new AppError('Quiz already exists', 409);
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

  // update in the user model and quiz model
  const newQuiz = await quizModel.create(quizCreated);
  await userModel.findByIdAndUpdate(
    id,
    {
      $push: {
        quizzesCreated: quizCreated,
      },
    },
    { new: true }
  );

  // send response with created quiz
  res.status(200).json({
    status: 'success',
    response: newQuiz,
  });
});
