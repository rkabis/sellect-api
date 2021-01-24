import {
  createLink,
  updateLinkView,
  createQuotation
} from '../mutations/'
import { getLink, getQuotation } from '../queries/'

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
    },
    getQuotation: (
      _root: undefined,
      _args: {
        quotationId: string;
      }
    ) => {

      const { quotationId } = _args

      return getQuotation({ quotationId })
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
          businessPhoto: string;
        };
      }
    ) => {

      const {
        businessEmail,
        businessHours,
        businessLocation,
        businessContactNumber,
        businessName,
        businessPhoto
      } = _args.input

      return createLink({
        businessEmail,
        businessHours,
        businessLocation,
        businessContactNumber,
        businessName,
        businessPhoto
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
    createQuotation: (
      _root: undefined,
      _args: {
        input: {
          linkId: string;
          customerName: string;
          customerLocation: string;
          customerEmail: string;
          customerContactNumber: string;
          vehicleType: string;
        };
      }
    ) => {
      const {
        linkId,
        customerName,
        customerContactNumber,
        customerEmail,
        customerLocation,
        vehicleType
      } = _args.input

      return createQuotation({
        linkId,
        customerName,
        customerContactNumber,
        customerEmail,
        customerLocation,
        vehicleType
      })
    }
  }
}
