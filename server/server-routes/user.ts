import express from 'express';

const router = express.Router();
import {
  saveQuizResult,
  newQuiz,
  getUserQuizzes,
  deleteQuiz,
  editQuiz,
} from '../controllers/user';
import protect from '../controllers/authentication/protect';

router.get('/*', getUserQuizzes);
router.post('/createquiz', newQuiz, protect);
router.post('/deletequiz', deleteQuiz, protect);
router.post('/editquiz', editQuiz, protect);
router.post('/savequiz', saveQuizResult, protect);

export default router;
