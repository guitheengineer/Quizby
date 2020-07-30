const { quizModel } = require('../../models');

module.exports = async (req, res) => {
  const { creatorName, userId, name, questions } = req.body;

  // const userIdentification = await userModel.findById(userId);

  const quizCreate = await quizModel.create({
    creator: userId,
    creatorName,
    name,
    questions,
  });

  res.status(200).json({
    status: 'success',
    data: quizCreate,
  });
};
