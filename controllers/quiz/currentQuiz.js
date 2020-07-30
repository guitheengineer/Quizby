const { quizModel } = require('../../models');

module.exports = async (req, res) => {
  const id = req.params.id.substring(1);
  const quiz = await quizModel.findById(id);
  res.status(200).json({
    status: 'success',
    quiz,
  });
};
