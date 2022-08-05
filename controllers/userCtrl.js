const User = require('../models/User.js')
const Room = require('../models/Room.js')
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
  getUsers: async (req, res) => {
    try {
      let regex = req.query.regex
      let users = await User.find({ name: new RegExp(regex) }, '_id name email avatar').limit(5)
      if (!users) {
        return res.status(200).json([]);
      }
      return res.status(200).json(users)
    }
    catch (err) {
      return res.status(500).json(err)
    }
  },
  getUsersRoom: async (req, res) => {
    try {
      let roomId = req.query.roomId
      let room = await Room.findOne({ _id: roomId }, 'users')
        .populate({
          path: 'users._id',
          select: ['_id', 'avatar', 'name', 'email']
        }).exec()
      let users = room.users.map(user => {
        return { _id: user._id._id, name: user._id.name, email: user._id.email, avatar: user._id.avatar }
      })
      return res.status(200).json(users)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = userCtrl
