import { getDeliveryQuote } from '../queries/index'

export default {
  Query: {
    getDeliveryQuote: (_root: undefined, _args: { origin: string; destination: string }) => {
      const { origin, destination } = _args

      return getDeliveryQuote({ origin, destination })
    }
  }
}
