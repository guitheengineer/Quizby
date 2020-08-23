const { quizModel } = require('../../models');
const userModel = require('../../models/userModel');

module.exports = async (req, res) => {
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
};
