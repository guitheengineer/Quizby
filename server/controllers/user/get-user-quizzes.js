const userModel = require('../../models').userModel;
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res) => {
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

  let countQuizzesCreated;
  let countQuizzesPlayed;
  let quizAverage;

  if (quizAvg[0].quizAvg === null) {
    quizAverage = 0;
  } else {
    quizAverage = quizAvg[0].quizAvg;
  }

  if (quantityQuizzesCreated[0]) {
    countQuizzesCreated = quantityQuizzesCreated[0].count;
  } else {
    countQuizzesCreated = 0;
  }
  if (quantityQuizzesPlayed[0]) {
    countQuizzesPlayed = quantityQuizzesPlayed[0].count;
  } else {
    countQuizzesPlayed = 0;
  }

  res.status(200).json({
    status: 'success',
    quizzes,
    quizAverage,
    countQuizzesCreated,
    countQuizzesPlayed,
  });
});
