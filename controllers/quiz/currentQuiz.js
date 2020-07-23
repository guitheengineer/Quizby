const { quizModel } = require('../../models');

exports.currentQuiz = async (req, res) => {
  const id = req.params.id.substring(1);
  console.log(id);
  const quiz = await quizModel.findById(id);
  console.log(quiz);
  res.status(200).json({
    status: 'success',
    quiz,
  });
};
