let express = require('express');
let app = express();
let db = require('./config/db');

let RecipeRoutes = require('./routes/recipes');
app.use('/recipes', RecipeRoutes);

module.exports = app;