const mongoose = require('mongoose')

const roomUserSchema = mongoose.Schema({
  roomId: { type: String, ref: "Room" },
  userId: { type: String, ref: "User" },
  unSeenMsg: { type: Number, default: 0 },
  lastMsg: { type: String, ref: 'Message' }
}, { timestamps: true })


module.exports = mongoose.model("RoomUser", roomUserSchema)
