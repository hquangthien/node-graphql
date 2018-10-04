const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  role: Number
})

module.exports = mongoose.model('User', userSchema)
