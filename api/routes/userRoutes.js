const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/', auth, userCtrl.auth);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:id', userCtrl.find);
router.patch('/:id', userCtrl.patch);
router.delete('/', userCtrl.deleteAll)

module.exports = router;
