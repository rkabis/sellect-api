import { updateLinkQuotation } from '../../../clients/mongodb/'

export default async (
  args: {
		linkId: string;
	}
) => {

  const {
    linkId
  } = args

  const updateLinkQuotationRes = await updateLinkQuotation(linkId)

  return {
    isSuccessful: updateLinkQuotationRes
  }
}
