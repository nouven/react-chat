
const express = require('express')
const router = express.Router();
const messageCtrl = require('../controllers/messageCtrl.js')

router.get('/', messageCtrl.getAllMessage);

module.exports = router
