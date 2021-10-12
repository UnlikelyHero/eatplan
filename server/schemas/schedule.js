const mongoose = require('mongoose');

const { Schema } = mongoose;

const savedRecipeSchema = new Schema({
  recipeID: {
    type: String,
  },
});

const scheduleSchema = new Schema({
  weekday: {
    type: String,
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  },
  recipies: {
    type: [savedRecipeSchema],
    maxItems: 3,
  },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
