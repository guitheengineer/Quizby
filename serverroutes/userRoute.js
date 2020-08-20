const express = require('express');

const router = express.Router();
const { changePhoto, saveQuizResult } = require('../controllers/user');
const { newQuiz, getUserQuizzes } = require('../controllers/quiz');

router.get('/:username', getUserQuizzes);
router.post('/changephoto', changePhoto);
router.post('/:username/createquiz', newQuiz);
router.post('/savequiz', saveQuizResult);
module.exports = router;
