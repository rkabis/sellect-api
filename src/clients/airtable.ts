import Airtable from 'airtable'

export const trackQuery = (req) => {
  const airtableAPIKey = process.env.AIRTABLE_API_KEY
  const airtableQueryKey = process.env.AIRTABLE_QUERYTRACKER_ID
  console.log(Airtable)
  const base = new Airtable({ apiKey: airtableAPIKey }).base(airtableQueryKey)

  const randomId = `${Math.random()}-${req.date}`

  base('Imported table').create({
    'ID': randomId,
    'Destination': req.destination,
    'Time': req.date,
    'Origin': req.origin
  }, function(err, record) {
    if (err) {
      console.error(err)
      return
    }
    console.log(record.getId())
  })
}