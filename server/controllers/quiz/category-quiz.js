const { quizModel } = require('../../models');
const { catchAsync } = require('../../utils');

module.exports = catchAsync(async (req, res) => {
  const { category } = req.params;
  const categoryQuizzes = await quizModel.find({ category }).limit(8);
  res.status(200).json(categoryQuizzes);
});
