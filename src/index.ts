import { GraphQLServer } from 'graphql-yoga'
import { typeDefs, resolvers } from './src'

import 'graphql-import-node'
require('dotenv').config()

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
)