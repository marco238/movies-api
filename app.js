const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const router = require('./router/router');
require('./config/db.config');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view_engine", 'hbs');

hbs.registerPartials(__dirname + "/views/partials");

const myFunction = (req, res, next) => {
  console.log('entro al middleware!');
  req.caca = 'caca';
  next();
}

app.use(myFunction);

app.use('/', router);

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});
