const express = require("express");
const router = express.Router();
const shitController = require("../controllers/shitController");
// app.get("/", shitController.getData);
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/api", authController.protect, shitController.getData);

module.exports = router;
