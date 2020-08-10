const quizModel = require('../../models/quizModel');

module.exports = async (req, res) => {
  const name = req.query.q.toLowerCase();

  const query = {
    name: new RegExp(name, 'i'),
  };

  const quizzesSearchedData = await quizModel.find(query).limit(8);
  res.status(200).json({
    status: 'success',
    quizzesSearchedData,
  });
};
