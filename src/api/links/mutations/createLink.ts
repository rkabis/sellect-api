import { CreateLink } from '../../../clients/mongodb/'

export default async (
  args: {
		email: string;
		contactNumber: string;
		hours: {
			lower: string;
			upper: string;
		};
		location: string;
	}
) => {

  const {
    email,
    contactNumber,
    hours,
    location
  } = args

  const createLinkRes = await CreateLink({
    email,
    hours,
    location,
    contactNumber
  })

  return createLinkRes
}
