const checkIfUserExists = require('./check-If-user-exists');
const checkIfEmailExists = require('./check-If-email-exists');
const saveQuizResult = require('./save-quiz-result');
const getUserQuizzes = require('./get-user-quizzes');
const newQuiz = require('./new-quiz');
const deleteQuiz = require('./delete-quiz');
const editQuiz = require('./edit-quiz');

module.exports = {
  checkIfUserExists,
  checkIfEmailExists,
  saveQuizResult,
  getUserQuizzes,
  newQuiz,
  deleteQuiz,
  editQuiz,
};
