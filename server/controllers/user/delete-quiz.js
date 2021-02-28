const userModel = require('../../models').userModel;
const quizModel = require('../../models').quizModel;
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const username = req.params;
  const { quizId } = req.body;
  await userModel.updateOne(username, {
    $pull: { quizzesCreated: { _id: quizId } },
  });
  const quizDeleted = await quizModel.findByIdAndDelete(quizId);
  res.status(200).json({
    status: 'success',
    quizDeleted,
  });
});
