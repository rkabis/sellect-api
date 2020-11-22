import { updateLinkView } from '../../../clients/mongodb/'

export default async (
  args: {
		linkId: string;
	}
) => {

  const {
    linkId
  } = args

  const updateLinkViewRes = await updateLinkView(linkId)

  return {
    isSuccessful: updateLinkViewRes
  }
}
