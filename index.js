const express = require('express')
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.json("hahaha");
})

app.listen(process.env.PORT, () => {
  console.log(`app is runing on port ${process.env.PORT}`)
})

