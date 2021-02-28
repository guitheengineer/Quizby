const express = require('express');
const { protect } = require('../controllers/authentication');
const { saveQuizResult } = require('../controllers/user');
const { newQuiz } = require('../controllers/user');
const { getUserQuizzes } = require('../controllers/user');
const { deleteQuiz } = require('../controllers/user');
const { editQuiz } = require('../controllers/user');

const router = express.Router({ mergeParams: true });

router.get('/*', getUserQuizzes);

router.use(protect);

router.post('/createquiz', newQuiz);
router.post('/deletequiz', deleteQuiz);
router.post('/editquiz', editQuiz);
router.post('/savequiz', saveQuizResult);

module.exports = router;
