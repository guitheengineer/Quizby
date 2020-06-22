const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    maxlength: 140,
  },
  answer: {
    type: String,
    required: true,
    maxlength: 23,
  },
});

const possibleAnswersSchema = new mongoose.Schema({
  possibleAnswer: {
    type: Array,
    required: true,
    unique: true,
    maxlength: 23,
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
