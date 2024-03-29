import mrspeedy from '../clients/mrspeedy'
import google from '../clients/google'
import lalamove from '../clients/lalamove'
import transportify from '../clients/transportify'
import grab from '../clients/grab'
import happymove from '../clients/happymove'
import toktok from '../clients/toktok'
import jgo from '../clients/jgo'

export default async (
  args: {
    origin: string;
    destination: string;
    size?: string;
    cookie?: string;
  }
) => {
  const { origin, destination, size } = args

  const googleRes = await google({ origin, destination })

  const googleOrigin = googleRes.origin
  const googleDestination = googleRes.destination
  const dateNow = Date.now()

  const speedyCall = () => mrspeedy({
    origin: googleOrigin,
    destination: googleDestination,
    date: dateNow,
    size
  })

  const lalamoveCall = () => lalamove({
    origin: { x: googleRes.originGeo.lat, y: googleRes.originGeo.lng },
    destination: { x: googleRes.destinationGeo.lat, y: googleRes.destinationGeo.lng },
    size
  }).catch(err => console.log(err))

  const transportifyCall = () => transportify({
    origin: { x: googleRes.originGeo.lat, y: googleRes.originGeo.lng },
    destination: { x: googleRes.destinationGeo.lat, y: googleRes.destinationGeo.lng },
    date: dateNow,
    size
  }).catch(err => console.log(err))

  const grabCall = () => grab({
    origin: googleRes.originGeo,
    destination: googleRes.destinationGeo,
    size
  }).catch(err => console.log(err))

  const happymoveCall = () => happymove({
    size,
    distance: googleRes.distance
  })

  const toktokCall = () => toktok({
    origin: googleRes.originGeo,
    destination: googleRes.destinationGeo
  })

  const jgoCall = () => jgo({ distance: googleRes.distance })

  const [
    speedyQuote,
    lalamoveQuote,
    transportifyQuote,
    grabQuote,
    happymoveQuote,
    toktokQuote,
    jgoQuote
  ] = await Promise.all([
    speedyCall(),
    lalamoveCall(),
    transportifyCall(),
    grabCall(),
    happymoveCall(),
    toktokCall(),
    jgoCall()
  ])

  return {
    locationInput: {
      origin,
      destination
    },
    locationResponse: {
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
        { provider: 'Grab', fee: grabQuote },
        { provider: 'Happymove', fee: happymoveQuote },
        { provider: 'Toktok', fee: toktokQuote },
        { provider: 'JGO', fee: jgoQuote }
      ]
    }
  }
}
