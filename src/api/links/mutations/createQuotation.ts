import { createQuotation, getLink } from '../../../clients/mongodb/'
import getAllQuotatations from '../../../utils/getAllQuotatations'

export default async (
  args: {
    linkId: string;
    customerNumber: string;
    customerEmail: string;
    customerLocation: string;
    vehicleType: string;
	}
) => {

  const {
    linkId,
    customerNumber,
    customerEmail,
    customerLocation,
    vehicleType
  } = args

  const getLinkRes = await getLink(linkId)

  const allQuotations = await getAllQuotatations({
    origin: getLinkRes.businessLocation,
    destination: customerLocation,
    size: vehicleType
  })

  const res = await createQuotation({
    linkId,
    customerNumber,
    customerEmail,
    customerLocation,
    vehicleType,
    quotations: allQuotations
  })

  return {
    isSuccessful: res.isSuccessful,
    quotationId: res.quotationId
  }
}
