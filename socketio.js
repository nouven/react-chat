let arr = [];
const socketio = (io) => {
  io.on("connection", (socket) => {
    console.log(`-----------connected: ${socket.id}`)

    socket.on('init', user => {
      console.log(`user id: ${user._id}`)
    })


    socket.on('disconnect', () => {
      console.log(`disconnect: ${socket.id}`)
    })
  })
}
module.exports = socketio
