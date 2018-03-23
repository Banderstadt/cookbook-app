const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

let Recipe = require('../models/Recipe');

//

// CREATES A NEW RECIPE
router.post('/', function (req, res) {
    Recipe.create({
            name : req.body.name,
            ingredients : req.body.ingredients,
            description : req.body.description
        }, 
        function (err, recipe) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(recipe);
        });
});

// RETURNS ALL THE RECIPES IN THE DATABASE
router.get('/', function (req, res) {
    Recipe.find({}, function (err, recipes) {
        if (err) return res.status(500).send("There was a problem finding the recipes.");
        res.status(200).send(recipes);
    });
});

// GETS A SINGLE RECIPE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Recipe.findById(req.params.id, function (err, recipe) {
        if (err) return res.status(500).send("There was a problem finding the recipe.");
        if (!recipe) return res.status(404).send("No recipe found.");
        res.status(200).send(recipe);
    });
});

// DELETES A RECIPE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Recipe.findByIdAndRemove(req.params.id, function (err, recipe) {
        if (err) return res.status(500).send("There was a problem deleting the recipe.");
        res.status(200).send("Recipe "+ recipe.name +" was deleted.");
    });
});

// UPDATES A SINGLE RECIPE IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, recipe) {
        if (err) return res.status(500).send("There was a problem updating the recipe.");
        res.status(200).send("Recipe was updated.");
    });
});

module.exports = router;