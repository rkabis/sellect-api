import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createLink(input: CreateLinkInput): CreateLinkOutput!
    updateLinkView(linkId: String!): UpdateLinkViewOutput!
  }

  extend type Query {
    getLink(linkId: String!): GetLinkOutput!
  }

  type UpdateLinkViewOutput {
    isSuccessful: Boolean!
  }

  type GetLinkOutput {
    linkId: String!
    email: String!
    location: String!
    contactNumber: String
    hours: Hours
    businessName: String!
  }

  input CreateLinkInput {
    email: String!
    location: String!
    contactNumber: String
    hours: HoursInput
    businessName: String!
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