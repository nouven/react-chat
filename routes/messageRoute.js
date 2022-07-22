const Room = require('../models/Room.js')
const Message = require('../models/Message.js')
const messageRoute = {
  createMessage: async (req, res) => {
    try {
      const roomId = req.body.roomId;
      if (!roomId) {
        return res.status(401).json("err")
      }
      const message = await Message({ content: req.body.content })
      await Room.updateOne({ _id: roomId }, { $push: { messages: { messageId: message._id } } }).exec();
      return res.status(200).json(message);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = messageRoute;
