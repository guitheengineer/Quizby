const quizModel = require("../models/quizModel");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");

// exports.getData = async (req, res) => {
//   try {
//     const questionsFind = await questionsModel.find();
//     const possibleAnswersFind = await possibleAnswersModel.find();
//     res.status(200).json({
//       status: "success",

//       questionsFind,
//       possibleAnswersFind,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

exports.currentQuiz = async (req, res, next) => {
  const id = req.params.id.substring(1);
  console.log(id);
  const quiz = await quizModel.findById(id);
  console.log(quiz);
  res.status(200).json({
    status: "success",
    quiz,
  });
};

exports.getPopularQuizzes = async (req, res, next) => {
  const sortedQuizzes = await quizModel.find().sort("timesPlayed");
  res.status(200).json({
    status: "success",
    sortedQuizzes,
  });
  console.log(sortedQuizzes);
};

exports.newQuiz = async (req, res, next) => {
  const { creatorName, userId, name, questions } = req.body;

  // const userIdentification = await userModel.findById(userId);
  // console.log(userIdentification);
  // we have a user, so we make up an quizmodel with a base on that user.

  const quizCreate = await quizModel.create({
    creator: userId,
    creatorName,
    name,
    questions,
  });

  res.status(200).json({
    status: "success",
    data: quizCreate,
  });
  console.log(quizCreate);
  // try {
  //

  //   });
  // } catch {}
};
