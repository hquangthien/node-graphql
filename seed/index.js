const User = require('../src/models/user')
const Promise = require('bluebird')
const users = require('./users.json')

async function seed() {
  await Promise.all(
    users.map(user => {
      let objUser = new User({
        username: user.username,
        email: user.email,
        password: user.password,
        token: user.token,
        role: user.role
      })
      objUser.save()
    })
  )
}

seed()
