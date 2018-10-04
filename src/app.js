const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config')

// setup express
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})

// routes
require('./routes')(app)

// connect database
mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@ds119993.mlab.com:19993/${config.db.database}`, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to database!')
})
