const express = require('express')
const authCtrl = require('../controllers/authCtrl.js')

const route = express.Router();

route.post('/login', authCtrl.login);
route.post('/signup', authCtrl.signup);

module.exports = route;
