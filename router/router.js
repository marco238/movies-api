const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => {
  console.log(req.caca);
  res.render('home.hbs', { name: 'Carlos', isAdult: true });
});

router.get('/movies', (req, res, next) => {
  Movie.find().sort({ rate: -1 }).limit(20)
    .then((movies) => {
      res.render('movies/movies.hbs', { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/movies/create', (req, res, next) => {
  res.render('movies/movie-create.hbs');
});

router.post('/movies/create', (req, res, next) => {
  const movieData = req.body;

  Movie.create(movieData)
    .then((createdMovie) => {
      console.log('movie created');
      res.redirect(`/movies/${createdMovie._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/movies/update/:id', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      res.render('movies/movie-create.hbs', { movie });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/movies/update/:id', (req, res, next) => {
  const { id } = req.params;

  Movie.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect(`/movies/${id}`);
    })
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
