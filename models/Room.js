const mongoose = require('mongoose')
const roomSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  type: {
    type: Number,
    default: 1
  },
  members: [{
    unSeenMsg: { type: String, default: 0 },
    userId: { type: String, ref: "User" }
  }],
  messages: [{
    messageId: { type: String, ref: "Message" }
  }]
}, { timestamps: true })

module.exports = mongoose.model("Room", roomSchema)

