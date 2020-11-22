import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createLink(
      email: String!
    ): Link!
  }

  type Link {
    isSuccessful: Boolean!
    referenceCode: String
  }
`

export default typeDefs