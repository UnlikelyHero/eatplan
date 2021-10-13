const Recipe = require('../db/schemas/recipe');
const db = require('../db/mongodb');

const getSavedRecipes = (callback) => {
  db(() => Recipe.find()
    .then((response) => callback(null, response))
    .catch((error) => callback(error)));
};

module.exports = getSavedRecipes;
