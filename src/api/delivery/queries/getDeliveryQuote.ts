import mrspeedy from '../../../clients/mrspeedy'
import google from '../../../clients/google'
import lalamove from '../../../clients/lalamove'
import transportify from '../../../clients/transportify'
import grab from '../../../clients/grab'
import { trackQuery } from '../../../clients/airtable'

export default async (
  args: {
    origin: string;
    destination: string;
    cookie?: string;
  }
) => {
  const { origin, destination, cookie } = args

  const googleRes = await google({ origin, destination })

  const googleOrigin = googleRes.origin
  const googleDestination = googleRes.destination
  const dateNow = Date.now()

  const speedyCall = () => mrspeedy({
    origin: googleOrigin,
    destination: googleDestination,
    date: dateNow
  })

  const lalamoveCall = () => lalamove({
    origin: { x: googleRes.originGeo.lat, y: googleRes.originGeo.lng },
    destination: { x: googleRes.destinationGeo.lat, y: googleRes.destinationGeo.lng }
  })

  const transportifyCall = () => transportify({
    origin: { x: googleRes.originGeo.lat, y: googleRes.originGeo.lng },
    destination: { x: googleRes.destinationGeo.lat, y: googleRes.destinationGeo.lng },
    date: dateNow
  })

  const grabCall = () => grab({
    origin: googleRes.originGeo,
    destination: googleRes.destinationGeo
  })

  const [
    speedyQuote,
    lalamoveQuote,
    transportifyQuote,
    grabQuote
  ] = await Promise.all([
    speedyCall(),
    lalamoveCall(),
    transportifyCall(),
    grabCall()
  ])

  trackQuery({
    origin: googleOrigin,
    destination: googleDestination,
    date: dateNow.toString(),
    quotes: {
      grab: grabQuote,
      speedy: speedyQuote,
      lalamove: lalamoveQuote,
      transportify: transportifyQuote
    },
    cookie
  })

  return {
    deliveryRequest: {
      origin,
      destination
    },
    deliveryResponse: {
      origin: {
        name: googleOrigin,
        lng: googleRes.originGeo.lng,
        lat: googleRes.originGeo.lat
      },
      destination: {
        name: googleDestination,
        lng: googleRes.destinationGeo.lng,
        lat: googleRes.destinationGeo.lat
      }
    },
    quoteResponse: {
      distance: googleRes.distance,
      duration: googleRes.duration,
      fees: [
        { provider: 'MrSpeedy', fee: speedyQuote },
        { provider: 'Lalamove', fee: lalamoveQuote },
        { provider: 'Transportify', fee: transportifyQuote },
        { provider: 'Grab', fee: grabQuote }
      ]
    }
  }
}
