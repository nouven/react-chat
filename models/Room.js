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
  users: [{
    _id: { type: String, ref: "User" }
  }],
  messages: [{
    _id: { type: String, ref: "Message" }
  }]
}, { timestamps: true })

module.exports = mongoose.model("Room", roomSchema)

