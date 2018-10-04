const passport = require('./middlewares/passport')
const graphqlHTTP = require('express-graphql')
const schema = require('./schemas/index')

module.exports = (app) => {
  // app.use('/graphql', passport.authenticate('bearer', { session: false }))

  app.use('/graphql/root', graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.get('/graphql/status', (req, res) => {
    res.send({
      message: 'It is working now!'
    })
  })
}
