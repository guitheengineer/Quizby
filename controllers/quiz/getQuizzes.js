const { quizModel } = require('../../models');

module.exports = async (req, res) => {
  const mostPlayedQuizzes = await quizModel.find().sort('timesPlayed').limit(4);
  res.status(200).json({
    status: 'success',
    mostPlayedQuizzes,
  });
};
