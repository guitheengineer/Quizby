const express = require('express');
const { signup } = require('../controllers/authentication');
const { login } = require('../controllers/authentication');
const { verifyUser } = require('../controllers/authentication');
const { checkIfUserExists } = require('../controllers/user');
const { checkIfEmailExists } = require('../controllers/user');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verifyuser', verifyUser);

router.post('/userexists', checkIfUserExists);
router.post('/emailexists', checkIfEmailExists);

module.exports = router;
