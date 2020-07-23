const { quizModel } = require('../../models');

exports.getPopularQuizzes = async (req, res) => {
  const sortedQuizzes = await quizModel.find().sort('timesPlayed');
  res.status(200).json({
    status: 'success',
    sortedQuizzes,
  });
  console.log(sortedQuizzes);
};
