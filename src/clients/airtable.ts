import Airtable from 'airtable'

export const trackQuery = (req) => {
  const airtableAPIKey = process.env.AIRTABLE_API_KEY
  const airtableQueryKey = process.env.AIRTABLE_QUERYTRACKER_ID

  const tableName = process.env.AIRTABLE_TABLE

  const base = new Airtable({ apiKey: airtableAPIKey }).base(airtableQueryKey)

  const randomId = `${Math.random()}-${req.date}`
  const quotes = req.quotes

  base(tableName).create({
    'ID': randomId,
    'Destination': req.destination.name,
    'Time': req.date,
    'Origin': req.origin.name,
    'Grab': quotes.grab,
    'Lalamove': quotes.lalamove,
    'Transportify': quotes.transportify,
    'MrSpeedy': quotes.speedy,
    'Cookie': req.cookie,
    'Distance': req.distance,
    'Duration': req.duration,
    'Origin_Geo': `${req.origin.lng}, ${req.origin.lat}`,
    'Destination_Geo': `${req.destination.lng}, ${req.destination.lat}`,
    'Size': req.size
  }, function(err, record) {
    if (err) {
      console.error(err)
      return
    }
    console.log(record.getId())
  })
}

export const trackError = (req: any) => {
  const airtableAPIKey = process.env.AIRTABLE_API_KEY
  const airtableQueryKey = process.env.AIRTABLE_ERRORTRACKER_ID
  const tableName = process.env.AIRTABLE_TABLE

  const base = new Airtable({ apiKey: airtableAPIKey }).base(airtableQueryKey)

  base(tableName).create({
    'ID': `Backend-${req.date}`,
    'Cookie': req.cookie,
    'Error': `${req.provider}-${req.error}`,
    'Origin': req.origin,
    'Destination': req.destination
  }, function(err: any, record: any) {
    if (err) {
      console.error(err)
      return
    }
    console.log(record.getId())
  } as any)
}