const googleApiLink = 'https://maps.googleapis.com/maps/api/distancematrix/json'

import fetch from 'node-fetch'

export default async (args) => {
  const googleApiKey = process.env.GOOGLE_API_KEY
  const { origin, destination } = args

  const res = await fetch(
    `${googleApiLink}?key=${googleApiKey}&origins=${origin}&destinations=${destination}`
  )
    .then(res => res.json())

  return {
    deliveryRequest: {
      origin,
      destination
    },
    deliveryResponse: {
      origin: res.origin_addresses[0],
      destination: res.destination_addresses[0]
    },
    quoteResponse: {
      distance: res.rows[0].elements[0].distance.text,
      duration: res.rows[0].elements[0].duration.text
    }
  }
}
