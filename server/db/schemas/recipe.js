const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  text: String,
  quantity: Number,
  measure: String,
  food: String,
});

const recipeSchema = new Schema({
  label: String,
  imageURL: String,
  source: String,
  url: String,
  ingredients: {
    type: [ingredientSchema],
    maxItems: 3,
  },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

// // TESTING
// const testRecipe = new Recipe({
//   label: 'Chicken Vesuvio',
//   image: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg',
//   source: 'Serious Eats',
//   url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
//   ingredients: [
//     {
//       text: '1/2 cup olive oil',
//       quantity: 0.5,
//       measure: 'cup',
//       food: 'olive oil',
//     },
//     {
//       text: '5 cloves garlic, peeled',
//       quantity: 5,
//       measure: 'clove',
//       food: 'garlic',
//     },
//     {
//       text: '2 large russet potatoes, peeled and cut into chunks',
//       quantity: 2,
//       measure: '<unit>',
//       food: 'russet potatoes',
//     },
//   ],
// });

// testRecipe.save()
//   .then((result) => console.log(result))
//   .then(() => db.close())
//   .catch((err) => console.error(err));
