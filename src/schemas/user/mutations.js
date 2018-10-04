const graphql = require('graphql')
const UserType = require('./userType')
const User = require('../../models/user')
const bcrypt = require('bcrypt-nodejs')

const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} = graphql

const userMutations = {
  addUser: {
    type: UserType,
    args: {
      username: {type: new GraphQLNonNull(GraphQLString)},
      email: {type: new GraphQLNonNull(GraphQLString)},
      password: {type: new GraphQLNonNull(GraphQLString)},
      role: {type: new GraphQLNonNull(GraphQLInt)},
    },
    resolve(parent, args) {
      let user = new User({
        username: args.username,
        email: args.email,
        role: args.role
      })
      // store password
      bcrypt.hash(args.password, null, null, function(err, hash) {
        user.password = hash
        user.save()
      });

      return user
    }
  },
  updateToken: {
    type: UserType,
    args: {
      token: {type: new GraphQLNonNull(GraphQLString)},
      id: {type: new GraphQLNonNull(GraphQLID)}
    },
    resolve(parent, args) {
      let user = User.findById(args.id)
      user.token = args.token
      return user.save()
    }
  }
}

module.exports = userMutations
