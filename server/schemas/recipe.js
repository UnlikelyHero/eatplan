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
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  ingredients: {
    type: [ingredientSchema],
    maxItems: 3,
  },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
