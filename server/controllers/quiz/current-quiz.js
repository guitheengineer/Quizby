const quizModel = require('../../models').quizModel;
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const { id } = req.params;
  const quiz = await quizModel.findById(id);

  res.status(200).json({
    status: 'success',
    quiz,
  });
});
