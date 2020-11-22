import { getQuotation } from '../../../clients/mongodb/'

export default async (
  args: {
		quotationId: string;
	}
) => {

  const { quotationId } = args

  const res = await getQuotation(quotationId)

  return {
    customerEmail: res.customerEmail
  }
}
