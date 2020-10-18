import express from 'express';

const router = express.Router();

import { signup, login, protect } from '../controllers/authentication';
import { checkIfUserExists, checkIfEmailExists } from '../controllers/user';
router.post('/signup', signup);
router.post('/login', login);

router.post('/userexists', checkIfUserExists);
router.post('/emailexists', checkIfEmailExists);

router.get('/verifyuser', protect);

export default router;
