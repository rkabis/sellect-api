import { getQuotation, getLink } from '../../../clients/mongodb/'

export default async (
  args: {
quotationId: string;
}
) => {

  const { quotationId } = args

  const quotationRes = await getQuotation(quotationId)
  const linkRes = await getLink(quotationRes.linkId)

  const location = quotationRes.quotations.locationResponse
  const quote = quotationRes.quotations.quoteResponse

  return {
    quotationId,
    businessDetails: {
      businessName: linkRes.businessName,
      businessContactNumber: linkRes.businessContactNumber,
      businessHours: linkRes.businessHours
    },
    customerDetails: {
      customerName: quotationRes.customerName,
      customerContactNumber: quotationRes.customerContactNumber
    },
    tripDetails: {
      vehicleType: quotationRes.vehicleType,
      origin: {
        name: location.origin.name,
        lng: location.origin.lng,
        lat: location.origin.lat
      },
      destination: {
        name: location.destination.name,
        lng: location.destination.lng,
        lat: location.destination.lat
      },
      distance: quote.distance,
      duration: quote.duration,
      fees: quote.fees
    }
  }
}
