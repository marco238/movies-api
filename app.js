const express = require('express');
const hbs = require('hbs');
const router = require('./router/router');
require('./config/db.config');

const app = express();

app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view_engine", 'hbs');

hbs.registerPartials(__dirname + "/views/partials");

app.use('/', router);

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});
