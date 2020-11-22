import { Link } from './link'

export const CreateLink = async (req) => {
  const link = new Link({
    email: req.email,
    contactNumber: req.contactNumber,
    hours: req.hours,
    location: req.location
  })

  const res = await link.save()

  if (res) {
    return {
      isSuccessful: true,
      linkId: res._id
    }
  } else {
    return {
      isSuccessful: false,
      linkId: null
    }
  }
}