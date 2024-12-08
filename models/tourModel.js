const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    // this called schema option
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group Size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingAverage: { type: Number, default: 4.5 },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  // trim removes all the whitespaces
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(), // In mongoose, it  automatically be converted to today date.
  },
  startDates: {
    type: [Date],
  },
});

// is like a convention to always put the models name to uppercase
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
