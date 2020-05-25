import fetch from 'node-fetch'

const googleDistanceLink = 'https://maps.googleapis.com/maps/api/distancematrix/json'
const googleGeocodeLink = 'https://maps.googleapis.com/maps/api/geocode/json'

const google = async(req: { destination: string; origin: string }) => {
  const googleApiKey = process.env.GOOGLE_API_KEY

  const originRes = await fetch(
    `${googleGeocodeLink}?key=${googleApiKey}&address=${req.origin}`
  )
    .then(res => res.json())

  const destinationRes = await fetch(
    `${googleGeocodeLink}?key=${googleApiKey}&address=${req.destination}`
  )
    .then(res => res.json())

  const res = await fetch(
    `${googleDistanceLink}?key=${googleApiKey}&origins=${req.origin}&destinations=${req.destination}`
  )
    .then(res => res.json())

  const badStatus = res.rows[0].elements[0].status == 'ZERO_RESULTS'

  return {
    origin: res.origin_addresses[0],
    destination: res.destination_addresses[0],
    distance: !badStatus && res.rows[0].elements[0].distance.text,
    duration: !badStatus && res.rows[0].elements[0].duration.text,
    destinationGeo: destinationRes.results[0].geometry.location,
    originGeo: originRes.results[0].geometry.location
  }
}

export default google