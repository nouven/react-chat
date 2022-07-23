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
      const roomId = req.body.roomId
      const content = req.body.content
      const newMessage = await Message({ content: content }).save();
      await Room.updateOne({ _id: roomId }, { $push: { messages: { MessageId: newMessage._id.toString() } } })
      return res.status(200);
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = messageCtrl
