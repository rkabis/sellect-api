import gql from 'graphql-tag'

const typeDefs = gql`
  extend type Mutation {
    createLink(input: CreateLinkInput): CreateLinkOutput!
    updateLinkView(linkId: String!): UpdateLinkViewOutput!
    createQuotation(input: CreateQuotationInput!): CreateQuotationOutput!
  }

  extend type Query {
    getLink(linkId: String!): GetLinkOutput!
    getQuotation(quotationId: String!): GetQuotationOutput!
  }

  type GetQuotationOutput {
    quotationId: String!
    vehicleType: String!
    origin: POI!
    destination: POI!
    distance: String!
    duration: String!
    fees: [Fee]
  }

  type POI {
    location: String!
  }

  type Fee {
    provider: String!
    fee: String
  }

  type CreateQuotationOutput {
    isSuccessful: Boolean!
    quotationId: String
  }

  input CreateQuotationInput {
    linkId: String!
    customerContactNumber: String!
    customerEmail: String!
    customerLocation: String!
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
    views: Int!
    businessPhoto: String
  }

  input CreateLinkInput {
    businessEmail: String!
    businessLocation: String!
    businessContactNumber: String!
    businessHours: BusinessHoursInput
    businessName: String!
    businessPhoto: String
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