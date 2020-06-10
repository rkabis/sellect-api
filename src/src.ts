import template from './api/template'
import delivery from './api/delivery'

const defaultDefs = `
  type Query
`

export const typeDefs = [
  defaultDefs,
  template.typeDefs,
  delivery.typeDefs
]

export const resolvers = [template.resolvers, delivery.resolvers]