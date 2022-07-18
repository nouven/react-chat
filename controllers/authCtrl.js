const User = require('../models/User.js')
const authCtrl = {
  login: async (req, res) => {
    res.json("login");
  },
  signup: async (req, res) => {
    try {
      const newUser = User({
        username: 'nouven',
        password: 'qwe@132',
        email: 'nouven@gmail.com'
      })
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = authCtrl
