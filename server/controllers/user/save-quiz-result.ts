import { userModel, quizModel } from '../../models';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { UserOptional } from '../../types';
export default catchAsync(async (req: Request, res: Response) => {
  const { quizId, percentage } = req.body;
  const { username } = req.params;
  const quizPlayed = await quizModel.findById(quizId);
  if (quizPlayed) {
    const { creator, creatorName, name, _id, image } = quizPlayed;

    const quizData = {
      creator,
      creatorName,
      name,
      _id,
      image,
      score: percentage,
    };
    await quizModel.findByIdAndUpdate(_id, {
      $inc: { timesPlayed: 1 } as any,
    });

    let doc: UserOptional | null;
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
          $push: { quizzesPlayed: quizData } as any,
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
  }
});
