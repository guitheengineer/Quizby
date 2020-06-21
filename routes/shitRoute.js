const express = require("express");
const router = express.Router();

const shitController = require("../controllers/shitController");
// app.get("/", shitController.getData);
router.route("/").get(shitController.getData);

module.exports = router;
