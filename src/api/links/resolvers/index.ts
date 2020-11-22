import { createLink } from '../mutations/index'

export default {
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
    }
  }
}
