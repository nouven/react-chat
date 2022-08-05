
const express = require('express')
const router = express.Router();
const messageCtrl = require('../controllers/messageCtrl.js')

router.get('/all', messageCtrl.getAllMessage);
router.post('/', messageCtrl.createMessage);
router.put('/', messageCtrl.updateRoomUser);

module.exports = router
