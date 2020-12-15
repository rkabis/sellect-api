import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'

const LinkSchema = new Schema({
  businessName: String,
  businessEmail: String,
  businessContactNumber: String,
  businessHours: {
    lower: String,
    upper: String
  },
  businessLocation: String,
  views: Number,
  businessPhoto: String
})

LinkSchema.plugin(timestamps)

export const Link = mongoose.model('Link', LinkSchema)