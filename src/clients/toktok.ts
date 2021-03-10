import fetch from 'node-fetch'

const toktok = async (
  req: {
    destination: any;
    origin: any;
   }
): Promise<string> => {

  const { destination, origin } = req

  const res = await fetch(`https://toktok.ph/app/websiteBooking/getDeliveryPriceAndDirections/?f_sender_lat=${origin.lat}&f_sender_lon=${origin.lng}&f_promo_code=&destinations%5B0%5D%5Brecipient_lat%5D=${destination.lat}&destinations%5B0%5D%5Brecipient_lon%5D=${destination.lng}&isExpress=false&isCashOnDelivery=false`, {
    'headers': {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sec-gpc': '1',
      'x-requested-with': 'XMLHttpRequest',
      'cookie': '__cfduid=d2e25c7bf3c4c27a36b3fc903301618a81609842215; cp_toktok_session_prod=afnjlaaekjfu2ues1ffcm5mmcr5cggem'
    },
    // "referrer": "https://toktok.ph/delivery?senderLoc=Gilmore+Avenue%2C+New+Manila%2C+Quezon+City%2C+Metro+Manila%2C+Philippines&f_sender_address=Gilmore+Ave%2C+New+Manila%2C+Quezon+City%2C+Metro+Manila%2C+Philippines&f_sender_address_lat=14.6152691&f_sender_address_lng=121.0337972&f_sen_add_in_city=Quezon+City&f_sen_add_in_pro=&f_sen_add_in_reg=Metro+Manila&f_sen_add_in_coun=Philippines&recepientLoc=Greenhills+Mall%2C+Ortigas+Avenue%2C+San+Juan%2C+Metro+Manila%2C+Philippines&f_recepient_address=Ortigas+Ave%2C+San+Juan%2C+1502+Metro+Manila%2C+Philippines&f_recepient_address_lat=14.6013926&f_recepient_address_lng=121.0491142&f_rec_add_in_city=San+Juan&f_rec_add_in_pro=&f_rec_add_in_reg=Metro+Manila&f_rec_add_in_coun=Philippines&f_distance_hidden=2382&f_duration_hidden=505&f_price=&f_directions_data_hidden=2382",
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'body': null,
    'method': 'GET',
    'mode': 'cors'
  }).then(res => res.json())

  return res.result.data.getDeliveryPriceAndDirections.pricing.price.toString()
}

export default toktok