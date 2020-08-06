const express = require('express');
const { searchQuizzes } = require('../controllers/quiz');
const { currentQuiz } = require('../controllers/quiz');
const { getQuizzes } = require('../controllers/quiz');

const router = express.Router();

router.get('/search', searchQuizzes);
router.get('/play/:id', currentQuiz);
router.get('/', getQuizzes);

module.exports = router;
