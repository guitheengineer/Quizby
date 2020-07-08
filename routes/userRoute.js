const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const quizController = require("../controllers/quizController");

router.post("/changephoto", authController.protect, userController.changePhoto);
router.post("/createquiz", quizController.newQuiz);

module.exports = router;
