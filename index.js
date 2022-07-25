const express = require('express')
const http = require('http');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config()
const routes = require('./routes')
const server = http.createServer(app);
const { Server } = require("socket.io");
const socketio = require('./socketio')
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['get', 'post']
  }
});

app.use(cors())
app.use(express.json());
routes(app);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("conneted successfully!")
    server.listen(process.env.PORT, () => {
      console.log(`app is runing on port ${process.env.PORT}`)
    })
    socketio(io)
  })
  .catch((err) => {
    console.log(err);
  })

