import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createLink(input: CreateLinkInput): Link!
  }

  input CreateLinkInput {
    email: String!
    location: String!
    contactNumber: String
    hours: Hours
  }

  input Hours {
    lower: String
    upper: String
  }

  type Link {
    isSuccessful: Boolean!
    linkId: String
  }
`

export default typeDefs