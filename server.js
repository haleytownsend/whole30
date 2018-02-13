const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
const DATABASE_URL = "mongodb://client:password@ds223738.mlab.com:23738/whole30client";


mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URL);
mongoose.connection.on('error', console.error.bind(console, 'Connection error:'))
mongoose.connection.once('open', () => console.log('MongoDB connected'))

const PORT = process.env.PORT || 5000
const app = express()

let server

app.use(bodyParser.json())
app.use('/Recipe', require('./routes/recipes'))
app.use(express.static(path.resolve(__dirname, '../')))
app.use('/User', require('./routes/users'))

const runServer = () => {
  if (server && server.listening) return

  return new Promise((res, rej) => {
    server = app.listen(PORT, () => res(server))
    server.on('error', rej)
  })
}

const closeServer = () => {
  return new Promise((res, rej) => {
    server.close(err => {
      if (err) return rej(err)

      res()
    })
  })
}

if (require.main === module) {
  runServer().catch(console.error.bind(console))
}

module.exports = { app, runServer, closeServer }
