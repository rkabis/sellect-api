import {
  createQuotation,
  getLink,
  updateLinkQuotation
} from '../../../clients/mongodb/'
import getAllQuotatations from '../../../utils/getAllQuotatations'
import sgMail from '@sendgrid/mail'

export default async (
  args: {
    linkId: string;
    customerName: string;
    customerContactNumber: string;
    customerEmail: string;
    customerLocation: string;
    vehicleType: string;
	}
) => {

  const {
    linkId,
    customerName,
    customerContactNumber,
    customerEmail,
    customerLocation,
    vehicleType
  } = args

  const getLinkRes = await getLink(linkId)

  const allQuotations = await getAllQuotatations({
    origin: getLinkRes.businessLocation,
    destination: customerLocation,
    size: vehicleType
  })

  const createQuotationRes = await createQuotation({
    linkId,
    customerName,
    customerContactNumber,
    customerEmail,
    customerLocation,
    vehicleType,
    quotations: allQuotations
  })

  if (createQuotationRes.isSuccessful) {
    updateLinkQuotation(linkId)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const domain = process.env.DASHBOARD_DOMAIN
    const templateId = process.env.SENDGRID_QUOTATION_TEMPLATE_ID

    const msg = {
      to: customerEmail,
      from: 'no-reply@sellect.express',
      templateId: templateId,

      dynamic_template_data: {
        customerName: customerName,
        customerEmail: customerEmail,
        businessName: getLinkRes.businessName,
        quotationLink: `${domain}/quotation?id=${createQuotationRes.quotationId}`
      }
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return {
    isSuccessful: createQuotationRes.isSuccessful,
    quotationId: createQuotationRes.quotationId
  }
}
