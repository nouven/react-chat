const Message = require('../models/Message.js')
const Room = require('../models/Room.js')
const messageCtrl = {
  getAllMessage: async (req, res) => {
    try {
      const roomId = req.body.roomId
      const messages = await Room.find({ _id: roomId },).select('messages').exec()
      return res.status(200).json(messages);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  createMessage: async (req, res) => {
    try {
      let roomId = req.body.roomId
      let content = req.body.content
      const newMessage = await Message({ content: content }).save();
      console.log(newMessage)
      await Room.updateOne({ _id: roomId }, { $push: { messages: { _id: newMessage._id.toString() } } })
      return res.status(200);
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = messageCtrl
