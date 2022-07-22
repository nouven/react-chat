const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, require: true, min: 3, },
  password: { type: String, require: true, min: 7, },
  email: { type: String, min: 7, require: true, unique: true, },
  avatar: { type: String, default: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" },
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)


