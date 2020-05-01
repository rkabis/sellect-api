import { getDeliveryQuote } from '../queries/index'

export default {
  Query: {
    getDeliveryQuote: (_root: undefined, _args) => {
      const { origin, destination } = _args

      return getDeliveryQuote({ origin, destination })
    }
  }
}
