const Message = require('../models/Message.js')
const Room = require('../models/Room.js')
const RoomUser = require('../models/RoomUser.js')
const messageCtrl = {
  getAllMessage: async (req, res) => {
    try {
      const roomId = req.query.roomId
      const x = 3
      //.slice('messages', 0)
      let room = await Room.findOne({ _id: roomId },).select('messages')
        .populate({
          path: 'messages._id',
        }).exec()
      let messages = room.messages.map(message => {
        return message._id
      })
      messages = messages.reverse()
      return res.status(200).json(messages);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  createMessage: async (req, res) => {
    try {
      let roomId = req.body.roomId
      let content = req.body.content
      let senderId = req.body.senderId
      let senderName = req.body.senderName
      const newMessage = await Message({ senderName, senderId, content }).save();
      await Room.updateOne({ _id: roomId }, { $push: { messages: { _id: newMessage._id.toString() } } })
      RoomUser.updateMany({ roomId: roomId }, { lastMsg: content, $inc: { unSeenMsg: 1 } }).exec()
      return res.status(200).json('successfully!');
    } catch (err) {
      return res.status(500).json(err)
    }
  },
  updateRoomUser: async (req, res) => {
    try {
      let roomId = req.body.roomId
      let userId = req.body.userId
      RoomUser.update({ roomId: roomId, userId: userId }, { $set: { unSeenMsg: 0 } }).exec()
      return res.status(200).json('successfully!')
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = messageCtrl
