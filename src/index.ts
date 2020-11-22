import template from './api/template'
import delivery from './api/delivery'
import links from './api/links'

const defaultDefs = `
  type Query
  type Mutation
`

export const typeDefs = [
  defaultDefs,
  template.typeDefs,
  delivery.typeDefs,
  links.typeDefs
]

export const resolvers = [
  template.resolvers,
  delivery.resolvers,
  links.resolvers
]