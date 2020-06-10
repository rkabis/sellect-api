import gql from 'graphql-tag'

const typeDefs = gql`
  type Template {
    text: String
  }

  extend type Query {
    getTemplate(text: String!): Template
  }
`

export default typeDefs