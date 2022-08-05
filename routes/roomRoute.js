const express = require('express');
const roomCtrl = require('../controllers/roomCtrl.js')
const router = express.Router();

//router.get('/',)
router.post('/', roomCtrl.createPublicRoom)
router.get('/all', roomCtrl.getAllRoom)
router.get('/one', roomCtrl.getOneRoom)
router.put('/', roomCtrl.updateRoomUsers)

module.exports = router
