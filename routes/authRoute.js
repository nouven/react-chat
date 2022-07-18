const express = require('express')
const authCtrl = require('../controllers/authCtrl.js')

const route = express.Router();

route.get('/login', authCtrl.login);
route.get('/signup', authCtrl.signup);

module.exports = route;
