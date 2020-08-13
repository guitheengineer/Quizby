const express = require('express');

const router = express.Router();
const { changePhoto, saveQuizResult } = require('../controllers/user');
const { newQuiz } = require('../controllers/quiz');

router.post('/changephoto', changePhoto);
router.post('/createquiz', newQuiz);
router.post('/savequiz', saveQuizResult);
module.exports = router;
