const { userModel, quizModel } = require('../../models');

module.exports = async (req, res) => {
  const { quizId, percentage } = req.body;
  const { username } = req.params;
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
  await quizModel.findByIdAndUpdate(_id, { $inc: { timesPlayed: 1 } });

  let doc;
  doc = await userModel.findOneAndUpdate(
    { username, 'quizzesPlayed._id': quizId },
    {
      'quizzesPlayed.$': quizData,
    },
    { new: true }
  );

  if (doc === null) {
    doc = await userModel.findOneAndUpdate(
      { username },
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
