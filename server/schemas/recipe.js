const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  description: {
    type: String,
  },
});

const recipeSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  source: {
    type: String,
  },
  url: {
    type: String,
  },
  ingredients: {
    type: [ingredientSchema],
  },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
