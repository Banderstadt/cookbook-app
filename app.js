const express = require('express');
const app = express();
const db = require('./config/db');

const RecipeRoutes = require('./routes/recipes');
app.use('/recipes', RecipeRoutes);

module.exports = app;