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
    email: getLinkRes.email,
    hours: getLinkRes.hours,
    location: getLinkRes.location,
    contactNumber: getLinkRes.contactNumber
  }
}
