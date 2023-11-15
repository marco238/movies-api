const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
    unique: [true, 'The title must be unique'],
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
    type: [String],
    enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western'],
    default: ['Drama']
  },
  rate: {
    type: String,
    required: [true, 'The rate is required']
  },
  // date: {
  //   type: Date,
  //   default: Date.now()
  // }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
