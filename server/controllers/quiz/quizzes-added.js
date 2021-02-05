const quizModel = require('../../models').quizModel;
const catchAsync = require('../../utils').catchAsync;

module.exports = catchAsync(async (_req, res) => {
  const mostPlayed = await quizModel.find().sort({ timesPlayed: -1 }).limit(5);
  const recommended = mostPlayed.pop();

  res.status(200).json({
    status: 'success',
    mostPlayed,
    recommended,
  });
});
