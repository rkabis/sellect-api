import gql from 'graphql-tag'

const typeDefs = gql`
  type LocationInfo {
    name: String!
    lng: Float!
    lat: Float!
  }

  type DeliveryRequest {
    origin: String!
    destination: String!
  }

  type DeliveryResponse {
    origin: LocationInfo!
    destination: LocationInfo!
  }

  type QuoteFees {
    provider: String
    fee: String
  }

  type QuoteResponse {
    distance: String
    duration: String
    fees: [QuoteFees]
  }

  type DeliveryQuote {
    deliveryRequest: DeliveryRequest!
    deliveryResponse: DeliveryResponse!
    quoteResponse: QuoteResponse
  }

  extend type Query {
    getDeliveryQuote(
    origin: String!,
    destination: String!,
    size: String,
    cookie: String
    ): DeliveryQuote
  } 
`

export default typeDefs