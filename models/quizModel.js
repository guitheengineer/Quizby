const mongoose = require('mongoose');

const { Schema } = mongoose;
const shortid = require('shortid');

const quizSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  creatorName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 35,
  },
  timesPlayed: {
    type: Number,
    default: 0,
  },
  createdAt: Date,
  category: String,
  questions: [
    {
      question: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 140,
      },
      answer: {
        type: String,
        required: true,
        minlength: 3,
      },
      possibleAnswers: {
        type: Array,
        required: true,
        minlength: 3,
      },
    },
  ],
});

const quizModel = mongoose.model('Quiz', quizSchema);

module.exports = quizModel;
