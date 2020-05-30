import fetch from 'node-fetch'

const transportifyRequest = async (req) => {
  const origin = req.origin
  const destination = req.destination
  const dateNow = req.date

  const res = await fetch(
    'https://webapp.transportify.com.ph/api/v3/bookings/calculate',
    {
      'headers': {
        'accept': '*/*',
        'accept-language': 'en',
        'authorization': '',
        'content-type': 'application/json',
        'device-id': '2be587cde25cec76ee6adb931282da5b',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'cookie': 'web_device_id=2be587cde25cec76ee6adb931282da5b; _deliveree_ror_session=eXNEWEU2aXF6WmR5SnlZTGFDa0hmcFEvK2M4UjVMcDh4RW9oWk1lTksvdS9NcjhhS0QwSngrUjU1RHhoNEUwL0xWUDJvNzM5R1U1dE5PbnJkelFueW9CWmxrQmlWV1hLY2RnNmpyaUYxMDNqQ2toMGllOGN6R2pMZ3ExclpDUFZqSmhmMVZHb0ZReGl6ajNsclFzNWtXUFFWeEpiZlBYaG1Qd01GYVp2RGVheSthVFY2Q29TUVM5R2NsUk1COUdzK3pkSzlTNVcrdVZORVRxR2xxY3ByQ3YwYTJnbnBiaDF6cHN6L1YwaEZndz0tLXBYcXlLWjBtZ2l2R045TzJWV2ZZT0E9PQ%3D%3D--42092ab69037dd8de1d5f4c679e0fbc9f4b9680e; _fw_crm_v=62ebb1bd-6d1a-47f3-e7cc-e52e3c4ac824'
      },
      'referrer': 'https://webapp.transportify.com.ph/?area_id=5&lang=en',
      'referrerPolicy': 'no-referrer-when-downgrade',
      'body': `{"locations_attributes":[{"latitude":${origin.x},"longitude":${origin.y},"need_cod":false,"cod_invoice_fees":"","extra_requirement_locations_attributes":[],"address_components":[{"long_name":"249","short_name":"249","types":["subpremise"]},{"long_name":"216","short_name":"216","types":["street_number"]},{"long_name":"Katipunan Avenue","short_name":"Katipunan Ave","types":["route"]},{"long_name":"Diliman","short_name":"Diliman","types":["sublocality_level_1","sublocality","political"]},{"long_name":"Quezon City","short_name":"QC","types":["locality","political"]},{"long_name":"Metro Manila","short_name":"NCR","types":["administrative_area_level_1","political"]},{"long_name":"Philippines","short_name":"PH","types":["country","political"]},{"long_name":"1800","short_name":"1800","types":["postal_code"]}],"name":"U.P. Town Center, Katipunan Avenue, Diliman, Quezon City, Metro Manila, Philippines"},{"latitude":${destination.x},"longitude":${destination.y},"need_cod":false,"cod_invoice_fees":"","extra_requirement_locations_attributes":[],"address_components":[{"long_name":"Katipunan Avenue","short_name":"Katipunan Ave","types":["route"]},{"long_name":"Quezon City","short_name":"QC","types":["locality","political"]},{"long_name":"Metro Manila","short_name":"NCR","types":["administrative_area_level_1","political"]},{"long_name":"Philippines","short_name":"PH","types":["country","political"]},{"long_name":"1108","short_name":"1108","types":["postal_code"]}],"name":"Ateneo de Manila University, Katipunan Avenue, Quezon City, Metro Manila, Philippines"}],"company_id":0,"vehicle_type_id":34,"discount_code":"","round_trip_discount":false,"time_type":"now","pickup_time":"${dateNow}","full_day_selected_amount":1,"booking_extra_requirements_attributes":[{"extra_requirement_id":1093,"selected_amount":1,"is_flat":true,"position":0,"unit_price":0}],"enable_quote":true,"quote_id":"","quick_choice_id":51,"include":["settlements"]}`,
      'method': 'POST',
      'mode': 'cors'
    }).then(res => res.json())

  return res.object.total_fees.toString()
}

export default transportifyRequest