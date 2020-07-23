import fetch from 'node-fetch'
import cleanString from '../utils/cleanString'

const googleDistanceLink = 'https://maps.googleapis.com/maps/api/distancematrix/json'
const googleGeocodeLink = 'https://maps.googleapis.com/maps/api/geocode/json'

const google = async(req: { destination: string; origin: string }) => {
  const googleApiKey = process.env.GOOGLE_API_KEY

  const origin = cleanString(req.origin)
  const destination = cleanString(req.destination)

  const originRes = await fetch(
    `${googleGeocodeLink}?key=${googleApiKey}&address=${cleanString(origin)}&components=country:PH`
  )
    .then(res => res.json())

  const destinationRes = await fetch(
    `${googleGeocodeLink}?key=${googleApiKey}&address=${cleanString(destination)}&components=country:PH`
  )
    .then(res => res.json())

  const res = await fetch(
    `${googleDistanceLink}?key=${googleApiKey}&origins=${origin}&destinations=${destination}`
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