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
    'Destination': req.destination,
    'Time': req.date,
    'Origin': req.origin,
    'Grab': quotes.grab,
    'Lalamove': quotes.lalamove,
    'Transportify': quotes.transportify,
    'MrSpeedy': quotes.speedy,
    'Cookie': req.cookie
  }, function(err, record) {
    if (err) {
      console.error(err)
      return
    }
    console.log(record.getId())
  })
}