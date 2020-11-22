import { createLink, updateLinkView } from '../mutations/'
import { getLink } from '../queries/'

export default {
  Query: {
    getLink: (
      _root: undefined,
      _args: {
        linkId: string;
      }
    ) => {

      const {
        linkId
      } = _args

      return getLink({ linkId })
    }
  },
  Mutation: {
    createLink: (
      _root: undefined,
      _args: {
        input: {
          email: string;
          hours: {
            lower: string;
            upper: string;
          };
          location: string;
          contactNumber: string;
        };
      }
    ) => {

      const {
        email,
        hours,
        location,
        contactNumber
      } = _args.input

      return createLink({
        email,
        hours,
        location,
        contactNumber
      })
    },
    updateLinkView: (
      _root: undefined,
      _args: {
        linkId: string;
      }
    ) => {
      const { linkId } = _args

      return updateLinkView({ linkId })
    }
  }
}
