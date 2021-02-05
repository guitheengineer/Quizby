const { quizModel } = require('../../models');
const { userModel } = require('../../models');
const { catchAsync } = require('../../utils');

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

  const reqUpdatedQuiz = {
    _id: quizId,
    creator: id,
    creatorName: username,
    name,
    description,
    image,
    category,
    questions: creationQuizzes,
  };

  const updatedQuiz = await quizModel.findByIdAndUpdate(
    quizId,
    reqUpdatedQuiz,
    {
      new: true,
    }
  );
  const userUpdatedQuiz = await userModel.findOneAndUpdate(
    { _id: id, 'quizzesCreated._id': quizId },
    {
      'quizzesCreated.$': reqUpdatedQuiz,
    },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    updatedQuiz,
    userUpdatedQuiz,
  });
});
