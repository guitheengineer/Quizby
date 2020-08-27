const express = require('express');

const router = express.Router();
const {
  saveQuizResult,
  newQuiz,
  getUserQuizzes,
  deleteQuiz,
  editQuiz,
} = require('../controllers/user');
const protect = require('../controllers/authentication/protect');

router.get('/:username', getUserQuizzes);
router.post('/:username/createquiz', newQuiz, protect);
router.post('/:username/deletequiz', deleteQuiz, protect);
router.post('/:username/editquiz', editQuiz, protect);
router.post('/:username/savequiz', saveQuizResult, protect);
module.exports = router;
