const { quizzesAdded } = require('../controllers/quiz');
const { currentQuiz } = require('../controllers/quiz');
const { searchQuizzes } = require('../controllers/quiz');
const { categoryQuiz } = require('../controllers/quiz');
const express = require('express');

const router = express.Router();
router.get('/quiz/:id', currentQuiz);
router.get('/search', searchQuizzes);
router.get('/category/:category', categoryQuiz);
router.get('/', quizzesAdded);

module.exports = router;
