import { createLink } from '../../../clients/mongodb/'

export default async (
  args: {
		email: string;
		contactNumber: string;
		hours: {
			lower: string;
			upper: string;
		};
		location: string;
    businessName: string;
	}
) => {

  const {
    email,
    contactNumber,
    hours,
    location,
    businessName
  } = args

  const createLinkRes = await createLink({
    email,
    hours,
    location,
    contactNumber,
    businessName
  })

  return {
    isSuccessful: createLinkRes.isSuccessful,
    linkId: createLinkRes.linkId
  }
}
