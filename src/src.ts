import template from './api/template'
import delivery from './api/delivery'

const defaultDefs = `
  type Query
`

export const typeDefs = [
  defaultDefs,
  delivery.typeDefs
]

export const resolvers = [template.resolvers, delivery.resolvers]