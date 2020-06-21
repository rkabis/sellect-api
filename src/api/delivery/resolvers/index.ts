import { getDeliveryQuote } from '../queries/index'

export default {
  Query: {
    getDeliveryQuote: (_root: undefined, _args: { origin: string; destination: string; cookie?: string }) => {
      const { origin, destination, cookie } = _args

      return getDeliveryQuote({ origin, destination, cookie })
    }
  }
}
