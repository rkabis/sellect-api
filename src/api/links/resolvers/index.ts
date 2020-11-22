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
          businessEmail: string;
          businessHours: {
            lower: string;
            upper: string;
          };
          businessLocation: string;
          businessContactNumber: string;
          businessName: string;
        };
      }
    ) => {

      const {
        businessEmail,
        businessHours,
        businessLocation,
        businessContactNumber,
        businessName
      } = _args.input

      return createLink({
        businessEmail,
        businessHours,
        businessLocation,
        businessContactNumber,
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
