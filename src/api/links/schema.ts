import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createLink(input: CreateLinkInput): CreateLinkOutput!
  }

  extend type Query {
    getLink(linkId: String!): GetLinkOutput!
  }

  type GetLinkOutput {
    linkId: String!
    email: String!
    location: String!
    contactNumber: String
    hours: Hours
  }

  input CreateLinkInput {
    email: String!
    location: String!
    contactNumber: String
    hours: HoursInput
  }

  input HoursInput {
    lower: String
    upper: String
  }

  type Hours {
    lower: String
    upper: String
  }

  type CreateLinkOutput {
    isSuccessful: Boolean!
    linkId: String
  }
`

export default typeDefs