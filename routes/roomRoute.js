const express = require('express');
const roomCtrl = require('../controllers/roomCtrl.js')
const router = express.Router();

//router.get('/',)
router.post('/', roomCtrl.createPublicRoom)
router.get('/', roomCtrl.getAllRoom)

module.exports = router
