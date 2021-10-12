const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  ingredients: [
    {
      description: {
        type: String,
      },
    },
  ],
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
