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
    tripDetails: TripDetails!
    businessDetails: BusinessDetails!
    customerDetails: CustomerDetails!
  }

  type BusinessDetails {
    businessName: String!
    businessContactNumber: String!
    businessHours: BusinessHours!
  }

  type CustomerDetails {
    customerName: String!
    customerContactNumber: String!
  }

  type TripDetails {
    vehicleType: String!
    origin: POI!
    destination: POI!
    distance: String!
    duration: String!
    fees: [Fee]
  }

  type POI {
    name: String!
    lng: Float!
    lat: Float!
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
    customerName: String!
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
    quotations: Int!
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