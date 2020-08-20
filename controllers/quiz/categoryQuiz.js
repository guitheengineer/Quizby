const { quizModel } = require('../../models');

module.exports = async (req, res) => {
  const { category } = req.params;
  const categoryQuizzes = await quizModel.find({ category }).limit(8);
  res.status(200).json(categoryQuizzes);
};
