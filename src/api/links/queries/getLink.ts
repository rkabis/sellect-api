import { getLink } from '../../../clients/mongodb/'

export default async (
  args: {
		linkId: string;
	}
) => {

  const { linkId } = args

  const getLinkRes = await getLink(linkId)

  return {
    linkId: getLinkRes.id,
    businessName: getLinkRes.businessName,
    businessEmail: getLinkRes.businessEmail,
    businessHours: getLinkRes.businessHours,
    businessLocation: getLinkRes.businessLocation,
    businessContactNumber: getLinkRes.businessContactNumber,
    views: getLinkRes.views,
    quotations: getLinkRes.quotations,
    businessPhoto: getLinkRes.businessPhoto
  }
}
