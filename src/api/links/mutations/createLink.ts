import { createLink } from '../../../clients/mongodb/'
import sgMail from '@sendgrid/mail'

export default async (
  args: {
		businessEmail: string;
		businessContactNumber: string;
		businessHours: {
			lower: string;
			upper: string;
		};
		businessLocation: string;
    businessName: string;
    businessPhoto: string;
	}
) => {

  const {
    businessEmail,
    businessContactNumber,
    businessHours,
    businessLocation,
    businessName,
    businessPhoto
  } = args

  const createLinkRes = await createLink({
    businessEmail,
    businessHours,
    businessLocation,
    businessContactNumber,
    businessName,
    businessPhoto
  })

  if (createLinkRes.isSuccessful) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const domain = process.env.DASHBOARD_DOMAIN
    const templateId = process.env.SENDGRID_PICKUP_TEMPLATE_ID

    const msg = {
      to: businessEmail,
      from: 'no-reply@sellect.express',
      templateId: templateId,

      dynamic_template_data: {
        businessName: businessName,
        dashboardLink: `${domain}/dashboard?id=${createLinkRes.linkId}`,
        pickupLink: `${domain}/link?id=${createLinkRes.linkId}`
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
    isSuccessful: createLinkRes.isSuccessful,
    linkId: createLinkRes.linkId
  }
}
