const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
// app.get("/", quizController.getData);
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/user/createquiz", quizController.newQuiz);
router.get("/getPopularQuizzes", quizController.getPopularQuizzes);
router.get("/play/:id", quizController.currentQuiz);
// router.get("/api", authController.protect, quizController.getData);

router.post("/userExists", userController.checkIfUserExists);
module.exports = router;
