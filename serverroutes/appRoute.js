const express = require('express');

const router = express.Router();

const { signup, login, protect } = require('../controllers/authentication');
const {
  checkIfUserExists,
  checkIfEmailExists,
} = require('../controllers/user');

router.post('/signup', signup);
router.post('/login', login);

router.post('/userexists', checkIfUserExists);
router.post('/emailexists', checkIfEmailExists);

router.get('/verifyuser', protect);
module.exports = router;
