const { quizModel } = require('../../models');

module.exports = async (req, res) => {
  const recommendedQuery = await quizModel.aggregate([
    { $sample: { size: 1 } },
  ]);
  const recommendedQuiz = recommendedQuery[0];

  res.status(200).json({
    recommendedQuiz,
  });
};
