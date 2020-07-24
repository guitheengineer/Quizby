const express = require('express');

const router = express.Router();
const { changePhoto } = require('../controllers/user');
const { protect } = require('../controllers/authentication');
const { newQuiz } = require('../controllers/quiz');

router.post('/changephoto', protect, changePhoto);
router.post('/createquiz', newQuiz);

module.exports = router;
