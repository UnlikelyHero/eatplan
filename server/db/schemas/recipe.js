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
  image: String,
  source: String,
  url: {
    type: String,
    unique: true,
  },
  ingredients: {
    type: [ingredientSchema],
    maxItems: 3,
  },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
