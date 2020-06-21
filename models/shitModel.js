const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const possibleAnswersSchema = new mongoose.Schema({
  possibleAnswer: {
    type: Array,
    required: true,
    unique: true,
  },
});

const questionsModel = mongoose.model("questions", questionSchema);

const possibleAnswersModel = mongoose.model(
  "possibleAnswers",
  possibleAnswersSchema
);

module.exports = {
  questionsModel,
  possibleAnswersModel,
};
