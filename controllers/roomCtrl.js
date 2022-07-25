const Room = require('../models/Room.js')
const Message = require('../models/Message.js')
const RoomUser = require('../models/RoomUser.js')

const roomCtrl = {
  createPublicRoom: async (req, res) => {
    try {
      const users = req.body.users;
      const name = req.body.name;
      const newRoom = await Room({ name: name, type: 10, users: users }).save();
      users.map(user => {
        RoomUser({ roomId: newRoom._id, userId: user._id }).save();
      })
      return res.status(200).json(newRoom);
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
      let rooms = await RoomUser.find({ userId: userId })
        .populate({
          path: 'roomId',
          select: ['name', '_id', 'type'],
          populate: {
            path: 'users._id',
            select: ['name', 'avatar']
          }
        }).sort({ updatedAt: -1 }).exec()
      rooms = rooms.map(room => {
        return { room: room.roomId, updatedAt: room.updatedAt }
      })
      return res.status(200).json(rooms)
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = roomCtrl
