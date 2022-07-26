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

    socket.on('chat', ({ roomId, userId, content }) => {
      socket.emit('chat', content)
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
