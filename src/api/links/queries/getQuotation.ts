import { getQuotation } from '../../../clients/mongodb/'

export default async (
  args: {
		quotationId: string;
	}
) => {

  const { quotationId } = args

  const res = await getQuotation(quotationId)
  console.log(res)
  return {
    // linkId: getLinkRes.id,
    customerEmail: res.customerEmail
    // businessEmail: getLinkRes.businessEmail,
    // businessHours: getLinkRes.businessHours,
    // businessLocation: getLinkRes.businessLocation,
    // contactNumber: getLinkRes.contactNumber
  }
}
