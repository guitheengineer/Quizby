const { userModel, quizModel } = require('../../models');
const AppError = require('../../utils/AppError');

module.exports = async (req, res) => {
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
      },
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
};
