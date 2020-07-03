const express = require("express");
const router = express.Router();
const shitController = require("../controllers/shitController");
// app.get("/", shitController.getData);
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/api", authController.protect, shitController.getData);

router.post("/userExists", userController.checkIfUserExists);
module.exports = router;
