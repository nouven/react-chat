const express = require('express')
const authCtrl = require('../controllers/authCtrl.js')

const router = express.Router();

router.post('/login', authCtrl.login);
router.post('/signup', authCtrl.signup);

module.exports = router;
