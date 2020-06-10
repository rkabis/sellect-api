import gql from 'graphql-tag'

const typeDefs = gql`
  type Template {
    text: String
  }

  extend type Query {
    getTemplate(text: String!): Template
  }

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
    getDeliveryQuote(origin: String!, destination: String!): DeliveryQuote
  } 
`

export default typeDefs