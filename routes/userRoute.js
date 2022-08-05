const userCtrl = require('../controllers/userCtrl.js')
const express = require('express')
const router = express.Router()

router.get('/', userCtrl.getById)
router.get('/search', userCtrl.getUsers)
router.get('/room', userCtrl.getUsersRoom)

module.exports = router
