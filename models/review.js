import mongoose from 'mongoose'

var Schema = mongoose.Schema

var review = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

mongoose.models = {}

var Review = mongoose.model('Review', review)

export default Review
