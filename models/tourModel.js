const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    // this called schema option
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  rating: { type: Number, default: 4.5 },
});

// is like a convention to always put the models name to uppercase
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
