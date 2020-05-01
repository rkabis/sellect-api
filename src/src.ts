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

	type DeliveryRequest {
		origin: String!
		destination: String!
	}

	type QuoteResponse {
		distance: String
		duration: String
	}

	type DeliveryQuote {
		deliveryRequest: DeliveryRequest!
		deliveryResponse: DeliveryRequest!
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