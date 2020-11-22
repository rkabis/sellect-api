import { createLink } from '../mutations/index'

export default {
  Mutation: {
    createLink: (
      _root: undefined,
      _args: {
        email: string;
      }
    ) => {

      const { email } = _args

      return createLink({ email })
    }
  }
}
