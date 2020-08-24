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
    required: true,
  },
  creatorName: {
    type: String,
    required: true,
  },
  image: {
    data: String,
    contentType: String,
  },
  name: {
    type: String,
    minlength: 4,
    maxlength: 35,
    required: true,
  },
  description: {
    type: String,
    maxlength: 120,
  },
  timesPlayed: {
    type: Number,
    default: 0,
  },
  createdAt: Date,
  category: {
    type: String,
    lowercase: true,
    required: true,
  },
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
        maxlength: 20,
      },
      fakeAnswer1: {
        type: String,
        required: true,
        maxlength: 20,
      },
      fakeAnswer2: {
        type: String,
        required: true,
        maxlength: 20,
      },
      fakeAnswer3: {
        type: String,
        required: true,
        maxlength: 20,
      },
    },
  ],
});

const quizModel = mongoose.model('Quiz', quizSchema);

module.exports = quizModel;
