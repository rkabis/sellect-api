import fetch from 'node-fetch'

const grabRequest = async (req) => {
  const origin = req.origin
  const destination = req.destination

  const res = await fetch(
    'https://api.grab.com/gewebbooking/v1/deliveries/quotes', {
      'headers': {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6Il9kZWZhdWx0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJFTlRFUlBSSVNFIiwiZXhwIjoxNTkwODUzNTMxLCJpYXQiOjE1OTA4MTAzMjgsImp0aSI6ImEyYzFmZDIyLWZlNWQtNDk1Ni1hY2UxLWU5MDA4ZDExMDFkMiIsImxtZSI6Ik5BVElWRSIsIm5hbWUiOiJya2FiaXNAdXAuZWR1LnBoIiwic3ViIjoiYWNkNDliMjktYmFkZC00NzMyLTgxYTAtOTAwMjBjY2QyMDg3In0.Qe_BmLpJoTd_iqE73TLeweToLO73HKUhgBZU7eIltd_H2t9htOLY5XvrXab0UF5E355odpl9dzG51VsLb7R-a_ABf-2zExKOSPZhXUDrFm3X7zmCAqh-nCluDya4zHKqEgRyzJDN5VpFYrntLhlYv18lfdaXEFMwzdocdyMObTiwR0_VK3GJ66Q7KUnGl77I4s7857FbGTnhAxjh_BcN3NCZkfQPm5JOPZNaOOgMaNT3cUXiaWtPuZCYQg9vukTqZye7eNoXLRqg_sM392tPPfALVyihcgy_R3YMiEfPHFZ7LCSXdoKsQQspbwZThnOV6RYhoA6ZUCJTZTBZbNMoxQ',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-mts-ssid': 'eyJhbGciOiJSUzI1NiIsImtpZCI6Il9kZWZhdWx0IiwidHlwIjoiSldUIn0.eyJhdWQiOiJFTlRFUlBSSVNFIiwiZXhwIjoxNTkwODUzNTMxLCJpYXQiOjE1OTA4MTAzMjgsImp0aSI6ImEyYzFmZDIyLWZlNWQtNDk1Ni1hY2UxLWU5MDA4ZDExMDFkMiIsImxtZSI6Ik5BVElWRSIsIm5hbWUiOiJya2FiaXNAdXAuZWR1LnBoIiwic3ViIjoiYWNkNDliMjktYmFkZC00NzMyLTgxYTAtOTAwMjBjY2QyMDg3In0.Qe_BmLpJoTd_iqE73TLeweToLO73HKUhgBZU7eIltd_H2t9htOLY5XvrXab0UF5E355odpl9dzG51VsLb7R-a_ABf-2zExKOSPZhXUDrFm3X7zmCAqh-nCluDya4zHKqEgRyzJDN5VpFYrntLhlYv18lfdaXEFMwzdocdyMObTiwR0_VK3GJ66Q7KUnGl77I4s7857FbGTnhAxjh_BcN3NCZkfQPm5JOPZNaOOgMaNT3cUXiaWtPuZCYQg9vukTqZye7eNoXLRqg_sM392tPPfALVyihcgy_R3YMiEfPHFZ7LCSXdoKsQQspbwZThnOV6RYhoA6ZUCJTZTBZbNMoxQ'
      },
      'referrer': 'https://express.grab.com/book/bookings',
      'referrerPolicy': 'no-referrer-when-downgrade',
      'body': `{"serviceTypes":[{"serviceID":77,"expressServiceID":0,"serviceTypeName":"GrabExpress Instant - Bike"},{"serviceID":2027,"expressServiceID":0,"serviceTypeName":"GrabExpress Pabili"},{"serviceID":5427,"expressServiceID":0,"serviceTypeName":"GrabExpress"},{"serviceID":5527,"expressServiceID":0,"serviceTypeName":"GrabExpress Instant - Car (Beta)"},{"serviceID":7143,"expressServiceID":1,"serviceTypeName":"GrabExpress Same Day - Bike"},{"serviceID":4484,"expressServiceID":0,"serviceTypeName":"GrabExpress - Food Delivery"},{"serviceID":5079,"expressServiceID":0,"serviceTypeName":"GrabExpress Instant - Bike (Round-trip COD)"},{"serviceID":8056,"expressServiceID":0,"serviceTypeName":"GrabExpress Instant - Corporate"}],"deliveries":[{"quoteRequestID":"6de65d5760c663d7ee1c7b8811694db5","serviceID":77,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":${origin.lat},"longitude":${origin.lng}},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":${destination.lat},"longitude":${destination.lng}},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"fcbc30cc7d451a65282cbe2a27ba9ff8","serviceID":2027,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":${origin.lat},"longitude":${origin.lng}},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":${destination.lat},"longitude":${destination.lng}},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"c986e5811fc2b7efd70ad64acbb95f3b","serviceID":5427,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":14.57252728,"longitude":121.0041641},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":14.654931,"longitude":121.064939},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"480669455cab09138e926e1f098f5c03","serviceID":5527,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":14.57252728,"longitude":121.0041641},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":14.654931,"longitude":121.064939},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"8e7edf7c4a16e849b70c0b71ad3f62c0","serviceID":7143,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":14.57252728,"longitude":121.0041641},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":14.654931,"longitude":121.064939},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"aed17640aa2cb6c0a9b4b81f38bc4763","serviceID":4484,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":14.57252728,"longitude":121.0041641},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":14.654931,"longitude":121.064939},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"ad08e5027ffff42b6bdadd089f36a350","serviceID":5079,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":14.57252728,"longitude":121.0041641},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":14.654931,"longitude":121.064939},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]},{"quoteRequestID":"6b0f5ab53941dcd0e76f0b53dd6880b0","serviceID":8056,"promoCode":null,"paymentMethodID":"","paymentMethodType":"CASH","itinerary":[{"coordinates":{"latitude":14.57252728,"longitude":121.0041641},"address":"Granate St, Sta Ana, Brgy. 804, Manila, Metro Manila, NCR, 1009","keywords":"Gil Store"},{"coordinates":{"latitude":14.654931,"longitude":121.064939},"address":"University Ave, UP Campus, Diliman, Quezon City, Metro Manila, NCR, 1101","keywords":"UP Diliman"}]}],"enterprise":{"companyID":1000066655,"companyName":"Gilmore Goods","groupID":1001235601,"groupName":"General","countryCode":"PH","isTripDescriptionMandatory":true,"username":"Ryan Abis"}}`,
      'method': 'POST',
      'mode': 'cors'
    }).then(res => res.json())

  const quote = res.deliveries[0].quotes.find(quote => quote.serviceID == 77).amount.toString()

  return quote.substring(0, quote.length - 2)
}

export default grabRequest