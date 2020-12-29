import { getQuotation } from '../../../clients/mongodb/'

export default async (
  args: {
quotationId: string;
}
) => {

  const { quotationId } = args

  const res = await getQuotation(quotationId)

  const location = res.quotations.locationResponse
  const quote = res.quotations.quoteResponse

  return {
    quotationId,
    vehicleType: res.vehicleType,
    origin: {
      location: location.origin.name
    },
    destination: {
      location: location.destination.name
    },
    distance: quote.distance,
    duration: quote.duration,
    fees: quote.fees
  }
}
