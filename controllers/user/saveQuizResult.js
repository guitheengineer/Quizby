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
    console.log('yes');
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

  //   const n = doc.quizzesPlayed.map((data) => {
  //     if (data.creator === userId) {
  //       data = quizData;
  //     }
  //   });
  //   doc = n;
  // doc.quizzesPlayed.push(quizData);

  //   doc.save();
  // if (doc.quizzesPlayed.creator === quizId)

  // doc.save();

  // user.quizzesPlayed.map((data) => {
  //   if (data._id === quizId) {
  //     data = { pao: 'teste' };
  //   }
  // });

  res.status(200).json({
    status: 'success',
    doc,
  });
};
