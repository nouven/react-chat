const userCtrl = require('../controllers/userCtrl.js')
const express = require('express')
const router = express.Router()

router.get('/', userCtrl.getById)

module.exports = router
