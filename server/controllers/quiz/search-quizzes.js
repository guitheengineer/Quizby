const quizModel = require('../../models').quizModel;
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res) => {
  if (req.query.q) {
    const name = req.query.q.toString().toLowerCase();

    const query = {
      name: new RegExp(name, 'i'),
    };

    const quizzesSearchedData = await quizModel.find(query).limit(8);
    res.status(200).json({
      status: 'success',
      quizzesSearchedData,
    });
  }
});
