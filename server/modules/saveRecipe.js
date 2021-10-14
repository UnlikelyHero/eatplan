/* eslint "dot-notation": "off" */

const Recipe = require('../db/schemas/recipe');
const db = require('../db/mongodb');

const saveRecipe = (recipe, callback) => {
  const newRecipe = new Recipe(recipe);
  db(() => newRecipe.save()
    .then((response) => callback(null, response['_id']))
    .catch((error) => callback(error)));
};

module.exports = saveRecipe;
