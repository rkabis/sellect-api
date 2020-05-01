import template from './api/template'

const defaultDefs = `
  type Query

	type Template {
	  text: String
	}

	extend type Query {
	  getTemplate(text: String!): Template
	}
`

export const typeDefs = [
  defaultDefs
]

export const resolvers = [template.resolvers]