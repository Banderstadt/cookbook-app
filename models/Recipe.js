const mongoose = require('mongoose'); 
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  ingredients: {
    type: String
  },
  description: {
    type: String
  }}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});
mongoose.model('Recipe', RecipeSchema);

module.exports = mongoose.model('Recipe');