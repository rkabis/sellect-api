import {
  createQuotation,
  getLink,
  updateLinkQuotation
} from '../../../clients/mongodb/'
import getAllQuotatations from '../../../utils/getAllQuotatations'

export default async (
  args: {
    linkId: string;
    customerContactNumber: string;
    customerEmail: string;
    customerLocation: string;
    vehicleType: string;
	}
) => {

  const {
    linkId,
    customerContactNumber,
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
    customerContactNumber,
    customerEmail,
    customerLocation,
    vehicleType,
    quotations: allQuotations
  })

  if (res.isSuccessful) {
    updateLinkQuotation(linkId)
  }

  return {
    isSuccessful: res.isSuccessful,
    quotationId: res.quotationId
  }
}
