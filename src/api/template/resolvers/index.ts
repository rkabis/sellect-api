import { getTemplate } from '../queries/index'

export default {
  Query: {
    getTemplate: (_root: undefined, _args) => {
      const { text } = _args

      return getTemplate(text)
    }
  }
}
