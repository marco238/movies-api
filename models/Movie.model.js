const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The title is required']
  },
  year: {
    type: String,
    required: [true, 'The year is required']
  },
  director: {
    type: String,
    required: [true, 'The director is required']
  },
  duration: {
    type: String,
    required: [true, 'The duration is required']
  },
  genre: {
    type: Array
  },
  rate: {
    type: String,
    required: [true, 'The rate is required']
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
