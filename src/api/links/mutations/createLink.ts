import { createLink } from '../../../clients/mongodb/'

export default async (
  args: {
		businessEmail: string;
		businessContactNumber: string;
		businessHours: {
			lower: string;
			upper: string;
		};
		businessLocation: string;
    businessName: string;
    businessPhoto: string;
	}
) => {

  const {
    businessEmail,
    businessContactNumber,
    businessHours,
    businessLocation,
    businessName,
    businessPhoto
  } = args

  const createLinkRes = await createLink({
    businessEmail,
    businessHours,
    businessLocation,
    businessContactNumber,
    businessName,
    businessPhoto
  })

  return {
    isSuccessful: createLinkRes.isSuccessful,
    linkId: createLinkRes.linkId
  }
}
