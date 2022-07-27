
const express = require('express')
const router = express.Router();
const messageCtrl = require('../controllers/messageCtrl.js')

router.get('/', messageCtrl.getAllMessage);
router.post('/', messageCtrl.createMessage);

module.exports = router
