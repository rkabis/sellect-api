import { Link } from './link'
import { Quotation } from './quotation'

export const createLink = async (req) => {
  const link = new Link({
    businessEmail: req.businessEmail,
    businessContactNumber: req.businessContactNumber,
    businessHours: req.businessHours,
    businessLocation: req.businessLocation,
    views: 0,
    businessName: req.businessName,
    businessPhoto: req.businessPhoto
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

export const createQuotation = async (req) => {
  const quotation = new Quotation({
    linkId: req.linkId,
    customerContactNumber: req.customerContactNumber,
    customerEmail: req.customerEmail,
    customerLocation: req.customerLocation,
    vehicleType: req.vehicleType,
    quotations: req.quotations
  })

  const res = await quotation.save()

  if (res) {
    return {
      isSuccessful: true,
      quotationId: res._id
    }
  } else {
    return {
      isSuccessful: false,
      quotationId: null
    }
  }
}

export const getQuotation = async (quotationId) => {
  try {
    const res = await Quotation.findById(quotationId)

    return res
  } catch (err) {
    console.log(err)
    return null
  }
}
