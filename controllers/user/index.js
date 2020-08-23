const changePhoto = require('./changePhoto');
const checkIfUserExists = require('./checkIfUserExists');
const checkIfEmailExists = require('./checkIfEmailExists');
const saveQuizResult = require('./saveQuizResult');
const getUserQuizzes = require('./getUserQuizzes');
const newQuiz = require('./newQuiz');
const deleteQuiz = require('./deleteQuiz');
const editQuiz = require('./editQuiz');

module.exports = {
  changePhoto,
  checkIfUserExists,
  checkIfEmailExists,
  saveQuizResult,
  getUserQuizzes,
  newQuiz,
  deleteQuiz,
  editQuiz,
};
