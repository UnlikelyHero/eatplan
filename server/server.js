const express = require('express');
const {
  searchRecipes,
  getSavedRecipes,
} = require('./modules');

const app = express();
const port = 3000;

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/recipes/search', (req, res) => {
  console.log('received a search request for:', req.query.q);
  if (req.query?.q) {
    searchRecipes(req.query.q, (e, results) => {
      if (e) {
        res.status(500).send('Internal Server Error');
      } else {
        res.send(results);
      }
    });
  } else {
    res.status(400).send('Please provide a \'q\' parameter to search for.');
  }
});

app.get('/recipes/saved', (req, res) => {
  console.log('received a saved recipes request');
  getSavedRecipes((e, savedRecipes) => {
    if (e) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(savedRecipes);
    }
  });
});

app.listen(port, (e) => {
  console.log(e ? `unable to start server: ${e}` : `listening at http://localhost:${port}`);
});
