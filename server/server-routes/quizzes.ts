import express from 'express';

import {
  quizzesAdded,
  currentQuiz,
  searchQuizzes,
  categoryQuiz,
} from '../controllers/quiz';

const router = express.Router();
router.get('/quiz/:id', currentQuiz);
router.get('/search', searchQuizzes);
router.get('/category/:category', categoryQuiz);
router.get('/', quizzesAdded);

export default router;
