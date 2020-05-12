

import mrspeedy from '../../../clients/mrspeedy'
import google from '../../../clients/google'

export default async (args: {origin: string; destination: string}) => {
  const { origin, destination } = args

  const googleRes = await google({ origin, destination })

  const googleOrigin = googleRes.origin_addresses[0]
  const googleDestination = googleRes.destination_addresses[0]
  const dateNow = Date.now()

  const speedyQuote = await mrspeedy({
    origin: googleOrigin,
    destination: googleDestination,
    date: dateNow
  })

  return {
    deliveryRequest: {
      origin,
      destination
    },
    deliveryResponse: {
      origin: googleOrigin,
      destination: googleOrigin
    },
    quoteResponse: {
      distance: googleRes.rows[0].elements[0].distance.text,
      duration: googleRes.rows[0].elements[0].duration.text,
      fees: [
        { provider: 'MrSpeedy', fee: speedyQuote }
      ]
    }
  }
}
