const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  senderId: {
    type: String
  },
  content: {
    type: String,
  },
}, { timestamps: true })
module.exports = mongoose.model("Message", messageSchema)

