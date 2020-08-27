const { quizModel } = require('../../models');

module.exports = async (req, res) => {
  console.log(req.body);
  const mostPlayed = await quizModel.find().sort({ timesPlayed: -1 }).limit(4);
  res.status(200).json({
    status: 'success',
    mostPlayed,
  });
};
