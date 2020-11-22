import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'

const LinkSchema = new Schema({
  email: String,
  contactNumber: String,
  hours: {
    lower: String,
    upper: String
  },
  location: String
})

LinkSchema.plugin(timestamps)

export const Link = mongoose.model('Link', LinkSchema)