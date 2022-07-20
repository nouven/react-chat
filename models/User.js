const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    min: 3,
  },
  password: {
    type: String,
    require: true,
    min: 7,
  },
  email: {
    type: String,
    min: 7,
    require: true,
    unique: true,
  }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
