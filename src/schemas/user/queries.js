const graphql = require('graphql')
const UserType = require('./userType')
const User = require('../../models/user')
const bcrypt = require('bcrypt-nodejs')

const {
  GraphQLID,
  GraphQLList,
  GraphQLString
} = graphql

const userQueries = {
  user: {
    type: UserType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
      return User.findById(args.id)
    }
  },
  login: {
    type: UserType,
    args: {
      email: {type: GraphQLString},
      password: {type: GraphQLString}
    },
    async resolve(parent, args) {
      const user = await User.findOne({email: args.email})
      if (!user) {
        return null
      }
      if(bcrypt.compareSync(args.password, user.password)) {
        return user
      }
      return null
    }
  },
  users: {
    type: new GraphQLList(UserType),
    args: {},
    resolve(parent, args) {
      return User.find({})
    }
  }
}

module.exports = userQueries
