import fetch from 'node-fetch'

const convertToTransport = (size) => {
  switch (size) {
  case 'small':
    return '223427'
  case 'medium':
    return '223428'
  case 'large':
    return '223429'
  default:
    return '223427'
  }
}

const lalamoveRequest = async (req) => {
  const LALAMOVE_TOKEN = process.env.LALAMOVE_TOKEN
  const transport = convertToTransport(req.size)

  const res = await fetch(`https://sg-uapi.lalamove.com/?_m=price_calculate&_su=1615338774205ehll7400994726&args=%7B%22city_id%22%3A51001%2C%22order_vehicle_id%22%3A%${transport}%22%2C%22std_tag%22%3A%5B%5D%2C%22std_tag_ids%22%3A%5B%5D%2C%22spec_req%22%3A%5B%5D%2C%22order_time%22%3A1615339374%2C%22city_info_revision%22%3A226%2C%22is_get_max_discount_coupon%22%3A%221%22%2C%22addr_info%22%3A%5B%7B%22name%22%3A%22Alabang%22%2C%22lat_lon%22%3A%7B%22lat%22%3A${req.origin.x}%2C%22lon%22%3A${req.origin.y}%7D%2C%22city_id%22%3A51001%7D%2C%7B%22name%22%3A%22La+Vista+Subdivision+Homeowners+Association%22%2C%22lat_lon%22%3A%7B%22lat%22%3A${req.destination.x}%2C%22lon%22%3A${req.destination.y}%7D%2C%22city_id%22%3A51001%7D%5D%2C%22type%22%3A2%2C%22lat_lon%22%3A%5B%7B%22lat%22%3A${req.origin.x}%2C%22lon%22%3A${req.origin.y}%7D%2C%7B%22lat%22%3A${req.destination.x}%2C%22lon%22%3A${req.destination.y}%7D%5D%2C%22same_num%22%3A1%2C%22pay_type%22%3A0%7D&token=${LALAMOVE_TOKEN}&hcountry=50000&hlang=en_ph&is_ep=2&os=web`, {
    'headers': {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1'
    },
    'referrer': 'https://web.lalamove.com/',
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'body': null,
    'method': 'GET',
    'mode': 'cors'
  }).then(res => res.json())

  return res.data.price_info.final_price.toString().slice(0, -2)
}

export default lalamoveRequest