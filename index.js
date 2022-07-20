const express = require('express')
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();

app.use(cors())
app.use(express.json());
routes(app);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("conneted successfully!")
    app.listen(process.env.PORT, () => {
      console.log(`app is runing on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err);
  })

