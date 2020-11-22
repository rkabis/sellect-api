import { createLinkQuotation } from '../../../clients/mongodb/'
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

  const allQuotations = await getAllQuotatations({
    origin: 'university of the philippines',
    destination: 'up diliman',
    size: 'small'
  })

  const res = await createLinkQuotation({
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
