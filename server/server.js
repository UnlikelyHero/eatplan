const express = require('express');
const mongoose = require('mongoose');
const { mongo } = require('./config');

const app = express();
const port = 3000;

app.use(express.static('client/dist'));
app.use(express.json());

mongoose.connect(mongo.url, mongo.options)
  .then(() => app.listen(port))
  .then(() => console.log(`listening at http://localhost:${port}`))
  .catch((err) => console.error('unable to start server:', err));
