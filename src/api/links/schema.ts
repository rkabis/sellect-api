import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createLink(input: CreateLinkInput): CreateLinkOutput!
    updateLinkView(linkId: String!): UpdateLinkViewOutput!
    createLinkQuotation(input: CreateLinkQuotationInput!): CreateLinkQuotationOutput!
  }

  extend type Query {
    getLink(linkId: String!): GetLinkOutput!
  }

  type CreateLinkQuotationOutput {
    isSuccessful: Boolean!
    quotationId: String
  }

  input CreateLinkQuotationInput {
    linkId: String!
    customerNumber: String
    customerEmail: String
    customerLocation: String
    vehicleType: String!
  }

  type UpdateLinkViewOutput {
    isSuccessful: Boolean!
  }

  type GetLinkOutput {
    linkId: String!
    businessEmail: String!
    businessLocation: String!
    businessContactNumber: String
    businessHours: BusinessHours
    businessName: String!
  }

  input CreateLinkInput {
    businessEmail: String!
    businessLocation: String!
    businessContactNumber: String
    businessHours: BusinessHoursInput
    businessName: String!
  }

  input BusinessHoursInput {
    lower: String
    upper: String
  }

  type BusinessHours {
    lower: String
    upper: String
  }

  type CreateLinkOutput {
    isSuccessful: Boolean!
    linkId: String
  }
`

export default typeDefs