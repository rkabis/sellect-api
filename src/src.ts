import template from './api/template'
import delivery from './api/delivery'

const defaultDefs = `
  type Query

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

export const typeDefs = [
  defaultDefs
]

export const resolvers = [template.resolvers, delivery.resolvers]