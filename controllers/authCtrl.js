const User = require('../models/User.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authCtrl = {
  generateAccessToken: (user) => {
    return jwt.sign({ username: user.username, id: user._id }, process.env.ACCESS_KEY, { expiresIn: '1d' })
  },
  login: async (req, res) => {
    try {
      let user = await User.findOne({ username: req.body.username })
      if (!user) {
        return res.status(400).json("not have user!");
      }
      if (! await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).json("password is incorrect!!")
      }
      const { password, email, ...others } = user._doc
      return res.status(200).json({ token: authCtrl.generateAccessToken(user) })
    } catch (err) {
      return res.status(500).json(err)
    }
  },
  signup: async (req, res) => {
    try {
      let password = req.body.password;
      if (!password) {
        return res.status(400).json("password is required!")
      }

      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      await User({
        name: req.body.name,
        password: password,
        email: req.body.email
      }).save();
      return res.status(200).json("successfully!!");
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = authCtrl
