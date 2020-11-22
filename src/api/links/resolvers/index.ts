import {
  createLink,
  updateLinkView,
  createLinkQuotation
} from '../mutations/'
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
          businessName: string;
        };
      }
    ) => {

      const {
        email,
        hours,
        location,
        contactNumber,
        businessName
      } = _args.input

      return createLink({
        email,
        hours,
        location,
        contactNumber,
        businessName
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
    },
    createLinkQuotation: (
      _root: undefined,
      _args: {
        input: {
          linkId: string;
          customerLocation: string;
          customerEmail: string;
          customerNumber: string;
          vehicleType: string;
        };
      }
    ) => {
      const {
        linkId,
        customerNumber,
        customerEmail,
        customerLocation,
        vehicleType
      } = _args.input

      return createLinkQuotation({
        linkId,
        customerNumber,
        customerEmail,
        customerLocation,
        vehicleType
      })
    }
  }
}
