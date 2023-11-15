const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => {
  res.render('home.hbs', { name: 'Carlos', isAdult: true });
});

router.get('/movies', (req, res, next) => {
  Movie.find({ year: { $gte: "2005" } }).skip(10).limit(10)
    .then((movies) => {
      res.render('movies/movies.hbs', { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/movies/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movies/movie-details.hbs', { movie });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/movies/delete/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
