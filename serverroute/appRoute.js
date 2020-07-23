const express = require('express');

const router = express.Router();
const { newQuiz, getPopularQuizzes, currentQuiz } = require('../controllers/quiz');
// app.get("/", quizController.getData);
const { signup, login } = require('../controllers/authentication');
const { checkIfUserExists } = require('../controllers/user');

router.post('/signup', signup);
router.post('/login', login);
router.post('/user/createquiz', newQuiz);
router.get('/getPopularQuizzes', getPopularQuizzes);
router.get('/play/:id', currentQuiz);
// router.get("/api", protect, quizController.getData);

router.post('/userExists', checkIfUserExists);
module.exports = router;
