let onlUsers = [];
const socketio = (io) => {
  io.on("connection", (socket) => {

    socket.on('init', ({ userId }) => {
      let socketId = socket.id
      onlUsers.push({ socketId, userId })
      console.table(`push - ${onlUsers.length}`)
    })

    socket.on('joinRoom', ({ curRoom, preRoom }) => {
      if (preRoom) {
        socket.leave(preRoom)
      }
      socket.join(curRoom)
    })

    socket.on('chat', ({ _id, roomId, senderId, content, createdAt, members }) => {
      io.to(roomId).emit('chat', { _id, senderId, roomId, content, createdAt })
      members.forEach(member => {
        let onlUser = onlUsers.find(onlUser => {
          return onlUser.userId === member
        })
        if (onlUser) {
          io.to(onlUser.socketId).emit('roomState', { roomId, content })
        }
      })
    })


    socket.on('disconnect', () => {
      onlUsers = onlUsers.filter((onlUser) => {
        return onlUser.socketId !== socket.id
      })
      console.log(`remove - ${onlUsers.length}`)
    })
  })
}
module.exports = socketio
