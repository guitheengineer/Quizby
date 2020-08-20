const { userModel, quizModel } = require('../../models');

module.exports = async (req, res) => {
  const {
    id,
    image,
    username,
    name,
    description,
    creationQuizzes,
    category,
  } = req.body;
  const quizCreated = {
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
