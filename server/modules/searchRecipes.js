const axios = require('axios');
const { edamam } = require('../config');

const searchRecipes = async (query, callback) => {
  const results = [];
  const config = {
    params: {
      app_id: edamam.appID,
      app_key: edamam.appKey,
      type: 'public',
      q: query,
    },
  };

  try {
    const response = await axios.get('https://api.edamam.com/api/recipes/v2', config);
    console.log('... retrieved search results');
    response.data.hits.forEach(({ recipe }) => {
      results.push({
        label: recipe.label,
        image: recipe.image,
        source: recipe.source,
        url: recipe.url,
        ingredients: recipe.ingredients.map((ingredient) => ({
          text: ingredient.text,
          quantity: ingredient.quantity,
          measure: ingredient.measure,
          food: ingredient.food,
        })),
      });
    });
    callback(null, results);
  } catch (error) {
    callback(error);
  }
};

module.exports = searchRecipes;

// // Testing
// searchRecipes('baked chicken', (err, data) => {
//   if (err) {
//     console.log('searchRecipes isn\'t working:', err);
//   } else {
//     console.log(JSON.stringify(data, null, '  '));
//   }
// });
