import { Link } from './link'

export const createLink = async (req) => {
  const link = new Link({
    email: req.email,
    contactNumber: req.contactNumber,
    hours: req.hours,
    location: req.location,
    views: 0,
    businessName: req.businessName
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

export const getLink = async (linkId) => {
  try {
    const res = await Link.findById(linkId)

    return res
  } catch (err) {
    console.log(err)
    return null
  }
}

export const updateLinkView = async (linkId) => {
  try {
    await Link.updateOne(
      { _id: linkId },
      { $inc: { 'views': 1 } }
    )

    return true
  } catch (err) {
    console.log(err)

    return false
  }
}

