import fetch from 'node-fetch'

const googleApiLink = 'https://maps.googleapis.com/maps/api/distancematrix/json'

const google = async(req: { destination: string; origin: string }) => {
  const googleApiKey = process.env.GOOGLE_API_KEY

  const res = await fetch(
    `${googleApiLink}?key=${googleApiKey}&origins=${req.origin}&destinations=${req.destination}`
  )
    .then(res => res.json())

  return res
}

export default google