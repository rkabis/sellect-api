import { GraphQLServer } from 'graphql-yoga'
import { typeDefs, resolvers } from './src'
import 'graphql-import-node'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
