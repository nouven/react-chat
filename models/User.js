const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, min: 7, require: true, unique: true, },
  password: { type: String, require: true, min: 7, },
  name: { type: String, require: true, min: 3, },
  avatar: { type: String, default: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" },
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)


