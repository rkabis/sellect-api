import fetch from 'node-fetch'

const mrspeedy = async (req: {destination: string; origin: string; date: number}): Promise<string> => {

  const res = await fetch(
    'https://apitest.mrspeedy.ph/order-r/calculate-order', {
      'headers': {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-csrf-token': 'f6e7922bd1999e6e6f68363c50438bcf:5211f898078a7a32',
        'cookie': 'intercom-id-g4atstxw=c92a8236-5909-498b-94d4-d7ea95f0cb18; utm_source=mrspeedy.ph; utm_medium=referral; first_visit_referrer=mrspeedy.ph%2Fbusiness-api%2Fdoc; first_visit_datetime=2020-05-03T15%3A35%3A24%2B08%3A00; session=eyJuYW1lc3BhY2UiOiJjbGllbnRfYXBpIn0.dadLqW7F25YsZ-_MmjkRdw3qYYTZrLrN1IXtLsSe1dg.390342565e; timeOffset=28800; utm_external_referrer=mrspeedy.ph%2Fcabinet%2Fintegration; amplitude_id_2b4bb109e0167cf5afb41abf22b0af05mrspeedy.ph=eyJkZXZpY2VJZCI6IjgxNjUyZDA0LWFjZGYtNDUyMi1iZTQ0LWFkMThkYWNiODIxNlIiLCJ1c2VySWQiOiIzNTgwNzEiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE1ODg0OTEyMzk1NTksImxhc3RFdmVudFRpbWUiOjE1ODg0OTI5NTEyMDcsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; intercom-session-g4atstxw=ME1Zcjhrc0V4dFBlbVNkeEdVT3JiK1psVHNMUEpZU3A5VXpRdmZYQk9lTFE1dWF5WU41UHZpdDdGYkR6YkZBcS0tMXZEeXVudnVrY2NtdVpWMkNFUWhMZz09--7a83ce5a6ff22bed3ca9d6390e432a544791d82b'
      },
      'referrer': 'https://apitest.mrspeedy.ph/order?from_address=Gilmore+Townhomes%2C+Granada%2C+Quezon+City%2C+Metro+Manila%2C+Philippines&from_place_id=ChIJr3VL2dO3lzMRE_LcFtoa3dk&to_address=UP+Diliman%2C+Diliman%2C+Quezon+City%2C+Metro+Manila%2C+Philippines&to_place_id=ChIJxeVAdHK3lzMRjwzYDU0vSek&vehicle=motorbike',
      'referrerPolicy': 'no-referrer-when-downgrade',
      'body': `{"region_id":29,"form_type":"standard","vehicle_type_id":"8","total_weight":"0","matter":"","experiments":[],"cargo_dimensions":null,"is_oversized_item":false,"backpayment_details":"","payment_method":"cash","bank_card_id":null,"promo_code":"","require_loading":false,"sms_notification":true,"recipients_sms_notification":true,"is_asap":false,"points":[{"point_mode":"incity","point_id":null,"uid":"0","address":"${req.origin}","latitude":null,"longitude":null,"phone":"","date":"${req.date}","required_time_start":"","required_time":"","note":"","entrance_number":"","floor_number":"","apartment_number":"","invisible_mile_navigation_instructions":"","is_order_payment_here":false},{"point_mode":"incity","point_id":null,"uid":"1","address":"${req.destination}","latitude":null,"longitude":null,"phone":"","date":"${req.date}","required_time_start":"","required_time":"","note":"","entrance_number":"","floor_number":"","apartment_number":"","invisible_mile_navigation_instructions":"","is_order_payment_here":false}],"insurance":"","client_phone":"","client_phone_verification_code":""}`,
      'method': 'POST',
      'mode': 'cors'
    })
    .then(res => res.json())
    .then(json => json.order.delivery_fee)

  return res
}

export default mrspeedy