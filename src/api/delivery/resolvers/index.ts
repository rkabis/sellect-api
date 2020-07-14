import { getDeliveryQuote } from '../queries/index'

export default {
  Query: {
    getDeliveryQuote: (
      _root: undefined,
      _args: {
				origin: string;
				destination: string;
				size?: string;
				cookie?: string;
			}
    ) => {

      const { origin, destination, size, cookie } = _args

      return getDeliveryQuote({ origin, destination, size, cookie })
    }
  }
}
