import fetch from 'node-fetch'

const convertToTransport = (size) => {
  switch (size) {
  case 'small':
    return 'MOTORCYCLE'
  case 'medium':
    return 'UV_SMALL'
  case 'large':
    return 'VAN'
  default:
    return 'MOTORCYCLE'
  }
}

const lalamoveRequest = async (req) => {
  const transport = convertToTransport(req.size)

  const res = await fetch(
    `https://app.lalamove.com/api/v5/vanpricecal?version=2.34.1&revision=36&os=webapp&app=user&access_token=A2vxCOpWsuYG1pSvudqRROALSaxJfTkUvhWx9pQr&client_id=7318916&country=PH_MNL&args=%7B%22redeem%22%3A%22%22%2C%22latlong%22%3A%22${req.origin.x}%7C${req.origin.y}%2C${req.destination.x}%7C${req.destination.y}%22%2C%22normal_req%22%3A%5B%7B%22service_type%22%3A%22${transport}%22%7D%5D%2C%22special_req%22%3A%5B%5D%7D`,
    {
      'headers': {
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-llm-apptype': 'USER',
        'x-llm-location': 'PH_MNL'
      },
      'referrer': 'https://web.lalamove.com/',
      'referrerPolicy': 'no-referrer-when-downgrade',
      'body': null,
      'method': 'GET',
      'mode': 'cors'
    }).then(res => res.json())

  return res.data.basic.toString()
}

export default lalamoveRequest