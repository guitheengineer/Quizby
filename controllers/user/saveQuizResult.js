const { userModel, quizModel } = require('../../models');

module.exports = async (req, res) => {
  const { quizId, userId, percentage } = req.body;

  const quizPlayed = await quizModel.findById(quizId);

  const { creator, creatorName, name, _id, image } = quizPlayed;

  const quizData = {
    creator,
    creatorName,
    name,
    _id,
    image,
    score: percentage,
  };

  let doc;
  doc = await userModel.findOneAndUpdate(
    { _id: userId, 'quizzesPlayed._id': quizId },
    {
      'quizzesPlayed.$': quizData,
    },
    { new: true }
  );

  if (doc === null) {
    doc = await userModel.findByIdAndUpdate(
      userId,
      {
        $push: { quizzesPlayed: quizData },
      },
      {
        new: true,
      }
    );
  }

  res.status(200).json({
    status: 'success',
    doc,
  });
};
