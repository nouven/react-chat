const Room = require('../models/Room.js')
const Message = require('../models/Message.js')
const RoomUser = require('../models/RoomUser.js')

const roomCtrl = {
  createPublicRoom: async (req, res) => {
    try {
      const users = req.body.users;
      const name = req.body.name;
      console.log(name)
      const newRoom = await Room({ name: name, type: 10, users: users }).save();
      users.forEach(user => {
        RoomUser({ roomId: newRoom._id, userId: user._id }).save();
      })
      return res.status(200).json(newRoom._id);
    } catch (err) {
      return res.status(500).json(err)
    }
  },
  getOneRoom: async (req, res) => {
    let userId = req.query.userId
    let roomId = req.query.roomId
    try {
      let room = await RoomUser.findOne({ userId: userId, roomId: roomId }, 'roomId unSeenMsg lastMsg updatedAt')
        .populate({
          path: 'roomId',
          select: ['name', '_id', 'type'],
          populate: {
            path: 'users._id',
            select: ['_id', 'name', 'avatar']
          }
        }).exec()
      return res.status(200).json(room)
    } catch (err) {
      return res.status(500).json(err)
    }
  },
  addUserToRoom: async (req, res) => {
    try {
      const roomId = req.body.roomId
      const userId = req.body.userId
      await Room.updateOne({ _id: roomId }, { $push: { users: { _id: userId } } }).exec()
      await RoomUser({ roomId: roomId, userId: userId }).exec()
      return res.status(200)
    }
    catch (err) {
      return res.status(500).json(err);
    }
  },
  getAllRoom: async (req, res) => {
    try {
      const userId = req.query.userId
      let rooms = await RoomUser.find({ userId: userId }).select('roomId unSeenMsg lastMsg updatedAt')
        .populate({
          path: 'roomId',
          select: ['name', '_id', 'type'],
          populate: {
            path: 'users._id',
            select: ['_id', 'name', 'avatar']
          }
        }).sort({ updatedAt: -1 }).exec()
      return res.status(200).json(rooms)
    } catch (err) {
      return res.status(500).json(err)
    }
  },
  updateRoomUsers: async (req, res) => {
    try {
      let roomId = req.body.roomId
      let userId = req.body.userId
      RoomUser.deleteOne({ roomId: roomId, userId: userId }).exec();
      Room.updateOne({ _id: roomId }, { $pull: { users: { _id: userId } } }).exec()
      return res.status(200)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = roomCtrl
