const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config')
const port = process.env.PORT || 4000

// setup express
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`now listening for requests on port ${port}`)
})

// routes
require('./routes')(app)

// connect database
mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@ds119993.mlab.com:19993/${config.db.database}`, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to database!')
})
