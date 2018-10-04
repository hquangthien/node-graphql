const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    token: {type: GraphQLString},
    role: {type: GraphQLInt}
  })
})

module.exports = UserType
