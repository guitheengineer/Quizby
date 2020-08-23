const express = require('express');

const router = express.Router();
const {
  changePhoto,
  saveQuizResult,
  newQuiz,
  getUserQuizzes,
  deleteQuiz,
  editQuiz,
} = require('../controllers/user');

router.get('/:username', getUserQuizzes);
router.post('/changephoto', changePhoto);
router.post('/:username/createquiz', newQuiz);
router.post('/:username/deletequiz', deleteQuiz);
router.post('/:username/editquiz', editQuiz);
router.post('/savequiz', saveQuizResult);
module.exports = router;
