// import { getLink } from '../../../clients/mongodb/'

export default async (
  args: {
		linkId: string;
	}
) => {

  const { linkId } = args

  // const getLinkRes = await getLink({ linkId })

  return {
    linkId
  }
}
