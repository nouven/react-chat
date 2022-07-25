const User = require('../models/User.js')
const userCtrl = {
  getById: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id }).exec()
      const { password, ...others } = user._doc
      return res.status(200).json({ info: others })
    } catch (err) {
      return res.status(500).json(err)
    }
  },
}
module.exports = userCtrl
