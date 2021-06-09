const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/', auth, userCtrl.auth);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
