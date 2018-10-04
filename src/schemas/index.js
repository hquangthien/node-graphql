const userQueries = require('./user/queries')
const userMutations = require('./user/mutations')
const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...userQueries
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutations
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
