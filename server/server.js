const express = require('express');
const {
  getPlans,
  getSavedRecipes,
  savePlans,
  saveRecipe,
  searchRecipes,
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
        console.log('unable to search recipes:', e);
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
      console.log('unable to retrieve saved recipes:', e);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('successfully retireved saved recipes');
      res.send(savedRecipes);
    }
  });
});

app.post('/recipes/save', (req, res) => {
  console.log('received a save recipe request');
  saveRecipe(req.body, (e, recipeId) => {
    if (e) {
      console.log('unable to save recipe:', e);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('recipe saved with', recipeId);
      res.send('recipe saved');
    }
  });
});

app.get('/plans', (req, res) => {
  console.log('received a request for plans');
  getPlans((e, plansData) => {
    if (e) {
      console.log('unable to retireve plans', e);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('successfully retireved plans');
      res.send(plansData);
    }
  });
});

app.post('/plans', (req, res) => {
  console.log('recieved a save plans request');
  savePlans(req.body, (e) => {
    if (e) {
      console.log('unable to save plans:', e);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('plans saved successfully');
      res.send('Plans have successfully been saved');
    }
  });
});

app.listen(port, (e) => {
  console.log(e ? `unable to start server: ${e}` : `listening at http://localhost:${port}`);
});
