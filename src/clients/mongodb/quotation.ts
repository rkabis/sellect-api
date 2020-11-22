import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'

const QuotationSchema = new Schema({
  linkId: String,
  customerNumber: String,
  customerEmail: String,
  customerLocation: String,
  vehicleType: String,
  quotations: Object
})

QuotationSchema.plugin(timestamps)

export const Quotation = mongoose.model('Quotation', QuotationSchema)