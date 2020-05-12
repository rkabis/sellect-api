import mrspeedy from '../../../clients/mrspeedy'
import google from '../../../clients/google'
import lalamove from '../../../clients/lalamove'

export default async (args: {origin: string; destination: string}) => {
  const { origin, destination } = args

  const googleRes = await google({ origin, destination })

  const googleOrigin = googleRes.origin
  const googleDestination = googleRes.destination
  const dateNow = Date.now()

  const speedyQuote = await mrspeedy({
    origin: googleOrigin,
    destination: googleDestination,
    date: dateNow
  })

  const lalamoveQuote = await lalamove({
    origin: { x: googleRes.originGeo.lat, y: googleRes.originGeo.lng },
    destination: { x: googleRes.destinationGeo.lat, y: googleRes.destinationGeo.lng }
  })

  return {
    deliveryRequest: {
      origin,
      destination
    },
    deliveryResponse: {
      origin: googleOrigin,
      destination: googleDestination
    },
    quoteResponse: {
      distance: googleRes.distance,
      duration: googleRes.duration,
      fees: [
        { provider: 'MrSpeedy', fee: speedyQuote },
        { provider: 'Lalamove', fee: lalamoveQuote }
      ]
    }
  }
}
