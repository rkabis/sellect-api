import { GraphQLServer } from 'graphql-yoga'
import { typeDefs, resolvers } from './src'
import mongoose from 'mongoose'

import 'graphql-import-node'
require('dotenv').config()

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

mongoose.Promise = global.Promise

const MONGODB_URI = process.env.MONGODB_URI

const connection = mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

connection
  .then(db => db)
  .catch(err => {
    console.log(err)
  })

const options = {
  bodyParserOptions: { limit: '10mb', type: 'application/json' }
}

server.start(
  options,
  () => console.log('Server is running on http://localhost:4000')
)
