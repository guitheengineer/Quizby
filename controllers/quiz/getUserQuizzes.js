const { userModel } = require('../../models');

module.exports = async (req, res) => {
  const { username } = req.params;
  const quizzes = await userModel.findOne(
    { username },
    'quizzesPlayed quizzesCreated'
  );
  const quantityQuizzesCreated = await userModel.aggregate([
    { $match: { username } },
    { $project: { _id: 0, quizzesCreated: 1 } },
    { $unwind: '$quizzesCreated' },
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
      },
    },
  ]);
  const quantityQuizzesPlayed = await userModel.aggregate([
    { $match: { username } },
    { $project: { _id: 0, quizzesPlayed: 1 } },
    { $unwind: '$quizzesPlayed' },
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
      },
    },
  ]);
  const quizAvg = await userModel.aggregate([
    { $match: { username } },
    { $project: { _id: 0, quizAvg: { $avg: '$quizzesPlayed.score' } } },
  ]);

  const quizAverage = quizAvg[0].quizAvg;
  const countQuizzesCreated = quantityQuizzesCreated[0].count;
  const countQuizzesPlayed = quantityQuizzesPlayed[0].count;

  res.status(200).json({
    status: 'success',
    quizzes,
    quizAverage,
    countQuizzesCreated,
    countQuizzesPlayed,
  });
};
