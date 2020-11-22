// import { createLinkQuotation } from '../../../clients/mongodb/'

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

  // const createLinkRes = await createLink({
  //   email,
  //   hours,
  //   location,
  //   contactNumber,
  //   businessName
  // })

  return {
    isSuccessful: true,
    quotationId: '123'
  }
}
