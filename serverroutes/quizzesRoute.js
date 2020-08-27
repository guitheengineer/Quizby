const express = require('express');

const {
  getQuizzes,
  getRecommendedQuiz,
  currentQuiz,
  searchQuizzes,
  categoryQuiz,
} = require('../controllers/quiz');

const router = express.Router();

router.get('/quiz/:id', currentQuiz);
router.get('/search', searchQuizzes);
router.get('/recommended', getRecommendedQuiz);
router.get('/category/:category', categoryQuiz);
router.post('/', getQuizzes);

module.exports = router;
